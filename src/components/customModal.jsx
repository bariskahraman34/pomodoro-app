import {
    Button,
    Box,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Typography,
    Stack,
    TextField,
    MenuItem
} from '@mui/material';
import { useGlobalStateContext } from '../store/globalState/context';

export const CustomModal = ({open, setOpen}) => {
    const handleClose = () => setOpen(false);
    const {state,dispatch} = useGlobalStateContext();

    return (
        <Dialog
            fullWidth={true}
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
        >
            <DialogTitle id="responsive-dialog-title">
                Settings
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Stack display="flex" flexDirection="column" gap="24px">
                        <Stack gap={3}>
                            <Typography variant='body1' sx={{letterSpacing:"4px", color:"#000"}}>TIME (MINUTES)</Typography>
                            <Stack gap={3} flexDirection="row">
                                <TextField
                                label="pomodoro"
                                defaultValue={state.time.pomodoro}
                                onChange={(e) => {
                                    dispatch({type: "changeTime" , payload: {key:"pomodoro", value:e.target.value}})
                                }}
                                >
                                </TextField>
                                <TextField
                                label="short break"
                                defaultValue={state.time.shortBreak}
                                onChange={(e) => {
                                    dispatch({type: "changeTime" , payload: {key:"shortBreak", value:e.target.value}})
                                }}
                                >
                                </TextField>
                                <TextField
                                label="long break"
                                defaultValue={state.time.longBreak}
                                onChange={(e) => {
                                    dispatch({type: "changeTime" , payload: {key:"longBreak", value:e.target.value}})
                                }}
                                >
                                </TextField>
                            </Stack>

                        </Stack>
                        <hr style={{marginBlock:"20px"}} />
                        <Stack flexDirection="row" justifyContent="space-between">
                            <Typography variant='body1' sx={{letterSpacing:"4px", color:"#000"}}>COLOR</Typography>
                            <TextField
                            className='selectBox'
                            select
                            label="Color"
                            helperText="Please select color"
                            defaultValue={state.colorMode}
                            onChange={(e) => {
                                dispatch({type: "changeColorMode" , payload: e.target.value})
                            }}
                            >
                                <MenuItem value="#1976d2" sx={{display:"flex",gap:"5px",alignItems:"center"}}>
                                    <Box sx={{width:"15px", height:"15px",backgroundColor:'#1976d2',borderRadius:"50%"}}>
                                    </Box>
                                    <Typography>Primary</Typography>
                                </MenuItem>
                                <MenuItem value="#9c27b0" sx={{display:"flex",gap:"5px",alignItems:"center"}}>
                                    <Box  sx={{width:"20px", height:"20px",backgroundColor:'#9c27b0',borderRadius:"50%"}}>
                                    </Box>
                                    <Typography>Secondary</Typography>
                                </MenuItem>
                                <MenuItem value="#d32f2f" sx={{display:"flex",gap:"5px",alignItems:"center"}}>
                                    <Box sx={{width:"20px", height:"20px",backgroundColor:'#d32f2f',borderRadius:"50%"}}>
                                    </Box>
                                    <Typography>Default</Typography>
                                </MenuItem>
                            </TextField>
                        </Stack>
                    </Stack>
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{justifyContent:"center",position:"relative"}}>
            <Button onClick={handleClose} autoFocus sx={{
                color:"white",
                background:state.colorMode,
                padding:"10px 40px",
                borderRadius:"30px",
                transition:"opacity .2s ease",
                '&:hover':{
                    background:state.colorMode,
                    opacity:".5"
                }
            }}>
                Apply
            </Button>
            </DialogActions>
        </Dialog>
    )
}