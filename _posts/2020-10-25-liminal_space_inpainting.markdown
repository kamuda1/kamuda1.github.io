---
layout: post
title:  "Liminal Space Inpainting"
description: Liminal spaces are empty spaces we expect to be full of people, things, 
 and activity. These spaces often evoke emotions of nostalgia and discomfort. In an attempt to, as YouTube creator Solar 
 Sands phrased it, “Force us to look at something familiar in a new way”, this blog follows my attempt to create a 
 machine learning model that takes an image of something familiar and returns it reimagined as a liminal space.
---

<font size="4"> <p> I recently watched a <a href="https://www.youtube.com/watch?v=N63pQGhvK4M" target="_blank">YouTube video</a>
 by a user named Solar Sands on liminal spaces. Liminal spaces are empty spaces we expect to be full of people, things, 
 and activity. These spaces often evoke emotions of nostalgia and discomfort. In an attempt to, as Solar Sands phrased 
 it, “Force us to look at something familiar in a new way”, I wanted to create a machine learning model that takes an 
 image of something familiar and returns it reimagined as a liminal space. The github repo for this project can be 
 found <a href="https://github.com/kamuda1/generative-liminal-space" target="_blank">here</a>. </p>
 
<font size="4"> <p> The algorithm should mask the image and fill in the empty spaces with a liminal space using the 
 context of the unmasked parts. This process should look similar to the image below. 
</p>
 
  <img src="../../assets/img/liminal_space_theory_example.png"  alt="triangle_gradient" hspace="50"  class="center" style="width:90%">
  
<font size="4"> <p> For this attempt, I found an <a href="https://github.com/naoto0804/pytorch-inpainting-with-partial-conv" target="_blank">open source implementation</a> 
 of a PyTorch image inpainting algorithm. I scraped the <a href="https://github.com/kamuda1/generative-liminal-space/blob/master/subreddit_scraper.py" target="_blank">LiminalSpace subreddit</a> 
 for training data using PRAW. To generate the masks, I used the skimage implementation of <a href="https://scikit-image.org/docs/dev/api/skimage.segmentation.html#skimage.segmentation.slic" target="_blank">SLIC</a>.
 The image below shows examples of images and SLIC masks.
</p>
 
  <img src="../../assets/img/inpainting_mask_examples.jpg"  alt="triangle_gradient" hspace="50"  class="center" style="width:90%">
  
<font size="4"> <p> Running for 2000 iterations (~1 day on a Google Colab GPU instance) with about 900 images, we're not
 getting great results. In the below image, the first row is a sample of the training data and mask. The second row is 
 the output from network given the above image and mask. There are artifacts in the unmasked portion of the image and 
 little detail in the masked portions. </p>
  <img src="../../assets/img/inpainting_1800_iters.png"  alt="triangle_gradient" hspace="50"  class="center" style="width:90%">
  
<font size="4"> <p> The most likely culprit for poor performance is too few iterations. The original <a href="https://github.com/naoto0804/pytorch-inpainting-with-partial-conv" target="_blank">implementation</a> 
 shows good results at 10k iterations while I've only trained 2k iterations. </p>
 
<font size="4"> <p> As a side note, I'm reconsidering my choice of mask. I want the mask to operate on the entire image
 like a course salt-and-pepper noise mask. Maybe this is a sign I should reframe the problem as style 
 transfer instead of image inpainting.</p>
