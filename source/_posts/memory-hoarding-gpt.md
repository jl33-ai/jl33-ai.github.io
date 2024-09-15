---
title: Fine tuning an LLM on 2 million words of journaling
date: 2022-12-09
tech_type: GPT-2
categories:
  - artphilosophy
  - engineering
icons:
  - name: Docs
    image: /images/icons/docs.png
    url: https://example.com/icon1
---
**It all started because** I wanted to follow [this tutorial](https://youtu.be/kCc8FmEb1nY) - creating your own character-level GPT - and train on a dataset more interesting than Shakespeare. A stroke of genius: *I could use my \~2 million words worth of diary entries.* 

2 million words, that seems like a lot? Well, I have [Memory Hoarding OCD (mhocd)](https://ocdla.com/memory-hoarding-obsessive-compulsive-disorder-ocd-1964#:~:text=Memory%20hoarding%20is%20a%20mental,is%20at%20a%20later%20date.) aka the neurological compulsion to write everything down. Memory hoarders believe it is of upmost importance to **encode** every detail of their human experience. 

Pay attention to that internal monologue going on in your head right now. If there was some way to rigorously transcribe it, you would have a dataset near 1-to-1 with your mind. Without getting too [philosophical](https://en.wikipedia.org/wiki/Qualia), you probably get the gist of what I'm saying. So I continued forth, hoping for some kind of **psuedotherapy**. 

> In the deepest hour of the night, confess to yourself that you would die if you were forbidden to write. And look deep into your heart where it spreads its roots, the answer, and ask yourself, must I write? - **[Rainer Maria Rilke](https://en.wikipedia.org/wiki/Letters_to_a_Young_Poet)**


---

# training

Using `pytorch`, `numpy` and `12 hours` of training on a [laptop](https://www.techradar.com/reviews/razer-blade-2019-review), the model is able to 'dream' sentences by predicting the most likely next character.

```text
She holds me every on mt dinner word to something I f*ck right a milk I must want to no feel about this stuff like ur whole quickly detail adorable in bedroom with why Just deserve that did then. you Feel someone like those fring from whole excited to be the tell her personality about her friends it gets so deeplying into the reminder. Be hot. Actually get drying to Oat and I could drive the places with her. Aight the whole Integrity. Get To Her. 
Icle Tim. 
Her mind. What was the explainates rough. 
She had a difference record of her mhm
‘Forgive.’ 🙏🙏🙏❤️
The'res omg we’d reply don’t even insecurity and my form tho. Mental… now charge, andddd Mew harder. unspitateful. The most registical girl. She’s picking in.. Budget. The couple stuff. And they helped my copperment and so bsugging ur v not to warm like the schedule customach englishmic dinner with EYES too.
- 
- Moli is the prank you invitewt ugh?!‘She perfect meanly the RB people seriously thing.’ ‘Rip my friend all the music crack on the'
```

I know - this is unintelligible gibberish. It's still very impressive; given \~ 16 KB of code, the model is even able to use emojis the exact same way I do...

**The problem** is that this model was born and raised entirely within the universe of my diary - unlike larger models, it hadn't been exposed to sufficient data to actually build up any language, vocabulary, or knowledge of the outside world...

> The human brain has about 100 trillion ($10^{14}$) synaptic connections, and you will live for about $10^9$ seconds; that's $\sim 10^5$ bits per second that you need to learn in your life. From this crude argument; there's no way that most of what we know is through supervised learning, but rather by sucking in these audio/visual/sensory experiences throughout out lives. - [Andrew Ng](https://youtu.be/0jspaMLxBig?si=8mskSH8FpxGPez2T&t=1438)

In the same way toddlers learn to speak in 12-18 months, I had just 'taught' this model to speak and think, from scratch. 

---
# the magic: finetuning 

I thought it'd be interesting to contrast these results with fine tuning an existing model like `gpt2`, which has been trained on [OpenWebText](https://openwebtext2.readthedocs.io/en/latest/); many millions of webpages. 

My original method exposed my $10^7$ parameter model to around $10^6$ (2 million) words of knowledge. But by fine tuning, it feels more like I'm teaching a 9 year old a new concept, able to leverage their pre-existing knowledge of language and understanding of the world, rather than 'training up' that toddler from scratch.  

**Fine-tuning** is exactly the same as training, except instead of initializing the parameters with noise from a $\text{Normal}(0, 0.02)$, we use the weights and biases from `gpt2-xl`, and then train from there as usual. 

![](/images/gp2-xl2.png)



| Device | Training Time | Model | Loss |
| ---- | ---- | ---- | ---- |
| macbook m2, metal performance shaders | 8 hr | gpt2-medium | 4.7 |

<br>

**As I read the newly generated output**, immediately I could tell that it was *too* familiar, and knew *too* much about me and my life. So there was clearly a simple bug in the code; my original notes were being printed to the screen. 

But as I went to terminate the program, I realized that I was actually seeing an fresh stream of words. My throat went dry. 

It was like that jarring feeling of hearing your own voice played on recording. It was *awkward* to continue reading, having to face the realization that that's what I sound like. 

*(Output censored, to protect places/identities/emotions/secrets)*

![](/images/gpt2-output.png)

So, it turns out that fine tuning is **very** effective. While the original output was held back by its incoherence, this was near-indistinguishable from my own writing. But it wasn't just better next-word prediction in general; it captured **my** linguistic nuances, and even artifacts of my self and memories. 

Reinforced by those millions of webpages it had already read, the model was now able to copy me precisely, asymptotically approaching my own stream of consciousness. 

I kept reading. Despite the model reciting real life events, and recalling particular emotions that I felt last week, I felt a growing awareness that it was another entity from which all of these words were streaming. So it felt different to reading one's own writing - but rather, a deep form of introspection through a **cloning of the self**. For the first time, instead of writing, I was able to listen. Observing *something else* struggle to express itself evoked a sense of pity. 

The words, despite being randomly generated, held much weight. I understood the Author's struggle; the pursuit to capture every fleeting thought and feeling through this futile emission of words - a unique kind of words that did not exist to be read. And so I stopped writing.

---
# conclusion 

Memory hoarding OCD provides the rare opportunity to replicate your consciousness, as you have unintentionally created the perfect dataset for doing so. 

Could it be that in some way the weights and biases in this 355M parameter model mirror my own brain? Probably not. But in some extrinsic way, this little thing is **myself**. 

So, that's the story of how I accidentally cured my OCD, and cloned my consciousness, or stream of thought, or internal monologue... whatever you call it. 

---
# appendix

- [Read the full notebook here](https://github.com/jl33-ai/diary-gpt/blob/main/gpt-project-notebook.ipynb)
- [Transformers](https://medium.com/inside-machine-learning/what-is-a-transformer-d07dd1fbec04) 
- [NanoGPT](https://github.com/karpathy/nanoGPT)
- [Tutorial](https://youtu.be/kCc8FmEb1nY) 
- [Attention](https://arxiv.org/abs/1706.03762)
- [Few Shot Learners](https://arxiv.org/abs/2005.14165)
- [gpt2-medium](https://huggingface.co/gpt2-medium)

