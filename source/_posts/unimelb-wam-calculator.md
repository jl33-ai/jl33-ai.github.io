---
title: Learnings from a WAM Calculator
date: 2023-11-17
tech_type: Streamlit
---
**I built an** open-source University grading calculator that ranks #1 on Google.

It fundamentally just works, and has some extra nerdy stuff like: statistics and OCR. 


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

**Every month or so** a new feature request pops up in the Reddit thread from some wishful university student. In order to add this new feature with `Streamlit`, all I need to do is hot-swap a few lines of Python on the train to work. `Streamlit` is near-instant deploy time

If I had used an actual stack (even as a static site), by the time I had *re-familiarized myself with the code, added the feature, and deployed it*, it wouldn't be worth it anymore.

Other small benefits include:
1. Free hosting
2. Built-in analytics
3. Python-native (for all the nerdy data visualization stuff)
4. UI comes for free with any new functionality (no `css` required)


---

View the [repo here](http://www.github.com/)

View the [original Reddit post here](https://www.reddit.com/r/unimelb/comments/182kxtw/someone_finally_did_it_wam_calculator/)