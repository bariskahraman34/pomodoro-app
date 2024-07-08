import { Button, Stack, Typography } from '@mui/material';
import { useGlobalStateContext } from '../store/globalState/context';
import { useEffect, useState } from 'react';

export const Timer = () => {
    const {state,dispatch} = useGlobalStateContext()
    const times = ["pomodoro","shortBreak", "longBreak"];
    const currentTimeKey = times[state.currentTime];
    const currentTimeValue = state.time[currentTimeKey];
    const [remainingTime, setRemainingTime] = useState(state.time[currentTimeKey])
    const time = remainingTime.split(":");
    const remainingTimeSplitted = calculateTime(time[0],time[1])
    const currentTimeValueSplit = currentTimeValue.split(':')
    const totalDuration = calculateTime(currentTimeValueSplit[0], currentTimeValueSplit[1])

    function calculateTime(time1,time2){
        return (+time1 * 60) + (+time2)
    }

    useEffect(() => {
        setRemainingTime(state.time[currentTimeKey])
    },[currentTimeKey, state.currentTime, state.time])

    useEffect(() => {
        if(state.isStarted){
            let timer = setInterval(() => {
                setRemainingTime(time => {
                    let _time = time.split(':'),
                        minutes = +_time[0],
                        seconds = +_time[1];

                    if(seconds > 0){
                        seconds --
                    }else{
                        seconds = 59;
                        minutes --;
                    }

                    
                    _time = `${minutes < 10 ? "0" + minutes.toString() : minutes.toString()}:${seconds < 10 ? "0" + seconds.toString() : seconds.toString()}`
                    return _time;
                })
            },1000)

            let _time = remainingTime.split(':'),
                minutes = +_time[0],
                seconds = +_time[1];

            if(minutes === 0 && seconds === 0){
                dispatch({type:"changeIsFinished", payload: true})
                clearInterval(timer)
            }
            
            return () => clearInterval(timer)
        }
    },[remainingTime, state.isStarted, state.currentTime])

    useEffect(() => {
        state.isFinished ?? dispatch({type:"changeCountDown"})
    },[state.isFinished])


    const radius = 180;
    const circumference = 2 * Math.PI * radius;
    const progress = (remainingTimeSplitted / totalDuration) * circumference;

    return (
        <Stack
        sx={{
          width: "460px",
          height: "460px",
          padding:"30px",
          borderRadius: '50%',
          boxShadow: "50px 50px 100px 0px #121530",
          background: "linear-gradient(315deg, #2E325A 0%, #0E112A 100%)",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="410" height="410" viewBox="0 0 410 410" style={{ transform: 'rotate(-90deg)' }}>
          <circle
            cx="205"
            cy="205"
            r={radius}
            stroke="#272C5A"
            strokeWidth="40"
            fill="none"
          />
          <circle
            cx="205"
            cy="205"
            r={radius}
            stroke={`${state.colorMode}`}
            strokeWidth="40"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            style={{ transition: 'stroke-dashoffset 1s linear' }}
          />
        </svg>
        <Stack
          sx={{
            position: 'absolute',
            width: "366px",
            height: "366px",
            borderRadius: '50%',
            backgroundColor: 'rgba(22, 25, 50, 1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
            <Typography 
            variant='h1' 
            component="h2" 
            color="white" 
            marginBottom="20px" 
            sx={{
               lineHeight:"124.02px",
               fontWeight:"700",
               fontSize:"100px",
               color:"rgba(215, 224, 255, 1)"
            }}
            >
                {remainingTime}
            </Typography>
            {
            state.isFinished ? 
                <Button
                variant="text"
                sx={{ 
                    color: 'white', 
                    fontSize: '16px',
                    fontWeight: "700",
                    lineHeight: "19.84px",
                    letterSpacing: "15px",
                    transition:"color .3s ease",
                    '&:hover':{
                        color:state.colorMode
                    }
                }}
                onClick={() => {
                    dispatch({type:"changeCountDown"})
                    dispatch({type:"changeIsFinished", payload: false})
                    setRemainingTime(state.time[currentTimeKey])
                }}
                >
                    RESTART
                </Button>
            :
                <Button
                variant="text"
                sx={{ 
                    color: 'white', 
                    fontSize: '16px',
                    fontWeight: "700",
                    lineHeight: "19.84px",
                    letterSpacing: "15px",
                    transition:"color .3s ease",
                    '&:hover':{
                        color:state.colorMode
                    }
                }}
                onClick={() => dispatch({type:"changeCountDown"})}
                >
                    {`${state.isStarted ? "PAUSE" : "START"}`}
                </Button>
            }
        </Stack>
      </Stack>
    )
}