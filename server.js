const liveServer = require("live-server");
const jsonServer = require("json-server");
const path = require("path");

function startLiveServer() {
    const params = {
        port: 8080,
        root: __dirname,
        open: true,
        file: "index.html",
        wait: 1000,
    };

    liveServer.start(params);
}

function startJsonServer() {
    const hostname = "127.0.0.1";
    const port = 3001;
    const database = path.join(__dirname, "./data/data.json");

    const server = jsonServer.create();
    const router = jsonServer.router(database);
    const middlewares = jsonServer.defaults();

    server.use(middlewares);
    server.use(router);
    server.listen(port, () => {
        console.log(`JSON Server running at http://${hostname}:${port}/`);
    });
}

startLiveServer();
startJsonServer();
