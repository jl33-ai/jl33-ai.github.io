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

<style>
  .image-with-caption {
    display: flex;
    align-items: center;
    margin-bottom: 18px;
  }
  .image-with-caption img {
    width: 50%;
    height: auto;
    display: block;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  .caption {
    width: 50%;
    padding-left: 45px;
  }

/*----------*/

  .gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: -10px;
  }
  .gallery-item {
    width: calc(33.33% - 20px); 
    margin: 10px;
  }
  .gallery-item img {
    width: 100%;
    height: auto;
    display: block;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
</style>

# My hobbies

<div class="image-with-caption">
  <img src="/images/sliders/car.png" alt="Youtube in car">
  <div class="caption">
    <p>If the weather's nice, I like to drive somewhere pretty and watch math YouTube videos in my car...</p>
  </div>
</div>

<br>

<div class="image-with-caption">
  <img src="/images/sliders/climb.png" alt="A sticky situation">
  <div class="caption">
    <p>I'm a risk-taker...</p>
  </div>
</div>

<br>

<div class="image-with-caption">
  <img src="/images/sliders/bike.png" alt="Bike-packing">
  <div class="caption">
    <p>On the weekends, I might go bike-packing...</p>
  </div>
</div>

<br>

<div class="image-with-caption">
  <img src="/images/sliders/house.png" alt="Home time">
  <div class="caption">
    <p>And then, it's home time.</p>
  </div>
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

<div class="gallery">
  <div class="gallery-item">
    <img src="/images/gear-gallery/a-cam-2.png" alt="Photo 1">
  </div>
  <div class="gallery-item">
    <img src="/images/gear-gallery/airpod.png" alt="Photo 2">
  </div>
  <div class="gallery-item">
    <img src="/images/gear-gallery/sal.png" alt="Photo 3">
  </div>
  <div class="gallery-item">
    <img src="/images/gear-gallery/b-cam.png" alt="Photo 3">
  </div>
  <div class="gallery-item">
    <img src="/images/gear-gallery/kindle.png" alt="Photo 3">
  </div>
  <div class="gallery-item">
    <img src="/images/gear-gallery/gopro.png" alt="Photo 3">
  </div>
  <div class="gallery-item">
    <img src="/images/gear-gallery/moleskin.png" alt="Photo 3">
  </div>
  <div class="gallery-item">
    <img src="/images/gear-gallery/lacie.png" alt="Photo 3">
  </div>
  <div class="gallery-item">
    <img src="/images/gear-gallery/watch.png" alt="Photo 3">
  </div>
</div>

Check the `alt` tag to see the name.


---

# bonus content

<audio controls>
  <source src="/music/annafedorava-rach2.mp3" type="audio/mp3">
  Your browser does not support the audio element.
</audio>

[Why you should delete all your social media and make a website](https://youtu.be/r0RqucKwIcw?si=40keNMn3HyrWuuxs)
