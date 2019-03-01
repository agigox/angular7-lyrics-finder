const express = require('express');
var cors = require('cors');
const http = require('http');
const request = require('request');

const app = express();
app.use(cors());
const apiKey = '7c0a4e74e2cc48d57746f864a20c7215';
const apiCriteria = 'track.search';
//const apiUrl = 'http://api.musixmatch.com/ws/1.1/' + searchCriteria +'?apiKey='+apiKey+'&f_lyrics_language=en&';

const apiUrl = `http://api.musixmatch.com/ws/1.1/${apiCriteria}?apikey=${apiKey}&f_lyrics_language=en&s_track_rating=desc&page_size=100&page=1&q_track=`

const songUrl1 = apiUrl + 'q=nan';
app.get('/api/song/:word', (req, res) => {
  request(apiUrl + req.params.word, { json: true }, (err, resp, body) => {
    if (err) {
      console.log('Error: ', err);
      return;
    }
    console.log('Available : ', body.message.header.available);

    console.log(body.message.body.track_list.length);
    res.json(body.message.body.track_list);
  });

});

const port = 8082;

app.listen(port, () => `Server running on port ${port}`);
