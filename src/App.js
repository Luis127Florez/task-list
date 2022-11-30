import './App.css';
import Enrutador from './Enrutador';
import { ChakraProvider,Box } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider>
    <div className="App">
    <Box border='1px' w="100%" borderColor='#000'>
    <Enrutador/>
    </Box>
    </div>
    </ChakraProvider>
  );
}

export default App;
