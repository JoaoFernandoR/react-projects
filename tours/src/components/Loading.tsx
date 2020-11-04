import React from 'react'

import loading from '../assets/loading.gif'

const Loading = () => {
    return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
        <img src={loading} alt="Loading"/>
    </div>
    )
}

export default Loading