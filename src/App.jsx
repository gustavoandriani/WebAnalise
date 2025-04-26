import './App.css'
import { useState } from 'react';
import { Box } from '@mui/material';

import BasicMenu from './components/BasicMenu';
import TabsMenu from './components/TabsMenu';

function App() {
  
  return (
    <div style={{ display: 'flex', width: '100%', flexDirection: 'column', alignItems: 'center' }}>
      <BasicMenu
        title1={'Anagramas'}
        title2={'Arranjo'}
        title3={'Combinação'}
        title4={'Permutação'}
        title5={'Princípio Multiplicativo'}
      />
      <Box sx={{ width: '100%', height: '95dvh', typography: 'body1', display: 'flex', flexDirection: 'column'}}>
        
      </Box>
    </div>
  )
}

export default App
