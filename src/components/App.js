import React from "react";
import { BrowserRouter, Route } from "react-router-dom"

import MainScreen from "./MainScreen";
import PostScreen from "./PostScreen";

const App = () => {
    return(
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={MainScreen} />
                    <Route path="/post" exact component={PostScreen} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;