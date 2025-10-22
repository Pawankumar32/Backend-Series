import dotenv from "dotenv"
import connectDB from "./db/indexDB.js"
import {app} from './app.js'


dotenv.config({
    path: './.env'
})
connectDB()
    .then(() => {
        const PORT = process.env.PORT || 8001
        app.listen(PORT, () => {
            console.log(`Server is Running at Port ${PORT}`)
        })
    })
    .catch((err) => {
        console.log("MongoDB connection Failed", err)
    })