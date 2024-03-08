
My whole life I’ve been obsessed with simulation ecosystems. 

I didn’t realise this until I looked back in retrospect 

- the evolution game
- Aquaponics
- minecraft 
- besiege autonomous bots 

and so; my capstone project embarks. Inspired by the wilderness 2 minute paper and the iconic hide and seek paper..:



After watching Veritasium's life changing video: https://youtu.be/mScpHTIi-kM?si=k0uJJ7lCQ17EycHQ

Veritasium had formularized the philosophy that I didn't know I had been holding my whole life: be kind, unconditionally, but don't be a pushover. 

My first instinct was: what happens if you train a program - not an explicitly programmed one (like in the video), but a machine learning program. 

Coincides well with my long-lasting dream to reproduce the design process of AlphaGo - the AlphaGo documentary, like many, is what inspired me to begin this journey. 

The prisoner's dilemma is already, clearly, one of the most deep and fundamental games ever devised in game theory. But to facilitate a more complex agent, we need a slightly more complex game. 
- Something involving continuous rather than discrete... i.e bidding

AlphaGo was able to 'get good' thanks to 3 main steps: 
1. Supervised Learning from Human Expert Games
2. Monte Carlo Tree Search x Policy Networks
	1. ~ MiniMax. Monte Carlo coming from the Casino (stock footage)
3. Self-play
4. Value networks
5. Policy gradient reinforcement learning

Let's code up some agents and let them play. 