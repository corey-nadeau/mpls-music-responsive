import { HashLink } from 'react-router-hash-link'
function Footer() {
    return (
    <div className="bg-black text-center pb-16">
        <HashLink smooth to='/#top' className="text-white border-2 rounded-lg border-red-400 ">
            Back to Top
        </HashLink>
        <h3 className='text-white text-xs pt-8'>Created and designed by Corey Nadeau</h3><h3 className='text-white text-xs'>Data powered by Spotify, and Ticketmaster</h3>
    </div>
    )
}
export default Footer