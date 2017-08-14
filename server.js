const app = require('express')()
const grabber = require('.')
app.get('/',async(req,res)=>res.json(await grabber(req.query.url)))
app.listen(process.env.PORT || 8080)
