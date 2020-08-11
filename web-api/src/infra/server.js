const express = require("express");

//Set Variables
const port = 4000;

const server = async () => {
    //Create an express app
    const app = express();

    //Routes
    app.post("/story", (req, res) =>{
        res.send(`
        <h1>Hey, story here HEHEHEHEHEHE<h1>
        <video controls></video>
        `);
    });

    app.listen(port, () =>{
        console.table({
            app: {
                "App Name": "Covid Anchor API",
                path: `http://localhost:${port}`,
            },
        });
    });
};


module.exports = server;