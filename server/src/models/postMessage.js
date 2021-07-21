import mongoose from 'mongoose';

// Shema for mongoDB
const postShema = mongoose.Schema({
    title: String,
    number: Number
});

const PostMessage = mongoose.model('PostMessage', postShema);

export default PostMessage;