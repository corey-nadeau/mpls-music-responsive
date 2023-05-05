import Ticketmaster from '../assets/images/Ticketmaster.jpg'
import Spotify from '../assets/images/spotify.jpg'
import Merchbar from '../assets/images/merchbar.jpg'

function Shop() {
  return (
    <div id='Shop'>
      <section className="bg-gradient-to-r from-black to-gray-600 lg:flex lg:flex-row lg:justify-center" id="shop">
        <div className="double-fade lg:flex lg:flex-row lg:justify-center">
            <div className="lg:grid lg:grid-cols-3">
                <div className="pl-24 text-white text-center w-3/4 lg:pt-24">
                    <a href="https://www.merchbar.com/" target="_blank"><img src={Merchbar} alt="merchbar" className="animate-spin rounded-full border-2 p-2 hover:border-red-500 hover:blur-sm"></img>
                    <h3 className="pt-8 text-4xl hover:text-red-500">Merch from Merchbar</h3></a>
                </div>
                <div className="pl-24 w-3/4 pt-20 text-white text-center">
                    <a href="https://www.ticketmaster.com/" target="_blank"><img src={Ticketmaster} alt="ticketmaster" className="animate-spin rounded-full border-2 p-2 hover:border-red-500 hover:blur-sm"></img>
                    <h3 className="pt-8 text-4xl hover:text-red-500">Tickets from Ticketmaster</h3></a>
                </div>
                <div className="pl-24 w-3/4 py-20 text-white text-center">
                    <a href="https://open.spotify.com/" target="_blank"><img src={Spotify} alt="spotify" className="animate-spin rounded-full border-2 p-2 hover:border-red-500 hover:blur-sm"></img>
                    <h3 className="pt-8 text-4xl hover:text-red-500">Check them out on Spotify</h3></a>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Shop
