---
title: what are TASTEful apis
icons:
  - name: Atlassian
    image: /images/icons/atlassian.png
    url: null
date: 2024-10-17 13:50:57
description: How to write good APIs
categories:
  - opinion
layout: story
---

[//]: # (At Atlassian, I worked on enterprise software used primarly by Apple, SpaceX, CISCO, and Morgan Stanley.* Here's what I learnt about API design.)

[//]: # (APIs are a beautiful concept. They are the synapses that allow different codebases to communicate with each other. )

[//]: # ()
[//]: # (See these two pieces of codes? They are no longer alone in the universe.)

As we enter the era of **taste**, I want to talk about practical ways you can write more TASTEful APIs.

<br>

### Error messages

> Stripe returns errors in plain English: "That card number doesn't look right." Not `ERROR_INVALID_PARAMETER`. Because developers debug at 2am.

- developers debug at 2am
- the _unhappy_ path is more important than the _happy_ path.
- wrap your errors in a loving, gentle ribbon.

---

### The API is the product

- the API is the product. Act like a product person. [don't get lost in the code](https://opensource.zalando.com/restful-api-guidelines/).
- this is how to make an API that is **irresistible** to developers.
- we don't make shitty GUIs, so don't write shitty APIs.
- you are an author.

---

### Time to first 'Hello World'

- how long it would take for a non-technical person to get their first successful response from your API?
- adjust accordingly.

---

### Developers should be able to guess your API even without reading the documentation.

- maximize predictability
- minimize surprise

---

### Don't overdo it

> It's easy to add new features to an API, but hard to remove them.

- be intentional with the surface area of your API.
- more surface area ≠ better.
- don't put your users in configuration paralysis.
- let each endpoint be responsible for exactly one thing.

<br>

**Implementation is trivial**; taste is a moat.

[//]: # ()
[//]: # (VI **Plan first**)

[//]: # ()
[//]: # (- before writing code, sketch the shape of the api with pen and paper)

[//]: # (- do lots of peer review; get roasted)

[//]: # ()
[//]: # (---)
[//]: # ()
[//]: # (VII **Simplify**)

[//]: # ()
[//]: # (- use namespacing to remove redundancy; do you need to repeat 'emoji' if you're in a folder called emojis)

[//]: # ()
[//]: # (<br>)



[//]: # ([1] https://slack.engineering/how-we-design-our-apis-at-slack/)

[//]: # ([2] )

[//]: # ([3] https://jsonapi.org/)

[//]: # ([4] https://www.oreilly.com/content/how-to-design-a-restful-api-architecture-from-a-human-language-spec/)

[//]: # ([5] https://tyk.io/blog/best-api-design-books-to-read/)

[//]: # ([6] https://cloud.google.com/apis/design)


[//]: # ()
[//]: # (**Breaking changes**)

[//]: # ()
[//]: # (What worked yesterday should work tomorrow.)

[//]: # ()
[//]: # (Here are some edge cases to consider:)

[//]: # ()
[//]: # (you have to think like scripts...  &#40;need Stef's input here&#41;)

[//]: # ()
[//]: # (First, plan your APIs through the eyes of your consumer - whether that's your enterprise customers, or your friend working on your startup with you. How would it look/feel to them. Go to Japan, understand what it means to make something convenient to use.)

[//]: # (It's so simple - think about the problem not how you're going to do the solution. Think about what the dream end solution is, feel yourself using it, thinking about how the perfect solution looks.)

[//]: # ()
[//]: # (you need two persona's in your head: the caller)

[//]: # ()
[//]: # (Simplicity, extensibility, idempotency, statelessness, performance, timelessness.)

[//]: # ()
[//]: # ()
[//]: # (III. **Take care returning collections**)

[//]: # ()
[//]: # ([Anecdote])

[//]: # ()
[//]: # (> When in doubt, enforce a finite number of objects in any collection or paginate them. It’s not a premature optimization to define sane, rational upper bounds. Let organic growth show you where those boundaries are.)

[//]: # ()
[//]: # (- Paginate)

[//]: # (- Do not nest big collections inside other big collections: Pagination, in that case, is too complicated.)

[//]: # (- Consider if the order matters.)

[//]: # (- Rate limit your API)