const { PeerServer } = require('peer');

const PORT = process.env.PORT || 9000;
const CUSTOM_API_KEY = process.env.PEER_API_KEY || 'SECRET_SIGNBRIDGE_KEY_2026';

const server = PeerServer({
  port: PORT,
  path: '/signbridge',
  key: CUSTOM_API_KEY,
  allow_discovery: false,
  proxied: true
});

console.log(`🔒 Private SignBridge PeerServer active on port ${PORT}`);
