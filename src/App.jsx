import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Container, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { CustomModal } from './components/customModal';
import { CustomTabs } from './components/tabs';
import { Timer } from './components/timer';

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Container maxWidth="lg" sx={{height:"100%"}}>
      <Box sx={{flexGrow: 1, height:"100%"}} >
        <Stack
          sx={{
            height:"100%",
            display: 'flex',
            justifyContent: "space-around",
            alignItems: 'center'
          }} 
          gap="1rem"
        >
          <Typography variant='h6' component="h2">pomodoro</Typography>
          <CustomTabs />
          <Timer />
          <SettingsIcon onClick={() => setOpen(!open)}/>
        </Stack>

          <CustomModal open={open} setOpen={setOpen} />
      </Box>
    </Container>
  )
}

export default App
