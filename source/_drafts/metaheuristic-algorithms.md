---
title: "[Py] Metaheuristic Algorithms or Machine Learning?"
date: 2023-06-19
---

**It all started during** a [UMCPC x Jane Street]() programming competition held at my uni, curiously labelled a 'Heuristic Programming Competition'.

**The problem** was to find an arrow arrangement which kept the ball on the board for as many iterations as possible. 

***Heuristic algorithms** are problem-solving methods that use practical techniques or rules of thumb to produce solutions that are good enough for solving complex problems where finding an optimal solution might be impractical or impossible due to constraints like time or computational resources.*


Here, the bounds between machine learning, reinforcement learning, and evolutionairy algorithms start to get really blurred. 


# The Jane Street Problem 

The problem of keeping a ball on the board for as long as possible became one **great analogy** for hyperparameter tuning. 

![](/images/amanda-automaton.gif)

So how to solve? Introducing the sexy second cousin of machine learning, ***metaheuristic algorithms***

The idea behind most of these is hilariously simple: see what 'direction' gives the best gains, go in that direction. 

```sql
├── Optimization Algorithms
│   ├── Metaheuristic Algorithms
│   │   ├── Evolutionary Algorithms
│   │   │   └── Genetic Algorithm
│   │   ├── Beam Search
│   │   ├── Simulated Annealing
│   │   ├── Local Search Algorithms
│   │   │   ├── Hill Climb
│   │   │   └── Gradient Descent
│   ├── Hyperparameter Tuning Methods
│   │   ├── Grid Search
│   │   ├── Random Search
│   │   └── Bayesian Optimization
```

I used [simulated annealing](https://en.wikipedia.org/wiki/Simulated_annealing) to get the third best score in the competition leaderboard. [Read the full notebook here]()

(small images)

The thing about this is that metaheuristic algorithms can also be used for hyperparameter optimization, where they help in selecting the best parameters for a learning algorithm.





# Machine Learning

But what does this have to do with **machine learning?**

Well, a machine learning model consists of **parameters** and **hyperparameters**.

### Parameters 

Parameters are the configuration variables that are internal to the model and whose values can be estimated from the data. They are learned from the data during the training process. 

**For example**
- Weights in a neural network
- Coefficients in a linear regression
- Support vectors in a support vector machine

### Hyperparameters

Hyperparameters, on the other hand, are configuration variables external to the model and whose value cannot be estimated from data. They control the training process, so are typically set before training begins. 

**For example**
- Learning rate
- Number of trees in a random forest
- Kernel in a support vector machine
- Batch size in gradient descent
- Number of epochs in neural network training

---

The **simulated annealing** algorithm was employed to solve an independent problem. But let's say, hypothetically, we had some model with `n*n` hyperparameters

If we think of each of the cells in the grid as representing some **hyperparameters**, able to take on the value of `←, ↑, →, ↓`, then it is the job of the metaheuristic algorithm to find the best value for these hyperparameters.

Selecting the appropriate hyperparameters can be critical, and techniques like grid search, random search, or Bayesian optimization are often used to find the most effective hyperparameters.

Hopefully, now the distinction is clear: 

- Metaheuristic/Search Algorithms are used to fine tune the hyperparameters of a model (instead of doing a grid search)


It gets even more confusing, when the algorithms used to find hyperparameters also have their own hyperparameters. 
E.g The granularity of the grid in grid search. 
There are diminishing return as you attempt to optimise hyperparameters on hyperparameters. 






**But actually, it all started** with this little android game I used to play as a kid; [Evolution](https://keiwan.itch.io/evolution). 

Essentially involved trying to evolve a creature the best at running, jumping, climbing or flying.

Responsible for my deeply rooted interest in machine learning and evolutionary mechanisms? 


> [!quote] Use joints, bones and muscles to build creatures that are only limited by your imagination. Watch how the combination of a neural network and a genetic algorithm can enable your creatures to "learn" and improve at their given tasks all on their own.



**[Evolution]()** embodies the perfect intelligent system: a combination of evolutionary algorithm.

And is a great way to understand the difference between parameters and hyperparameters

The game seemed to reinforce some deeply rooted intuition for the simple rule: 

$$\text{generations}+\text{mutation}=\text{improvements}$$

... and how pure trial and error can create a semblance of 'intelligent improvement'

Little did I know that this game would perfectly exemplify my two biggest interests later down the line... 
1. Machine learning
2. Metaheuristic algorithms


Some really interesting genetic algorithms include: 

I was intrigued to learn that this problem could be solved through simple evolutionary algorithms

So how do metaheuristic algorithms solve for hyper parameters? 