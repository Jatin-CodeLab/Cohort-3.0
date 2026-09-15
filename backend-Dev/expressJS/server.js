console.log("server.js file is running...");
//?--------------------------------------------
//?--------------------------------------------

let http = require('http')

let server = http.createServer((req, res) => {
    // if (req.url === '/users') {
    //     res.end("ye users API hai")
    // }
    // if (req.url === '/carsIMG') {
    //     res.end("ye carsIMG API hai")
    // }
    // if (req.url === '/product') {
    //     res.end("ye product API hai")
    // }
    // if (req.url === '/home') {
    //     res.end("ye home API hai")
    // }
    //! this way not right in larger scale project

})

server.listen(5000, () => {
    console.log('server start ho gaya hai');
    
})