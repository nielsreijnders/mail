const fs = require('fs');
const Path = require('path');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

const Email = require('../../build/emails/Elk').default;

const STYLE_TAG = '%STYLE%';
const CONTENT_TAG = '%CONTENT%';

// Get the file from a relative path
const getFile = (relativePath) => new Promise((resolve, reject) => {
  const path = Path.join(__dirname, relativePath);
  return fs.readFile(path, { encoding: 'utf8' }, (err, file) => {
    if (err) return reject(err);
    return resolve(file);
  });
});

// Returns a promise that resolves to the full email HTML.
const createEmail = (data) => Promise.all([
  getFile('../styles/main.css'),
  getFile('../emails/template.html'),
])
  .then(([style, template]) => {
    const emailElement = React.createElement(Email, { data });
    const content = ReactDOMServer.renderToStaticMarkup(emailElement);

    // Replace the template tags with the content
    let emailHTML = template;
    emailHTML = emailHTML.replace(CONTENT_TAG, content);
    emailHTML = emailHTML.replace(STYLE_TAG, style);

    return emailHTML;
  });

module.exports = createEmail;
