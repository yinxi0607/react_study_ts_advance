import React from 'react';
import './App.css';
import RouterComp from './router/index'
import Tab from './components/tab'

function App() {
  return (
    <div className="App">
      {/*导航区域*/}
        <Tab/>
      {/*路由区域*/}
      <RouterComp/>
    </div>
  );
}

export default App;
