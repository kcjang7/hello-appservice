const express = require('express');
const app = express();

// App Service가 지정하는 포트를 써야 합니다
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`<h1>Hello Azure App Service!</h1><p>${new Date().toISOString()}</p>`);
});

app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

app.listen(port, () => console.log(`Listening on ${port}`));