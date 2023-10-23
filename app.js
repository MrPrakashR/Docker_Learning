const express = require("express")
const mongoose = require("mongoose")

const app = express()
const port = 3000

mongoose.connect("mongodb://mongdb2:27017/mydatadb",{})

const EntrySchema = new mongoose.Schema({
    text:String,
    date: {type:Date,default:Date.now}
})

const Entry = mongoose.model("Entry",EntrySchema)

app.get("/",async (req,res) => {
    try {
        const entry = Entry({text:"Hellow Friends"})
        await entry.save()
        res.status(200).send("Entry Saved")
    } catch (error) {
        res.status(500).send("Error Occureed!")
    }
})

app.listen(port,()=>{
    console.log(`App running on port ${port}`);
})