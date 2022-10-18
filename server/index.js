const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())  
app.use(cors())


//endpoints

const database = [
    {
        username: 'aholmes',
        password: '12345',
    }
]

app.post('/login', (req, res) => {
    let username = req.body.username
    let password = req.body.password

    for (let i = 0; i < database.length; i++) {
        if(database[i].username === username) {
            if(database[i].password === password) {
                res.send('login the user')
                return
            } else {
                res.send('incorrecty password for' + username)
                return
            }
        }
    }
    res.send('user not found')
})


app.listen(5005, () => {console.log('Server running on 5005')})