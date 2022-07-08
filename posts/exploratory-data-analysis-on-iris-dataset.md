---
title: Exploratory Data Analysis on Iris dataset
desc: "Learnbay one of the best instutute to learn data science course in India, so Enroll Now And Get Your Dream Job!"
slug: home
headerImg: "/blog/finance.png"
date: "January 3, 2021"
tag: [ Uncategorized ]
author: "Admin"
category: "Uncategorized"
position: "Editor"
readTime: "5-6 mins"
h1: "Exploratory Data Analysis on Iris dataset"
id: "exploratory-data-analysis-on-iris-dataset"
tableData:
  [
  Exploratory Data Analysis on Iris dataset,

  
  ]
---

### What is EDA?

Exploratory Data Analysis refers to the critical process of performing initial investigations on data so as to discover patterns, spot anomalies, to test hypotheses and to check assumptions with the help of summary statistics and graphical representations.

It is always good to explore and compare a data set with multiple exploratory techniques. After the exploratory data analysis, you will get confidence in your data to point where you’re ready to engage a machine learning algorithm and another benefit of EDA is to the selection of feature variables that will be used later for Machine Learning.

In this post, we take Iris Dataset to get the process of EDA.

**Importing libraries:**

import numpy as np

import pandas as pd

import matplotlib.pyplot as plt **Loading the Iris data** iris_data= pd.read_csv("Iris.csv") 

<img src="/blog/iris.jpg" width="100%" /></img>


(150,5)

iris_data['Species'].value_counts()

setosa        50

virginica     50

versicolor    50

Name: species, dtype: int64 iris_data.columns() Index(['sepal_length', 'sepal_width', 'petal_length', 'petal_width','species'],dtype='object') **1D scatter plot of the iris data:** iris_setso = iris.loc[iris["species"] == "setosa"];

iris_virginica = iris.loc[iris["species"] == "virginica"];

iris_versicolor = iris.loc[iris["species"] == "versicolor"];

plt.plot(iris_setso["petal_length"],np.zeros_like(iris_setso["petal_length"]), 'o')

plt.plot(iris_versicolor["petal_length"],np.zeros_like(iris_versicolor["petal_length"]), 'o')

plt.plot(iris_virginica["petal_length"],np.zeros_like(iris_virginica["petal_length"]), 'o')

plt.grid()

plt.show() [ ](https://www.learnbay.co/data-science-course/wp-content/uploads/2020/01/1st.png)

<img src="/blog/iris1.png" width="100%" /></img>

 **2D scatter plot:** iris.plot(kind="scatter",x="sepal_length",y="sepal_width")

plt.show()[ ](https://www.learnbay.co/data-science-course/wp-content/uploads/2020/01/3rd.png)

<img src="/blog/iris2.png" width="100%" /></img>

 **2D scatter plot with the seaborn library :** import seaborn as sns

sns.set_style("whitegrid");

sns.FacetGrid(iris,hue="species",size=4) \

.map(plt.scatter,"sepal_length","sepal_width") \

.add_legend()

plt.show() [ ](https://www.learnbay.co/data-science-course/wp-content/uploads/2020/01/4th.png)

<img src="/blog/iris3.png" width="100%" /></img>



** Conclusion**



* Blue points can be easily separated from red and green by drawing a line.
* But red and green data points cannot be easily separated.
* Using sepal_length and sepal_width features, we can distinguish Setosa flowers from others.
* Separating Versicolor from Viginica is much harder as they have considerable overlap.

**Pair Plot:**

A pairs plot allows us to see both the distribution of single variables and relationships between two variables. For example, let’s say we have four features ‘sepal length’, ‘sepal width’, ‘petal length’ and ‘petal width’ in our iris dataset. In that case, we will have 4C2 plots i.e. 6 unique plots. The pairs, in this case, will be :



*  Sepal length, sepal width
* sepal length, petal length
* sepal length, petal width
* sepal width, petal length
* sepal width, petal width
* petal length, petal width

So,[ here](https://www.theidioms.com/#) instead of trying to visualize four dimensions which are not possible. We will look into 6 2D plots and try to understand the 4-dimensional data in the form of a matrix.

sns.set_style("whitegrid");

sns.pairplot(iris,hue="species",size=3);

plt.show()

**Conclusion:**



1. petal length and petal width are the most useful features to identify various flower types.
2. While Setosa can be easily identified (linearly separable), virginica and Versicolor have some overlap (almost linearly separable).
3. We can find “lines” and “if-else” conditions to build a simple model to classify the flower types.

**Cumulative distribution function:**

iris_setosa = iris.loc[iris["species"] == "setosa"];

iris_virginica = iris.loc[iris["species"] == "virginica"];

iris_versicolor = iris.loc[iris["species"] == "versicolor"];

counts, bin_edges = np.histogram(iris_setosa['petal_length'], bins=10, density = True)

pdf = counts/(sum(counts))

print(pdf);

>>>[0.02 0.02 0.04 0.14 0.24 0.28 0.14 0.08 0.   0.04]

print(bin_edges);

>>>[1.   1.09 1.18 1.27 1.36 1.45 1.54 1.63 1.72 1.81 1.9 ]

cdf = np.cumsum(pdf)

plt.grid()

plt.plot(bin_edges[1:],pdf);

plt.plot(bin_edges[1:], cdf) 



<img src="/blog/iris4.png" width="100%" /></img>



**Mean, Median, and Std-Dev:**

print("Means:")

print(np.mean(iris_setosa["petal_length"]))

print(np.mean(np.append(iris_setosa["petal_length"],50)));

print(np.mean(iris_virginica["petal_length"]))

print(np.mean(iris_versicolor["petal_length"]))

print("\nStd-dev:");

print(np.std(iris_setosa["petal_length"]))

print(np.std(iris_virginica["petal_length"]))

print(np.std(iris_versicolor["petal_length"])) OutPut: - Means: 1.464 2.4156862745098038 5.5520000000000005 4.26

Std-dev:

0.17176728442867112

0.546347874526844

0.4651881339845203

[Learnbay](https://www.learnbay.co/data-science-course/) provides industry accredited data science courses in Bangalore. We understand the conjugation of technology in the field of Data science hence we offer significant courses like Machine learning, Tensor Flow, IBM Watson, Google Cloud platform, Tableau, Hadoop, time series, R and Python. With authentic real-time industry projects. Students will be efficient by being certified by IBM. Around hundreds of students are placed in promising companies for data science roles. Choosing Learnbay you will reach the most aspiring job of present and future.

Learnbay data science course covers Data Science with Python, Artificial Intelligence with Python, Deep Learning using Tensor-Flow. These topics are covered and co-developed with IBM.
