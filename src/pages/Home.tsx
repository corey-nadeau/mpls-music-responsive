import Background from '../assets/images/bg2.jpg'
import ConcertTable from '../api/ConcertTable'
import Shop from '../components/Shop'
import AltSpotify from '../api/Spotify'
import Footer from '../components/Footer'





function Home() {
  return (
    <div id='top'>
{/* Landing area */}
      <div 
          style={{ backgroundImage: `url(${ Background })`}}
          className='flex flex-row justify-center mx-auto bg-cover lg:bg-fixed'>
      <div className='flex place-items-center h-screen'>
      </div>
        <div className='w-full'>
          <section>
            <h1 className="showfeats lg:z-10 lg:text-6xl md:text-3xl">Welcome to Minneapolis</h1>
          </section>
          </div>
      </div>
        <div>
{/* Local artist/ spotify */}
          <AltSpotify/>
{/* concert table */}
            <ConcertTable/>
{/* shop */}
          <Shop/>
{/* Footer */}
        {/* <Footer/> */}
      </div>
    </div>
  )
}

export default Home
