import React, { useState } from 'react';

const IP = ( {ip} ) => {
    const [toggle, setToggle] = useState(false);
    
    const handleClick = () => setToggle(prev => !prev);

    return (
        <div className="jumbotron">
            <h1 className="display-3">Do you know your current IP?</h1>
            <hr className="my-4" />
            <p>Click on the button below and display your current IP.</p>
            <div className="lead">
                {!toggle && <a onClick={handleClick} className="btn btn-outline-primary" role="button">Reveal your IP!</a>}
                {toggle && (
                <>
                    <a onClick={handleClick} className="btn btn-outline-primary" role="button">Hide your IP!</a>
                    <p style={{ textAlign:'center' }}>{ip}</p>
                </>
                )}
            </div>
        </div>
    )
}

export default IP;
