---
title: Human Activity Recognition With Smart Phone
desc: "Learnbay one of the best instutute to learn data science course in India, so Enroll Now And Get Your Dream Job!"
slug: home
headerImg: "/blog/human-01.jpg"
date: "December 19, 2021"
tag: [ Data Science, Machine Learning ]
category: "Data Science"
author: "Admin"
position: "Editor"
readTime: "8-10 mins"
h1: "Human Activity Recognition With Smart Phone"
id: "human-activity-recognition-with-smart-phone"
tableData:
  [
    Human Activity Recognition With Smart Phone,
  ]
---


## Human Activity recognition:

In this case study, we design a model by which a smartphone can detect its owner’s activity precisely. Human activity recognition with a smartphone is a very famous ML project. It is a wellness approach for a human.  Human activity is a very exciting project for AI.

Most of the smartphones have two smart sensors accelerometer and gyroscope, which is an IoT sensor. With the help of the[ IoT](https://en.wikipedia.org/wiki/Internet_of_things) devices captures the activity of a human. The data of human activity collected through the IoT sensor. The two smartphone sensors are accelerometer and gyroscope. Accelerometer collects the data of mobile movement such as move landscape and portrait when playing mobile games and gyroscope measure the rotational movement.

An example that a smartphone has an android app that reads the accelerometers and gyroscope which can predict the human activity that he/she walking normally, walking upstairs, walking downstairs, laying down, sitting all these are the human activities.  Some of the accelerometer and gyroscope measures heart rate, calories burned, etc. by reading all the human activities these tells how much work have done in a day by the human this is also the area of the internet of things(IoT).


### Working of Human task project:

1. Human activity recognition: With the help of sensors we collect the data of body movement which is captured by the smartphone. Movements are often indoor activities such as walking, walking upstairs, walking downstairs, lying down, sitting and standing. The data have recorded for the prediction of the data.

2. Data set collection of activity: The data was collected from the 30 volunteers aged between 19 to 48 performing the activities mentioned above while wearing a smartphone on waist. The example video is given below to understand Subject performing the activities and the movement data was labeled manually.

3. Human Activity Recognition Using Smartphones Data Set: The experiments have been carried out with a group of 30 volunteers within an age bracket of 19-48 years. Each person performed six activities (WALKING, WALKING_UPSTAIRS, WALKING_DOWNSTAIRS, SITTING, STANDING, LAYING) wearing a smartphone (Samsung Galaxy S II) on the waist. Using its embedded accelerometer and gyroscope, we captured 3-axial linear acceleration and 3-axial angular velocity at a constant rate of 50Hz. The experiments have been video-recorded to label the data manually. The obtained dataset has been randomly partitioned into two sets, where 70% of the volunteers were selected for generating the training data and 30% the test data. The sensor signals (accelerometer and gyroscope) were pre-processed by applying noise filters and then sampled in fixed-width sliding windows of 2.56 sec and 50% overlap (128 readings/window). The sensor acceleration signal, which has gravitational and body motion components, was separated using a Butterworth low-pass filter into body acceleration and gravity. The gravitational force is assumed to have only low-frequency components, therefore a filter with 0.3 Hz cutoff frequency was used. From each window, a vector of features was obtained by calculating variables from the time and frequency domain.

4.Download the Dataset:



* There are “_train_” and “_test_” folders containing the split portions of the data for modeling (e.g. 70%/30%).
* There is a “_txt_” file that contains a detailed technical description of the dataset and the contents of the unzipped files.
* There is a “_txt_” file that contains a technical description of the engineered features.

The contents of the “_train_” and “_test_” folders are similar (e.g. folders and file names), although with differences in the specific data they contain.

Load  set data and process it:

Important libraries to import for data processing

#start with some necessary imports

import numpy as np

import pandas as pd

from google.colab import files

uploaded = files.upload()

google.colab used to fetch the data from the collaborator files.

train_data = pd.read_csv("train.csv")

train_data.head()

we select the training data set for the modeling.

train_data.Activity.value_counts()

train_data.shape

The above function defines how many rows and columns the dataset have.

train_data.describe()  

It describes that there are (8 rows and 563 columns) with all the features of the data. For numeric data, the result’s index will include count, mean, std, min, max as well as lower, 50 and upper percentiles. By default the lower percentile is 25 and the upper percentile is 75. The 50 percentile is the same as the median.

uploaded = files.upload()

test_data = pd.read_csv('test.csv')

test_data.head()

Here we read the csv file to analyze the data set and the operation which is supposed to be programmed. head()

shows the first 5 rows with their respective columns so here we have (5 rows and 563 columns).

# suffling data

from sklearn.utils import shuffle

# test = shuffle(test)

train_data = shuffle(train_data)

Shuffling data serves the purpose of reducing variance and making sure that models remain general and overfit less.

The obvious case where you’d shuffle your data is if your data is sorted by their class/target. Here, you will want to shuffle to make sure that your training/test/validation sets are representative of the overall distribution of the data.

# separating data inputs and output lables

trainData = train_data.drop('Activity' , axis=1).values

trainLabel = train_data.Activity.values

testData = test_data.drop('Activity' , axis=1).values

testLabel = test_data.Activity.values

print(testLabel)

By using the above code we separate the input and output, here it determines the human activities which are captured by the IoT device. The human activities walking, standing, walking upstairs, walking downstairs, sitting and lying down are got separated to optimize the result.

# encoding labels

from sklearn import preprocessing

encoder = preprocessing.LabelEncoder()

# encoding test labels

encoder.fit(testLabel)

testLabelE = encoder.transform(testLabel)

# encoding train labels

encoder.fit(trainLabel)

trainLabelE = encoder.transform(trainLabel)

Holds the label for each class. encode categorical features using a one-hot or ordinal encoding scheme. It can also be used to transform non-numerical labels (as long as they are hashable and comparable) to numerical labels.

# applying supervised neural network using multi-layer preceptron

import sklearn.neural_network as nn

mlpSGD = nn.MLPClassifier(hidden_layer_sizes=(90,) \

, max_iter=1000 , alpha=1e-4 \

, solver='sgd' , verbose=10 \

, tol=1e-19 , random_state=1 \

, learning_rate_init=.001) 

mlpADAM = nn.MLPClassifier(hidden_layer_sizes=(90,) \

, max_iter=1000 , alpha=1e-4 \

, solver='adam' , verbose=10 \

, tol=1e-19 , random_state=1 \

, learning_rate_init=.001)

nnModelSGD = mlpSGD.fit(trainData , trainLabelE)

y_pred = mlpSGD.predict(testData).reshape(-1,1)

#print(y_pred)

from sklearn.metrics import classification_report

print(classification_report(testLabelE, y_pred))

 

import matplotlib.pyplot as plt

import seaborn as sns

fig = plt.figure(figsize=(32,24))

ax1 = fig.add_subplot(221)

ax1 = sns.stripplot(x='Activity', y=sub_01.iloc[:,0], data=sub_01, jitter=True)

ax2 = fig.add_subplot(222)

ax2 = sns.stripplot(x='Activity', y=sub_01.iloc[:,1], data=sub_01, jitter=True)

plt.show() 

 

<img src="/human-02.jpg" width="100%" /></img>

fig = plt.figure(figsize=(32,24))

ax1 = fig.add_subplot(221)

ax1 = sns.stripplot(x='Activity', y=sub_01.iloc[:,2], data=sub_01, jitter=True)

ax2 = fig.add_subplot(222)

ax2 = sns.stripplot(x='Activity', y=sub_01.iloc[:,3], data=sub_01, jitter=True)

plt.show()

 

<img src="/human-03.jpg" width="100%" /></img>


Click here to watch the video:

[Learnbay](https://www.learnbay.co/data-science-course/) provides industry accredited data science courses in Bangalore. We understand the conjugation of technology in the field of Data science hence we offer significant courses like Machine learning, Tensor Flow, IBM Watson, Google Cloud platform, Tableau, Hadoop, time series, R and Python. With authentic real-time industry projects. Students will be efficient by being certified by IBM. Around hundreds of students are placed in promising companies for data science roles. Choosing Learnbay you will reach the most aspiring job of present and future.

Learnbay data science course covers Data Science with Python, Artificial Intelligence with Python, Deep Learning using Tensor-Flow. These topics are covered and co-developed with IBM.
