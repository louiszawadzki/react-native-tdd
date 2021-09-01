---
sidebar_position: 3
---

# Start Practising TDD

First, when starting TDD on a feature, you need to find out which acceptance tests are needed.

## Figure out what to test

This is the step that took me a long, long time to get.

Usually, I structure my tests in 4 parts: Setup / Given / When / Then. Now, when I want to **write** the test, I do it the other way around.

Let's illustrate by an example.
Let's say you are developing a Hacker News clone in RN. Now, you want to grey out the text of an article, once the user has clicked on it (we'll skip any persistence consideration here).

Here's how I would figure out the test:

- Then (what do I want to see) -> I want to see a grey text
- When (the trigger) -> I click on a link
- Given (what state must I be before having the trigger) -> I am on the home page and it is loaded and the link is visible
- Setup (the pre-requisites for the given) -> I need to mock API calls and mount the home page

## When you can't figure out what to test

If you don't really know which tests to write first, it's fine!
Put TDD aside for a moment, code the feature, then look at your code and find out how to write tests.

Next time, you'll know how to write the test :)

This is actually something Kent Beck tweeted about recently:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Let&#39;s say you interested in TDD but you just can&#39;t figure out how to write a test before you write the code. Here&#39;s a foolproof exercise that let&#39;s you experience the TDD workflow in spite of that block:<br/><br/>1. Change the code as usual<br />2. Write a test that only passes after the change<br />3. Revert to before 1<br />4. Type the test again (copy/paste is cheating &amp; invalidates the warranty of the exercise)<br />5. Make it compile by changing the code<br />6. See it fail<br />7. Change the code to make it pass</p>&mdash; Kent Beck (@KentBeck) <a href="https://twitter.com/KentBeck/status/1421257650113634304?ref_src=twsrc%5Etfw">July 30, 2021</a></blockquote>

## Write down recipes

To help you each time, I recommend you to write down recipes for TDD in common cases. I will share mine in the next part :)
