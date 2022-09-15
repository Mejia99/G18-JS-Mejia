const http = require('http');

const server = http.createServer((request, response) =>{
    const status = 200; //OK
    const mymeType = {'Content-type': 'text/html'};
    response.writeHead(status,mymeType);
    response.write('<html> <doby> hello from my first server! </doby> </html>');
    response.end();
});
server.listen(8000);
console.log('servidor ejecutandose...');