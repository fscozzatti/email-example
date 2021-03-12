import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import moment from 'moment'

const GridDetail = ({ from, tos, subject, date}) => {
    const dateFormat = moment(date).format('L')
    return (
        <Grid container           
        direction="row"
        justify="left"
        alignItems="center">
                <Grid item>
                    <div className='divFromDetail'>{from}</div>
                </Grid>
                <Grid item>
                    <div className='divToDetail'>To</div>
                </Grid>
                <Grid item>
                    <div className='divSubjectDetail'>{subject}</div>
                </Grid>
                <Grid item>
                    <div className='divDateDetail'>{dateFormat}</div>
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
    files: PropTypes.arrayOf(
        PropTypes.shape({
            file_id: PropTypes.string.isRequired,
            file_name: PropTypes.string.isRequired,
        }),
    ),
    date: PropTypes.string.isRequired,
}

export default GridDetail
