const app = require('express')();
const port = 3000;

app.get('/', (req, res) =>{
    console.log("Dude");
})

app.listen(port, ()=>{
    console.log(`Server listening at port: ${port}`)
})