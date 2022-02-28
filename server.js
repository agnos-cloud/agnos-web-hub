import express from "express";
import path from "path";

const PORT = process.env.PORT || 5000;

express()
    .use(express.static(path.join(__dirname, "dist")))
    .get("*", (req, res) => {
        res.sendFile("index.html", { root: "dist" });
    })
    .listen(PORT, () => console.log(`Server running on port ${PORT}`));
