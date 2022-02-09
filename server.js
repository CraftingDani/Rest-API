//Code() by CraftingDani;


//-- constants --\\

const express = require("express")
const chalk = require("chalk")
const mainRouter = require("./mainRouter")

const server = express()
const PORT = 3000


//-- setup server --\\

server.listen(PORT, function()
{
    console.log(chalk.hex("#0CF").bgBlack(`\nServer running on port ${PORT}.\n`))
})

server.use("/", mainRouter)
