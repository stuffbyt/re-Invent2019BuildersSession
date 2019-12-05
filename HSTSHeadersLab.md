## Adding HSTS headers using Lambda@Edge for Origin Response 

**Creating a Lambda Function**

-	Login to your AWS Console and in the search bar, look for Lambda: https://console.aws.amazon.com/console/home?region=us-east-1
-	Click on Create Function and then select Author from Scratch
-	Give your function a name and select runtime nodejs 10.x 
-	For Permissions, select, Create a new role from AWS policy templates. Give your role a name and select, Basic Lambda@Edge Permissions 
-	Now that your function is created, go ahead and copy the code from https://github.com/stuffbyt/re-Invent2019BuildersSession/blob/master/HSTSHeaders.js and paste it in the editor
-	Once the code has been copied, go ahead and save your code. To save your code version, click on “Save” button on the top rightmost screen. 

**Deploying your code to CloudFront edge locations**

-	If you scroll up from the code editor, you should see Designer field where you would see an option to add a trigger. Click on that, and select your CloudFront distribution from the dropdown. You can go to your CloudFormation stack's Outputs  to verify the CloudFront distribution ID.
-	Click on Deploy to Lambda@Edge and select Amazon CloudFront as a trigger.
- You would have to grab the CloudFront distribution ID for the next step. You can go to the CloudFormation stack's "Outputs" to verify the CloudFront distribution ID.
-	In the Distribution field, select your CloudFront distribution ID.
o	Note: You can also find your CloudFront distribution ID from the CloudFront console. The distribution we deployed using the CloudFormation stack earlier. 
-	In the Cache Behavior, select * (That’s the default cache behavior)
-	In the CloudFront event, we will select Origin Response. The reason for this event is that we want to send the HSTS headers in our responses to the client 
-	Acknowledge the message and click on Deploy.

**Uploading a file to your S3 bucket**

- In order to test our solution, we would have to upload a file to our S3 bucket. You can use Headers.html file for this exercise that you can find it in your GitHub repository you downloaded earlier. 
- To upload a file to your s3 bucket, do the following.
  - Go to your AWS Console, and select S3
  - You should see your newly created S3 bucket by sorting the buckets in your account with clicking on "Date Created"
  - Click on Upload and browse through your Reinvent GitHub repository (downloaded on your local machine in earlier step)
  - Click on Upload. 

**Time to test our solution**

- You can find your CloudFront distribution's default domain name in the CloudFormation's outputs. 

Using Curl, I generally use the following command. 

*curl -v https://yourcloudfrontID.cloudfront.net/Headers.html >/dev/null*

For web browser developer tool, you can go to developer tools and check the Networking tab. Inspect the HTTP response headers to see verify if you’re getting the headers.

**How do we know the solution we just built works?

In your curl output, look for the following in the HTTP response headers. If you see these headers, it means that you have implemented HSTS enforcement for your website. 

< strict-transport-security: max-age=63072000; includeSubdomains; preload
< content-security-policy: default-src 'none'; img-src 'self'; script-src 'self'; style-src 'self'; object-src 'none'
< x-content-type-options: nosniff
< x-frame-options: DENY
< x-xss-protection: 1; mode=block
