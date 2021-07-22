import ProjectMessage from '../models/projectMessage.js';

export const getProjects = async (req, res) => {
    try {
        const projectMessages = await ProjectMessage.find();

        console.log(projectMessages);

        res.status(200).json(projectMessages);
    } catch (error) {
        res.status(404).json({ message: error });
    };
};

export const createProject = async (req, res) => {
    const project = req.body;
    
    const newProject = new ProjectMessage(project);

    try {
        await newProject.save();

        res.status(201).json(newProject);
    } catch (error) {
        res.status(409).json({ message: error });
    }
};


