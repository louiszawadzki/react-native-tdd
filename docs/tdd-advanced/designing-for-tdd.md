---
sidebar_position: 1
---

# Designing for TDD

Design as in thinking how you are going to architecture your code.

One criticism of TDD is that it is purely tactical.
There is no time for designing your code when doing TDD.

Well actually you can.

Introducing, Test Driven Design.

When I design a feature, I first write down all my acceptance tests - or use cases.

Once this is done I gradually design my solution to solve those acceptance tests one-by-one.
That way I am sure my solution works for every use case.

Then I look at my design, and I think about all the "scaffolding tests" I will need to write to build my feature in outside-in TDD.

And that's an important part! If I can't find where to put tests, that might be a red flag that my architecture is not going to be easy to change, and I can adjust it.

So you may think what is the use of TDD now?

Well nothing works as expected all the time :D
You still have the faster feedback and the best tests :)
