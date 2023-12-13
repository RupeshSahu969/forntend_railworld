import './App.css';
import Angular from './Pages/Angular/AngularForm';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Angular />
    </ChakraProvider>
  );
}

export default App;