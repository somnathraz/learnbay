---
title: Everything About the XGBoost Classifier
desc: "Learnbay one of the best instutute to learn data science course in India, so Enroll Now And Get Your Dream Job!"
slug: home
headerImg: "/blog/xsboost-01.png"
date: "February 04, 2022"
tag: [ Data Science ]
category: "Data Science"
author: "Admin"
position: "Editor"
readTime: "5-6 mins"
h1: "Everything About the XGBoost Classifier"
id: "xgboost-classifier"
tableData:
  [
    Everything About the XGBoost Classifier
  ]
---

What is the XGboost classifier?

XGBoost classifier is a Machine learning algorithm that is applied for structured and tabular data. XGBoost classifier is an implementation of gradient boosted decision trees designed for speed and performance. XGBoost is an extreme gradient boost algorithm. And that means it’s a big Machine learning algorithm with lots of parts. XGBoost works with large complicated datasets. XGBoost classifier is an ensemble modelling technique.

What is ensemble modeling?

XGBoost classifier is an ensemble learning method. Sometimes, it may not be sufficient to rely upon the results of just one machine learning model. Ensemble learning offers a systematic solution to combine the predictive power of multiple learners. The resultant is a single model that gives the aggregated output from several models.

The models that form the ensemble, also known as base learners, could be either from the same learning algorithm or different learning algorithms. Bagging and boosting are two widely used ensemble learners. Though these two techniques can be used with several statistical models, the most predominant usage has been with[ decision trees](https://scikit-learn.org/stable/modules/tree.html#:~:text=Decision%20Trees%20(DTs)%20are%20a,as%20a%20piecewise%20constant%20approximation.).

Unique features of XGBoost classifier:

XGBoost is a popular implementation of gradient boosting. Let’s discuss some features of XGBoost that make it so interesting.



Regularization: XGBoost classifier has an option to penalize complex models through both L1 and L2 regularization. Regularization helps in preventing overfitting
Handling sparse data: Missing values or data processing steps like one-hot encoding make data sparse. XGBoost incorporates a sparsity-aware split finding algorithm to handle different types of sparsity patterns in the data
Weighted quantile sketch: Most existing tree-based algorithms can find the split points when the data points are of equal weights (using a quantile sketch algorithm). However, they are not equipped to handle weighted data. XGBoost has a distributed weighted quantile sketch algorithm to effectively handle weighted data
Block structure for parallel learning: For faster computing, the XGBoost classifier can make use of multiple cores on the CPU. This is possible because of a block structure in its system design. Data is sorted and stored in in-memory units called blocks. Unlike other algorithms, this enables the data layout to be reused by subsequent iterations, instead of computing it again. This feature also serves useful for steps like split finding and column sub-sampling
Cache awareness: In XGBoost classifier, non-continuous memory access is required to get the gradient statistics by row index. Hence, XGBoost Classifier has been designed to make optimal use of hardware. This is done by allocating internal buffers in each thread, where the gradient statistics can be stored
Out-of-core computing: This feature optimizes the available disk space and maximizes its usage when handling huge datasets that do not fit into memory.

Solve the XGBoost mathematically:

 

<img src="/blog/xsboost-02.png" width="100%" /></img>


Here we will use simple Training Data, which has a Drug dosage on the x-axis and Drug effectiveness in the y-axis. These above two observations(6.5, 7.5) have a relatively large value for Drug Effectiveness and that means that the drug was helpful and these below two observations(-10.5, -7.5) have a relatively negative value for Drug Effectiveness, and that means that the drug did more harm than good.

The very 1st step in fitting XGBoost Classifier to the training data is to make an initial prediction. This prediction could be anything but by default, it is 0.5, regardless of whether you are using XGBoost classifier for Regression or Classification.

The prediction 0.5 corresponds to the thick black horizontal line.

Unlike unextreme Gradient Boost which typically uses regular off-the-shelf, Regression Trees. XGBoost uses a unique Regression tree that is called an XGBoost Tree.

Now we need to calculate the Quality score or Similarity score for the Residuals.


<img src="/blog/xsboost-03.png" width="100%" /></img>


Here λ  is a regularization parameter.

So we split the observations into two groups, based on whether or not the Dosage&lt;15.


<img src="/blog/xsboost-04.png" width="100%" /></img>

The observation on the left is the only one with Dosage&lt;15. All of the other residuals go to the leaf on the right.



<img src="/blog/xsboost-05.png" width="100%" /></img>


When we calculate the similarity score for the observations –10.5,-7.5,6.5,7.5 while putting λ =0

we got similarity =4  and



<img src="/blog/xsboost-06.png" width="100%" /></img>

Hence the result we got is:



<img src="/blog/xsboost-07.png" width="100%" /></img>

[Learnbay](https://www.learnbay.co/data-science-course/) provides industry accredited data science courses in Bangalore. We understand the conjugation of technology in the field of Data science hence we offer significant courses like Machine learning, Tensor Flow, IBM Watson, Google Cloud platform, Tableau, Hadoop, time series, R and Python. With authentic real-time industry projects. Students will be efficient by being certified by IBM. Around hundreds of students are placed in promising companies for data science roles. By choosing Learnbay you will reach the most aspiring job of present and future.

Learnbay data science course covers Data Science with Python, Artificial Intelligence with Python, Deep Learning using Tensor-Flow. These topics are covered and co-developed with IBM.
