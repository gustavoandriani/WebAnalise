import React, { useState } from "react"
import { Box, Tab } from '@mui/material';
import { TabList, TabPanel, TabContext } from '@mui/lab';
import CalcCombinacao from '../CalcCombinacao';
import CalcAnagramas from '../CalcAnagramas';
import PrincipioMultiplicativo from '../PrincipioMultiplicativo';
import PermutationCalculator from '../PermutationCalculator';
import CalcArranjo from '../CalcArranjo';

export default function TabsMenu() {
    const [ value, setValue ] = useState('1');
      
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return(
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
                <CalcArranjo />
            </TabPanel>
            <TabPanel value="2">
                <CalcCombinacao/>
            </TabPanel>
            <TabPanel value="3">
                <CalcAnagramas/>
            </TabPanel>
            <TabPanel value="4">
                <PrincipioMultiplicativo/>
                <PermutationCalculator/>
            </TabPanel>
        </TabContext>
    )
}