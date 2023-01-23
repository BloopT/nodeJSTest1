const http = require('http');// import du package natif de node et on l'utilise pour créer un serveur

const server = http.createServer((req, res) => {
    res.end('Voilà la réponse du serveur !');
});

server.listen(process.env.PORT || 3000);