const http = require('http');

const server = http.createServer((req, res) => {
    
    // res.write('Welcome to our home page');
    // res.end();

    if(req.url === '/') {
        res.end('Welcome to our home page');
        // res.end();
    }
    else if(req.url === '/about') {
        res.end('About us page');
        // res.end();
        
    }
    else {
        res.end(`
            <h1> Ooops! </h1>
            <p> We can't seem to find the page you're looking for</p>
            <a href="/" >Go to home</a>
        `);
    }
   
   
});

server.listen(5000);