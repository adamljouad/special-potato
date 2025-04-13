import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mysql from 'mysql2'

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json())


const db = mysql.createPool({
  user: "root",
  host: "localhost",
  database: "trackexpense",
  password: "Aminadamjuve2002",
  port: 3306
});


app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  
  db.execute("SELECT * FROM users WHERE username = ?", [username], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Errore nel server' });
    }

    if (results.length > 0) {
      return res.status(400).json({ userExists: true, message: "Nome utente già preso" });
    }

  db.execute("INSERT INTO users (username, password) VALUES (?, ?)", [username, password], (err) => {
    if (err) {
      return res.status(500).json({ message: 'Errore nella registrazione' });
    }
    res.status(201).json({ userExists: false, message: 'Registrazione riuscita' });
    });
  });
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  db.execute("SELECT * FROM users WHERE username = ? and password = ?", [username, password], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Errore nel server'});
    }
    if (results.length > 0) {
      res.status(200).json({ message: 'Login riuscito', userExists: true });
    } else {
      res.status(401).json({ message: 'Username o password errati', userExists: false });
    }
  });
});

app.get('/users', (req, res) => {
  res.status(201).json(users)
})

app.listen(port, () => {
  console.log(`Server avviato su http://localhost:${port}`)
})