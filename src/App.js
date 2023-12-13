import './App.css';
import Angular from './Pages/Angular/AngularForm';
import JavaScript from './Pages/Javascript/JavascriptForm';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Angular />
      <JavaScript />
    </ChakraProvider>
  );
}

export default App;