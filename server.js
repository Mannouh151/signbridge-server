const express = require('express');
const { ExpressPeerServer } = require('peer');
const cors = require('cors');

const app = express();

// This tells your server to allow your Netlify website to talk to it
app.use(cors());

const server = app.listen(process.env.PORT || 9000, () => {
  console.log('Server is running!');
});

const peerServer = ExpressPeerServer(server, {
  path: '/',
  allow_discovery: true
});

app.use('/', peerServer);
