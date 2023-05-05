function ConcertTable() {

const fetchata = async () => {
  const response = await fetch(
    'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=336&size=6&apikey=5GKKVRzQfiGWhRD7SAwRA3PvB0YQocrM');
    let data = await response.json();
        // console.log(data)

        //    get events
    document.getElementById('event1').innerHTML= JSON.stringify(data._embedded.events[5].name).replace(/['"]+/g, '')
    document.getElementById('event2').innerHTML= JSON.stringify(data._embedded.events[4].name).replace(/['"]+/g, '')
    document.getElementById('event3').innerHTML= JSON.stringify(data._embedded.events[3].name).replace(/['"]+/g, '')
    document.getElementById('event4').innerHTML= JSON.stringify(data._embedded.events[2].name).replace(/['"]+/g, '')
    document.getElementById('event5').innerHTML= JSON.stringify(data._embedded.events[1].name).replace(/['"]+/g, '')
    document.getElementById('event6').innerHTML= JSON.stringify(data._embedded.events[0].name).replace(/['"]+/g, '')


        //    get venues
    document.getElementById('venue1').innerHTML= JSON.stringify(data._embedded.events[5]._embedded.venues[0].name).replace(/['"]+/g, '')
    document.getElementById('venue2').innerHTML= JSON.stringify(data._embedded.events[4]._embedded.venues[0].name).replace(/['"]+/g, '')
    document.getElementById('venue3').innerHTML= JSON.stringify(data._embedded.events[3]._embedded.venues[0].name).replace(/['"]+/g, '')
    document.getElementById('venue4').innerHTML= JSON.stringify(data._embedded.events[2]._embedded.venues[0].name).replace(/['"]+/g, '')
    document.getElementById('venue5').innerHTML= JSON.stringify(data._embedded.events[1]._embedded.venues[0].name).replace(/['"]+/g, '')
    document.getElementById('venue6').innerHTML= JSON.stringify(data._embedded.events[0]._embedded.venues[0].name).replace(/['"]+/g, '')


        //    get dates
    document.getElementById('date1').innerHTML= JSON.stringify(data._embedded.events[5].dates.start.localDate).replace(/['"]+/g, '')
    document.getElementById('date2').innerHTML= JSON.stringify(data._embedded.events[4].dates.start.localDate).replace(/['"]+/g, '')
    document.getElementById('date3').innerHTML= JSON.stringify(data._embedded.events[3].dates.start.localDate).replace(/['"]+/g, '')
    document.getElementById('date4').innerHTML= JSON.stringify(data._embedded.events[2].dates.start.localDate).replace(/['"]+/g, '')
    document.getElementById('date5').innerHTML= JSON.stringify(data._embedded.events[1].dates.start.localDate).replace(/['"]+/g, '')
    document.getElementById('date6').innerHTML= JSON.stringify(data._embedded.events[0].dates.start.localDate).replace(/['"]+/g, '')
  }
  fetchata()
return (
    
<div id='ConcertTable' className='text-white bg-gradient-to-r from-black to-gray-600 rounded-t-2xl pr-2 pl-2 pb-10'>
  <h1 className=' text-center text-3xl py-12 pt-24'>Upcoming Events in Minneapolis</h1>
    <h2 className="text-center pb-5">Powered by Ticketmaster</h2>
    <table className=' w-full '>
      <thead>
        <tr>
          <th className='w-1/4'>Event</th>
          <th className='w-1/4'>Venue</th>
          <th className='w-1/4'>Date</th>
        </tr>   
      </thead>   
      <tbody>
        <tr>
            <td id="event1"></td>
            <td id="venue1"></td>
            <td id="date1"></td>
        </tr>
        <tr>
            <td id="event2"></td>
            <td id="venue2"></td>
            <td id="date2"></td>
        </tr>
        <tr>
            <td id="event3"></td>
            <td id="venue3"></td>
            <td id="date3"></td>
        </tr>
        <tr>
            <td id="event4"></td>
            <td id="venue4"></td>
            <td id="date4"></td>
        </tr>
        <tr>
            <td id="event5"></td>
            <td id="venue5"></td>
            <td id="date5"></td>
        </tr>
        <tr>
            <td id="event6"></td>
            <td id="venue6"></td>
            <td id="date6"></td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default ConcertTable


