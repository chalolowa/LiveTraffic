let express = require('express');
let axios = require('axios');

const server = express();
const hostname = '127.0.0.1';
const port = 3000;

server.use(express.static('public'));
server.use('/css', express.static(__dirname + 'public/css'));
server.use('/js', express.static(__dirname + 'public/js'));
server.use('/images', express.static(__dirname + 'public/images'));

server.set('view engine', 'ejs');
server.set('views', './views');
server.get('/', (req, res) => {
    res.render('home', {
        'appkey': 'ErvGYQcNHVv2IvTAYcrjtUCbAhhSbVbT96bogomYGTI'
    });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
