var express = require('express');
var router = express.Router();


let contactFirstName = null;
let contactLastName = null;
let contactNumber = null;
let contactEmail = null;
let contactMessage = null;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('pages/home', {
    title: 'Home', 
    contactFirstName: contactFirstName,
    contactLastName:contactLastName,
    contactNumber: contactNumber,
    contactEmail: contactEmail,
    contactMessage: contactMessage
  });
});

/* GET home page. */
router.get('/home', function (req, res, next) {
  res.render('pages/home', {
    title: 'Home',
    contactFirstName: contactFirstName,
    contactLastName:contactLastName,
    contactNumber: contactNumber,
    contactEmail: contactEmail,
    contactMessage: contactMessage
  });
});

/* GET About Us page. */
router.get('/about', function (req, res, next) {
  res.render('pages/about', { title: 'About' });
});

/* GET Products page. */
router.get('/project', function (req, res, next) {
  res.render('pages/projects', { title: 'Projects' });
});

/* GET Services page. */
router.get('/services', function (req, res, next) {
  res.render('pages/services', { title: 'Services' });
});

/* GET Contact Us page. */
router.get('/contact', function (req, res, next) {
  res.render('pages/contact', { title: 'Contact' });
});

/* POST Contact Us page. */
router.post('/contact', function (req, res, next) {
  contactFirstName = req.body.userFirstName;
  contactLastName = req.body.userLastName;
  contactNumber = req.body.userContactNumber;
  contactEmail = req.body.userEmailId;
  contactMessage = req.body.userMessage;
  res.redirect('/home');
});

module.exports = router;
