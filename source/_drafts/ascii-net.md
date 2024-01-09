---
title : My Graphic Design Portfolio
date : 2019-08-12
---

This is my obsfucated code, demonstrating the bare minimum amount of Python code needed to fully train a 97.5% MNIST classifier. Instantiate your model, blah blah. 

Screen size

Youtube videos: https://youtu.be/VMj-3S1tku0?si=AwrWeDzpSf9Q26XP

```python
from torch.nn import Sequential, Linear, ReLU, CrossEntropyLoss; from torch.utils.data import DataLoader; from torch.optim import Adam; from torchvision import datasets, transforms; model, opt, loss_func, train_loader = Sequential(Linear(28*28, 256), ReLU(), Linear(256, 10)), Adam(Sequential(Linear(28*28, 256), ReLU(), Linear(256, 10)).parameters(), lr=0.001), CrossEntropyLoss(), DataLoader(datasets.MNIST('data', train=True, download=True, transform=transforms.ToTensor()), batch_size=500, shuffle=True); [opt.zero_grad(); loss_func(model(imgs.view(imgs.size(0), -1)), labels).backward(); opt.step() for imgs, labels in train_loader for _ in range(10)]
```


---

In the name of optimization keeping this bare bones. 
1. implementation of ascii-powered neurons (the neurons)
2. the weights and biases
3. the backprop
4. the data loader 

That's all. 


neural networks = matrix multiplication 

# forward prop

- C++ architecture, optimization... 
- Integrating w/ graphics. I try not to make it a decoupled functionality. yes this sacrifices flexibility and modularity, but I am hoping to gain a tiny bit of performance from synergies. 


# graphics 


Optimization
- building a neural net from complete scratch means I can make the graphics 100% integrated. 
- array sizes known at compile time. `784 -> 16 -> 16 -> 10`

The first 'layer' is presented in 2d form, doubles as a visualization of the first layer as well as the image itself (because they are functionally equivalent.)


For the sake of optimization, and since i'm making this from scratch anyway, the ascii visualization will be 100% integrated. by applying these constraints I might be able to compete with pytorch - which was built with numpy which was built with C, so maybe not. 

all these fancy graphics require a bit of rethought architecture. 

- I want a 'wave effect'. Randomized wait time (normally distributed( ))

Does it beat pytorch? 

```
0.0 : white
0.2 : 
0.4 : 
0.6 :
0.8 : 
1.0 : 
```

Classic matrix multiplication: 

But there's a mode where it does the graphics updating 


view 1: the neural net 
view 2: the training (just output the number, 1, 2, and the colour red or green depending on whether it got it right. )

Operations: 
- Dropout

# transforming the dataset

Neural nets are efficient in code because you can black box them into just matrices, which are optimized to the moon. but I need to visualize them which means i need to treat the neurons as individual objects instead of just dumped collectively into one matrix. 

A workaround could be to display by iterating through this matrix each display update, 
which would be O(n)


# optimization

- Matrix multiplication 

# multi-layered perceptron

`display` class wraps a `neuron class`  and changes it

# forward pass

# cross entropy loss

# adam-optimized back-prop

