import React from "react";
import Header from "./components/common/header/Header.jsx";
import {BrowserRouter as Router, Switch} from 'react-router-dom'
function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          {/* <Route path="/" component={HomePages} /> */}
        </Switch>
  
    </Router>
    </div>
  );
}

export default App;
