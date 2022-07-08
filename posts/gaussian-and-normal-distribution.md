---
title: Normal and Gaussian Distribution
desc: "Learnbay one of the best instutute to learn data science course in India, so Enroll Now And Get Your Dream Job!"
slug: home
headerImg: "/blog/gaussian.GiF"
date: "March 29, 2022"
tag: [ Data Science, Machine Learning ]
author: "Admin"
category: "Machine Learning"
position: "Editor"
readTime: "3-4 mins"
h1: "Normal and Gaussian Distribution"
id: "gaussian-and-normal-distribution"
tableData:
  [
  Normal and Gaussian Distribution,
  Gaussian Distribution
  
    
  ]
---




## Gaussian Distribution

Gaussian distribution is a bell-shaped curve, it follows the normal distribution with the equal number of measurements right side and left side of the **mean** value. Mean is situated in the centre of the curve, the right side values from the mean are greater than the mean value and the left side values from the mean are smaller than the mean. It is used for mean, median, and mode for continuous values. You all know the basic meaning of mean, median, and mod. The mean is an average of the values, the median is the centre value of the distribution and the mode is the value of the distribution which is frequently occurred. In the[ normal distribution](https://en.wikipedia.org/wiki/Normal_distribution), the values of mean, median, and are all same. If the values generate skewness then it is not normally distributed. The normal distribution is very important in statistics because it fits for many occurrences such as heights, blood pressure, measurement error, and many numerical values.

<img src="/blog/gaussian.GiF" width="100%" /></img>



A gaussian and normal distribution is the same in statistics theory. Gaussian distribution is also known as a normal distribution. The curve is made with the help of probability density function with the random values. F(x) is the PDF function and x is the value of gaussian & used to represent the real values of random variables having unknown distribution.

There is a property of Gaussian distribution which is known as[ Empirical formula](https://en.wikipedia.org/wiki/Empirical_formula)**<span style="text-decoration:underline;"> </span>**which shows that in which confidence interval the value comes under. The normal distribution contains the mean value as 0 and standard deviation 1.



<img src="/blog/gaussian1.png" width="100%" /></img>


The empirical rule also referred to as the three-sigma rule or 68-95-99.7 rule, is a statistical rule which states that for a normal distribution, almost all data falls within three standard deviations (denoted by σ) of the mean (denoted by µ). Broken down, the empirical rule shows that 68% falls within the first standard deviation (µ ± σ), 95% within the first two standard deviations (µ ± 2σ), and 99.7% within the first three standard deviations (µ ± 3σ).

Python code for plotting the gaussian graph:

import matplotlib.pyplot as plt

import numpy as np

import scipy.stats as stats

import math

mu = 0

variance = 1

sigma = math.sqrt(variance)

x = np.linspace(mu - 3*sigma, mu + 3*sigma, 100)

plt.plot(x, stats.norm.pdf(x, mu, sigma))

plt.show()[ ](https://www.learnbay.co/data-science-course/wp-content/uploads/2020/03/akku.png)
<img src="/blog/gaussian2.png" width="100%" /></img>



The above code shows the Gaussian distribution with 99% of the confidence interval with a standard deviation of 3 with mean 0.

[Learnbay](https://www.learnbay.co/data-science-course/) provides industry accredited data science courses in Bangalore. We understand the conjugation of technology in the field of Data science hence we offer significant courses like Machine learning, Tensor Flow, IBM Watson, Google Cloud platform, Tableau, Hadoop, time series, R and Python. With authentic real-time industry projects. Students will be efficient by being certified by IBM. Around hundreds of students are placed in promising companies for data science roles. Choosing Learnbay you will reach the most aspiring job of present and future.

Learnbay data science course covers Data Science with Python, Artificial Intelligence with Python, Deep Learning using Tensor-Flow. These topics are covered and co-developed with IBM.
