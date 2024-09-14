---
title: tsne wardrobe
date: 2024-03-02
tech_type: T-sne
---

> "The joy of dressing is an art." – John Galliano


## my wardrobe  

- *Is style quantifiable?* 
- *Does something look good because it is 'fashionable', or merely because it is an outlier from the 'crowd' (at a given point in time).* 
- *Is taste tangible?* 
- *How basic is my taste?*

What better way to answer these questions than to plot my wardrobe in into fashion space... With that said, here is my (ideal) wardrobe:

![](/images/fashion-tsne-1.png)

*I must say, enumerating my wardrobe was deeply satisfying. (In an ideal world, my daily outfit would be one of $4!$ random combinations of these items.) (if you know me irl, don't comment on the accuracy of this)*

---
## tsne

![](/images/fashion-tsne-2.png)

- To be honest, the choice of `tsne` was quite arbitrary - it just works well. 
- `tsne` is suitable for: 
	- high dimensionality data
	- non-linear data 
	- preserving local structure

**You can find the notebook [here](https://github.com/jl33-ai/mle-notes/blob/main/sklearn-practice/chapter-8/wardrobe-tsne.ipynb)**

---
## result 

![](/images/fashion-tsne-3.png)

If you look carefully, my attire tends to lie at the edge of clusters. There are two potential explanations: 

1. Attributes of the photos are completely inconsistent with the rest of the dataset (e.g the shoes facing the opposite direction)
2. I have edgy taste, y'know

Even if the positioning of my clothes had proper signal, it would be difficult to associate with some concrete fashion-concept like 'chicness'. 

However, from first principles, we can ascertain a rough idea of 'meaning' within clusters...

<br>

- What mechanisms lead `tsne` to this 2D representation?
- Well, `tsne` tries to keep neighboring instances close, and dissimilar instances far apart, after mapping from the high-dimensional **pixel space** to our low-dimensional **$\mathbb{R}^2$ space**
- Similarity in pixel space would be most likely dominated by two broad features: structure and luminosity.
- This similarity is preserved after the mapping to **2d space**, which can be seen immediately from the graph; *items which are roughly the same color and shape*
