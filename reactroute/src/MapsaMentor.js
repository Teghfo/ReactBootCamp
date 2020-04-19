import React from 'react'

export default function MapsaMentor({ mentor }) {

    if (mentor === 'ashkan') {
        throw new Error('dg mentor mapsa nist!!!')
    }

    return (
        <div>
            <h1>{mentor}</h1>
        </div>
    )
}
