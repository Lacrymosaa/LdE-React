import React from 'react';
function Relogio() {
    const [date, setDate] = React.useState(new Date());

    React.useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const options = {hour: 'numeric', minute: 'numeric', second: 'numeric'};

    return (
        <div>
            <h1><p>{date.toLocaleString('pt-BR', options)}</p></h1>
        </div>
    );
};
export default Relogio;

