var fs = require('fs');

var appRouter = function (app) {

    app.post("/login", function (req, res) {
        if (!login(req.body.userID, req.body.password)) {
            return res.send({"status": "error", "message": "missing a parameter"});
        } else {
            return res.send(req.body);
        }
    });
};

function login(userID, password) {
    var obj = JSON.parse(fs.readFileSync('user.json', 'utf8'));
    if (obj.userID === userID && obj.password === password) {
        console.log("logged");
        return true;
    }
    console.log("not logged");
    return false;
}

module.exports = appRouter;