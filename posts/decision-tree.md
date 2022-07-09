---
title: Everything About Decision Tree From Scratch
desc: "Learnbay one of the best instutute to learn data science course in India, so Enroll Now And Get Your Dream Job!"
slug: home
headerImg: "/blog/finance.png"
date: "November, 2021"
tag: [ Data Science , Machine Learning ]
author: "Admin"
category: "Machine Learning"
position: "Editor"
readTime: "8-10 mins"
h1: "Everything About Decision Tree From Scratch"
id: "decision-tree"
tableData:
  [
  Everything About Decision Tree From Scratch,
 
    
  ]
---

### Decision tree:

The decision tree is the classification algorithm in ML(machine learning). A decision tree is a decision support tool that uses a tree-like model of decisions and their possible consequences, including chance event outcomes, resource costs, and utility. It is one way to display an algorithm that only contains conditional control statements.

To understand the algorithm of the decision tree we need to know about the classification.


### What is Classification?

Classification is the process of dividing the datasets into different categories or groups by adding a label. It adds the data point to a particular labeled group on the basis of some condition.

As we see in daily life there are three categories in an email(Spam, Promotions, Personal) they are classified to get the proper information. Here decision tree is used to classify the mail type and fix it the proper one.


#### Types of classification 



* DECISION TREE
* RANDOM FOREST
* NAIVE BAYES
* KNN

Decision tree:



1. Graphical representation of all the possible solutions to a decision.
2. A decision is based on some conditions.
3. The decision made can be easily explained.


<img src="/blog/dt.png" width="100%" /></img>


There are the following steps to get a decision with the decision tree

1. Entropy:

[Entropy](https://en.wikipedia.org/wiki/Entropy) is basically used to create a tree. We find our entropy from attribute or class. A decision tree is built top-down from a root node and involves partitioning the data into subsets that contain instances with similar values (homogeneous). ID3 algorithm uses entropy to calculate the homogeneity of a sample.



<img src="/blog/dt1.png" width="100%" /></img>


2.Information Gain:

The information gain is based on the decrease in entropy after a data-set is split on an attribute. Constructing a decision tree is all about finding an attribute that returns the highest information gain.



* The information gain is based on the decrease in entropy after a dataset is split on an attribute.
* Constructing a decision tree is all about finding an attribute that returns the highest information gain (i.e., the most homogeneous branches).
* Gain(S, A) = Entropy(S) – ∑ [ p(S|A) . Entropy(S|A) ]
* We intend to choose the attribute, splitting by which information gain will be the most
* Next step is calculating information gain for all attributes

Here the short example of a Decision tree:

import pandas as pd

import numpy as np

import matplotlib.pyplot as plt

%matplotlib inline

play_data=pd.read_csv('data/tennis.csv.txt')

print(play_data)

play_data=pd.read_csv('data/tennis.csv.txt')

play_data

Output:

outlook	temp	humidity	windy	play

0	sunny	hot	high	False	no

1	sunny	hot	high	True	no

2	overcast	hot	high	False	yes

3	rainy	mild	high	False	yes

4	rainy	cool	normal	False	yes

5	rainy	cool	normal	True	no

6	overcast	cool	normal	True	yes

7	sunny	mild	high	False	no

8	sunny	cool	normal	False	yes

9	rainy	mild	normal	False	yes

10	sunny	mild	normal	True	yes

11	overcast	mild	high	True	yes

12	overcast	hot	normal	False	yes

13	rainy	mild	high	True	no 

Entropy of play:



* Entropy(play) = – p(Yes) . log2p(Yes) – p(No) . log2p(No)

play_data.play.value_counts()

Entropy_play=-(9/14)*np.log2(9/14)-(5/14)*np.log2(5/14)

print(Entropy_play)

output:

0.94028595867063114

Information Gain on splitting by Outlook



* Gain(Play, Outlook) = Entropy(Play) – ∑ [ p(Play|Outlook) . Entropy(Play|Outlook) ]
* Gain(Play, Outlook) = Entropy(Play) – [ p(Play|Outlook=Sunny) . Entropy(Play|Outlook=Sunny) ] – [ p(Play|Outlook=Overcast) . Entropy(Play|Outlook=Overcast) ] – [ p(Play|Outlook=Rain) . Entropy(Play|Outlook=Rain) ]

play_data[play_data.outlook == 'sunny'] 

# Entropy(Play|Outlook=Sunny)

Entropy_Play_Outlook_Sunny =-(3/5)*np.log2(3/5) -(2/5)*np.log2(2/5)

Entropy_Play_Outlook_Sunny

play_data[play_data.outlook == 'overcast'] # Entropy(Play|Outlook=overcast)

# Since, it's a homogenous data entropy will be 0

play_data[play_data.outlook == 'rainy'] # Entropy(Play|Outlook=rainy)

Entropy_Play_Outlook_Rain = -(2/5)*np.log2(2/5) - (3/5)*np.log2(3/5)

print(Entropy_play_Outlook_Rain)

# Entropy(Play_Sunny|)

Entropy_Play_Outlook_Sunny =-(3/5)*np.log2(3/5) -(2/5)*np.log2(2/5)

#Gain(Play, Outlook) = Entropy(Play) – [ p(Play|Outlook=Sunny) . Entropy(Play|Outlook=Sunny) ] –

#[ p(Play|Outlook=Overcast) . Entropy(Play|Outlook=Overcast) ] – [ p(Play|Outlook=Rain) . Entropy(Play|Outlook=Rain) ]

Other gains



* Gain(Play, Temperature) – 0.029
* Gain(Play, Humidity) – 0.151
* Gain(Play, Wind) – 0.048

Conclusion – Outlook is winner & thus becomes root of the tree


<img src="/blog/dt2.png" width="100%" /></img>



Time to find the next splitting criteria¶

play_data[play_data.outlook == 'overcast'] play_data[play_data.outlook == 'sunny'] # Entropy(Play_Sunny|)

Entropy_Play_Outlook_Sunny =-(3/5)*np.log2(3/5) -(2/5)*np.log2(2/5)

print(Entropy_Play_Outlook_Sunny)

# Entropy(Play_Sunny|)

Entropy_Play_Outlook_Sunny =-(3/5)*np.log2(3/5) -(2/5)*np.log2(2/5)

print(Entropy_Play_Outlook_Sunny)

Information Gain for humidity

#Entropy for attribute high = 0, also entropy for attribute normal = 0

Entropy_Play_Outlook_Sunny - (3/5)*0 - (2/5)*0 

Information Gain for windy



* False -> 3 -> [1+ 2-]
* True -> 2 -> [1+ 1-]

Entropy_Wind_False = -(1/3)*np.log2(1/3) - (2/3)*np.log2(2/3)

print(Entropy_Wind_False)

Entropy_Play_Outlook_Sunny - (3/5)* Entropy_Wind_False - (2/5)*1  

Information Gain for temperature



* hot -> 2 -> [2- 0+]
* mild -> 2 -> [1+ 1-]
* cool -> 1 -> [1+ 0-]

Entropy_Play_Outlook_Sunny - (2/5)*0 - (1/5)*0 - (2/5)* 1]

