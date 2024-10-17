const express = require("express");
const app = express();
app.get("*", (req, res) => res.redirect(`roblox:/${req.path}?${new URLSearchParams(req.query).toString()}`));
app.listen(process.env.PORT || 80);