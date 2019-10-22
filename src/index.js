import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
//import data from './data/testData';
import App from './components/App';

//const color = Math.random() > 0.5 ? 'green' : 'red';
//const align = Math.random() > 0.5 ? 'left' : 'center';

axios.get('/api/contests')
  .then(resp => {
    ReactDOM.render(
      <App initialContests={resp.data.contests} />,
      document.getElementById('wrapper'));
  })
  .catch(console.error);

//ReactDOM.render(
  //<App contests={data.contests} />,
  //<App initialContests={[]} />,
  //document.getElementById('wrapper')
  //React.createElement('h2', null, 'Hello, I am here !'),
  // <h2 style={{color: color, textAlign: align}}>
  //   Hello, bro ! I am React JSX !<br/>-- {Math.random()}
  // </h2>,
//);

// setTimeout(() => {
//   ReactDOM.render(
//     <h2>test header</h2>,
//     document.getElementById('wrapper')
//   )
// }, 4000);

// class Hello extends React.Component {  
//   render() {  
//       return <h1>Hello world!</h1>;  
//   }  
// }

// ReactDOM.render(  
//   <Hello />,   
//   document.getElementById("root")  
// );