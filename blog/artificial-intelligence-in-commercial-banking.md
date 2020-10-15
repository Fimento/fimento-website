---
slug: ai-in-commercial-banking
date: 2020-06-22T05:00:00.000Z
title: Artificial intelligence in commercial banking
youtubeId: f5hA3j4HvFE
---
### Recording of Findec webinar Carl Ringqvist, Co-founder of Fimento

Ph.D. Candidate Mathematics and Machine Learning, KTH

## What is AI?

There are two main branches of AI

* **Formal systems (or "Quite smart code")**\
  A system that lets the computer reason by giving it easy rules of deductions. You can get answers that are 100 % certain, and it doesn't require any data.
* **Machine learning (or "Statistics +")**\
  Machine learning today is very similar to old school statistics. You have data with variables, and you use that data to estimate a mathematical object which describes relations between these variables that you can use to make predictions in the future.

The main underlying concepts are the same – as are the limitations. We are still very far from what you might associate with Artificial Intelligence. Hence the quotation marks; "AI".

## Components of successful “AI”

To build models, you need data. Systems or operations produce data. The quality of your data will suffer if they are not well set up.\
With "AI", the data is still stored in a table with simple rows and columns. But the demands of this table are quite high. A column needs a numerical value or a category (out of a well-defined set of categories). A column town is of limited use if we don't have control over the full sets that are measured.\
Missing data is handled either through omitting it or estimating it. Errors of meaning must be addressed so that a column doesn't contain data of different scales or units.\
We also need to take control of the source of each column. For example, we might have two columns measuring income – but which one is the most relevant? And why do they differ if they measure the same thing?\
Documenting what the columns mean will help you make the best design choices for your model. For classical models, we often need an "Answer column" containing values we want to predict in the future.\
Learn the time delay between the variables measured and the answers measured. For example, if we want to predict sales and customers' satisfaction for each purchase, we might have a high prediction capacity of that model – but it will be of little use if the customer satisfaction is measured after the sale is made.\
If you want to take action on data, you need the data before the action you want to take. If you have millions of rows and thousands of columns, you must have a system for managing it. It should have the capacity to continuously update these rows per minute, per day, monthly, depending on the application. For your model to re-train, you need a system that continually updates it.\
Usually, when you look at your systems and data sources, you will start to discover more and more anomalies and faults. Before you know it, you are involved in managing the company's processes that have led to the bad data being produced in the first place, instead of building your model.\
Classic system design has a high focus on:

* Service provision
* UX
* Uptime

Little or no effort is spent on how the system generates data and in what format.\
Many use workarounds in real-life cases that, for example, can make accounting correct but will make the data flawed.

## Issues with classic system design

### Example 1 – Wrong setup of operations

A shop has a system that adds certain items twice when scanning them. One piece gets registered as two items. The problem has been solved by using the system for returns to make sure accounting is correct.\
A consultant is hired to look for dissatisfied customer segments, or faulty products through data, and sees that some products get returned a lot. The recommendation is to remove these seemingly defective products. But there was never anything wrong with them; the error was in the system. Now customers are unhappy because they can no longer buy their favorite products.

### Example 2 – data is present but messy

A bank wants to build a machine learning scorecard to predict the risk of customers paying less than 50 % of invoices.\
The system contains late-marks based on full payment, but that is not what the bank wanted to measure. Also, many invoices were marked late due to a temporary system-problem one year ago. On top of that, some customers had payment-free months, so the invoices generated have not been paid, but they are still not late.

## Many hidden values

Data can easily be extracted when needed with a data-lake that is set up in the right way. With a poor data structure, this seemingly simple task may require several peoples' and departments' time and effort. On an organizational level, there are huge wins to be made in terms of efficiency and resources.\
A well-thought-through and simple system will generate better data – and it turns out that a simple structure that can easily be explained, is also preferred by the customer.\
The "AI"-system and data flow has many advantages for the whole organization and will lead to a lot of unexpected values.

### Key takeaways from the session

* System design and operations make out 99 % of your AI capability.
* The AI model gives you percentages; the infrastructure gives you hundreds.
* Fimento provides a cornerstone to this infrastructure.

## Learn more about Fimento and how we work with AI

[Contact us to learn more!](https://fimento.com/#contact)