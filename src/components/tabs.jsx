import { Tab, Tabs } from '@mui/material';
import { useGlobalStateContext } from '../store/globalState/context';
import { useEffect, useState } from 'react';

export const CustomTabs = () => {
    const {state,dispatch} = useGlobalStateContext();
    const [currentColorMode, setCurrentColorMode] = useState(state.colorMode);

    const handleChange = (e , newValue) => dispatch({type:"changeCurrentTime", payload: newValue});

    useEffect(() => setCurrentColorMode(state.colorMode),[state.colorMode,state.currentTime])

    return (
        <Tabs indicatorColor='none' textColor='primary' value={state.currentTime}
        sx={{background:"rgba(22, 25, 50, 1)",borderRadius:"30px",padding:"8px"}} 
        onChange={handleChange}>
            {["pomodoro", "short break", "long break"].map(tab => {
                return (
                    <Tab 
                    key={tab}
                    sx={{
                        textTransform: "lowercase",
                        color: "rgba(215, 224, 255, .5)",
                        transition:"color .3s ease",
                        '&.Mui-selected': {
                            color: "#000",
                            backgroundColor: currentColorMode,
                            borderRadius:"30px",
                        },
                        '&:hover:not(.Mui-selected)':{
                            color:"#D7E0FF"
                        }
                    }}
                    label={tab}
                    />
                )
            })}
        </Tabs>
    )
}