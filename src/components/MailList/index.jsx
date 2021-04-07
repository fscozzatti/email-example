import React from 'react'
import PropTypes from 'prop-types'
import DateRangePicker from 'react-bootstrap-daterangepicker'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import iconSearch from './../../images/icon_search.svg';
import iconCalender from './../../images/icon_calender.svg';
import iconLogo from './../../images/logo.png'
import GridHeader from './../GridHeader'
import GridDetail from './../GridDetail'
import EmailCompleteInfo from './../EmailCompleteInfo'

const MailList = ({ mails, hasMails, onSetQ, onSetX, onSetModal, modal, onSetSelectedMail }) => {
    const handleEvent = (event, picker) => {
      onSetQ(picker.startDate._d)
      onSetX(picker.endDate._d)

    }

    const mails2 = mails.map((mail, i) => {
        return (
          <div key={mail.from}>
            <GridDetail from={mail.from} tos={mail.tos} subject={mail.subject} date={mail.date}
             files={mail.files} onSetModal={onSetModal} modal={modal}
             onSetSelectedMail={onSetSelectedMail} id={mail.id}></GridDetail>
          </div>
        )
      })

    const toggle = () =>  onSetModal(!modal);

    return (
        <div className="container-fluid py-5">
            <div className="row">
              <nav className="navbar navbar-ligth bg-ligth">
                <div className="input-group mb-3 col-12" >
                  <img className='imgContainerCalendar' src={iconCalender} alt="Buscar" height="22px" width="22px" />
                  <DateRangePicker
                    initialSettings={{ startDate: '03/01/2021', endDate: '03/15/2021' }}
                    onApply={(event,picker) => handleEvent(event,picker)}
                  >
                    <input type="text" className="form-control" />
                  </DateRangePicker>
                  <div className="input-group-append">
                      <button type="button" className='btn btn-light'> 
                        <img className='imgContainerSearch' src={iconSearch} alt="Buscar" height="20px" width="20px" />
                      </button>
                  </div>
                </div>
              </nav>
              <div className="col-12"><h4>Results: {mails2.length} mail(s)</h4></div>
              { !hasMails && <div className="col-12"><hr></hr></div>}
              { !hasMails && <div className="col-12"><img className='imgLogoContainer' src={iconLogo} alt="" height="150px" width="150px" /></div>}
              { hasMails && <GridHeader/>}
              { hasMails && <div className="col-12">{ mails2 }</div> }   
          </div> 
          <Modal isOpen={modal} toggle={toggle}>
              <ModalHeader toggle={toggle}>Email Previsualization</ModalHeader>
              <ModalBody>
              <EmailCompleteInfo></EmailCompleteInfo>
              </ModalBody>
              <ModalFooter>
              <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
              <Button color="secondary" onClick={toggle}>Cancel</Button>
              </ModalFooter>
          </Modal>
        </div>
      )
}

MailList.propTypes = {
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
            date: PropTypes.string.isRequired,
        })
    ).isRequired,
    hasMails: PropTypes.bool.isRequired,
    onSetQ: PropTypes.func.isRequired,
    onSetX: PropTypes.func.isRequired,
    onSetModal: PropTypes.func.isRequired,
    modal: PropTypes.bool.isRequired,
}

export default MailList
