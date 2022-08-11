const app = require('./app');
const connect = require('./configs/db');

// start the server listening for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
    try {
        await connect();
        console.log("Connection established!");
    } catch (err) {
        console.log("Error connecting!");
    }
});