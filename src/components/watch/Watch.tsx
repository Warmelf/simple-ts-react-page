import { Component } from "react";

class Watch extends Component {
    state = {
        date: new Date().toLocaleTimeString(),
        intervalIdx: 1
    } 

    componentDidMount() {
        const intervalIdx = setInterval(() => this.setState ({
            date: new Date().toLocaleTimeString()
        }), 1000);

        this.setState({intervalIdx: intervalIdx});
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalIdx);
    }

    render() {
        return (
        <div>
            {this.state.date}
        </div>
        );
      }
    
}

export default Watch;