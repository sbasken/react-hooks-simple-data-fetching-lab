// create your App component here
import React, { useEffect, useState } from 'react'

const App = () => {
    const [ image, setImage ] = useState("")

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => setImage(data.message))
    }, [])

    if (!image) {
        return (
            <p>Loading...</p>
        )
    }
  
    return (
        <div>
            <img src={image} alt="A Random Dog" />
        </div>
    )
}

export default App