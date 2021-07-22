import mongoose from 'mongoose';

// Shema for mongoDB
const projectShema = mongoose.Schema({
    title: String,
    number: Number,
    text: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const ProjectMessage = mongoose.model('ProjectMessage', projectShema);

export default ProjectMessage;