import Dylan from '../assets/images/bobdylan.jpg'
import Prince from '../assets/images/prince.jpg'
import Gravy from '../assets/images/gravy.jpg'

const AltSpotify = () => {

let playSong;
const clientId = "";
const clientSecret = "";

const _getToken = async () => {
    const result = await fetch(`https://accounts.spotify.com/api/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
        },
        body: 'grant_type=client_credentials'
    });
    const data = await result.json();
    return data.access_token
}

// bob dylan call

async function clickedEventDylan(){
  let track = 'bob dylan knockin on heavens door'
  let token = await _getToken();
  let headers = new Headers([
      ['Content-Type', 'application/json'],
      ['Accept', 'application/json'],
      ['Authorization', `Bearer ${token}`]
  ]);
  let request = new Request(`https://api.spotify.com/v1/search?q=${track}&type=track&limit=15`,{
      method: 'GET',
      headers: headers
  });
  let result = await fetch(request);
  let response = await result.json();
  console.log(response)
  let song = response.tracks.items[0].preview_url

  if (playSong){
      stopSnippet();
  }
  songSnippet(song);
}

// Prince call

async function clickedEventPrince(){
  let track = 'prince you got the look 2020 remaster'
  let token = await _getToken();
  let headers = new Headers([
      ['Content-Type', 'application/json'],
      ['Accept', 'application/json'],
      ['Authorization', `Bearer ${token}`]
  ]);
  let request = new Request(`https://api.spotify.com/v1/search?q=${track}&type=track&limit=15`,{
      method: 'GET',
      headers: headers
  });
  let result = await fetch(request);
  let response = await result.json();
  console.log(response)
  let song = response.tracks.items[0].preview_url

  if (playSong){
      stopSnippet();
  }
  songSnippet(song);
}

// Yung Gravy call

async function clickedEventGravy(){
    let track = 'yung gravy oops'
    let token = await _getToken();
    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json'],
        ['Authorization', `Bearer ${token}`]
    ]);
    let request = new Request(`https://api.spotify.com/v1/search?q=${track}&type=track&limit=15`,{
        method: 'GET',
        headers: headers
    });
    let result = await fetch(request);
    let response = await result.json();
    console.log(response)
    let song = response.tracks.items[0].preview_url

    if (playSong){
        stopSnippet();
    }
    songSnippet(song);
}

function songSnippet(url){
    playSong = new Audio(url);
    return playSong.play()
}

