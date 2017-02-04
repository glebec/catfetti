#!/usr/bin/env node

const path = require('path');
const ghpages = require('gh-pages');
const project = require('./package');

const DIST_PATH = path.join(__dirname, 'dist');

console.log(`Deploying project`);

ghpages.publish(DIST_PATH, function (err) {
  if (err) return console.error('Could not publish', err);
  console.log(`Published to ${project.repository.url}/tree/gh-pages`);
});
