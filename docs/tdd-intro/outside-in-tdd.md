---
sidebar_position: 2
---

# Outside-In TDD

To write TDD for features, we are going to do Outside-In TDD.

## Unit tests vs. Acceptance tests

In this part I am going to differentiate 2 kinds of tests: unit and acceptance tests.

Unit tests cover small portions of code. Their goal is to ensure the code is correct. They are usually fast and do not require a lot of setup. However, since they only test a fragment of the code, they are very tied to the current implementation. If the implementation changes, these tests will have to change too.

Acceptance tests cover use cases. Their goal is to ensure the application behaves correctly.
They sometimes need some setup which slows them down.
But their great asset is that they do not depend on the implementation, so they do not change when we refactor things.

## Outside-In vs. Inside-Out TDD

When coding a big feature in TDD, you can go 2 different ways.
The first one that comes to mind is to code by adding unit tests, then cover the whole feature by an acceptance test. This is called Inside-Out TDD.

<!-- But you might have figured out there are some issues here. The easiest one to spot we write the acceptance test at the end, and we don't write any code afterwards.
And if you think about what could go wrong, we can also easily get lost in our steps, lose the focus of the main goal. Or start coding a bit more than one use case, and then forget to cover this by an acceptance test. -->

I personally prefer to go the other way around, start by the acceptance test, then figure out the code by adding unit tests. This is called Outside-In TDD.
To write acceptance tests we have the perfect tool with [react-native-testing-library](https://testing-library.com/docs/react-native-testing-library/intro/).

Then, we are going to write unit tests. These tests help us build up the feature until the acceptance test passes.
To me, unit tests are "scaffolding tests". As I told you, they depend very much on the implementation, and that is not a good news, because it means that if you change the implementation, they are likely to break.
So, how can we mitigate this problem?

Well, I personally don't hesitate to delete them if there is no need to change them.
If I do a refactoring that is already covered by my acceptance test, I can delete old scaffolding tests that get in my way.

## Useful links

- https://outsidein.dev/outside-in-tdd.html
- https://khalilstemmler.com/articles/test-driven-development/use-case-tests-mocking/
- https://kentcdodds.com/blog/write-tests/
- http://tpierrain.blogspot.com/2021/03/outside-in-diamond-tdd-1-style-made.html
