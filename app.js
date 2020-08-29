const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.send('Hello World!');
});

app.get('/demo', (request, response) => {
  response.set('X-full-stack', '4life');
  response.status(418);
  response.send('I prefer coffee');
});

app.listen(port, () => {
  console.log(`Example App listening on port ${port}`);
});
