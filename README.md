This is the illustration of `archiver` package breaking on adding non-tiny files to an archive.

```
npm install
node index.js
```

Outputs:

```
Archive wrote 248 bytes
Finished
```

Then open `index.js` and uncomment the line:

```js
// archive.file('text.txt', { name: 'text.txt' });
```

Run:
```
node index.js
```
And it breaks (doesn't output anything and just exits).