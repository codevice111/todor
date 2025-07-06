import { Grid } from "@mui/material";

const Reminder = () => {

    return(
        <>
        <Grid container spacing={3} sx={{
            justifyContent: 'center',
            backgroundColor: 'purple',
            height: '100vh',
        }}>
            <Grid size="auto">
                <h1>Reminder</h1>
                <p>Welcome to the reminder!</p>
            </Grid>
        </Grid>
    </>
    )
}

export default Reminder;