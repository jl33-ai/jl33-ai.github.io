---
title: AgentWare and the next API
thumbnail: /images/thumbnails/xerox-parc.jpg
icons:
  - name: Name
    image: /images/icons/name.png
    url: null
help_link:
date: 2025-01-01 14:06:32
tags:
  - opinion
categories:
  - opinion
description: Justin Lee
redirect_url:
mau:
revenue:
photos:
layout: story
type: writing
---

The history of technology can be traced through the invention of new interfaces. Interfaces are born when there is a new type of **_consumer_** that wants to read or write to our systems.

<br>

# Examples

For example, the Application Programming Interface (API) was born because software needed a way to communicate with other software and programmers. So we started writing protocols like [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview).*

The Graphical User Interface (GUI) was made in [Xerox PARC](https://spectrum.ieee.org/xerox-parc) because we needed to make computers accessible to _normal people_ (not just programmers). So we moved from text-based commands to visual metaphors (like the mouse, desktop, or folders).

When you apply this framework, all breakthroughs in technology seem obvious. All they were doing was catering to a new type of consumer.

A recent example is [Search Engine Optimization](https://developers.google.com/search/docs/fundamentals/seo-starter-guide). SEO was born thanks to a new type of consumer: the [web crawler](https://en.wikipedia.org/wiki/Web_crawler). People understood that their webpages were no longer being read by just humans, so they started writing html to be read by crawlers too. 

<br>

# How to create interfaces

The Act of Interface Creation is a simple **two-step process**:
1. Identify that there is a new type of consumer who wants to read/write to your stuff.
2. Consider how to design your interface so that it is as "readable" as possible for the consumer.

[//]: # ([Interfaces diagram])

<br>

# AgentWare

There's a new consumer on the block: the **[AI agent](https://zapier.com/blog/ai-agent/)**. 

Why? All content we create will eventually be read by an agent — whether this be an LLM or other AI. 

[Hypermedia](https://en.wikipedia.org/wiki/Hypermedia) was at first _computer-readable_, then _human-readable_, and then _web-scraper-readable_. Now it must be _agent-readable_.

I am proposing two things: 
- **Agent-Application Interface (AAI)**: the interface between agents and software.⁑
- **_AgentWare_**: software that implements **AAI**, built from the ground-up for agents as the end-user. 

**_AgentWare_** will have underlying data structures that can be easily read by agents, and written to if needed.⁂ 

Because the way humans and agents "read" is quite similar, **_AgentWare_** will be backwards-compatible with existing software for a while, and therefore maintain good "user-interface" for human beings.

<br>

# Conclusion

Interfaces are anything that allow _A_ to connect with _B_. Without interfaces, things exist in complete isolation. But, with well-made interfaces, there is infinite emergent potential.

<br>

---

\* &nbsp; [Model Context Protocol](https://github.com/modelcontextprotocol): An open protocol that enables seamless integration between LLM applications and external data sources and tools
⁑ &nbsp;&nbsp; Most likely some derivative of natural language, but I have no idea :')
⁂ &nbsp; Caveat — there needs to be clear monetary incentive for making your stuff more accessible. Web crawlers, for example, will thank you by leading to higher site traffic.

[//]: # (**Thanks to** Marek P, Linus T for reading a draft of this.)