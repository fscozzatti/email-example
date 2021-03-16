import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import DateFormat from './../DateFormat'
import ImageAttach from './../ImageAttach'
import Tos from './../Tos'

const GridDetail = ({ from, tos, subject, date, files}) => {


    return (
        <Grid container           
        direction="row"
        justify="flex-start"
        alignItems="center">
                <Grid item>
                    <div className='divFromDetail'>{from}</div>
                </Grid>
                <Grid item>
                    <div className='divToDetail'>{tos[0].to}</div>             
                </Grid> 
                <Grid item>
                    <Tos tos={tos}></Tos>
                </Grid>
                <Grid item>
                    <div className='divSubjectDetail'>{subject}</div>
                </Grid>
                <Grid item>
                    <ImageAttach files={files}></ImageAttach>
                </Grid>
                <Grid item>
                    <DateFormat date={date}/>
                </Grid>
        </Grid>
    )
}

GridDetail.propTypes = {
    from: PropTypes.string.isRequired,
    tos: PropTypes.arrayOf(
        PropTypes.shape({
            to: PropTypes.string.isRequired,
        }).isRequired,
    ),
    subject: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
}

export default GridDetail
