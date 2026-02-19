import { useEffect, useState } from 'react'
import './AboutUs.css'
import axios from 'axios';

function AboutUs () {
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:5002/aboutus')
            .then(response => setData(response.data))
            .catch(error => console.error(error));
    }, []);

    if (!data) return <div>Loading...</div>

    return (
        <div className = "aboutus">
            <h1>{data.title}</h1>
            <p className='description'>{data.description}</p>
            <img
                src={`http://localhost:5002${data.imageUrl}`}
                alt="headshot"
                className = 'gracehe'
            />
        </div>
    )
}

export default AboutUs;