// connect model with database
import mongoose from 'mongoose';
const URI = 'mongodb+srv://duyphong-admin:duyphong123456@cluster0.ph4pq.mongodb.net/blogs?retryWrites=true&w=majority';

export default async function connectDB() {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useCreateIndex: true,
        });
        console.log("Access Database Success!");
    } catch (error) {
        console.log("Access Database FAIL!");
    }
}