import React from 'react'
import PropTypes from 'prop-types'
import DateRangePicker from 'react-bootstrap-daterangepicker'
import iconSearch from './../../images/icon_search.svg';
import iconCalender from './../../images/icon_calender.svg';
import iconLogo from './../../images/logo.png'
import GridHeader from './../GridHeader'
import GridDetail from './../GridDetail'

const MailList = ({ mails, hasMails }) => {
    const mails2 = mails.map((mail, i) => {
        return (
          <div className="col-md-12" key={mail.from}>
            <GridDetail from={mail.from} tos={mail.tos} subject={mail.subject} date={mail.date} files={mail.files}></GridDetail>
          </div>
        )
      })
    return (
        <div className='divMainContainer'>
          <nav>
            <div className='divContainer1'>
              <img className='imgContainerCalendar' src={iconCalender} alt="Buscar" height="22px" width="22px" />
              <DateRangePicker
                initialSettings={{ startDate: '03/01/2021', endDate: '03/15/2021' }}
              >
                <input type="text" className="form-control" />
              </DateRangePicker>
              <button type="button" className='buttonSearch'> 
                <img className='imgContainerSearch' src={iconSearch} alt="Buscar" height="15px" width="15px" />
              </button>
            </div>
          </nav>
          <h4>Results: {mails2.length} mail(s)</h4>
          { !hasMails && <hr></hr>}
          { !hasMails && <img className='imgLogoContainer' src={iconLogo} alt="" height="150px" width="150px" />}
          { hasMails && <GridHeader/>}
          { hasMails && <div>{mails2}</div>}
        </div>
      )
}

MailList.propTypes = {
    mails: PropTypes.arrayOf(
        PropTypes.shape({
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
}

export default MailList