function stopSnippet(){
    return playSong.pause();
}

  return (
    <div id='AltSpotify'>
    <div className="artist-header text-3xl pb-6 lg:text-5xl">
        <h2>Artists from Minnesota</h2>
    </div>
    
    
    <div className='w-full bg-black text-center'>
        <a className=" bg-black text-white text-center w-full text-m lg:text-2xl">Click an image to preview their music!</a>
    </div>
    <div className='w-full bg-black text-center pt-3'>
        <a className=" bg-black text-white text-center w-full text-sm">Powered by Spotify</a>
    </div>  
    <div className='bg-black text-white text-center pt-10'>
      <button onClick={stopSnippet} className=' p-2 hover:text-red-500 border-white hover:border-red-500 bg-slate-700 border-2 text-xl rounded-xl'>
        STOP Music
      </button>
    </div>
    
    <div className=" items-center  flex flex-col opposite-fade lg:flex-row lg:w-full">
        
        <div className="lg:artist text-white w-2/3 mt-10 lg:w-1/3">
            <div className="lg:image-container-artist items-center">
              <img onClick={clickedEventDylan} src={Dylan} alt="bob dylan" className='animate-pulse rounded-full border-2 p-2 hover:border-red-500 hover:blur-sm  cursor-pointer'/>
            </div>
            <div className=" text-center text-2xl">
                <h1 className='pt-10 text-center'>Bob Dylan</h1>
            </div>
            <p className="pt-10 text-center -mx-2 lg:mx-14">Bob Dylan was born on May 24, 1941 in Duluth, Minnesota. He grew up in the city of
                    Hibbing, Minnesota. As a teenager, he played in various bands and with time his interest in music 
                    deepened, with a particular passion for American folk music and blues. One of his idols 
                    was the folk singer Woody Guthrie.
            </p>
            <div className="artist-socials text-center space-x-3 pb-20">
                <a href="https://www.instagram.com/bobdylan" target="_blank"><i className="fab fa-instagram hover:text-red-600 text-white"></i></a>
                <a href="https://www.facebook.com/bobdylan" target="_blank"><i className="fab fa-facebook hover:text-red-600 text-white"></i></a>
                <a href="https://twitter.com/bobdylan" target="_blank"><i className="fab fa-twitter hover:text-red-600 text-white"></i></a>
                <a href="https://www.tiktok.com/@bobdylanofficial?lang=en" target="_blank"><i className="fab fa-tiktok hover:text-red-600 text-white"></i></a>
                <a href="https://open.spotify.com/search/bob%20dylan" target="_blank"><i className="fa-brands fa-spotify hover:text-red-600 text-white"></i></a>
            </div>
        </div>
        <div className='bg-black text-white text-center pt-10'>
      <button onClick={stopSnippet} className='lg:hidden p-2 hover:text-red-500 border-white hover:border-red-500 bg-slate-700 border-2 text-xl rounded-xl'>
        STOP Music
      </button>
    </div>

        <div className="lg:artist text-white w-2/3 mt-10 lg:w-1/3">
            <div className="items-center">
                <img onClick={clickedEventPrince} className='animate-pulse rounded-full border-2 p-2 hover:border-red-500 hover:blur-sm  cursor-pointer ' src={Prince} alt="prince" />
            </div>
            <div className="artist-name text-center text-2xl">
                <h1 className='pt-10 text-center'>Prince</h1>
            </div>
            <p className="pt-10 text-center -mx-2 lg:mx-14">Prince Rogers Nelson, songwriter, singer, producer, and all-round musical 
                    icon, was born on June 7, 1958 in Minneapolis, Minnesota. Music was a part of Prince's family; his father, 
                    John Nelson, was a jazz pianist whose stage name was Prince Rogers, and his mother, Mattie Nelson, was a 
                    vocalist.
            </p>
            <div className="artist-socials text-center space-x-3 pb-20">
                <a href="https://www.instagram.com/prince" target="_blank"><i className="fab fa-instagram hover:text-red-600 text-white"></i></a>
                <a href="https://www.facebook.com/prince" target="_blank"><i className="fab fa-facebook hover:text-red-600 text-white"></i></a>
                <a href="https://twitter.com/prince" target="_blank"><i className="fab fa-twitter hover:text-red-600 text-white"></i></a>
                <a href="https://www.tiktok.com/tag/prince?lang=en" target="_blank"><i className="fab fa-tiktok hover:text-red-600 text-white"></i></a>
                <a href="https://open.spotify.com/search/prince" target="_blank"><i className="fa-brands fa-spotify hover:text-red-600 text-white"></i></a>
            </div>
        </div>
        <div className=' text-white text-center pt-10'>
      <button onClick={stopSnippet} className='lg:hidden p-2 hover:text-red-500 border-white hover:border-red-500 bg-slate-700 border-2 text-xl rounded-xl'>
        STOP Music
      </button>
    </div>

        <div className="lg:artist text-white w-2/3 mt-10 lg:w-1/3">
            <div className="items-center">
                <img onClick={clickedEventGravy} className='animate-pulse rounded-full border-2 border-black lg:border-white p-2 hover:border-red-500 hover:blur-sm cursor-pointer' src={Gravy} alt="yung gravy" />
            </div>
            <div className="artist-name text-center text-2xl">
                <h1 className='pt-10 text-black lg:text-white'>Yung Gravy</h1>
            </div>
            <p className=" pt-10 text-center -mx-2 text-black lg:mx-14 lg:text-white">Mathew Raymond Hauri, or Yung Gravy, was born on March 19, 1996, in Rochester, 
                    Minnesota. He is a well-known rapper, songwriter, producer, and entrepreneur who has been professionally 
                    active since 2016, when he started uploading his music onto online audio distribution platforms.
            </p>
            <div className="artist-socials text-center space-x-3 pb-20 ">
                <a href="https://www.instagram.com/yunggravy" target="_blank"><i className="fab fa-instagram hover:text-red-600 text-black lg:text-white"></i></a>
                <a href="https://www.facebook.com/yunggravy" target="_blank"><i className="fab fa-facebook hover:text-red-600 text-black lg:text-white"></i></a>
                <a href="https://twitter.com/yunggravy" target="_blank"><i className="fab fa-twitter hover:text-red-600 text-black lg:text-white"></i></a>
                <a href="https://www.tiktok.com/@yunggravy?lang=en" target="_blank"><i className="fab fa-tiktok hover:text-red-600 text-black lg:text-white"></i></a>
                <a href="https://open.spotify.com/search/yung%20gravy" target="_blank"><i className="fa-brands fa-spotify hover:text-red-600 text-black lg:text-white"></i></a>
              
            </div>
        </div>
     </div>
    </div>
  )
}

export default AltSpotify
