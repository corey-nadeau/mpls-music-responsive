import { useState } from 'react'
import { Link } from 'react-router-dom'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'
import { HashLink } from 'react-router-hash-link'

function AltNavbar() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";

    } else {

        document.getElementById("navbar").style.top = "-85px";
    }
    prevScrollpos = currentScrollPos;
    }

    const [isVisible, setIsVisible] = useState(false)

    const signOutOnClick = () => {
        signOut(auth)
        setIsVisible(!isVisible)
    }

    const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Providers.google);
        if ( response.user ){
            setIsVisible(!isVisible)
        }
    }

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const clicked = () => {
        setIsVisible(false)
    }

  return (
    <nav className="w-full opposite-fade fixed h-40 z-10 lg:flex lg:flex-col" id='navbar'>
        <div className="flex text-white pt-8">
            <div className=' pl-3.5 flex'>
            <button onClick={dropDown} className="flex pt-3 pl-3 text-red-500 hover:text-white text-4xl w-20 h-20"><i className="fa-solid fa-bars" title='Menu'></i></button>
                <HashLink smooth to='/#top' className='pt-2 py-10 px-12 text-lg  bg-red-500 rounded-2xl h-9 opacity-70 border-2 border-white' title='Home'>Minneapolis Music</HashLink>
                
            </div>
            
        </div>
        { isVisible ? (
            <div className='items-center opposite-fade -mt-3'>
                <div className='text-sm lg:flex-grow px-14'>
                    <button className='p-3 m-5 bg-black hover:bg-white justify-center opposite-fade rounded-3xl'>
                        <div>
                            <HashLink smooth to='/#top' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-white' title='Home'>
                            <i className="fa-solid fa-house fa-2xl"></i>
                            </HashLink>
                        </div>
                    </button>
                    <button className='p-3 m-5 bg-black hover:bg-white justify-center opposite-fade rounded-3xl'>
                        <div>
                            <Link to='/wishlist' onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-white' title='Wishlist'>
                            <i className="fa-solid fa-person-praying fa-2xl"></i>
                            </Link>
                        </div>
                    </button>
                    <button className='p-3 m-5 bg-black hover:bg-white justify-center opposite-fade rounded-3xl'>
                        <div>
                            <HashLink smooth to="/#AltSpotify" onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-white' title='Local Artists'>
                            <i className="fa-solid fa-music fa-2xl"></i>
                            </HashLink>
                        </div>
                    </button>
                    <button className='p-3 m-5 bg-black hover:bg-white justify-center opposite-fade rounded-3xl'>
                        <div>
                            <HashLink smooth to="/#ConcertTable" onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-white' title='Local Events'>
                            <i className="fa-solid fa-calendar-days fa-2xl"></i>
                            </HashLink>
                        </div>
                    </button>
                    <button className='p-3 m-5 bg-black hover:bg-white justify-center opposite-fade rounded-3xl'>
                        <div>
                            <HashLink smooth to="/#Shop" onClick={ clicked } className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-white' title='Shop'>
                            <i className="fa-solid fa-cart-shopping fa-2xl"></i>
                            </HashLink>
                        </div>
                    </button>
                    
                    {
                    !auth.currentUser ? 
                    <button className='p-3 m-5 bg-black hover:bg-white justify-center opposite-fade rounded-3xl'>
                        <div>
                            <Link to='/' onClick={ () => { signInOnClick()}} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-white'>
                            <i className="fa-solid fa-right-to-bracket fa-2xl"></i> Login
                            </Link>
                        </div>
                    </button>
                        :
                    <button className='p-3 m-5 bg-black hover:bg-white justify-center opposite-fade rounded-3xl'>
                        <div>
                            <Link to='/' onClick={ () => { signOutOnClick()}} className='flex place-items-center mt-4 lg:inline-block lg:mt-0 text-white'>
                            <i className="fa-solid fa-right-to-bracket fa-2xl"></i> Logout
                            </Link>
                        </div>
                    </button>
                    }
                </div>
            </div>
            ) : (
        <></>
        )}
    </nav>
  )
}

export default AltNavbar
