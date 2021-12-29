import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Syllabus from "./components/Syllabus/Syllabus";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Syllabus />
          </Route>
          <Route path="*">
            <Syllabus />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
