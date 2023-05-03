import { getImageUrl } from './utils.js'

const Avatar = ({size, person}) => {
    return(
        <img 
            className='avatar'
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    )
}

export default function AProfile () {
    return(
        <div>
            <Avatar
                size={100}
                person={{
                    name: 'Walter White',
                    imageId: 'GoTbhHY'
                }}
            />
            <Avatar
                size={100}
                person={{
                    name: 'Hank Shrader',
                    imageId: '2nisFXu'
                }}
            />
            <Avatar
                size={100}
                person={{
                    name: 'Gustavo Fring',
                    imageId: 'sfo8vdS'
                }}
            />
        </div>
    )
}