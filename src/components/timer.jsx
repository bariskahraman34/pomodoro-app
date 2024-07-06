import { Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';

export const Timer = () => {
    const [remainingTime, setRemainingTime] = useState("17:59");

    return (
        <Stack
            sx={{
                width: "410px",
                height: "410px",
                borderRadius: '50%',
                boxShadow: "50px 50px 100px 0px #121530",
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Stack
                sx={{
                    width: "366px",
                    height: "366px",
                    borderRadius: '50%',
                    backgroundColor: '#161932',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    // boxShadow: "-50px -50px 100px 0px #272C5A",
                }}
            >
                <Typography variant='h1' component="h2">{remainingTime}</Typography>
                <Button
                    variant="text" 
                    sx={{color:'white', fontSize: '18px'}}
                    onClick={() => {}}
                >PAUSE</Button>
            </Stack>
        </Stack>
    )
}