// import express from "express";
// import path from "path";
const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 5000;

express()
    .use(express.static(path.join(process.cwd(), "dist")))
    .get("*", (req, res) => {
        res.sendFile("index.html", { root: "dist" });
    })
    .listen(PORT, () => console.log(`Server running on port ${PORT}`));
