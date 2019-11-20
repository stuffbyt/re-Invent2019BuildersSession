'use strict';

exports.handler = async (event) => {
    console.log('Event: ', JSON.stringify(event, null, 2));
    const cf = event.Records[0].cf;
    const request = cf.request;
    
    // You can also use DynamoDB or S3 to store the redirect map
    // For demo purposes, we simply hardcode it here

    const redirects = {
        '/winterwear/brownsweater': '/test/1/2/3/cat.jpg',
        '/images/tree': '/card/da8398f4',
        '/beer/bottle': '/test2/2/3/4/5/greenbottle.jpg',
       
    };

    if (request.uri in redirects) {
    request.uri = redirects[request.uri];
    return request;
}
};