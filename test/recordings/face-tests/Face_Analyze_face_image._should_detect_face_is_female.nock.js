// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_FACE_KEY'] = 'dummy';
  process.env['AZURE_SUBSCRIPTION_ID'] = '0b1f6471-1bf0-4dda-aec3-cb9272f09590';
};

exports.scopes = [[function (nock) { 
var result = 
nock('https://westus.api.cognitive.microsoft.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=false&returnFaceAttributes=age%2Cgender%2CheadPose%2Csmile%2CfacialHair%2Cglasses%2Cemotion%2Chair%2Cmakeup%2Cocclusion%2Caccessories%2Cexposure%2Cnoise', '*')
  .reply(200, "[{\"faceId\":\"36dda802-b575-4964-8485-a17b99dcebef\",\"faceRectangle\":{\"top\":84,\"left\":31,\"width\":97,\"height\":97},\"faceAttributes\":{\"smile\":1.0,\"headPose\":{\"pitch\":0.0,\"roll\":-0.7,\"yaw\":-2.4},\"gender\":\"female\",\"age\":52.4,\"facialHair\":{\"moustache\":0.0,\"beard\":0.0,\"sideburns\":0.0},\"glasses\":\"NoGlasses\",\"emotion\":{\"anger\":0.0,\"contempt\":0.0,\"disgust\":0.0,\"fear\":0.0,\"happiness\":1.0,\"neutral\":0.0,\"sadness\":0.0,\"surprise\":0.0},\"exposure\":{\"exposureLevel\":\"goodExposure\",\"value\":0.72},\"noise\":{\"noiseLevel\":\"low\",\"value\":0.03},\"makeup\":{\"eyeMakeup\":true,\"lipMakeup\":true},\"accessories\":[],\"occlusion\":{\"foreheadOccluded\":false,\"eyeOccluded\":false,\"mouthOccluded\":false},\"hair\":{\"bald\":0.04,\"invisible\":false,\"hairColor\":[{\"color\":\"blond\",\"confidence\":1.0},{\"color\":\"gray\",\"confidence\":0.47},{\"color\":\"other\",\"confidence\":0.41},{\"color\":\"black\",\"confidence\":0.19},{\"color\":\"brown\",\"confidence\":0.16},{\"color\":\"red\",\"confidence\":0.14}]}}}]", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '930',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'apim-request-id': 'd2fb4c99-4fec-433b-a031-805ca8964921',
  'strict-transport-security': 'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options': 'nosniff',
  date: 'Mon, 27 Nov 2017 20:23:25 GMT',
  connection: 'close' });
 return result; }]];