import * as express from 'express';
import * as path from 'path';
import fetch from 'node-fetch';
const app = express();
const port = process.env.PORT || 5000;

// API calls
app.get('/api/ramen', (req, res) => {
  const zip = req.query.zip
  const init = {
      headers: {
        Authorization: 'Bearer TegPvPq2QJbdgNQkytikv7oPQqDhJdiSp1OOQCxWfqwA8Ob6hFqUV6zp17bgLd3EUv8lKSh3v1j2nLIFTVenj-9xLZZr0QIcW_1tSwEP0FOttp6hQwiM_lPwsI1CW3Yx'
      }
    }
  fetch(`https://api.yelp.com/v3/businesses/search?categories=ramen&location=${zip}`, init)
    .then(res => res.json())
    .then((resp) => {
      console.log('Businesses', resp.businesses);
      setTimeout(() => {
        res.send({ businesses: resp.businesses ? resp.businesses.sort((a: any, b: any) => a.distance - b.distance) : [] });
      }, 2000)
    });
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));