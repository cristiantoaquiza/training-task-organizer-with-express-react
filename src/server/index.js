import express from "express";

const app = express()
const port = 5555

app.get("/", (req, res) => res.json({tasks: ["task 1", "task 2", "task 3"]}));
app.listen(port, () => console.log(`App listen at http://localhost:${port}`))