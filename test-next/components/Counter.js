import { useState, useEffect } from 'react'


export default (props) => {
    const [count, setCount] = useState(0)


    useEffect(() => {
        console.log('in main')
        return () => {
            console.log('in return ')
        }
    }, [])
    return (<div>
        <h3>{count}</h3>
        <button onClick={() => setCount(count + 1)}>INC</button>
        <button onClick={() => setCount(count - 1)}>DEC</button>
    </div>)
}