import {BrowserRouter as Router, Route, Switch,} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import store from "./redux/store";
import {Provider} from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div>
                    <Switch>
                        <Route path="/home">
                            <Home></Home>
                        </Route>
                        <Route path="/">
                            <Login></Login>
                        </Route>

                    </Switch></div>

            </Router>

        </Provider>
    );
}

export default App;
