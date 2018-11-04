const express = require('express');
var cors = require('cors');
const http = require('http');
const request = require('request');

const app = express();
app.use(cors());
songUrl = 'http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=15953433&apikey=7c0a4e74e2cc48d57746f864a20c7215';
app.get('/api/song', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  request(songUrl, { json: true }, (err, resp, body) => {
    if (err) { return console.log(err); }
    console.log(body.message.body.lyrics);
    res.json(body.message.body.lyrics);
  });

});

const port = 8082;

app.listen(port, () => `Server running on port ${port}`);
