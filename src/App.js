import './App.css';
import Angular from './Pages/Angular/AngularForm';
import JavaScript from './Pages/Javascript/JavascriptForm';

import MainRoutes from './Components/MainRoutes';



function App() {
  return (

    <ChakraProvider>
    {/*<Angular/>*/}
      {/* <JavaScript /> */}
    </ChakraProvider>


    <div className="App">
     <MainRoutes/>
    </div>
  );
}

export default App;