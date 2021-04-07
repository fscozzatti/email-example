import React, { useEffect, useState }  from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import moment from 'moment'
import MainPage from './pages/MainPage'


const App = () => {
  
    const [mails, setMails] = useState([])
    const [hasMails, setHasMails] = useState(false)
    const [q , setQ ] = useState("")
    const [x , setX ] = useState("")
    const [modal, setModal] = useState(false);
  
    useEffect(() => {  
      async function fetchData() {
      await axios.get('https://mailexamplefs-default-rtdb.firebaseio.com/emails.json')
          .then(resAux => {
              setMails(resAux.data)
              if (resAux.data.length === 0) {
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

      function searchB(rows) {
        var dateIni = moment(q).format('MM-DD-YYYY')
        var dateFin = moment(x).format('MM-DD-YYYY')
        if (!q && !x) {
          return mails }
        else {
          return mails.filter((row) => 
            moment(row.date).format('MM-DD-YYYY') >= dateIni && moment(row.date).format('MM-DD-YYYY') <=  dateFin )
        }
        //
      }
      
    return (
      <Router>
          <Route exact path="/">
              <MainPage mails={searchB(mails)} hasMails={hasMails} onSetQ= {(q) => setQ(q)} onSetX= {(x) => setX(x)} onSetModal={() => setModal(!modal)} modal={modal}>
              </MainPage>
          </Route>
      </Router>
)
}


export default App
