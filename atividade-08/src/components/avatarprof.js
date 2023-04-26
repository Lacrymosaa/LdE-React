import React from 'react';

function Avatar() {
    return (
        <>
        <h1>Titulo</h1>
        <img
            className='avatar'
            src='https://i.imgur.com/1bX5QH6.jpg'
            alt='Lin Lanying'
            widht={100}
            height={100}
        />
        </>
    )
}

export default function Prof() {
    return (
        <Avatar />
    )
}