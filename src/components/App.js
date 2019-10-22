import React from 'react';
//import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
//import ContestPreview from './ContestPreview';
//import data from '../data/testData';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

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
  fetchContest = (contestId) => {
    pushState(
      { currentContestId: contestId },
      `/contest/${contestId}`
    );
    api.fetchContest(contestId).then(contest => {
      this.setState({
        pageHeader: contest.contestName,
        currentContestId: contest.id,
        contests: {
          ...this.state.contests,
          [contest.id]: contest,
        }
      });
    });
  };
  currentContest() {
    return this.state.contests[this.state.currentContestId];
  }
  currentContent() {
    if (this.state.currentContestId) {
      return <Contest
        {...this.currentContest()} />;
    } else {
        return <ContestList
        onContestClick={this.fetchContest}
        contests={this.state.contests} />;
    }
      
  }
  render() {
    return(
        <div className="App">
          <Header message={this.state.pageHeader} />
          {this.currentContent()}
          <Footer message={this.state.pageFooter} />
        </div>
    );
  }
};

/*
<ContestList onContestClick={this.fetchContest} contests={this.state.contests} />
<div className="content">
  {//this.props.contests.map(contest =>
    this.state.contests.map(contest =>
    <ContestPreview key={contest.id} {...contest} />
  )}
</div>*/

App.defaultProps = {
  headerMessage: 'I am default message, edit me'
};

export default App;