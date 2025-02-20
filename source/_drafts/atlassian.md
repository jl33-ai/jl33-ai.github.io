---
title: Everything I know about API design
thumbnail: /images/thumbnails/some-cool-image.png
icons:
  - name: Name
    image: /images/icons/name.png
    url: null
help_link: https://forms.gle/jMJVy4Jdq14x8fVM9
date: 2024-12-31 13:50:57
tags:
  - api
  - programming
description: 
categories:
#  - home
  - artphilosophy
redirect_url:
mau:
revenue:
photos:
layout: story
---

[//]: # (At Atlassian, I worked on enterprise software used primarly by Apple, SpaceX, CISCO, and Morgan Stanley.* Here's what I learnt about API design.)

I. **[Plan ahead]()**

define APIs first, before coding its implementation, using a standard specification language

Do as much peer-review as possible. 

It's better to get criticized in the design stage than post-implementation.

I. **[Single responsibility]()**
Let each endpoint be responsible for one thing.

> "Simple APIs are not just easy to understand but are also easier to scale, more performant, and safer. It’s easy to add new features to an API, but hard to remove them."

<br>

II. **[Take care returning collections]()**

[Anecdote]

 
> "When in doubt, enforce a finite number of objects in any collection or paginate them. It’s not a premature optimization to define sane, rational upper bounds. When you let organic growth show you where those boundaries are..."

- Paginate
- Do not nest big collections inside other big collections: Pagination, in that case, is too complicated.
- Consider if the order matters.
- Rate limit your API



<br>

III. **[Return verbose errors]()**

When planning the Response Body, the _unhappy_ path is just as important as the _happy_ path.
Taking extra care to return meaningful errors will make developer's lives much easier

A good pattern is: 
```json
errors: [
  {
      error: "",
      message: ""
  },
]
```

<br>

IV. **[“Time to First Hello World.”]()**

Consider thinking about how long it would take for a newbie developer to get their first successful response from your API, and optimizing around that metric.

<br>

V. **[Intuitive consistency]()**

"Developers should be able to guess parts of your API even without reading the documentation."

This is a good mental exercise to undergo yourself when picking names. 

4. Think about scope and namespace (do you need to repeat 'emoji' if you're in a folder called emojis)

**[Who are the consumers]()**

**[Breaking changes]()**

What worked yesterday should work tomorrow.

Here are some edge cases to consider:

you have to think like scripts...  (need Stef's input here)

**[Care]()**

Treat your API as product and act like a product owner [2]. 
This is how you make an API that is **irresistible** to client engineers. 

When implementing APIs, don't get lost in the code. Your API should reflect the needs of the human-being who interacts with it [4]

In the same way a GUI interacts with the end-user, an API interacts with the end-programmer. 

You are an author. Act like one. 


“Implementation is trivial”
Through POV of consumers ‘what would make sense.”


First, plan your APIs through the eyes of your consumer - whether that's your enterprise customers, or your friend working on your startup with you. How would it look/feel to them. Go to Japan, understand what it means to make something convenient to use.
It's so simple - think about the problem not how you're going to do the solution. Think about what the dream end solution is, feel yourself using it, thinking about how the perfect solution looks.



Simplicity, extensibility, idempotency, statelessness, performance

[1] https://slack.engineering/how-we-design-our-apis-at-slack/
[2] https://opensource.zalando.com/restful-api-guidelines/
[3] https://jsonapi.org/
[4] https://www.oreilly.com/content/how-to-design-a-restful-api-architecture-from-a-human-language-spec/
https://tyk.io/blog/best-api-design-books-to-read/
https://cloud.google.com/apis/design

[] Link to pagination