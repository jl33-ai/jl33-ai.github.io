---
title: Learnings from a WAM Calculator
date: 2023-11-17
tech_type: Streamlit
categories:
  - home
  - product
  - engineering
tags:
  - reddit
  - open source
description: An open source University grade calculator that ranks no. 1 on Google
redirect_url:
thumbnail: /images/thumbnails/classic-rainbow.png
icons:
  - name: Python
    image: /images/icons/python.png
    url:
mau: 249
help_link: https://forms.gle/jMJVy4Jdq14x8fVM9
---

**I built an** open source University grade calculator that ranks #1 on Google.

It just _works_, and has some nerdy stuff (stats and OCR) for those who want it


![](/images/gallery-wam-2.png)

##### Features
- Autofill from screenshot 
- Infer grades needed for future WAM 
- Statistics and analytics
- Exam weighting calculator

**Try it [here](https://wam-calculator.streamlit.app/?fbclid=IwAR1K9ixVHdMm1wE9KUK5P48BUahEgWaQ4ubhFwKJcrvxRmy9cKim3N0Coko)**

---

# My takeaways


1. Someone else will have already thought of your idea

![](/images/redd4.png)

2. Someone will point out why it's pointless

![](/images/redd2.png)

3. But at the end of the day... _‍_

![](/images/redd1.png)

_Someone makes it all worth it._

---

# Analytics 

Almost 7 months later, I check, on a random Tuesday night... 
![](/images/wam-stats.png)

# ⚐ Why did I build it with `Streamlit`?

TL,DR: Because the end-users don't care. 

Complicated engineering is beautiful, but it has its place. The goal of this webapp was to reach (and help) **_as many people as possible_**, in as short amount of time as possible. 

**Every month or so** a new feature request pops up in the Reddit thread from some wishful university student. 

With `Streamlit` this usually means a few lines of code (maybe a few more lines of refactoring.) 

And 'deploying' with `Streamlit` - yeah, don't worry, it's covered. No blue whale required from your end 🐳. 

This is a **common pattern** in the space of engineers who want to build things that other people use: [be a Jedi master, not a mid-wit](https://youtu.be/rP7bpYsfa6Q?si=NdXIYPDYvKCaqfq2&t=989).

Other benefits include:
1. Free hosting
2. Built-in analytics
3. Python-native (like all the data visualisation libraries you always want to use)
4. `css`-less (CSS, I love you, but not right now)

---

View the [repo here](http://www.github.com/)

View the [original Reddit post here](https://www.reddit.com/r/unimelb/comments/182kxtw/someone_finally_did_it_wam_calculator/)