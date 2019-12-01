## Dynamic Content Indexing and Caching Strategy 

If you’re using dynamic pages to serve custom content, then your URL would contain query strings to serve the dynamic content to your users. For example, your URL might have "?id=" to serve custom content based on the user logged in. You can set up your CloudFront distribution in the following way so that it caches the dynamic content (different sweater types) and lets the search engine index different products:

-	The default content will be loaded from the default cache behavior (no query strings/parameters added for better search ability)
-	Navigate to *winterwear/* cache behavior, and click on Edit 
-	Inside the cache behavior, scroll down to "Query String Forwarding and Caching"
- Select "Forward all, cache based on whitelist", and eneter "sweater" in the field 
- Just above the query string configuration, you would see Maximum TTL, Minimum TTL, and Default TTL. Let's lower the value of the TTLs to ensure we don't cache dynamic conent for a long time. Dynamic content changes pretty often if you have a new entry on your website, for example. 
- You can set TTL values to 5 seconds for example. In order to change this, you would have to choose "Customize" for "Object Caching". This setting is just just above the TTL settings. 
- Use API or the AWS Console to Invalidate CloudFront cache (if the dynamic content has been updated) to prevent search engines from crawling outdated content. You can do so by navigating to Invalidations tab in your CloudFront distribution. For example, if you want to purge all files under sweater/ folder from all the CloudFront edge locations, you can type in sweater/* in the Object Path field. 
- You can also use Lambda to automate the invalidation of the outdated pages every time there is a new update. 

**Browser Caching**

-	You also want to add cache headers such max-age on your origin so that you can direct browsers to cache your content locally. This is how you add cache control headers on objects in s3:
-	Select the object, go to Properties, select Metadata. 
-	Select Add Metadata. In the drop down, select Cache-Control and add value Max-Age. You can set up the caching time as per your use case.
