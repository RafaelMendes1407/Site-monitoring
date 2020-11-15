const express = require('express');

class AppController {
    constructor(){
        this.express = express();
    }
}

module.exports = new AppController().express;