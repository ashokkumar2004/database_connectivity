const {connectdb} = require('./connect');
const {Books} = require('./schema');
const books_controller = require('./controller');
const cors = require('cors')
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());


connectdb()
    .then(()=>{
        console.log("database connected successfullyy..!!!!!")
    })
    .catch((err)=>{
        console.log(err)
    });


app.post('/api/books',books_controller.insertbook);
app.get('/api/books',books_controller.getallbooks);
app.get('/api/books/:bid', books_controller.getbook);
app.put('/api/books/:bid', books_controller.updatebook);
app.delete('/api/books/:bid',books_controller.deletebook);
    
const port = 9000;
app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})
