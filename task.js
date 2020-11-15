require('dotenv').config();

const https = require('https');
const queue = require('./queue/rabbitmq.js');

const callback = function (response) {
  console.log(response.statusCode);
  if (response.statusCode === 200) {
    queue.sendToQueue('websiteStatus', 'ON');
    console.log("Website is online again!");
  } else {
    console.log("Website is down!");
  }
}

const taskExecution = function () {
  try {
    https.request(process.env.URL, callback).end()
  } catch (error) {
    console.log('URL cannot be reached!');
  }

}



module.exports = taskExecution;