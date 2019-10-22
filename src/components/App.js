import React from 'react';
//import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import ContestPreview from './ContestPreview';
//import data from '../data/testData';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { test: 999}
  // }
  state = {
    pageHeader: 'this is a page header',
    pageFooter: 'this is a page footer',
    contests: this.props.initialContests
  };
  componentDidMount() {
/*    axios.get('/api/contests')
      .then(resp => {
        this.setState({
          contests: resp.data.contests
        });
      })
      .catch(console.error);*/
    
    // this.setState({
    //   contests: data.contests
    // });
    // ajax...
  };
  componentWillUnmount() {};
  render() {
    return(
        <div className="App">
          <Header message={this.state.pageHeader}/>
          
          <div className="content">
            {//this.props.contests.map(contest =>
              this.state.contests.map(contest =>
              <ContestPreview key={contest.id} {...contest} />
            )}
          </div>

          <Footer message={this.state.pageFooter} />
        </div>
    );
  }
};

App.defaultProps = {
  headerMessage: 'I am default message, edit me'
};

export default App;