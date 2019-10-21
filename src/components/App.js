import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ContestPreview from './ContestPreview';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { test: 999}
  // }
  state = {
    pageHeader: 'this is a page header',
    pageFooter: 'this is a page footer'
  };
  componentDidMount() {};
  componentWillUnmount() {};
  render() {
    return(
        <div className="App">
          <Header message={this.state.pageHeader}/>
          
          <div className="content">
            {this.props.contests.map(contest =>
              <ContestPreview {...contest} />
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