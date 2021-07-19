import PostMessage from '../models/postMessage.js';

import express from 'express';


const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        
    } catch (error) {
        
    }
};

