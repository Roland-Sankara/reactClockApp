import React,{Component} from 'react';
import ReactDOM from 'react-dom';

// import Path from 'path';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading:true,
            data:null
        }
    }
    useApi() {
        // const url = "https://api.randomuser.me/";
        // console.log(url)
        fetch("data.json")
            .then(res=>res.json())
            .then(data=>console.log(data));
    }

    componentDidMount(){
        this.useApi();
    }

    render(){
        return(
            <div>
                <h1>Hello World</h1>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));