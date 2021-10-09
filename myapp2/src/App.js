// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Introduction from './components/Introduction';
import Qualification from './components/Qualification'
// import Hello from './components/Hello'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      name:"Anshul",
      address:"RV College of Engineering",
      qualifications:[
        {
          SNo:1,
          College:"RVCE",
          Degree: "MCA",
          Marks:"8"
        },

        {
          SNo:2,
          College:"JECRC",
          Degree: "BCA",
          Marks:"8.48"
        }
      ]
    }
  }
  render(){
    return (
      <>
        {/* <div>Hello!!</div>
        <Hello/> */}

        <Introduction 
        name={this.state.name}
        address={this.state.address}/>

        <Qualification
        qualifications={this.state.qualifications}/>


      </>
    )
  }
}

export default App;
