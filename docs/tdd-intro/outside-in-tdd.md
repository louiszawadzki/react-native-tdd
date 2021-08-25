---
sidebar_position: 2
---

# Outside-in TDD

To write TDD for features, we are going to do Outside-In TDD.

Basically, we are going to write first the acceptance test. That is good since we have the perfect tool with RNTL. This is the contract tests, they should reflect the domain.

Then, we are going to write unit tests. These tests help us build up the feature until the acceptance test passes.

They are "scaffolding tests". They depend very much on the implementation, and that is not a good news, because it means that if you change the implementation, they are likely to break.

So, how can you mitigate this problem?

Well, I personally don't hesitate to delete them if there is no need to change them.

If I do a refactoring that is already covered by my acceptance test, I can delete old scaffolding tests that get in my way.
