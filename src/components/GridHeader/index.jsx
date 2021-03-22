import React from 'react'
import Grid from '@material-ui/core/Grid'

const GridHeader = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Grid container           
                direction="row"
                justify="center"
                alignItems="center">
                        <Grid className='col-2 divFrom' item>
                            From
                        </Grid>
                        <Grid className='col-4 divTo' item>
                            To
                        </Grid>
                        <Grid className='col-5 divSubject' item>
                            Subject
                        </Grid>
                        <Grid className='col-1 divDate' item>
                            Date
                        </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default GridHeader
