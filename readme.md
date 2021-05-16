# Image Filter API, AWS API Deployment


## Table of Contents

* [Summary](#Summary)

* [Technologies](#Technologies)

* [Features](#Features)

* [Structure](#Structure)

* [Usage](#usage)

## Summary

This image filter API was configured and deployed to AWS as part of my **AWS Cloud Developer Nanodegree from Udacity**.

It demonstrates my understanding and ability to configure the following services:  
AWS Elastic Beanstalk  
AWS IAM User Permissions  
AWS EB CLI (Elastic Beanstalk Command Line Interface)

## Technologies

Node.JS was used for the backend.  
Typescript was used for creating the endpoints.  

## Features

1. Accepts both JP(E)G/PNG images.

2. Returns an image with an applied image filter.

3. Malformed requests and links are handled correctly.

## Structure 
```

+---deployment_screenshots
|       Deployment.PNG
|
\---src
    |   server.ts
    |
    \---util
        |   util.ts

```


## Usage

You will have to configure/use the following services to deploy the API.  

1. AWS Elastic Beanstalk  
2. AWS IAM User Permissions 
3. AWS EB CLI (Elastic Beanstalk Command Line Interface)

You can run the project locally using
```shell
npm run dev
```
You can also build the project using the included configuration settings
```shell
npm run build
```
