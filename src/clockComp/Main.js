import React from 'react';
import Title from './Title';
import Clock from './Clock';
import '../style.css';

function Main(){
        return(
            <div className="clock-section">
                <Clock clock='ClockData'/>
                <Title title="Hello, there!"/>
            </div>
        )
}

export default Main;

// import React, {Component} from 'react';
// import Title from './Title';
// import Clock from './Clock';
// import '../style.css';

// class Main extends Component{
//     render(){
//         return(
//             <div>
//                 <Title title="Digital Clock"/>
//                 <Clock clock='ClockData'/>
//             </div>
//         )
//     }
// }

// export default Main;