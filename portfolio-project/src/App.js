import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { AlertProvider } from './context/alertContext';
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header/>
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
