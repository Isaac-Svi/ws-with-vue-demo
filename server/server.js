import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

// keep track of all people that are connected to our server through web sockets
const connections = [];

// when someone new connects, we run this function
wss.on('connection', function (ws) {
    // add their new connection to the connections array
    connections.push(ws);

    // whenever data is sent from client to server, run this function
    ws.on('message', function (data) {
        // we change the data from Buffer to String, then change String to JSON
        // we extract event and msg from data
        const { event, msg } = JSON.parse(data.toString());

        // depending on which event was triggered, we send data in different way
        switch (event) {
            case 'msg':
                // if "msg" event is triggered, i send data to all connected
                connections.forEach((connection) => {
                    connection.send(data.toString());
                });
        }
    });
});
