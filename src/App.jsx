import React from 'react'
import Card from './Card'

function App() {

  let data=[
    {
      title:"Animal",
      imagesrc:"https://images.indianexpress.com/2024/07/CHEETAL.jpg",
      Desc:"Leopards behind loss of prey base, so tigers as check an option."
    },
    {
      title:"Aircraft",
      imagesrc:"https://images.indianexpress.com/2024/07/j20.jpg",
      Desc:"The recent satellite image of China’s fifth generation stealth fighters, the J20 Mighty Dragon, parked on the main tarmac of Shigatse air base in Tibet, along with J10 Vigorous Dragon fighters at an altitude of 12,408 feet, has set off a flurry of speculation and raised concerns."
    },
    {
      title:"Politics",
      imagesrc:"https://images.indianexpress.com/2024/07/Leader-of-Opposition-Rahul-Gandhi-in-Lok-Sabha-on-Monday.-PTI.jpg",
      Desc:"Reflecting an Opposition with its highest tally in 10 years and presenting a united front, in his first speech as Leader of Opposition, Rahul Gandhi picked up the threads of his election campaign to counter the Government on several fronts: from accusing it of having created an atmosphere of fear to alleging that it had spread violence and hatred in the name of Hinduism; from the crisis in Manipur to how demonetisation had wrecked employment."
    }
  ]
  let myname='Harish Raajaa R V'
  return <>
  {/* <!-- Page Content --> */}
<div className="container">

  {/* <!-- Page Heading --> */}
  <h1 className="my-4">Today's Newsfeed
  </h1>

  <div className="row">
    {
      data.map((e,i)=>{
        return <Card data={e} key={i}/>
      })
    }
    
  </div>
  {/* <!-- /.row --> */}

</div>
{/* <!-- /.container --> */}
  </>
}

export default App