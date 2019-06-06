---
uid: azure-cognitiveservices-formrecognizer
summary: *content

---
**This SDK will be deprecated next year and will be replaced by a new TypeScript-based isomorphic SDK (found at https://github.com/Azure/azure-sdk-for-js) which works on Node.js and browsers.**
## Microsoft Azure SDK for Node.js - FormRecognizerClient

This project provides a Node.js package for accessing Azure. Right now it supports:
- **Node.js version 6.x.x or higher**

### Features


### How to Install

```bash
npm install azure-cognitiveservices-formrecognizer
```

### How to use

#### Authentication, client creation, and getExtractedKeys  as an example.

```javascript
const msRest = require("ms-rest");
const FormRecognizerClient = require("azure-cognitiveservices-formrecognizer");
const token = "<access_token>";
const creds = new msRest.TokenCredentials(token);
const subscriptionId = "<Subscription_Id>";
const client = new FormRecognizerClient(creds, subscriptionId);
const id = ec7b1657-199d-4d8a-bbb2-89a11a42e02a;

client.getExtractedKeys(id).then((result) => {
  console.log("The result is:");
  console.log(result);
}).catch((err) => {
  console.log('An error occurred:');
  console.dir(err, {depth: null, colors: true});
});
```

### Related projects

- [Microsoft Azure SDK for Node.js](https://github.com/Azure/azure-sdk-for-node)
