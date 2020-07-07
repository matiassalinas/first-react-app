// 'rafcp' + tab (visual studio code)
import React, { useState} from 'react'

import PropTypes from 'prop-types'

const CounterApp = ( { value = 10 } ) => {

    const [ counter, setCounter ] = useState( value );
    // Handle counter-button
    const handleCounterButtonAdd = (e) => {
        //setCounter( (c) => c + 1 )
        setCounter(counter + 1);
    }

    const handleCounterButtonSubtract = () => setCounter( counter - 1);
    const handleCounterButtonReset = () => setCounter( value );

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button className="counter-button" onClick={ handleCounterButtonAdd }>+1</button>
            <button className="counter-button" onClick={ handleCounterButtonReset }>Reset</button>
            <button className="counter-button" onClick={ handleCounterButtonSubtract }>-1</button>
        </>
    );
}

CounterApp.propTypes = {
    value : PropTypes.number
}

export default CounterApp;
