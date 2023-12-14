import './App.css';
import Angular from './Pages/Angular/AngularForm';
import JavaScript from './Pages/Javascript/JavascriptForm';
import { ChakraProvider } from '@chakra-ui/react';



function App() {
  return (
<<<<<<< HEAD
    <div className="App">
    
    </div>
=======
    <ChakraProvider>
      <Angular />
      <JavaScript />
    </ChakraProvider>
>>>>>>> cbbc63ec9860d203f1ce11037ebcbf4fad7d7a10
  );
}

export default App;