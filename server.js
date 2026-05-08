const app  =  require('./src/app');
const connectDB = require('./src/config/database');

require("node:dns").setServers(["8.8.8.8", "1.1.1.1"]);

connectDB()

app.listen(3000, ()=>{
console.log('server start');

})