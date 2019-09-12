module.exports = (req,res) => {
    var type = req.headers['content-type'];
    if(type != "application/json"){
        res.status(500).json({
            "message": "only api requests will be served"
        });
    } else {
        res.status(200).json({
            "message": "Welcome to NowServ 1.0"
        });
    }
}