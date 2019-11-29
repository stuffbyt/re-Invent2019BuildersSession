## Dynamic Content Indexing and Caching Strategy 

If you’re using dynamic pages to serve custom content, then your URL would contain query strings to serve the dynamic content to your users. For example, your URL would have ?&id=. You can set up your CloudFront distribution in the following way so that it caches the dynamic content (different sweater types) and lets the search engine index different products:

-	The default content will be loaded from the default cache behavior (no query strings/parameters added for better search ability 
-	Create a separate cache behavior for /winterwear/*
-	Whitelist query string “sweater” (by default Amazon CloudFront strips off query strings)
-	Create a low TTL for the /winterwear cache behavior as the dynamic content changes pretty often if you have a new entry on your website 
-	Use API or the AWS Console to Invalidate CloudFront cache (if the dynamic content has been updated) to prevent search engines from crawling outdated content. You can also use Lambda to automate the invalidation of the outdated pages every time there is a new update. 

**Browser Caching**

-	You also want to add cache headers such max-age on your origin so that you can direct browsers to cache your content locally. This is how you add cache control headers on objects in s3:
-	Select the object, go to Properties, select Metadata. 
-	Select Add Metadata. In the drop down, select Cache-Control and add value Max-Age. You can set up the caching time as per your use case.
