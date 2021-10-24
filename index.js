const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Woow , I am learning node and express');
})


const users = [
    { id: 0, name: 'johira', email: 'johira@gmail.com' },
    { id: 1, name: 'johir', email: 'johir@gmail.com' },
    { id: 2, name: 'sushmita', email: 'sushmita@gmail.com' },
    { id: 3, name: 'sumaiya', email: 'sumaiya@gmail.com' },
    { id: 4, name: 'sonia', email: 'sonia@gmail.com' },
    { id: 5, name: 'jishan', email: 'jishan@gmail.com' },

];

// app.get('/users', (req, res) => {
//     res.send(users);
// })


app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const results = users.filter(user =>
            user.name.toLowerCase().includes(search));
        res.send(results);
    }
    else {
        res.send(users);
    }
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    res.json(newUser);
})


// dynamic api 

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})



app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'apple', 'orange']);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka fazli');
})



app.listen(port, () => {
    console.log('listening to port', port);
})