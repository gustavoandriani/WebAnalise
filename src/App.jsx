import './App.css'
import { useState } from 'react';
import { Box, Tab } from '@mui/material';
import { TabList, TabPanel, TabContext } from '@mui/lab';
import CalcArranjo from './components/CalcArranjo';
import CalcCombinacao from './components/CalcCombinacao';
import CalcAnagramas from './components/CalcAnagramas';
import PrincipioMultiplicativo from './components/PrincipioMultiplicativo';

function App() {
  const [ value, setValue ] = useState('1');
  
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <Box sx={{ width: '100%', height: '100dvh', typography: 'body1', display: 'flex', flexDirection: 'column'}}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Arranjo" value="1" />
            <Tab label="Combinação" value="2" />
            <Tab label="Anagrama" value="3" />
            <Tab label="Principio Multiplicativo" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <CalcArranjo/>
        </TabPanel>
        <TabPanel value="2">
          <CalcCombinacao/>
        </TabPanel>
        <TabPanel value="3">
          <CalcAnagramas/>
        </TabPanel>
        <TabPanel value="4">
          <PrincipioMultiplicativo/>
        </TabPanel>
      </TabContext>
    </Box>
  )
}

export default App
