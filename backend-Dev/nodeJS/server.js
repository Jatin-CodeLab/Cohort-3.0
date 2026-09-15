console.log('server script is running...');
//?--------------------------------------------
//?--------------------------------------------

let http = require('http')

let server = http.createServer((req, res) => {
    console.log('hello i m server !');
    res.end('mene tum hari baat sun li ha.')
})

server.listen(3000, () => {
    console.log('server start ho gaya hai 3000 pe.');
    
})