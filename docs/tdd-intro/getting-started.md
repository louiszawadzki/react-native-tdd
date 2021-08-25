---
sidebar_position: 3
---

# Start Practising TDD

First, when approaching a feature, start by finding out which tests are needed.

How?

Invert the Setup / Given / When / Then.

Let's illustrate by an example. Let's say you are developing a hacker news clone in RN. Let's say you want to grey out the text of an article, once the user has clicked on it (we'll skip any persistence consideration here).

So, Then (what do I want to see) is the grey out text

When (the trigger) is when I click on a link

Given (what state must I be before having the trigger) I am on the home page and it is loaded

Setup (the pre-requisites for the given) I need to mock API calls and mount the home page

Then, write them first!

If you don't really know which tests to write first, it's fine!

First, break down the feature to isolate what you can actually test

Put TDD aside, code the feature, then look at your code and find out how to write tests :)
