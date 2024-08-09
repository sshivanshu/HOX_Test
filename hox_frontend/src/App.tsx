import { useEffect, useState } from 'react'
import ViewLinks from './pages/ViewLinks'


function App() {
  const [data, setData] = useState(0)



    // useEffect(() => setData(fetch('http://localhost:8000/api/links',{method: "GET"}).then(res =>
    //       res.json()
    //     )
    // , [])
  


  return (
    <>
   
<div>
  working fine
  <ViewLinks />
</div>
    </>
  )
}

export default App
