---
uid: azure-arm-devtestlabs
summary: *content

---
**This SDK will be deprecated next year and will be replaced by a new TypeScript-based isomorphic SDK (found at https://github.com/Azure/azure-sdk-for-js) which works on Node.js and browsers.**
## Microsoft Azure SDK for Node.js - Dynamics365BusinessCentral

This project provides a Node.js package for accessing Azure. Right now it supports:
- **Node.js version 6.x.x or higher**

### Features


### How to Install

```bash
npm install azure-arm-devtestlabs
```

### How to use

#### Authentication, client creation, and getCompanies  as an example.

```javascript
const msRestAzure = require("ms-rest-azure");
const Dynamics365BusinessCentral = require("azure-arm-devtestlabs");
msRestAzure.interactiveLogin().then((creds) => {
  const subscriptionId = "<Subscription_Id>";
  const client = new Dynamics365BusinessCentral(creds, subscriptionId);
  const select = ["id"];

  return client.getCompanies(select).then((result) => {
    console.log("The result is:");
    console.log(result);
  });
}).catch((err) => {
  console.log('An error occurred:');
  console.dir(err, {depth: null, colors: true});
});
```
### Related projects

- [Microsoft Azure SDK for Node.js](https://github.com/Azure/azure-sdk-for-node)
