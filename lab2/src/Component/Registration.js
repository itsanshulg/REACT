import React, { Component } from "react";
// import "./Registration.css"
class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            address: "",
            age: "",
            results: ""
        }
    }

    handleOnChange = (event) => {
        this.setState(() => ({
            name: event.target.value
        }))
    }

    handleOnChangeAddress = (event) => {
        this.setState(() => ({
            address: event.target.value
        }))
    }
    handleOnChangeAge = (event) => {
        this.setState(() => ({
            age: event.target.value
        }))
    }
    handleButton = (event) => {
        const result = {
            name: this.state.name,
            address: this.state.address,
            age: this.state.age
        }
        this.setState(() => ({
            results: result
        }))
    }

    render() {
        return (
            <React.Fragment>
                <div className="Register">
                    <div>
                        <input type="text" value={this.state.name} placeholder="Enter your name" onChange={this.handleOnChange} />
                    </div>
                    <div>
                        <input type="text" value={this.state.address} placeholder="Enter your adddress" onChange={this.handleOnChangeAddress} />
                    </div>
                    <div>
                        <input type="text" value={this.state.age} placeholder="Enter your age" onChange={this.handleOnChangeAge} />
                    </div>
                    <div>
                        <button onClick={this.handleButton}>Click</button>
                    </div>
                    <div>
                        {/* {
Object.keys(this.state.results).length
?JSON.stringify(this.state.results)
:null
} */}
                        Name={this.state.results.name}
                    </div>
                    <div>
                        Address={this.state.results.address}
                    </div>
                    <div>
                        Age={this.state.results.age}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
export default Registration;
