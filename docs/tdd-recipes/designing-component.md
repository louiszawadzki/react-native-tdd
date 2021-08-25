---
sidebar_position: 1
---

# Designing a Component

How to do it properly

By using visual regression tools.

But it is not easy, I would not recommend starting by doing this.

Instead, let's focus on what matters:

- I can make sure my changes are working
- I don't have to think about tests once my code is written
- No test is failing before going to the next feature

So what do we have at our disposal? Snapshots!

Let's write the snapshot first. It's painful. So how can we improve it?

We can start by thinking about tests first.

Which snapshot are supposed to fail? Is there actually a snapshot in place that is supposed to fail?

So let's put a snapshot in place.

Now if I add a component, I expect my snapshot to fail → good I can update it now!

Before going on the the next step, I have to make sure all my expected snapshots pass.
