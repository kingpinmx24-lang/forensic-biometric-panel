// Netlify Serverless Function - Proxy to Node.js backend
const http = require('http');

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Forensic Biometric Panel API",
      status: "ready for deployment"
    })
  };
};
