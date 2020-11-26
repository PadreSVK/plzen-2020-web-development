import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import logo from './logo.svg';
import './App.css';


function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Input(props) {
    return <input value={props.value} />;
}


const routes = [
    { route: "/about", name: "About", component: About },
    { route: "/home", name: "Home", component: Home },
    { route: "/test", name: "Test", component: () => <h2>test</h2> },
    { route: "/test2", name: "Test2", component: () => <h2>test 2 </h2> },
]

function RouterView() {
    return (
        <Switch>
            {
                routes.map(r => <Route path={r.route}>{r.component}</Route>)
            }
        </Switch>
    )
}



function App() {
    return (
        <Router>
            <Input value="asdasdsa" />
            <div className="App">
                <nav>
                    <ul>
                        {
                            routes.map(r => <li> <Link to={r.route}>{r.name}</Link></li>)
                        }
                    </ul>
                </nav>


                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
        </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
        </a>
                    <RouterView />
                </header>
            </div>
        </Router>

    );
}

export default App;