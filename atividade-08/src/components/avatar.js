import React from 'react';

export default function Avatar() {
    const avatar = 'https://i.imgur.com/7vQD0fPs.jpg'
    const description = 'Gregorio Y. Zara'
    return (
        <>
        <h1>{description}</h1>
        <img
            className='avatar'
            src={avatar}
            alt={description}
        />
        </>
    )
}