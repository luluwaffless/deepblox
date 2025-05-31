const express = require("express");
express()
    .use(express.static("public"))
    .get("*", (req, res) => res.redirect(`roblox:/${req.path}?${new URLSearchParams(req.query).toString()}`))
    .listen(process.env.PORT || 80);