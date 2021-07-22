import { useState } from 'react';
import axios from 'axios';

import Project from './Project.js';

const Projects = () => {

    // TEST: Testing connection to database as posting data from frontend to backend
    const project = {
        title: 'New Project',
        number: 24,
        text: 'Some Text to define project',
        creator: 'Me',
    }

    console.log(project);

    // FIXME: For gitpod on firefox not working becouse of https not allowed to access localhost
    //  Due to async function frontend first loades and then crashes.
    axios.post('http://localhost:5000/project', project)
    .then(res => console.log(res.data));

    // Create hook with const projects and set it.
    const [projects, setProjects] = useState([
        // TEST: later here goes fetch promise function from axios.
        {
            id: 1,
             name: 'Name 1',
            text: 'Some text from 1',
            date: '07/04/2021',
            author: 'John',
            test: true,
        },
        {
             id: 2,
            name: 'Name 2',
            text: 'Some text from 2',
            date: '17/03/2020',
            author: 'Ashely',
            est: true,
        },
        {
            id: 3,
            name: 'Name 3',
            text: 'Another text from 3',
            date: '02/06/2019',
            author: 'John',
            test: false,
        }
    ]);

    return (
        <>
            {/* Map props projects to project and pass it as props to Project component */}
            {projects.map((project) => (
                <Project key={project.id} project={project} />
            ))}
        </>
    )
};

export default Projects;