import express from 'express'
import cors from 'cors'
const app = express ();
const port = 3000;
 
app.use(cors());

const msg = [];

app.post("msg")

app.get('/msg', (req,res) => {
    console.log(res)
    console.log(req.query.name);
    console.log(req.query.email);
    console.log(req.query.msg);
    res.send("Hello World!");
})

app.listen(port, () => {
    console.log(`example app listening to port ${port}`);
});

// node index.js = server start
// url for server "http://localhost:3000/msg?name=&email=&user_message="