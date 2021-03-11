import React from 'react'
import PropTypes from 'prop-types'
import AppFrame from './../components/AppFrame'
import MailList from './../components/MailList'


const MainPage = ({ mails, hasMails }) => {

    return (
        <AppFrame>
            <MailList mails={mails} hasMails={hasMails}>

            </MailList>
        </AppFrame>
    )
}

MainPage.propTypes = {
    mails: PropTypes.arrayOf(
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
    hasMails: PropTypes.bool.isRequired,
}

export default MainPage

/*            {
                error && <Alert onClose={() => onSetError(null)} severity="error">{error}</Alert>
            }
            <Paper elevation={3}>
                <CardList todos={todos}
                    onClickCard={onClickHandler} 
                    onHandleDelete={onHandleDelete}
                    onSetQ={onSetQ}/>
            </Paper> */
