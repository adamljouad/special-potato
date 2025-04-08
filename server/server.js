import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json())

const users = [];

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const userExists = users.find(user => user.username === username);
  if (userExists) {
    res.status(401).json({userExists: true ,message:'Username already taken'})
  } else {
    users.push({username, password});
    res.status(201).json({userExists: false, message:'Utente Registrato'})
  }
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const userExists = users.find(user => user.username === username && user.password === password);
  if (userExists) {
    res.status(200).json({message:'Loggato'})
  } else {
    res.status(401).json({message:'Password o Username errati'})
  }
  
});

app.get('/users', (req, res) => {
  res.status(201).json(users)
})

app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`)
})