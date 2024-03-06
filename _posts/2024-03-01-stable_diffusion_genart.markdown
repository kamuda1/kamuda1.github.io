---
layout: post
title:  "Stable Diffusion with Generated Templates"
description: Auto generated stable diffusion art. New images everyday!
---

<font size="4"> <p> This project demonstrates guiding stable diffusion using ControlNet with generative art templates. 
The project (<a href="https://github.com/kamuda1/gen-art-templates" target="_blank">GitHub Link</a>) 
is deployed in Google Cloud Platform, running nightly to update the images shown below. </p>

<font size="4"> <p> Shown below are three examples of generative art templates the project currently produces. These are
power series transforms of curves in the complex plane. The idea for these was inspired by a <a href="https://youtu.be/krtf-v19TJg?si=q9ZS-7UNMScFF7H4&t=513" target="_blank">YouTube video</a> by 
Morphocular. I highly recommend his videos if you're interested in math. </p>
 
<p float="center">
  <img src="https://storage.googleapis.com/public_controlnet_images/template_0.png" width="32%" />
  <img src="https://storage.googleapis.com/public_controlnet_images/template_1.png" width="32%" /> 
  <img src="https://storage.googleapis.com/public_controlnet_images/template_2.png" width="32%" />
</p>

<font size="4"> <p> Using these templates, I run a stable diffusion model conditioned by a ControlNet that uses the 
above mathematically generated templates. </p>


<p float="center">
  <img src="https://storage.googleapis.com/public_controlnet_images/img_0.png" width="32%" />
  <img src="https://storage.googleapis.com/public_controlnet_images/img_1.png" width="32%" /> 
  <img src="https://storage.googleapis.com/public_controlnet_images/img_2.png" width="32%" />
</p>


