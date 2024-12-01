const express = require("express");
const app = express();

const PORT = process.env.PORT || 3333;

app.get('/', (req, res)=> {
 res.send("Hello from nodejs app");
})


app.listen(PORT, ()=> console.log(`App is up on port ${PORT}`));
