import './App.css';
import JavaScript from './Pages/Javascript/JavascriptForm';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <JavaScript />
    </ChakraProvider>
  );
}

export default App;
