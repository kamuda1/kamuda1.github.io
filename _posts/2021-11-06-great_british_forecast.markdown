---
layout: post
title:  "Great British Forecast"
description: Forecasting the winners of a baking competition.
---

<font size="4"> <p> The Great British Baking Show is a cooking competition that pits amateur bakers against each other 
for the chance to win the show. Each episode consists of three trials, the second of which is a technical challenge. The 
technical challenge is especially interesting because the results are a ranking of the competitors. At the end of each 
episode the weakest baker(s) are eliminated. </p>

<font size="4"> <p> In this project I scraped technical challenge results from Wikipeida and implemented some sklearn 
models to predict the probability that each contestant wins the show. The raw code can be found at this 
<a href="https://github.com/kamuda1/great_british_forecast" target="_blank">link</a>. </p>
 
<font size="4"> <p>
 <a href="#Nov_6_2021">Nov 6, 2021</a>
</p>

<div id="Nov_6_2021"></div>
<font size="6"> <p> Nov 1, 2020 </p>
 
<font size="4"> <p> Table 1 shows results from the first episode of Season 12 [<a href="https://en.wikipedia.org/wiki/The_Great_British_Bake_Off_(series_12)#Episode_1:_Cake" target="_blank">link</a>]. 
Looking at the Technical column, we see the order the contestants placed in the technical. We can convert this 
information into something useable by a machine learning model by encoding it into a vector of length 12. In this vector
the ith index will define how many times a contestant placed in 1+ith place. For example, if a contestant placed 2nd 
in the first round, 8th in the second round, and 2nd in the third round, that information encoded in a vector could look like:
<br> <br>

[0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0].

<br> <br>

This vector encodes information from past episodes in the season. After scrapping the wonderfully formatted 
wikipedia pages (see Table 1), we can create a dataset of features for training some prediction algorithm. 
<p>

<font size="4"> <center> Table 1 </center>

<img src="../../assets/img/great_british_example_episode.png"  hspace="50"  class="center" style="width:90%">

<font size="4"> <p>  There's a few choices for defining the target for prediction. Because we're interested in predicting the final winner, 
we can directly predict the final winner in each round. To do this we can encode the winner as a binary vector. An example
of this could be
<br> <br>

[0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0].

<br> <br>

A 1 in the ith place in this vector means the contestant in that spot (we can define their spot by their alphabetical 
order as in Table 1) won the game. This method may lead to overtraining because for each season the model would need to 
predict a very similar vector. It may be difficult to train the model from the local optimum defined by this method. 

<br> <br>

Instead of the above method, for each episode we can encode the winner of the technical challenge. This may increase 
generalization by showing the model more examples of winning vectors. Using a random forest from sklearn <a href="https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html" target="_blank">[link]</a>

<br> <br>

If we train a random forest using these features and target, how well can we expect our estimator to perform? Doing 
5-folds cross validation with the default random forest classifier in sklearn, we find an average test accuracy of 90%.
This sounds like a promising accuracy, but the cross validation precision and recall are more informative. The average 
cross validation precision is 63% and the average cross validation recall is 34%. This means that when the model 
predicts a contestant will win an episode, we can be 63% sure that the contestant will win. The 34% recall means that we
correctly predict 34% of the winning contestants. 

<br> <br>
The poor precision and recall are likely due to the large number of data points we have early in a season. It's very 
hard to predict the winner of the show early because at that point the contestants have not demonstrated enough skill to
differentiate the winner from the others. We can verify this if we compare precision and recall vs episode number. This 
theory is false if we find that precision and recall don't appreciably increase as the episode number increases.

<br> <br>
The fact that technical placement is enough information to accurately predict the winner shouldn't be too surprising. 
Strong, consistent technical skills are neccessary to excecute a task quickly. This is largely the skill required to 
succeed on the baking show. 

 </p>
 
<font size="4"> <p> Future work includes adding more features (see Table 2) from wikipedia and quantifying how much these extra 
features improve performance. </p>


<font size="4"> <center> Table 2 </center>
<img src="../../assets/img/great_british_extra_features.png"  hspace="50"  class="center" style="width:90%">
