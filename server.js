const express = require("express");
const app = express();
const PORT = 2100;
const mongoose = require("mongoose");
require("dotenv").config();
const homeRoutes = require("./routes/home");
const editRoutes = require("./routes/edit");

// *Import functions/routes
const connectDB = require("./config/database");

// connect to database
connectDB();

// set middleware
// set view engine
app.set("view engine", "ejs");
// files will be in public folder, eg css / static html
app.use(express.static("public"));
// properly parse requests from forms
app.use(express.urlencoded({extended: true}));
// app.use(express.static(__dirname + '/public'));

// todo - set routes
app.use('/edit', editRoutes);
app.use('/', homeRoutes);

// todo - start server
app.listen(PORT, () => console.log(`server started on port ${PORT}`))