---
title: extras
date: 2023-12-24 16:09:01
layout: about
---

<div id="random-quote">
  <blockquote id="quote-container" class="quote">I'm thinking...</blockquote>
</div>
<script>
  document.addEventListener('DOMContentLoaded', function() {
    var quotesPath = '/extras/thoughts.json'; // Update with the correct path to your JSON file
    fetch(quotesPath)
      .then(function(response) { return response.json(); })
      .then(function(quotes) {
        var quoteIndex = Math.floor(Math.random() * quotes.length);
        document.getElementById('quote-container').textContent = quotes[quoteIndex];
      })
      .catch(function(error) {
        console.error('Could not load quotes:', error);
      });
  });
  </script>  

---

# My skills

<div style="text-align: center;">
    <img src="/images/inventory-optimized.svg" alt="My inventory" style="width: 80%; height: auto;">
</div>

---

# My hobbies

*If the weather's nice, I like to drive somewhere pretty and watch math youtube videos in my car...*

<div style="text-align: center;">
    <img src="/images/car-yt-res.png" alt="Youtube in car" style="width: 75%; height: auto;">
</div>

<br>

*I'm a risk taker...*

<div style="text-align: center;">
    <img src="/images/lava-climb-res.png" alt="A sticky situation" style="width: 75%; height: auto;">
</div>

<br>

*On the weekends, I might go bike-packing...*

<div style="text-align: center;">
    <img src="/images/bike-island.png" alt="Youtube in car" style="width: 75%; height: auto;">
</div>

<br>

*And then, it's home time.*

<div style="text-align: center;">
    <img src="/images/home-time.png" alt="Youtube in car" style="width: 75%; height: auto;">
</div>

*Watching comfort lectures and working on projects, into the night...*

<div style="text-align: center;">
    <img src="/images/study-desk.png" alt="Studying at desk" style="width: 75%; height: auto;">
</div>

---

# Contact

```python
phone : 0481369898
email : justinkhlee27[at]gmail.com
```

<br>

---

# my gear

[Why you should delete all your social media and make a website](https://youtu.be/r0RqucKwIcw?si=40keNMn3HyrWuuxs)

This site is a heavily modified <a href="#">Cactus</a> theme built on <a href="#">Hexo</a>.


---

# bonus content

<audio controls>
  <source src="/music/annafedorava-rach2.mp3" type="audio/mp3">
  Your browser does not support the audio element.
</audio>

