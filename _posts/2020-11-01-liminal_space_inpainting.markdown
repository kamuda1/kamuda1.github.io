---
layout: post
title:  "Liminal Space Inpainting"
description: Liminal spaces are empty spaces we expect to be full of people, things, 
 and activity. These spaces often evoke emotions of nostalgia and discomfort. In an attempt to, as YouTube creator Solar 
 Sands phrased it, “Force us to look at something familiar in a new way”, this blog follows my attempt to create a 
 machine learning model that takes an image of something familiar and returns it reimagined as a liminal space.
---
<font size="4"> <p> Liminal spaces are empty spaces we expect to be full of people, things, and activity. These spaces 
 often evoke emotions of nostalgia and discomfort. In an attempt to, as YouTube creator Solar Sands phrased it, “Force 
 us to look at something familiar in a new way”, this blog follows my attempt to create a machine learning model that 
 takes an image of something familiar and returns it reimagined as a liminal space. </p>
 
<font size="4"> <p>
 <a href="#Nov_1_2020">Nov 1, 2020</a>
 <br>
 <a href="#Oct_25_2020">Oct 25, 2020</a>
</p>

<div id="Nov_1_2020"></div>
<font size="6"> <p> Nov 1, 2020 </p>
<font size="4"> <p> I realized I can improve the model's performance by using the pretrained network supplied by the 
 model's author. Using the improved model, I got the result below. The two main improvements are the more realistic 
 recreation of the non-masked portions of the image and the inpainted regions having a color pallet similar to the 
 non-masked parts of the image.  
 </p>

<img src="../../assets/img/result_model_1020000.jpg"  hspace="50"  class="center" style="width:90%">

<font size="4"> <p> The model does slightly modify the images in a realistic way. If this works similarly on
 non-training imagery I would call it a success in “Forcing us to look at something familiar in a new way”. </p>
 
<img src="../../assets/img/result_model_1020000_2.jpg"  hspace="50"  class="center" style="width:90%">


<font size="4"> <p> All models so far have been trained using Google Colab to make sure there are no breaking bugs in 
 the code and the models can train somewhat successfully. Google Colab is great for debugging and training smaller 
 models, but the session timeout limits (preventing me from running overnight) are limiting how quickly I can experiment 
 with improvements. For future training I'll look into other GPU resources. </p>

<div id="Oct_25_2020"></div>
<font size="6"> <p> Oct 25, 2020 </p>
<font size="4"> <p> I recently watched a <a href="https://www.youtube.com/watch?v=N63pQGhvK4M" target="_blank">YouTube video</a>
 by a user named Solar Sands on liminal spaces. Liminal spaces are empty spaces we expect to be full of people, things, 
 and activity. These spaces often evoke emotions of nostalgia and discomfort. In an attempt to, as Solar Sands phrased 
 it, “force us to look at something familiar in a new way”, I wanted to create a machine learning model that takes an 
 image of something familiar and returns it reimagined as a liminal space. The github repo for this project can be 
 found <a href="https://github.com/kamuda1/generative-liminal-space" target="_blank">here</a>. </p>
 
<font size="4"> <p> The algorithm should mask the image and fill in the empty spaces with a liminal space using the 
 context of the unmasked parts. I'll consider the algorithm a success if it removes people and adds realistic liminal 
 features from the training data to the masked regions. This process should look similar to the image below. 
</p>
 
  <img src="../../assets/img/liminal_space_theory_example.png"  hspace="50"  class="center" style="width:90%">
  
<font size="4"> <p> For this attempt, I found an <a href="https://github.com/naoto0804/pytorch-inpainting-with-partial-conv" target="_blank">open source implementation</a> 
 of a PyTorch image inpainting algorithm. I scraped the <a href="https://github.com/kamuda1/generative-liminal-space/blob/master/subreddit_scraper.py" target="_blank">LiminalSpace subreddit</a> 
 for training data using PRAW. To generate the masks, I used the skimage implementation of <a href="https://scikit-image.org/docs/dev/api/skimage.segmentation.html#skimage.segmentation.slic" target="_blank">SLIC</a>.
 The image below shows examples of images and SLIC masks.
</p>
 
  <img src="../../assets/img/inpainting_mask_examples.jpg"  hspace="50"  class="center" style="width:90%">
  
<font size="4"> <p> Running for 2000 iterations (~1 day on a Google Colab GPU instance) with about 900 images, I'm not
 getting great results. In the below image, the first row is a sample of the training data and mask. The second row is 
 the output from network given the above image and mask. There are artifacts in the unmasked portion of the image and 
 little detail in the masked portions. </p>
  <img src="../../assets/img/inpainting_1800_iters.png"  hspace="50"  class="center" style="width:90%">
  
<font size="4"> <p> The poor performance is most likely due to the low number of iterations. The original <a href="https://github.com/naoto0804/pytorch-inpainting-with-partial-conv" target="_blank">implementation</a> 
 shows good results at one million iterations while I've only trained for two thousand. </p>
 
<font size="4"> <p> As a side note, I'm reconsidering my choice of mask. There is no guarantee the SLIC segmentation 
 algorithm will pick the non-limnal parts of the image. I could run the model with each segment found by SLIC and 
 combine the results if the inpainted regions look realistic, but I doubt the algorithm will create realistic inpainted 
 regions. Instead of a segmentation mask, I'm considering a course salt-and-pepper noise mask. This would let the model
 inpaint the entire image instead of just one region at a time. Maybe this is a sign I should reframe the problem as 
 style transfer instead of image inpainting.</p>
