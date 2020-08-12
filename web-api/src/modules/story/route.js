const express = require("express");

// Importing Handlers
const handleCreateStory = require("./handlers/handleCreateStory");

//Creating a story route
const storyRoute = express.Router();


//Defining Stories Routes
storyRoute.post("/",handleCreateStory);
storyRoute.get("/", (req, res) => res.send("Ready for your stories"));
storyRoute.get("/:id", (req, res) => res.send("Ready for your story"));
storyRoute.patch("/:id", (req, res) => res.send("Ready to update your story"));
storyRoute.delete("/:id", (req, res) => res.send("Ready to delete your story"));

// Exporting storyRoute
module.exports = storyRoute;
