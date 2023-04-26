import React from 'react';

const today = new Date();
const person = {
    name: 'Hedy Lamarr',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
}

function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
    ).format(date);
}

export default function TodoList() {
    return (
        <>
        <div style={person.theme}>
            <h1>{person.name}'s To Do List for {formatDate(today)}</h1>
            <img 
                src="https://i.imgur.com/yXOvdOSs.jpg"
                alt="Hedy Lamarr"
                className="Photo"
            />
            <ul style={{
                backgroundColor: 'black',
                color: 'pink'
            }}>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
        </div>
        </>
    )
}