const app = require('./App');
const task = require('./task');

const port = process.env.PORT || 1313;

app.listen(port);

console.log(`Server started on port ${port}`);

setInterval(() => task(), 30000);

