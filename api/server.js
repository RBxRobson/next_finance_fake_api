const jsonServer = require('json-server');
const path = require('path');

const server = jsonServer.create();
const dbPath = path.join(__dirname, 'mocks', 'db.json');

const router = jsonServer.router(dbPath);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}));
server.use(router);
server.listen(3000, () => {
    console.log('JSON Server is running');
});

module.exports = server;