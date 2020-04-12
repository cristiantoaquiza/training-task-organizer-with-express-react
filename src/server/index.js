import express from "express";
import cors from "cors";

const app = express()
const port = 5555

app.use(cors())
app.get("/", (req, res) => res.json({tasks: ["task 1", "task 2", "task 3"]}));
app.listen(port, () => console.log(`App listen at http://localhost:${port}`))