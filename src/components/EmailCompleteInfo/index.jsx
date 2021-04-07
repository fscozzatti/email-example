import React from 'react'
import PropTypes from 'prop-types'

const EmailCompleteInfo = ({email}) => {
    return (
        <div>
            From: LALALA
            Tos: LALA1, LALA2, LALA3
            Subject: Lalalalalallalalala
            Date: 2021-04-07
        </div>
    )
}

EmailCompleteInfo.propTypes = {
    email: PropTypes.arrayOf(
        PropTypes.shape({
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
        })
    ).isRequired,

}

export default EmailCompleteInfo
