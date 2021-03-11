import React from 'react'
import PropTypes from 'prop-types'
import DateRangePicker from 'react-bootstrap-daterangepicker'
import Grid from '@material-ui/core/Grid'
import iconSearch from './../../images/icon_search.svg';
import iconCalender from './../../images/icon_calender.svg';
import iconLogo from './../../images/logo.png'


const MailList = ({ mails, hasMails }) => {
    const mails2 = mails.map((mail, i) => {
        return (
          <div key={mail.from}>
              <p>{mail.from}</p>
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
          <hr></hr>
          <div>{ !hasMails && <img className='imgLogoContainer' src={iconLogo} alt="" height="150px" width="150px" />}</div>
          <div>{ hasMails && <div>{mails2}</div>}</div>
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

export default MailList

/*    return (
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
          <h4>Results: {mails.length} mail(s)</h4>
          <hr></hr>
          <div>{ !hasMails && <img className='imgLogoContainer' src={iconLogo} alt="" height="150px" width="150px" />}</div>
        </div>
    )*/