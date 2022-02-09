//Code() by CraftingDani;


//-- constants --\\

const router = require("express").Router()
const db = require("./database")


//-- router --\\

router.use(onRequest)

function onRequest(req, _res, next)
{
    console.info(`new request (url: ${req.url})\n`)
    next()
}

router.get("/", function (req, res) {
    
    res.status(200).json
    ([
        {
            error: false,
            name: "Daniel",
            age: "Was geht",
            hobbies: ["Programming", "watching YouTube"]
        },
        {
            error: false,
            name: "Daniel",
            age: "Moin",
            hobbies: []
        }
    ])
})

router.get("/users", function(req, res)
{
    db.query("SELECT * FROM users", function(err, results)
    {
        if(err) throw err
        res.status(200).json(results)
    })
})

router.get("/*", function(_req, res)
{
    res.status(404).json
    ({
        error: true
    })
})


module.exports = router
