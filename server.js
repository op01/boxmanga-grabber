const app = require('express')()
const grabber = require('.')
const cp = require('child_process')
app.get('/',async(req,res)=>{
    const worker = cp.fork('./child.js')
    worker.on('message',m=>res.json(m))
    worker.send(req.query.url)
})
app.listen(process.env.PORT || 8080)