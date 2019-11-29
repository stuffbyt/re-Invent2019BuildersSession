## Serving custom content to end users based on the device type

**Prepare our backend (S3 origin) for this lab**

-	In this case, we are using an S3 bucket as our origin. We’re going to create two folders (prefixes) inside the root of the bucket, “mobile” and “desktop”.
-	Download CloudFront Map images to your local machine from: 
  .https://github.com/stuffbyt/re-Invent2019BuildersSession/blob/master/CloudFrontMapSmaller.png
  .https://github.com/stuffbyt/re-Invent2019BuildersSession/blob/master/CloudFrontMap.png
-	Upload CloudFrontMapSmaller.png into your mobile folder and CloudFrontMap.png to your desktop folder. 
-	Now, navigate inside your S3 bucket’s mobile folder and rename the image CloudFrontMapSmaller.png to CloudFrontMap.png so that both images have the same name. 
-	Now, using Lambda@Edge, we’re going to serve custom images to desktop users and mobile users based on the User-Agent header. 
-	Note that CloudFrontSmaller.png is a compressed image for mobile websites. 
-	What’s awesome about this solution is that you can keep the same front end facing URL for two different images.

**Create a Lambda Function**

-	Login to your AWS Lambda console in in us-east-1 region
-	Click on Crate Function and then select Author from Scratch
-	Give your function a name and select runtime nodejs 10.x 
-	For Permissions, select, Use an existing role. Choose the role that you created in previous exercise 
-	Now that your function is created, go ahead and copy the code from and paste it in the editor [https://github.com/stuffbyt/re-Invent2019BuildersSession/blob/master/DeviceDetection.js]
-	Once the code has been successfully copied, go ahead and save your code. To save your code version, click on “Save” button on the top rightmost screen.

**Update your CloudFront Distribution**

-	Go to your Amazon CloudFront distribution, and click on Behaviors tab on the top.
-	Select Default Cache Behavior (*)
-	Scroll down to Cache Based on Selected Request Headers and select, Whitelist
o	CloudFront-Is-Desktop-Viewer
o	CloudFront-Is-Mobile-Viewer
-	Scroll down and select: Yes, Edit.

**Deploy your Lambda code to CloudFront edge locations**

-	If you scroll up from the code editor, you should see Designer filed where you would see an option to add a trigger. Click on that, and select CloudFront from the dropdown. 
-	Click on Deploy to Lambda@Edge 
-	In the Distribution field, select your CloudFront distribution ID
-	In the Cache Behavior, select * (That’s the default cache behavior)
-	In the CloudFront event, we will select Origin Request. We want to send reqeusts to different folders in the backend depending on the user-agent header. 
-	Acknowledge the message and click on Deploy.
-	Once the function is deployed, give it a couple of minutes and then test the HTTP Response Headers using CURL utility. 

• *Passing Mobile device user-agent to mimic a mobile device from our machine*:
curl -v https://dvd8yendmgqle.cloudfront.net/CloudFrontMap.png -H "User-Agent: Mozilla/5.0 (Android 7.0; Mobile; rv:54.0) Gecko/54.0 Firefox/54.0" >/dev/null

•	*For desktop view, perform the following curl*
curl -v https://dvd8yendmgqle.cloudfront.net/CloudFrontMap.png >/dev/null

Notice in the HTTP response headers, you would get different sized image based on the User-Agent you manually pass in your Curl. Verify the Content-length header in your HTTP response headers. You would see a smaller object for Mobilr viewer.
