const mongoose = require('mongoose');

const url = `mongodb+srv://keshav12016018:keshav12016018mittal@cluster0.doyinez.mongodb.net/`;

const connectDatabase = async (req, res) => {
    try {
        await mongoose
            .connect(url)
            .then(() => {
                console.log("Database Connected!!");
            });
    } catch (error) {
        console.error("Database Connection Failed");
    }
};
connectDatabase();