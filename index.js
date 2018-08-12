var archiver = require('archiver');
var p = require('path');
var MemoryStreams = require('memory-streams');

var promise = new Promise(function(resolve, reject) {

  var archive = archiver('zip');
  var stream = new MemoryStreams.WritableStream();

  archive.on('error', reject);

  //on stream closed we can end the request
  archive.on('end', function() {
    console.log('Archive wrote %d bytes', archive.pointer());
    resolve();
  });

  //this is the streaming magic
  archive.pipe(stream);

  archive.append('ABC', { name: 'abc.txt' });
  archive.file('small.txt', { name: 'small.txt' });
  // archive.file('text.txt', { name: 'text.txt' });

  archive.finalize();
});

promise.then(() => console.log('Finished'), error => console.error(error));