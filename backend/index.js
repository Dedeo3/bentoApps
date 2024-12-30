const  express= require('express')
const app = express()
require('dotenv').config();

const handleMiddleware= require('cors')

app.use(express.json())
app.use(handleMiddleware())

const account=require('./routes/account')
const menu=require('./routes/menu')
const wallet= require('./routes/wallet')
const order=require('./routes/order')

app.use('/account',account)
app.use('/menu',menu)
app.use('/wallet',wallet)
app.use('/order',order)
app.listen(process.env.PORT,()=>{
    console.log("Server started on port 8181")
})