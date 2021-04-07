import React from 'react'
import PropTypes from 'prop-types'

const EmailCompleteInfo = ({mail}) => {

    return (
        <div>
            <div>
                From: {mail && mail.from}
            </div>
            <div>
                Date: {mail && mail.date}
            </div>
            <div>
                Subject: {mail && mail.subject}
            </div>
        </div>
    )
}

EmailCompleteInfo.propTypes = {
    mail: PropTypes.shape({
            from: PropTypes.string.isRequired,
            subject: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
        })
}

export default EmailCompleteInfo
