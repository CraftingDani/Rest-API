//Code() by CraftingDani;


//-- constants --\\

const mysql = require("mysql2")
const config = (require("./config.json"))

const db = mysql.createConnection
({
    host: "localhost",
    user: "nodeServer",
    password: config.mysqlPW,
    port: 3306, 
    database: "restAPI"
})


//-- connection --\\

db.connect(function(err)
{
    if(err) throw err
    console.log("database conected.")
})


module.exports = db
