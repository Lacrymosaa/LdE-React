import { getImageUrl } from './utils';

const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematican',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
}, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henriquez',
    profession: 'chemist',
    accomplishment: 'discovery of Artic ozone hole',
    imageId: 'mynHUSa'
}
]

export default function List() {
    const chemists = people.filter(person => person.profession === 'chemist')
    const listItems = chemists.map(person =>
        <li>
            <img
                src={getImageUrl(person)}
                alt={person.name} 
            />
            <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                known for {person.accomplishment}
            </p>
        </li>
        )
    return <ul>{listItems}</ul>
}