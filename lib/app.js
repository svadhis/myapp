    var mysql = require("mysql");
    //Database connection
    app.use(function (req, res, next) {
        res.locals.connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: ' ',
            database: 'serre-de-jardin.fr'
        });
        res.locals.connect();
        next();
    });

    console.log(mysql);