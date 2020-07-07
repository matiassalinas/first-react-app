import React from 'react';
import PropTypes from 'prop-types'
// Working with functional components (not classes)

const FirstAppComponent = ( { firstName="default_name", lastName } ) => {

    return (
        <>
            <h1>Hello World, I'm { firstName } { lastName }</h1>
            <p>This is a Paragraph</p>
        </>
    );
}

FirstAppComponent.propTypes = {
    firstName   : PropTypes.string,
    lastName    : PropTypes.string.isRequired 
}

FirstAppComponent.defaultProps = {
    lastName: 'default_last_name',
}

export default FirstAppComponent;