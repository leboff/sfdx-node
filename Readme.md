# SFDX-Node

Wrapper for the Salesforce CLI to for use in Node.js  

## Installation
`npm install sfdx-node`

## Usage
 The Salesforce CLI is based on the Heroku CLI, and is basically a plugin for the Heroku CLI (namespace: force).
 To use the CLI commands within node we wrap the topics, and camelcase the commands. For example `sfdx force:auth:web:login` becomes `sfdx.auth.webLogin()`. 

 > sfdx force:TOPIC:COMMAND:SUB -> sfdx.topic.commandSub();

 Additionally option flags can be passed in as an object to the command using the flag names. So `sfdx force:org:create --setdefaultusername` becomes `sfdx.org.create({ setdefaultusername: true})`

 Commands all return a JS Promise.

```javascript
var sfdx = require('sfdx-node');

//authorize a dev hub
sfdx.auth.webLogin({
    setdefaultdevhubusername: true,
    setalias: 'HubOrg'
})
.then(function(){
  //push source
  return sfdx.source.push();  
})
.then(function(){
  console.log('Source pushed to scratch org');  
});



```