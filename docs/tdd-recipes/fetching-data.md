---
sidebar_position: 2
---

# Fetching Data from an API

I recommend doing the design first and then getting the data from the API. This way you can concentrate on the design with less edge cases, and when you call your API you can make sure quickly that you are getting the right data.

You already have already done the design part and you need to get the real data from an API.

I'll do it first in a very simple way, assuming you reuse directly the data from your API.

What do we want to test?

What do we want to see?

A good practice in architecture is to isolate your application code from your API. This is commonly achieved with the adapter pattern. That way, if your API changes (e.g. a field in an object), you only have one change to make in your app code.

If you are using the adapter pattern, here is how to develop a new fetch from an API.
