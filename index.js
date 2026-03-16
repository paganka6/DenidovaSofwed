import express from "express"
import mongoose from "mongoose"
import router from "./router.js"
const PORT = 5000;
const DB_URL = `mongodb://admin:mongo721887@192.168.0.62/`

const app = express()

app.use(express.json())
app.use("/api", router)

async function startApp(){
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log("SERVER STARTED ON PORT" + PORT))
    }
    catch(e){
            console.log(e)
        }
}

startApp()