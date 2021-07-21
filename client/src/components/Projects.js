// import { useState } from 'react';

// TEST: tsting mapping later swap with data from database.
const tests = [
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
        test: true,
    },
    {
        id: 3,
        name: 'Name 3',
        text: 'Another text from 3',
        date: '02/06/2019',
        author: 'John',
        test: false,
    }
]

const Projects = () => {
    return (
        <>
            {tests.map((tests) => (
                <>
                <h3>{tests.name}</h3>
                <p>{tests.text}</p>
                <h4>{tests.author}</h4>
                <h4>{tests.date}</h4>
                </>
            ))}
        </>
    )
};

export default Projects;