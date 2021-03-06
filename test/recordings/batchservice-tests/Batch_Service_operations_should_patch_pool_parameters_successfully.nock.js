// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test4';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test4.japaneast.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'f30ef677-64a9-4768-934f-5fbbc0e1ad27';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://test4.japaneast.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.patch('/pools/nodesdktestpool1?api-version=2019-08-01.10.0', '*')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Mon, 05 Aug 2019 19:26:12 GMT',
  etag: '0x8D719DAC70A440F',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '93bba591-d72c-416c-9944-29ca0655c8e1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid:
   'https://test4.japaneast.batch.azure.com/pools/nodesdktestpool1',
  date: 'Mon, 05 Aug 2019 19:26:12 GMT',
  connection: 'close' });
 return result; }]];