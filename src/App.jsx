import React, { useEffect, useState }  from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'
import MainPage from './pages/MainPage'


const App = () => {
  
    const [mails, setMails] = useState([])
    const [hasMails, setHasMails] = useState(false)
  
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


    return (
      <Router>
          <Route exact path="/">
              <MainPage mails={mails} hasMails={hasMails}>
              </MainPage>
          </Route>
      </Router>
)
}


export default App
