// starting server--------------------------------------

// var http = require('http');

// http.createServer(function(req, res){
// res.writeHead(200, {'Content-Type': 'text/html'});
// res.end('Hello World!');

// }).listen(8080);


// Creating own server------------------------------------------------------

// var http = require('http');
// var dt = require('./firstModule');

// http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type' : 'Text/html'});
//     res.write("The Date And Time are currently:" + dt.myDateTime());
//     res.end();
// }).listen(8080);


// http module------------------------------------------------------------------------------------

// var http = require('http');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(req.url);
//   res.end();
// }).listen(8080);

//ex2---
// var http = require('http');
// var url = require('url');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var q = url.parse(req.url, true).query;
//   var txt = q.year + " " + q.month;
//   res.end(txt);
// }).listen(8080);


// filesystem module---------------------------------------------------------------------------


//read file

// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   //Open a file on the server and return its content:
//   fs.readFile('demofile1.html', function(err, data) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(data);
//     return res.end();
//   });
// }).listen(8080);


//Create Files------------------------------------------------------------------------------



//append------
// var fs = require('fs');

// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });


//open-------
// var fs = require('fs');

// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });


//write file-----

// var fs = require('fs');

// fs.writeFile('mynewfile2.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// delete-----

// var fs = require('fs');

// fs.unlink('mynewfile2.txt', function (err) {
//   if (err) throw err;
//   console.log('File deleted!');
// });


//url module---------------------------------------------------------------------------------------------------------------------

// var url = require('url');
// var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
// var q = url.parse(adr, true);

// console.log(q.host); //returns 'localhost:8080'
// console.log(q.pathname); //returns '/default.htm'
// console.log(q.search); //returns '?year=2017&month=february'

// var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
// console.log(qdata.month); //returns 'february'


// ex2---

// var http = require('http');
// var url = require('url');
// var fs = require('fs');

// http.createServer(function(req, res){
//     var q = url.parse(req.url, true);
//     var filename = "." + q.pathname;
//     fs.readFile(filename, function(err, data){
//         if(err){
//             res.writeHead(404,{'Content-Type': 'text/html'})
//             return res.end("404 Not Found");
//         }
//         res.writeHead(200,{'Content-Type': 'text/html'})
//         res.write(data);
//         return res.end();


//     });
// }).listen(8080);

//NPM--------------------------------------------------------------------------------------------------------------------------

//we installed uppercase

// var http = require('http');
// var uc = require('upper-case');
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write(uc.upperCase("Hello World!"));
//   res.end();
// }).listen(8080);     // HELLO WORLD


//Events Module---------------------------------------------------------------------------------------------------------------------------------

// var fs = require('fs');
// var rs = fs.createReadStream('./mynewfile1.txt');
// rs.on('open', function () {
//   console.log('The file is open');
// });



// var events= require('events');
// var ee= new events.EventEmitter();

// var myEventHandler = function() {
//     console.log('I hear a scream!');
// }

// ee.on('screamsss', myEventHandler);

// ee.emit('screamsss')



