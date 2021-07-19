import mongoose from 'mongoose';

// Shema for mongoDB
const postShema = mongoose.Schema({
    title: String,
    number: Number
});

const PostMessage = mongoose.model('')

export default PostMessage;