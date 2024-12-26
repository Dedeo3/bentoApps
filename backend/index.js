const  express= require('express')
const app = express()
const handleMiddleware= require('cors')

app.use(express.json())
app.use(handleMiddleware())

const account=require('./routes/account')

app.use('/registerAccount',account)
app.listen(8181,()=>{
    console.log("Server started on port 8181")
})