let express = require("express")
let app = express();
let path = require("path");

let quicksort = require(path.join(__dirname, '../lib/quicksort.js')).quicksort;

//all the assets like bootstrap css/ style.css /jquery / bootstrap.js
app.use(express.static(path.join(__dirname, '../public')));

//all the assets needed to render the mocha unit test report
app.use(express.static(path.join(__dirname, '../mochawesome-report')));

//set template engine (ejs, jade, pug, haml, html)
app.set("view engine", "ejs");

//starting directory for where y ou want to render in express routes
app.set("views", path.join(__dirname, "views"));

//home page
app.get('/', function(req, res) {
    res.render("pages/index");
  // res.sendFile(path.join(__dirname + '/views/report.html'));
});

//your coding challenge page that you want to href to
app.get('/quicksort', function(req, res) {
    res.render("pages/quicksort", { quicksort_code: quicksort.fullString() });
});

//unit tests for all the code
app.get('/tests', function(req, res) {
    res.sendFile(path.join(__dirname, '../mochawesome-report/mochawesome.html'));
});

let server = app.listen(3000, function() {
  console.log("Server running on localhost:" + server.address().port);
});

