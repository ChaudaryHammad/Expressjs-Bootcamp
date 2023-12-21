const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('Hello World!');
})


app.get('/jokes',(req,res)=>{
    const jokes=[
        {
          "id": 1,
          "title": "The Mathematician's Lament",
          "content": "Why was the equal sign so humble? It knew it wasn't less than or greater than anyone else."
        },
        {
          "id": 2,
          "title": "Infinite Loops",
          "content": "Why do programmers prefer dark mode? Less light means fewer bugs escape!"
        },
        {
          "id": 3,
          "title": "The Chicken Crossed the Road",
          "content": "Why did the chicken join a band? Because it had the drumsticks!"
        },
        {
          "id": 4,
          "title": "Coffee Break",
          "content": "Why did the coffee file a police report? It got mugged!"
        },
        {
          "id": 5,
          "title": "Software Development",
          "content": "Why do programmers prefer dark chocolate? It doesn't throw exceptions!"
        },
        {
          "id": 6,
          "title": "The Fast Food Joke",
          "content": "Why don't scientists trust atoms? Because they make up everything, even fast food!"
        },
        {
          "id": 7,
          "title": "The Shy Function",
          "content": "Why do functions never break up? They always return."
        },
        {
          "id": 8,
          "title": "Penguin Party",
          "content": "What do you call a group of musical penguins? A waddle of symphonies!"
        },
        {
          "id": 9,
          "title": "The Password Dilemma",
          "content": "Why did the password go to therapy? It had too many issues!"
        },
        {
          "id": 10,
          "title": "The CSS Joke",
          "content": "Why do programmers prefer CSS? Because they can style without JavaScript drama!"
        }
      ]
res.send(jokes)      
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})