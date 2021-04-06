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
                        <Grid className='col-2 divHeader' item>
                            From
                        </Grid>
                        <Grid className='col-4 divHeader' item>
                            To
                        </Grid>
                        <Grid className='col-5 divHeader' item>
                            Subject
                        </Grid>
                        <Grid className='col-1 divHeader' item>
                            Date
                        </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default GridHeader
