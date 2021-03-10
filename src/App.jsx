import React, { useEffect, useState }  from 'react'
import DateRangePicker from 'react-bootstrap-daterangepicker'
import iconSearch from'./images/icon_search.svg';
import iconCalender from'./images/icon_calender.svg';
import iconLogo from './images/logo.png'
import axios from 'axios'


const App = () => {
  
    const [mails, setMails] = useState([])
    const [hasMails, setHasMails] = useState(false)
  
 /* useEffect(() => {  
    async function fetchData() {
    await axios.get('')
        .then(resAux => {
            //setTodos1(resAux.data)})
        .catch( (err) => {
        })  
    }

        fetchData()
    
    }, []);*/
    return (
        <div className='divMainContainer'>
          <nav>
            <div className='divContainer1'>
              <img className='imgContainerCalendar' src={iconCalender} alt="Buscar" height="22px" width="22px" />
              <DateRangePicker
                initialSettings={{ startDate: '01/01/2020', endDate: '01/15/2020' }}
              >
                <input type="text" className="form-control" alwaysShowCalendars={true} />
              </DateRangePicker>
              <div className='pp'>
                <img className='imgContainerSearch' src={iconSearch} alt="Buscar" height="15px" width="15px" />
              </div>
            </div>
          </nav>
          <h4>Results: {mails.length} mail(s)</h4>
          <hr></hr>
          <div>{ !hasMails && <img className='imgLogoContainer' src={iconLogo} alt="" height="150px" width="150px" />}</div>
        </div>
    )
}


export default App