Conclusion : Humidity is the best choice on sunny branch:



<img src="/blog/dt3.png" width="100%" /></img>



play_data[(play_data.outlook == 'sunny') & (play_data.humidity == 'high')] 

Output:

outlook	temp	humidity	windy	play

0	sunny	hot	high	False	no

1	sunny	hot	high	True	no

7	sunny	mild	high	False	no 

play_data[(play_data.outlook == 'sunny') & (play_data.humidity == 'normal']

Output:

outlook	temp	humidity	windy	play

8	sunny	cool	normal	False	yes

10	sunny	mild	normal	True	yes

Splitting the rainy branch:

play_data[play_data.outlook == 'rainy'] # Entropy(Play_Rainy|)

Entropy_Play_Outlook_Rainy =-(3/5)*np.log2(3/5) -(2/5)*np.log2(2/5)outlook	temp	humidity	windy	play

3	rainy	mild	high	False	yes

4	rainy	cool	normal	False	yes

5	rainy	cool	normal	True	no

9	rainy	mild	normal	False	yes

13	rainy	mild	high	True	no 

Information Gain for temp



* mild -> 3 [2+ 1-]
* cool -> 2 [1+ 1-]

Entropy_Play_Outlook_Rainy - (3/5)*0.918 - (2/5)*1

Output:

0.020150594454668602

Information Gain for Windy:

Entropy_Play_Outlook_Rainy - (2/5)*0 - (3/5)*0

Output:

0.97095059445466858 

Information Gain for Humidity



* High -> 2 -> [1+ 1-]
* Normal -> 3 -> [2+ 1-]

Entropy_Play_Outlook_Rainy_Normal = -(1/3)*np.log2(1/3) - (2/3)*np.log2(2/3)

Entropy_Play_Outlook_Rainy_Normal

Entropy_Play_Outlook_Rainy - (2/5)*1 - (3/5)*Entropy_Play_Outlook_Rainy_Normal

Entropy_Play_Outlook_Rainy_Normal

Entropy_Play_Outlook_Rainy_Normal

Output:

0.91829583405448956

0.019973094021974891 

Final tree:



<img src="/blog/dt4.png" width="100%" /></img>



Decision trees are popular among non-statisticians as they produce a model that is very easy to interpret. Each leaf node is presented as an if/then rule. Cases that satisfy the if/then the statement is placed in the node. Are non-parametric and therefore do not require normality assumptions of the data. Parametric models specify the form of the relationship between predictors and response. An example is a linear relationship for regression. In many cases, however, the nature of the relationship is unknown. This is a case in which non-parametric models are useful. Can handle data of different types, including continuous, categorical, ordinal, and binary. Transformations of the data are not required. It can be useful for detecting important variables, interactions, and identifying outliers. It handles missing data by identifying surrogate splits in the modeling process. Surrogate splits are splitting highly associated with the primary split. In other models, records with missing values are omitted by default.

[Learnbay](https://www.learnbay.co/data-science-course/) provides industry accredited data science courses in Bangalore. We understand the conjugation of technology in the field of Data science hence we offer significant courses like Machine learning, Tensor Flow, IBM Watson, Google Cloud platform, Tableau, Hadoop, time series, R and Python. With authentic real-time industry projects. Students will be efficient by being certified by IBM. Around hundreds of students are placed in promising companies for data science roles. By choosing Learnbay you will reach the most aspiring job of present and future.

Learnbay data science course covers Data Science with Python, Artificial Intelligence with Python, Deep Learning using Tensor-Flow. These topics are covered and co-developed with IBM.
