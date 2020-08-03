const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8081;

server.use(middlewares);
// server.cors('*');
server.use(router);
server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`JSON Server is running in ${port}`);
});
