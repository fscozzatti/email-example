import React, { useEffect, useState }  from 'react'
import DateRangePicker from 'react-bootstrap-daterangepicker'
import iconSearch from'./images/icon_search.svg';
import iconCalender from'./images/icon_calender.svg';
import iconLogo from './images/logo.png'
import axios from 'axios'


const App = () => {
  
    const [mails, setMails] = useState([])
    const [hasMails, setHasMails] = useState(false)
  
    useEffect(() => {  
      async function fetchData() {
      await axios.get('https://mailexamplefs-default-rtdb.firebaseio.com/emails.json')
          .then(resAux => {
              setMails(resAux.data)
              console.log(resAux.data)
              if (mails.length === 0) {
                setHasMails(false)
              }else{
                setHasMails(true)
              }
            })
          .catch( (err) => {
          })  
      }
  
          fetchData()
      
      }, []);

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
          <h4>Results: {mails.length} mail(s)</h4>
          <hr></hr>
          <div>{ !hasMails && <img className='imgLogoContainer' src={iconLogo} alt="" height="150px" width="150px" />}</div>
        </div>
    )
}


export default App
