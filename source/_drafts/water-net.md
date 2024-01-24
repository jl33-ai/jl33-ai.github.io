- A functioning water neural network
- To show how analogue they are; there is not much non-linearity. 
- The real challenge is the training process, but the cold state of the network is not too hard to simulate

Had to [master](https://youtu.be/ESShqTMvZWU?si=bravVaEtG3BwrLT6) the manta liquid simulator engine. Found a workaround to this $O(n^3)$ issue, and ironically this gave me muchhhh better workarounds to actually obtaining accurate representation and fine-tunability. 

holy shit

the bldner MANTA fluid sim is very imprecise. and neural nets are very... precise... this was a terrible idea. 
MAnta is not good at SPOARCE, LARGE SCALE... shit. 

domain must be set as small as possible; computation time increases $O(n^3)$

- doing this instead of studying transformers? 
- On the domain, the "fractional obstacles" checkbox can improve the flow against diagonal obstacles and help with the water getting stuck in a stair pattern on the slope.
- In the "mesh" section of the domain, you can set the "upres factor" to 3 and get a much more detailed mesh for the same simulation. 
- Still in the mesh section, you can check "use speed vectors". This will allow the fluid to have motion blur at render, which will make it a lot more realistic. The cache format needs to be set to "uni cache" for this to work.
- make sure da renders are SICK. 
- Hey  [u/sharethathalfandhalf](https://www.reddit.com/user/sharethathalfandhalf/) all these suggestions here are good.

- solidify on obstacle object
- Double checked obstacles normals (all facing outwards on surface in contact with liquid )
- Obstacle set to shell
- increased resolution up to 400+
- checked to make sure all scales applied.
- but often those wont fix the problem. There is an option (atleast in 2.79) under fluid boundary for the domain labeled "Remove air bubbles" which is ticked by default. It will prioritize removing air bubbles over respecting the obstacle. Make sure to disable that option in addition to all the other changes.

- If you look here you will see I had the same exact problem. [https://www.reddit.com/r/blenderhelp/comments/cj3pa6/cant_seem_to_make_fluid_sim_respect_obstacles/](https://www.reddit.com/r/blenderhelp/comments/cj3pa6/cant_seem_to_make_fluid_sim_respect_obstacles/). For me the only thing that would fix it is turning off remove air bubbles.
- recalculate outside dumbass. 


# Preparation

- Use keras or pytorch on a down scaled MNIST to get the weights and biases 

- This is actually technically an analog neural network, using water, all simulated in Blender. 
- To accomodate my terrible idea, I had to simplify the classification problem SUBSTANTIALLY. 

Instead of classifying all 10 handwritten digits from `28x28` images, we are training a network to classify `5x5` 1's, 2's, and 4's. (chosen because they are quite different from each other, so as to give the network a good chance.) It's really hard. Look at this. 

# Weights 

have a 'hose' that outputs water into the pipe for >1
have a slimmer pipe for <1

# Bias 

The weighted sum is so easy. it can be seen as a physical sum of the weighted water amounts. 

can be controlled by dumping more water into the RELU unit

# Relu Unit

How do you introduce non-linearity into a fountain? It's pretty easy actually.

The easiest part to simulate, since a RELU unit output 0 up to a certain threshold, then outputs an amount linearly proportional to the input. 

If the input water is below a certain threshold, it will not overflow
If the input 

# Analogue Softmax

Need an analog $e^x

This is all the components. yes, it looks horrible. Had to keep the modelling as primitive as possible, for the sake of computational efficiency. 

# Putting it all together: Python API and Hacks

the problem: $O(n^3)$

To understand this, one must delve deep into the inner mechanics of the Blender fluid simulator engine. Luckily, I did that for you. Basically, 

First, model the pipes and units
Then represent each weight and bias as an object in Python, and directly load from pytorch. 


---

The dataset is so small and constrained that it is possible, if not *better to* manually compute the neural network. Only 3 possible classes, and only 9 degrees of freedom - technically less. 
The activations required at a pixel-level to trigger the classification of a '4' can be deduced by inspection. for example the (2, 1) positiion is unique to the 4 and thus should have an extremely high weight, with high confidence, since there are only 9 possible pixels. the bottom left 2 pixels are never illuminated so provide 0 useful signal to the model. You could go on and on.  

why 100% accuracy isn't surprising. The digit 4 can be pretty easily identified by looking at a single pixel due to the constraints in the dataset. 
The model knows this: look. 

a toy example is the best and only wya to understand all complex neural networks, otherwise you will never breach that abstraction. Everything builds up from here. decode the neural network - unblack box it. you cannot unblcak box this, you just can't (complex one). but you can unblack box this (simple one), and then, from this base case, you can understand how wthis works. 

It's such a constrained problem that it would be easy to do deterministically/programmatically. 

When the neural network is so simple that you can actually understand why a specific weight is the number that it is... htat's quite a magical feeling. 

the plan was to create an actual functioning, analogue, neural net, but i'll quickly explain why it's not possible. Would have taken 5 years to render, with terrible precision. 

felt like shader art coding... understanding how inputs are influenced by functions. 

"I could hide the complexity by abstracting away further, but I think it's worth putting up with a little complexity, for the sake of getting a more concrete feel for how these networks work."