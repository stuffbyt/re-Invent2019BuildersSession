## Adding HSTS headers using Lambda@Edge for Origin Response 

**Creating a Lambda Function**

-	Login to your AWS Lambda console in in us-east-1 region
-	Click on Crate Function and then select Author from Scratch
-	Give your function a name and select runtime nodejs 10.x 
-	For Permissions, select, Create a new role from AWS policy templates. Give your role a name and select, Basic Lambda@Edge Permissions 
-	Now that your function is created, go ahead and copy the code from and paste it in the editor https://github.com/stuffbyt/re-Invent2019BuildersSession/blob/master/HSTSHeaders.js
-	Once the code has been successfully copied, go ahead and save your code. To save your code version, click on “Save” button on the top rightmost screen. 

**Deploying your code to CloudFront edge locations**

-	If you scroll up from the code editor, you should see Designer filed where you would see an option to add a trigger. Click on that, and select CloudFront from the dropdown. 
-	Click on Deploy to Lambda@Edge 
-	In the Distribution field, select your CloudFront distribution ID.
o	Note: You can find your CloudFront distribution ID from the CloudFront console. The distribution we deployed using the CloudFormation stack earlier. 
-	In the Cache Behavior, select * (That’s the default cache behavior)
-	In the CloudFront event, we will select Origin Response. The reason for this event is that we want to send the HSTS headers in our responses to the client 
-	Acknowledge the message and click on Deploy.
-	Once the function is deployed, give it a couple of minutes and then test the HTTP Response Headers (using CURL or Web Browser Developer tools) to make sure we’re receiving the correct response headers. 

**Uploading a file to your S3 bucket**

You can download a sample HTML file from here and upload it to your S3 bucket (root directory): 
https://github.com/stuffbyt/re-Invent2019BuildersSession/blob/master/Headers.html

Using Curl, I generally use the following command. 

*curl -v https://yourcloudfrontID.cloudfront.net/Headers.html >/dev/null*

For web browser developer tool, you can go to developer tools and check the Networking tab. Inspect the HTTP response headers to see verify if you’re getting the headers.
