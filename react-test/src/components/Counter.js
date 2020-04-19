import React, { useState, useEffect } from 'react'
import Mapsa from './Mapsa'
export default function Counter({ onChangeHandler }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        onChangeHandler()
    }, [])



    return (
        <>
            <Mapsa />
            <p>count: {count}</p>
            <button onClick={() => setCount((preCount) => preCount + 1)}>INC</button>
        </>
    )
}
