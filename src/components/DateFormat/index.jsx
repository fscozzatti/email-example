import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

const DateFormat = ({date}) => {
    const dateFormat = moment(date).format('ll')

    return (
        <div className='divDateDetail'> 
            {dateFormat}
        </div>
    )
}
DateFormat.propTypes = {
    date: PropTypes.string.isRequired,
}

export default DateFormat
