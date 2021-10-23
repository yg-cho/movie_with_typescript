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
import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import FeatureContainer from "./containers/feature";
import FooterContainer from "./containers/footer";
import FaqContainer from "./containers/faqs"
import BannerContainer from "./containers/banner";
import HeaderContainer from "./containers/header"
import { ROUTES } from "./constants/routes";


const App = () => {
    return (
        <div className="App">
        <Router>
            {ROUTES.map(routing => (
                <Route exact path={routing.path} key={routing.path}>
                    {routing.page}
                </Route>
            ))}
        </Router>
            {/*<HeaderContainer/>*/}
            {/*<BannerContainer/>*/}
            {/*<FeatureContainer/>*/}
            {/*<FaqContainer/>*/}
            {/*<FooterContainer/>*/}
        </div>
    );
};

export default App;


