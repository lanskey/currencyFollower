import 'jsdom-global/register';

// Set up mocha (fix for webstorm)
global.it = require('mocha').it
global.describe = require('mocha').describe

// Set up chai
global.chai = require('chai')
global.expect = chai.expect

global.React = require('react')
