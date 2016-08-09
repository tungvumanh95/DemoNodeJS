buf = new Buffer(26);
buf[0] = 49;
for (var i = 1 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));      
console.log( buf.toString('ascii',0,5));
console.log( buf.toString('utf8',0,5));
console.log( buf.toString(undefined,0,5));

// JSON
console.log('\nJSON of 12345');
var buf = new Buffer('12345');
var json = buf.toJSON(buf);
console.log(json);

// Concat buffer
console.log('\nConcat buffer');
var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content: " + buffer3.toString());
