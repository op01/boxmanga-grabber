const grabber = require('.')
process.on('message',async m=>{
    const result = await grabber(m)
    process.send(result)
    process.exit()
})