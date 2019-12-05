## Hands-on labs for the builders session NET 301-R

The following labs will touch upon how Amazon CloudFront and Lambda@Edge can help to improve your website's SEO ranking. The backend (Origin) for these exercises is Amazon S3, but for your own use case, you can use any other custom origin of your choice. 

At this point we should have our resources created using the above mentioned AWS CloudFormation template.



## Install the curl utility as we will be using it throughout the session.

https://curl.haxx.se/download.html



## Labs

**1. Including HSTS headers in your response** 

*https://github.com/stuffbyt/re-Invent2019BuildersSession/blob/master/HSTSHeadersLab.md* 

**2. Serving custome content based on the device type**

*https://github.com/stuffbyt/re-Invent2019BuildersSession/blob/master/DeviceDetectionLab.md*

**3. Simplifying user facning URLs for better SEO results**

*https://github.com/stuffbyt/re-Invent2019BuildersSession/blob/master/EasytoComplexLab.md*

**4. Caching strategies for dynamic content indexing**

*https://github.com/stuffbyt/re-Invent2019BuildersSession/blob/master/DynamicContentCaching.md*

**5. Extra credits: Further fine-tuning your Amazon CloudFront distribution for SEO**

*https://github.com/stuffbyt/re-Invent2019BuildersSession/blob/master/FineTuneCF.md*

## Deploying resources using CloudFormation

- Login to your AWS Console: https://console.aws.amazon.com/console/home?region=us-east-1
- Search for CloudFormation service. Once in, click on Create stack (right side of the screen, and choose With new resources (standard)
- Click on Upload a template file, navigate to the repository file you downloaded earlier, and select ReInventTirth.yaml
- Select a name for your stack, and hit "Next" for subsequent steps untill the stack starts creating servcices
- Once the stack is created, you should navigate to Outputs tabs to find out the CloudFront distribution ID and domnain name, which you will be using throughout the lab. 
