---
title : Security of Payment Dataset
---

The Security of Payment Act (SOP Act) is a law designed to ensure that people who perform building and construction work get paid for the work they have done. This law is particularly relevant in countries like Australia and Singapore.



| No. of App. | Application date | Acceptance date | Description of project and contract works | Project postcode | Claimed amount (ex GST) | Payment Schedule provided | Payment Schedule provision | Amount of Payment Schedule (ex GST) | Section of Act application made under | Section 18(2) notice issued | Business Type/Activity (Claimant) | Business Structure (Claimant) | Claimant advisers | Business Type/Activity (Respondent) | Business Structure (Respondent) | Respondent advisers | Determination status | Determination completion date | Reasons if the application is not determined | s21(2B) new reasons provided by Respondent | s21(2B) notice sent to Claimant | s22(4)(b) extension of time sought | Determination released | Determination released date | Adjudicated amount (ex GST) | Amended determination | Fee type | Total Adjudicator fee (ex GST) | Adjudicator's fee payable by Claimant % | Adjudicator's fee payable by Respondent % | Adjudicator's fee payable by Claimant (ex GST) | Adjudicator's fee payable by Respondent (ex GST) | Other Adjudicator fees | Value of other Adjudicator fees (ex GST) | ANA application fee (ex GST) | Adjudication Certificate issued | Adjudication Certificate fee (ex GST) | Date Adjudication Certificate issued | Other ANA fees | Value of Other ANA fees (ex GST) | Adjudicator fee charged | ANA percentage of Adjudicator fee % | ANA fee from Adjudicator fee (ex GST) | Adjudicator share of adjudicator fee - amount |
|-------------|------------------|-----------------|-------------------------------------------|------------------|--------------------------|--------------------------|---------------------------|-------------------------------------|------------------------------------|----------------------------|--------------------------------|---------------------------|-------------------|---------------------------------|-----------------------------|-------------------|---------------------|---------------------------|--------------------------------------|------------------------------------------|----------------------------|---------------------------------|---------------------|-------------------------|--------------------------------|----------------------|---------|-----------------------------|----------------------------------|------------------------------------|----------------------------------------|-------------------------------------------|---------------------|--------------------------------------|------------------------|---------------------------|-----------------------|----------------------------|------------------------------------|---------------------|----------------------------------|--------------------------------------|--------------------------------------------|
| 1           | 11-May-2021      | 14-May-2021     | Concrete polishing                        | 3186             | 11,327.27                | No                       | S18                        | N/A                                 | s.18(1)(b)                         | Yes                        | Trade subcontractor                  | Partnership                | None               | Head contractor                     | Pty Ltd Company               | None               | Determined          | 28-May-2021                  | N/A                                    | N/A                                  | N/A                        | No                               | Yes                 | 28-May-2021             | 11,327.27                         |                    | Fixed   | 990.00                       | 0.0000%                        | 100.0000%                          |                                      | 990.00                                 | N/A                  | N/A                              | 0.00                     | Yes                           | 100.00                     | 20-Dec-2021                 | N/A                        | N/A                            | Yes                 | 33.0000%                      | 330.00                           | 660.00                              |
| 2           | 21-May-2021      | 26-May-2021     | Design and construction works             | 3039             | 202,230.09               | Yes                      | s15                        | 0.00                                | s.18(1)(a)(i)                      | N/A                        | Head contractor                      | Pty Ltd Company            | Solicitors        | Developer                            | Pty Ltd Company               | Solicitors        | Determined          | 17-Jun-2021                  | N/A                                    | No                                   | N/A                        | Yes                              | Yes                 | 05-Jul-2021             | 21,274.43                         | No               | Hourly  | 35,420.00                     | 50.0000%                        | 50.0000%                          | 17,710.00                            | 17,710.00                               | N/A                  | N/A                              | 0.00                     | Yes                           | 0.00                        | 31-Aug-2021                 | N/A                        | N/A                            | Yes                 | 15.0000%                      | 5,313.00                          | 30,107.00                            |


---

My friends and I did exploratory analysis on this dataset in order to help predict the outcome of claims (yes/no) as well as forecast the adjudication amount ($). 

# EDA + Cleaning

- The dataset was extremely wide, with 45 fields total
- We also enriched the dataset with features such as post codes and day of week. 

![](/images/sop_1.png)

# KNN

![](/images/sop_3.gif)

# Linear Regression



[See the repo here](https://github.com/jl33-ai/security-of-payment-dataset)