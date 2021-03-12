import React from 'react'
import Grid from '@material-ui/core/Grid'

const GridHeader = () => {
    return (
        <Grid container           
        direction="row"
        justify="left"
        alignItems="center">
                <Grid item>
                    <div className='divFrom'>From</div>
                </Grid>
                <Grid item>
                    <div className='divTo'>To</div>
                </Grid>
                <Grid item>
                    <div className='divSubject'>Subject</div>
                </Grid>
                <Grid item>
                    <div className='divDate'>Date</div>
                </Grid>
        </Grid>
    )
}

export default GridHeader
