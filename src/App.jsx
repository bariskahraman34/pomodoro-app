import SettingsIcon from '@mui/icons-material/Settings';
import { Box, Container, Stack, Typography } from '@mui/material';
import { CustomTabs } from './components/tabs';
import { Timer } from './components/timer';

function App() {
  return (
    <Container maxWidth="lg">
      <Box sx={{flexGrow: 1}}>
        <Stack>
          <Typography variant='h6' component="h2">pomodoro</Typography>
          <CustomTabs />
          <Timer />
          <SettingsIcon />
        </Stack>
      </Box>
    </Container>
  )
}

export default App
