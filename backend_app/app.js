// import all packages use in nodejs 
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')



// config app
const app = express()
require('dotenv').config()
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb'}));

app.use(cors())





// import all routers global 
const postRouter = require('./routers/post_router')
const dalleRouter = require('./routers/dalle_router')


app.use('/api/v1/post', postRouter)
app.use('/api/v1/dalle', dalleRouter)


// connect app with data base
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('db is connect'))
.catch(err => console.log(`db isn't connect: ${err}`))


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('server is running on port: '+port)

})