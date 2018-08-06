const express = require('express');
const app = express();
const path = require('path');

// all the assets like bootstrap css/ style.css /jquery / bootstrap.js
app.use(express.static(path.join(__dirname, '../public')));

// all the assets needed to render the mocha unit test report
app.use(express.static(path.join(__dirname, '../mochawesome-report')));

// set template engine (ejs, jade, pug, haml, html)
app.set('view engine', 'ejs');

// starting directory for where you want to render in express routes
app.set('views', path.join(__dirname, 'views'));

// home page
app.get('/', function(req, res) {
  res.render('pages/index');
});

// redirect back to homepage
app.get('/challenges', function(req, res) {
  res.redirect('/');
});

// limitedAlert
app.get('/challenges/limitedAlert', function(req, res) {
  res.render('pages/limitedAlert');
});

// EventEmitter
app.get('/challenges/EventEmitter', function(req, res) {
  res.render('pages/EventEmitter');
});

// uniqueArray
app.get('/challenges/uniqueArray', function(req, res) {
  res.render('pages/uniqueArray');
});

// palindrome
app.get('/challenges/palindrome', function(req, res) {
  res.render('pages/palindrome');
});

// git
app.get('/challenges/git', function(req, res) {
  res.render('pages/git');
});

// bash
app.get('/challenges/bash', function(req, res) {
  res.render('pages/bash');
});

// database
app.get('/challenges/database', function(req, res) {
  res.render('pages/database');
});

// scraping
app.get('/challenges/scraping', function(req, res) {
  res.render('pages/scraping');
});

// unit tests for all the code
app.get('/tests', function(req, res) {
  res.sendFile(path.join(__dirname, '../mochawesome-report/mochawesome.html'));
});

const server = app.listen(3000, function() {
  console.log('Server running on localhost:' + server.address().port);
});
