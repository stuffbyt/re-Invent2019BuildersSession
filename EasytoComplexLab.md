## Present easy to search URLs for your website assets 

**Prepare your backend (AWS S3) for this lab**

-	Create the following folders/file in your s3 bucket to mimic a complex directory on a traditional webserver: /test/1/2/3/cat.jpg 
-	You can install cat.jpg from https://github.com/stuffbyt/re-Invent2019BuildersSession
-	Upload the cat.jpg inside test/1/2/3/ folder. 


**Create a Lambda Function**

-	Login to your AWS Lambda console in in us-east-1 region
-	Click on Crate Function and then select Author from Scratch
-	Give your function a name and select runtime nodejs 10.x
-	For Permissions, select, Use an existing role. Choose the role that you created in previous exercise 
-	Now that your function is created, go ahead and copy the code from and paste it in the editor: https://github.com/stuffbyt/re-Invent2019BuildersSession/blob/master/EasyToComplex.js
-	Once the code has been successfully copied, go ahead and save your code. To save your code version, click on “Save” button on the top rightmost screen.

**Update your CloudFront distribution**

- Navigate to Behaviors tab, and in Path Pattern field, enter winterwear/*
- Keep everything else default. Scroll down and select, Yes, Edit


**Deploy a Lambda your code to CloudFront edge locations**

-	If you scroll up from the code editor, you should see Designer field where you would see an option to add a trigger. 
- Click on that, and select CloudFront from the dropdown. Select newly created Cache Behavior from the dropdown.
- Deploy to Lambda@Edge for Origin Request
-	In the Distribution field, select your CloudFront distribution ID
-	In the Cache Behavior, select * (That’s the default cache behavior)
-	In the CloudFront event, we will select Origin Request. We want to map a user facing URLs to a complex URL in the backend.   
-	Acknowledge the message and click on Deploy.

Now to test this, let’s make a request to your CloudFront distribution with the following URL in your browser:

*https://d123.cloudfront.net/winterwear/brownsweater*

You will see that browser will show cat.jpg in the browser which is the backend URL

*https://d123.cloudfront.net/test/1/2/3/cat.jpg*

You can use this process for any complex URLs in case of dynamic content with query strings. For example, www.example.com/sweater/browncoat?this=test&object=new can be represented with a simpler URL and on the client side, which would help you improve your SEO. 