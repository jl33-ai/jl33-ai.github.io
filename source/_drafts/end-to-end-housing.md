---
title: end-to-end ML on the Melbourne Housing Market
tech_type: sklearn
---
This project uses the [Melbourne Housing Market](https://www.kaggle.com/datasets/anthonypino/melbourne-housing-market) dataset, put together by Tony Pino. It can be found on **Kaggle**. This will be a highly condensed 'speedrun' of the project methodology outlined in *Hands on Machine Learning*. 

♨︎ See the Jupyter notebook [here](). 

<!--Cut the crap!-->

---
# Big picture

## motivation

**Motivation**: *I once had a calling come to me in the form of a dream. It was me, at age 21, buying an apartment. When I woke up the next morning, I sat up, and immediately wrote down my new destiny:*

> you will buy an apartment at 21

![](/images/dream-apt.jpg)

## framing the problem

The '***business objective***' is straightforward: Use the dataset to build a model of housing prices in Melbourne, in order to ascertain **where should I buy, and when**? Breaking this down into discrete objectives:  
- Supervised: Be able to predict the sale price of a house given all other features. 
	- Identify which are best value for money 
- Unsupervised: Perform clustering to segregate different types of 
	- Identify potentially 'anomalous' sales - in either direction, and see what they have in common. 
- Forecast the housing market? (And backtest?)

Building a model is not the end goal. Fulfilling the 'business objective'. mastering `sklearn`, and getting arbitrarily closer to a childish, impossible, fantastical goal? That is the goal. 

It is important to distinguish the problem of housing **valuation** (i.e given these attributes of a house)

## pipelines

Since this is a static (and old) dataset, are no live **upstream** components that my model will sit within. However, this project could be viewed as one signal which feeds into a **downstream** 'personal investment analysis' component, which eventually informs the actual purchase of an apartment.  

If we take into consideration how the data itself was scraped, we could probably consider `domain.com` as an upstream component, yielding the following pipeline: 

## what's the current sitch

1. **Current solutions/workarounds**: there are no tools which are open source - all are monetized/restricted access/spun into a dodgy a real estate course. I need something highly localized to my specific area of investment (Greater Melbourne)
2. **Human expertise/Manual solution**: I currently rely on my parents to give me real estate advice (sorry mum and dad).


## framing the ML problem

- This task involves both supervised (regression on sale price) and unsupervised (clustering of house sales) components. 
- **performance measures**: 
	- for supervised: MAE (since I expect many anomalies)
	- for unsupervised: ground truth, vision inspection via t-sne
	- for forecasting: RMSE via time series cross validation

**two main objectives**
1. spatial exploration, frozen in 2018, realized in the form of a live API
2. a secondary temporal exploration (i.e looking for time-related trends) 

**design principles**
1. repeatability: new data in a reasonably similar structure should be able to automatically follow the same transformation pipelines. 
2. ml-infrastructure: I want this to be a callable system, which would involve freezing the trained model
3. best practice: it's more the methodology I'm 'rehearsing'. so I'm going for nothing less than perfect code. 

## assumptions

- As mentioned, there are no **downstream** components that I need to check my assumptions against. Regarding the upstream source of the data, one assumption is that the dataset is representative; that is, the author [Tony Pino](https://www.kaggle.com/anthonypino) didn't limit his data scraping to *only* regions he was personally interested in buying. Violating this assumption means that the models may not generalize well to unseen suburbs, and will constrain or skew the breadth of my purchasing power. Other than this, there are no blocking assumptions, and it is safe to progress. 

```bash
mkdir $PROJPORT/my-first-apartment
```

---
# Get the data

- *In any production system, any work required to bring the data from its source to your workspace should be encapsulated within a small function for the sake of refreshing, or distributing the dataset on multiple machines.* 
	- Luckily, this isn't a production system, so I downloaded the `.csv` file and got to work. 


I wrote as if I was in a production system, when really I was alone in my bedroom, on my Macbook. Instead of clicking the 'download' button and dragging the file into my project like an ape, I made a function to fetch the data and save it straight to a project directory.

https://www.kaggle.com/datasets/anthonypino/melbourne-housing-market/download?datasetVersionNumber=27 <- 

- When it comes to data loading, you can never have too many wrappers - I mean modular functions. 


```

```

# Discover/Visualize

# Prepare the Data

> Any piece of information fed to a Machine Learning model is known as signal, and you should strive for a high **signal : noise** ratio. - Claude Shannon

# Select model & train







# Yarra bend

