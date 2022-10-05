import {  Grid, Typography } from '@mui/material'
import TabAcount from './tabAccount'

const Profile = () => {

    return (
        <Grid padding={2} >
            <Grid padding={2} sx={{ backgroundColor: "#ddd", mb: 5, borderRadius: "10px" }}>
                <Typography variant='h6'>Profile</Typography>
            </Grid>
            <Grid>
                <TabAcount />
            </Grid>
        </Grid>
    )
}
export default Profile