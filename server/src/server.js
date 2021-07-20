import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT;
const CONNECTION_URL = "mongodb://mongodb:27017/posts";

app.use('/posts', postRoutes);

// TODO: Later rise limit for images uploaded to forum
app.use(express.json({limit: "3mb", extended: true}));
app.use(express.urlencoded({limit: "3mb", extended: true}));
app.use(cors());

console.log(`${PORT}  ${CONNECTION_URL}`)

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server Listenning on port: ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);