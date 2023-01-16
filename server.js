const express = require("express");
const app = express();
const PORT = 8000;
const mongoose = require("mongoose");

    // *Import functions/routes

// todo - connect to database


// set middleware
// set view engine
app.set("view engine", "ejs");
// files will be in public folder, eg css / static html
app.set(express.static("public"));
// properly parse requests from forms
app.use(express.urlencoded({extended: true}));

// todo - set routes


// todo - start server
app.listen(PORT, () => console.log(`server started on port ${PORT}`))