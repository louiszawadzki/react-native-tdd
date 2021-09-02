---
sidebar_position: 2
---

# Fetching Data from an API

I recommend doing the design first and then getting the data from the API. This way you can concentrate on the design with less edge cases, and when you call your API you can make sure quickly that you are getting the right data.

## Writing your acceptance test

As an example, let's say we're developing a HackerNews app.
We've already developed the design for 1 link with fake data, and we want to display the real data now.

Once again, we are going to [reverse the setup / given / when / then](../tdd-intro/getting-started#figure-out-what-to-test).

- Then (what do I want to see) -> I want to see that the names of the links are the one coming from the API
- When (the trigger) -> The homepage is loaded
- Given (what state must I be before having the trigger) -> I am on the home page
- Setup (the pre-requisites for the given) -> I need to mock API calls and mount the home page

For example, here is the code for such a test:

```typescript
import React from "react";
import { render, waitFor } from "react-native-testing-library";
import { HackerNewsHomePage } from "./HackerNewsHomePage";
import nock from "nock";

const mockTopStoriesList = (list: number[]) => {
  return nock("https://hacker-news.firebaseio.com/")
    .get("/v0/topstories.json")
    .reply(200, JSON.stringify(list));
};

const mockItem = (id: number, title: string) => {
  return nock("https://hacker-news.firebaseio.com/")
    .get(`/v0/item/${id}.json`)
    .reply(
      200,
      `{"by":"myth_drannon","descendants":8,"id":${id},"kids":[27785045,27784442,27784809,27784937,27784749,27783786],"score":101,"time":1625837604,"title":"${title}","type":"story","url":"https://spritestack.io/"}`
    )
    .persist();
};

describe("HackerNewsHomePage", () => {
  describe("page component", () => {
    it("fetches news from the API and toggles the button", async () => {
      mockTopStoriesList([27783490, 27783491]);
      mockItem(27783490, "SpriteStack Voxel Editor");
      mockItem(27783491, "Some other story");

      const page = render(<HackerNewsHomePage />);

      // Initial rendering
      await waitFor(() => {
        expect(page.queryByText("SpriteStack Voxel Editor")).not.toBeNull();
        expect(page.queryByText("Some other story")).not.toBeNull();
      });
    });
  });
});
```

In this example I used [`nock`](https://github.com/nock/nock) to mock API calls

## If you use the adapter pattern

A good practice in architecture is to isolate your application code from your API. This is commonly achieved with the adapter pattern. That way, if your API changes (e.g. a field in an object), you only have one change to make in your app code.

If you are using the adapter pattern, here is how to develop a new fetch from an API.

TODO :)
