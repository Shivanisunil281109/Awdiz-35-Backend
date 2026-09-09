const http = require('http');

const server = http.createServer((req, res) => {

    if (req.method === 'GET' && req.url === '/') {
        res.end('Welcome to my Website');
    }



    else if (req.method === "GET" && req.url === '/about'){
        res.end ('this is About page');
    }


    else if (req.method === "GET" && req.url === '/contact'){
        res.end ('this is Contact page');

    }


    else if (req.method === 'GET' && req.url === '/users') {
    res.end('List of users');
}

else {
    res.statusCode =404;
    res.end('404 -page Not Found');
}




});



server.listen(3000, () => {
    console.log('Server is running on port 3000');
});