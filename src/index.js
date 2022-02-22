const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskrouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000


app.use(express.json())
app.use(userRouter)
app.use(taskrouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () =>{
    const task = await Task.findById('61fb8aeae0fc4b75d908225f')
    await task.populate('owner')
    console.log(task.owner)


    const user = await User.findById('61fb8abfe0fc4b75d9082251')
    await user.populate('tasks')
    console.log(user.tasks)
}