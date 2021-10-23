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
import FeatureContainer from "./containers/feature";
import FooterContainer from "./containers/footer";
import FaqContainer from "./containers/faqs"
const App = () => {
    return (
        <div className="App">
            <FeatureContainer/>
            <FaqContainer/>
            <FooterContainer/>
        </div>
    );
};

export default App;


