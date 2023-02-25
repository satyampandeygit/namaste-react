import React from "react";

class Profile extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        console.log("constructor");
    }

    componentDidMount(){
        // API Calls here

        console.log("componentDidMount");
    }

    componentDidUpdate(){

    }

    componentWillUnmount(){
        
    }

    render(){
        console.log("render");
        return (
            <div>
                <h1>Profile Class Component</h1>
                <h2>Name: {this.props.name}</h2>
                <h3>Count: {this.state.count}</h3>
                <button onClick={
                    () => this.setState({
                        count: this.state.count + 1
                    })
                }>Increase</button>
            </div>
        )
    }
}

export default Profile;