import React, {useState, useEffect} from 'react';
import '../style.css';

function Clock(){
    const [date,setDate] = useState(new Date());
    const [intervalId,setIntervalId] = useState(null);
    useEffect(()=>{
        setIntervalId(setInterval(()=>setDate(new Date()), 1000));
    },[]);
     
    const stopTime = ()=>{
        clearInterval(intervalId);
    }

    const Resume = ()=>{
        setIntervalId(setInterval(()=>setDate(new Date()), 1000));
    }
    
    return(
        <div className="clock">
            <div className="timer">
                {date.toLocaleTimeString()}
            </div>
            <button onClick={stopTime}>stop</button>
            <button onClick={Resume}>Resume</button>
        </div>
    )
    

}

export default Clock;

// import React, {Component} from 'react';
// import '../style.css';

// class Clock extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             date:new Date()
//         };
//     }

//     componentDidMount(){
//         this.timer = setInterval(()=>this.setState({date: new Date()}), 1000);
//     }

//     componentWillUnmount(){
//         clearInterval(this.timer);
//     }

//     render(){
//         return(
//             <div className="clock">
//                 <div className="timer">
//                     {this.state.date.toLocaleTimeString()}
//                 </div>
//             </div>
//         )
//     }

// }

// export default Clock;