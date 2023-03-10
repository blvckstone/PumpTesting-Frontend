const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));


app.get("/", function(req, res){

    res.render("dashboard")

})

app.listen(3000, function(){
    console.log("Server started at port 3000")
})
