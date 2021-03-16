import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import DateFormat from './../DateFormat'
import iconAttach from './../../images/icon_clip.svg';

const GridDetail = ({ from, tos, subject, date, files}) => {
    var haveFiles = false
    if ( files ){haveFiles = true}

    return (
        <Grid container           
        direction="row"
        justify="flex-start"
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
                    <div className='divAttachDetail'>{haveFiles && <img className='imgContainerAttach' src={iconAttach} alt="Buscar" height="15px" width="15px" />}</div>
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
