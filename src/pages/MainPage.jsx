import React from 'react'
import PropTypes from 'prop-types'
import AppFrame from './../components/AppFrame'
import MailList from './../components/MailList'


const MainPage = ({ mails, hasMails, onSetQ, onSetX, onSetModal, modal, onSetSelectedMail, selectedMail }) => {

    return (
        <AppFrame>
            <MailList mails={mails} hasMails={hasMails} onSetQ={onSetQ}
             onSetX={onSetX} onSetModal={onSetModal}
              modal={modal} onSetSelectedMail={onSetSelectedMail} selectedMail={selectedMail} >

            </MailList>
        </AppFrame>
    )
}

MainPage.propTypes = {
    mails: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
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
    onSetQ: PropTypes.func.isRequired,
    onSetX: PropTypes.func.isRequired,
    onSetModal: PropTypes.func.isRequired,
    modal: PropTypes.bool.isRequired,
    onSetSelectedMail: PropTypes.func.isRequired,
    selectedMail: PropTypes.shape({
        id: PropTypes.number.isRequired,
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
}

export default MainPage
