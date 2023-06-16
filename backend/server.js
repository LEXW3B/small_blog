const app = require('./app');
require('dotenv').config();

app.listen(process.env.PORT, () => {
    console.log(`Listening to the door ${process.env.PORT}`);
});

module.exports = app;
