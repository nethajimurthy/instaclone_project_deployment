import mongoose from 'mongoose';

const mongSchema = new mongoose.Schema({
    author:String,
    location:String,
    image:String,
    date: {
        type: Date, 
        default: Date.now
    },
    description:String,
    likes: {
        type:Number,
        default:0,
    }
})

const postDataModule = mongoose.model('Instaclonedata',mongSchema)


export default postDataModule;