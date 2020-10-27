import React, { Component } from 'react'
import './App.css'
import CombineDesboard from './SuperAdmin/Components/Dashboard/CombineDashboardComponents/combineDashboard';
class App extends Component {
  render() {
    return (
      <React.Fragment> 
        <div className="app__container">
          <CombineDesboard/>
        </div>
      </React.Fragment>
    )
  }
}
export default App;