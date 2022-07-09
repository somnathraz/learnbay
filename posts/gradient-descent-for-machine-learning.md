---
title: Gradient Descent for Machine Learning
desc: "Learnbay one of the best instutute to learn data science course in India, so Enroll Now And Get Your Dream Job!"
slug: home
headerImg: "/blog/gradient-01.png"
date: "March 6, 2022"
tag: [ Uncategorized ]
category: "Uncategorized"
author: "Admin"
position: "editor"
readTime: "5-7 mins"
h1: "Gradient Descent for Machine Learning"
id: "gradient-descent-for-machine-learning"
tableData:
  [
   Gradient Descent for Machine Learning,
    Online data science courses are still the best option but the recorded video-based ones are the worst.,
  ]
---

It is an optimization algorithm to find the values of parameters(coefficient) of a function(f) that minimizes the cost function. It is used when parameters can not be calculated by Linear algebra. To minimize the cost function J(w) parameterized by a model parameter w. It tells about the slope of the cost function. To minimize the cost function we move in the direction of Gradient descent. It helps to scale the large dataset.

We can fit the line with linear regression which is a straight line and squiggle with Logistic regression now we can fit the data into the line with the Gradient descent. Gradient descent optimizes these things and many more.

For example, we have a simple dataset:

We have weight in X-axis and Height in Y-axis with values (x1,y1)=(0.4, 1.3)

x2,y2= (1.2, 1.6)

x3,y3= (2, 3.1)

When we fit a line with linear regression we optimize the intercept and slope.

Height = intercpet+slope*Weight (simple line equation)

Here we can find the initialize the slope as 0.64 to find the intercept so for that just plug in the[ Least square](https://www.investopedia.com/terms/l/least-squares-method.asp#:~:text=The%20least%2Dsquares%20method%20is%20a%20statistical%20procedure%20to%20find,the%20behavior%20of%20dependent%20variables.) estimate for the slope 0.64 and intercept as 0.


<img src="/blog/gradient-01.png" width="100%" /></img>


Height = intercpet+slope*Weight

Height = intercept+0.64*weight

The very first step we do is pick a random value for the intercept. This is an initial guess that gradient descent something to improve upon.

Predicted Height = 0+0.64*0.4

Predicted Height = 0.25

Residual = Observed – Predicted

1.4-0.25 = (1.15)

Similarly, we will calculate the residuals for all the three points in the dataset, so have all three predicted values are 1.15, 0.84, 1.82

Now we will calculate Sum of Squared  Residuals = (1.15)^2+(0.84)^2+(1.82)^2 = 5.34

This is the new value for y-axis If we want to plot the graph with value 5.34 on the y-axis , we have



<img src="/blog/gradient-02.png" width="100%" /></img>



This graph represents the  Sum of squared residuals with intercept zero, If we have intercept 0.5 the sum of squared residuals comes down on the graph. We can find the sum of squared residuals by changing the value of the intercept and residuals. Gradient descent does only a few calculations to find the optimal values and increases the number of calculations closer to the optimal values.

It identifies the optimal values with big steps if the values are far from each other and it takes baby steps when values are close to each other.



<img src="/blog/gradient-03.png" width="100%" /></img>



After getting all values of Sum of squared residuals now we have an equation of a curve, Thus we can take a derivative of this function & determine the slope & value of the intercept.

d/d intercept =  d/d intercept*(1.3 – (intercept+ 0.64*0.4))^2

+ d/d intercept*(1.6 – (intercept+ 0.64*0.1.2)^2

+ d/d intercept*(3.1 – (intercept+ 0.64*2))^2

we will apply the chian rule to solve the derivative

d/d inetrcept = 2(1.4-(intercept+0.64*0.3))*(-1) so that we have

d/d inetrcept = -2(1.4-(intercept+0.64*0.3))

+ -2(1.6 – (intercept+ 0.64*1.2)

+ -2(3.1 – (intercept+ 0.64*2)

Now we have the derivative so with the help of this derivative we can find that where the sum of squared residuals is lowest. With the help of the least square method to find the optimal number of intercepts we only determine the value where the value of slope would be 0, but with the help of gradient descent, we can find the minimum value by taking steps from the initial guess until we reach the best value.

This makes the GD very efficient when it is not possible to solve for where the derivative is 0, The closer we get to the optimal value for the intercept the closer the slope of the curve gets to zero 0. This means that the slope of the curve is 0.

We need to take baby steps when we close to the optimal value when the slope is near to 0 and if the slope is far from 0 then we need to take big steps as we are far from the optimal values.

d/d intercept = -2(1.4-(intercept+0.64*0.3))

+ -2(1.6 – (intercept+ 0.64*1.2)

+ -2(3.1 – (intercept+ 0.64*2)

d/d inetrcept = -2(1.4-(0+0.64*0.3))

+ -2(1.6 – (0+ 0.64*1.2)

+ -2(3.1 – (0+ 0.64*2) = -7.71

Step size = slope * learning rate

Step size = -7.71*0.01 = -0.77

New parameter =  Old parameters – step size

= 0-(-0.77)= 0.77

What is learning rate?

In machine learning and statistics, the learning rate is a tuning parameter in an optimization algorithm that determines the step size at each iteration while moving toward a minimum of a loss function.

There are following steps to solve the Gradient descent :



1. Take the derivative of the loss function
2.  Pick a random value of parameters
3. Plug the parameters to the derivative.
4.  Calculate the step size: Step size = slope * learning rate
5. Calculate the new parameters: New parameteres =  Old parameters – step size




<img src="/blog/gradient-04.png" width="100%" /></img>



[Learnbay](https://www.learnbay.co/data-science-course/) provides industry accredited data science courses in Bangalore. We understand the conjugation of technology in the field of Data science hence we offer significant courses like Machine learning, Tensor Flow, IBM Watson, Google Cloud platform, Tableau, Hadoop, time series, R and Python. With authentic real-time industry projects. Students will be efficient by being certified by IBM. Around hundreds of students are placed in promising companies for data science roles. Choosing Learnbay you will reach the most aspiring job of present and future.

Learnbay data science course covers Data Science with Python, Artificial Intelligence with Python, Deep Learning using Tensor-Flow. These topics are covered and co-developed with IBM.
