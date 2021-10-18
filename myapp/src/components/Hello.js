import React from 'react';
import Greeting from './Greeting'

class Hello extends React.Component {
    render() {
        return (
            <>
                <div>From Component</div>
                <Greeting name="Anshul" />
            </>
        )
    }
}

export default Hello