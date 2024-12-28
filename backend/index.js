const  express= require('express')
const app = express()
require('dotenv').config();

const handleMiddleware= require('cors')

app.use(express.json())
app.use(handleMiddleware())

const account=require('./routes/account')
const menu=require('./routes/menu')

app.use('/account',account)
app.use('/menu',menu)
app.listen(process.env.PORT,()=>{
    console.log("Server started on port 8181")
})