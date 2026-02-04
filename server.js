import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"
import Requirement from "./Requirement.js"

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error(err));


app.post("/requirements", async (req, res) => {
    try {
        const requirement = new Requirement(req.body);
        await requirement.save()

        res.status(201).json(
            { message: "Requirement saved successfully" }
        )
    }
    catch(error){
            console.error("Error saving requirement:", error)

        res.status(500).json(
            {message: "failed to save requirement"}
        )
    }
})

app.get("/",(req,res)=>{
    res.send("Backend running")
})
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`)
})