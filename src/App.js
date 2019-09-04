import React from 'react';
import LeftCol from './containers/LeftCol'
import RightCol from './containers/RightCol' 
import RootStore from './stores/RootStore'
import { Provider } from 'mobx-react'
window.FontAwesomeConfig = { autoReplaceSvg: 'nest' }
function App() {
  return (
    <Provider rootStore={new RootStore()}>
      <div className="App">
        <div className="columns">
          <div className="column is-one-fifth ">
            <LeftCol />
          </div>
          <div className="column has-text-centered">
            <RightCol />
          </div> 
        </div>  
      </div>
    </Provider>
  );
}

export default App;
