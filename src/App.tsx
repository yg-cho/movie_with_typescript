// import React from 'react';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <h1>abcde</h1>
//     </div>
//   );
// }
//
// export default App;


// RSC
import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
// import { ROUTES } from "./constants/routes";
import {Signin, Browse, Home, Signup} from "./pages";

const App = () => {
    return (
        <Fragment>
        <Router>
            <Switch>
                {/*{Object.keys(ROUTES).map((key) => (*/}
                {/*    <Route exact path={ROUTES[key].path} key={key}>*/}
                {/*        {ROUTES[key].page}*/}
                {/*    </Route>*/}
                {/*))}*/}
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/signin"} component={Signin} />
                <Route exact path={"/signup"} component={Signup} />
                <Route exact path={"/browse"} component={Browse} />
                <Redirect exact from={"*"} to={"/"} />
            </Switch>
        </Router>
            {/*<HeaderContainer/>*/}
            {/*<BannerContainer/>*/}
            {/*<FeatureContainer/>*/}
            {/*<FaqContainer/>*/}
            {/*<FooterContainer/>*/}
        </Fragment>
    );
};

export default App;


