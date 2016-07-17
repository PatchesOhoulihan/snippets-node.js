"use strict";
//Directory and file Path

console.log("Here comes the path to the scriptfile you executing right now: " +__filename);
console.log("This one gives you the Path to the file but not the Filename himself: " +__dirname);



//Buffer
var fs = require('fs');
fs.readFile('input.txt', function(err, data){
  console.log("Data from the inputfile: " + data);
  //Because there're no encoding options specified Node uses the buffer as a fallback prints the Hex-values
});

fs.readFile('input.txt', (err, data) =>{
  console.log("Converted data from the Inputfile: " + data.toString());
  //Use the .toString() Method to get the encoded String
});



//Process is your interface to the your current running Node.js Application
console.log("Process.version gives you the Node.js Version of the current process: " + process.version);
console.log("Process.versions enhance the output with the version number of all major Components: "+ process.versions);



//Util
let util = require('util');
util.log("Logs stuff with a Timestamp in front of it");
util.debuglog(" - Produce only Logdata if you set the NODE_DEBUG Enviroment-Variable");

//util inspect inspects the a given Object.
console.log("Inspect for the buffer Object: " + util.inspect(Buffer));




//Creating an Eventhandler and subscribe it to a specific Event
var emitter = new(require('events').EventEmitter)();
var callback = function(){
  console.log('Once ping event');
}

//Subscribe to an Event, only gets executed when the Event fires for the firstime
emitter.once('ping', callback);

//On binds a callback Methode on an Event
emitter.on('ping', function(){
  console.log("On ping event");
});

console.log(emitter.listeners('ping'));

//Removes a callback from a specific Event.
emitter.removeListner('ping', callback);
console.log(emitter.listners('ping'));
