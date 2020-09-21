const { start: app } = require('./build/src/app.js')

app()
    .then(() => { })
    .catch((error) => {
        console.log(`server ended with error:\n${error} `)
        process.exit(1)
    })
