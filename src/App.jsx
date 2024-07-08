import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Container, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { CustomModal } from './components/customModal';
import { CustomTabs } from './components/tabs';
import { Timer } from './components/timer';
import {IconButton} from '@mui/material';
import { useGlobalStateContext } from './store/globalState/context';

function App() {
  const [open, setOpen] = useState(false);
  const {state} = useGlobalStateContext();

  return (
    <Container>
      <Box>
        <Stack
          sx={{
            display: 'flex',
            justifyContent: "space-around",
            alignItems: 'center',
            gap:"45px"
          }} 
          gap="1rem"
        >
          <Typography 
            variant='h4' 
            component="h2" 
            sx={{
              fontWeight:"700",
              lineHeight:"39.7px",
              color:"rgba(215, 224, 255, 1)"
            }} 
          >
            pomodoro
          </Typography>
          <CustomTabs />
          <Timer />
          <IconButton sx={{color:`${state.colorMode}`}} onClick={() => setOpen(!open)}>
            <SettingsIcon/>
          </IconButton>
        </Stack>

          <CustomModal open={open} setOpen={setOpen} />
      </Box>
    </Container>
  )
}

export default App
