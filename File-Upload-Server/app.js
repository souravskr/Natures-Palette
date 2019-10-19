const  express  =  require('express')
const  app  =  express()
const  port  =  4200;

const  multipart  =  require('connect-multiparty');
const  multipartMiddleware  =  multipart({ uploadDir:  './uploadedFiles' });

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/api/upload', multipartMiddleware, (req, res) => {

    res.json({
        'message': 'File uploaded succesfully.'
    });
});

app.listen(port, () => console.log(`NPalette API  now listening on port ${port}!`))
