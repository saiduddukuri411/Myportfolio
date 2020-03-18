import React, { Component } from 'react';
import Layout from './components/layout/layout'
import Projects from './containers/projects/projects'

class App extends Component {
  render() {
    return (
      <div>
           <Layout>
             <Projects />
            </Layout>
      </div>
    );
  }
}

export default App;
