---
sidebar_position: 1
---

# Designing a Component

## How to do it with "real" TDD

Theoretically, you could design a component in real TDD by using visual regression testing tools, and comparing your app to your design mockups

However, I would not recommend doing so as this method requires strong requirements:

- your design mock ups are perfect
- you want 100% pixel perfect

I've personally never done it and I'm curious, so if you've done it feel free to tell me how it went on twitter [@zawadzkil](https://twitter.com/zawadzkil) :)

## How to do it with a "TDD spirit"

Instead, let's focus on what matters:

- I can make sure my changes are working
- I don't have to think about tests once my code is written
- No test is failing before going to the next feature

So what do we have at our disposal? Snapshots!

### A bit about snaptshots

I can hear some of you thinking "oh no, not snaptshots!", and I understand.
Snapshots were once seen by many (including myself) as the silver bullet for testing, that would deliver us from writing assertions.

Unfortunately, we painfully discovered that this was not the case, and moreover they would break often and were painful to understand...
So they have fallen out of fashion.

But I believe there is still some use for snapshots. They are actually good at checking one thing: that I did not change the style of a page unexpectedly.
For example, I may want to change the style of a `ProfileCard` component on some page A. But my snapshots can warn me that this component was actually also used in page B, and so I made a regression!

So to me the only use case for snapshots is to capture a complete page with as many variations as possible.
My snapshot isn't going to act as my acceptance test, so if I change a feature without touching any style, I can blindly update the snapshot.

Allright, let's write the snapshot first. I'm kidding. Don't do it. It's painful.

So how can we do?

### Have I got all the snapshots in place?

We can start by thinking about tests first:

- Which snapshot are supposed to fail?
- Is there actually a snapshot in place that is supposed to fail?

### Coding with my simulator

### Updating expected snapthots

Now if I add a component, I expect my snapshot to fail → good I can update it now!
Before going on the the next step, I have to make sure all my expected snapshots pass.

### Checking unexpected shapshots in the real app

If a snapshot failed unexpectedly, you have to go to your app and check if there is an impact on the design.
