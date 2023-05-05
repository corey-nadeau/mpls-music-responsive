import { useForm } from 'react-hook-form'
import { server_calls } from '../api/Wishlist'
import { useDispatch, useStore } from 'react-redux';
import { chooseArtist, chooseVenue, chooseDate, chooseUser } from "../redux/slices/RootSlice";


interface ContactFormProps {
  id?: string[]
}

const ContactForm = (props:ContactFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.make } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 500);
      event.target.reset()
    } else {
      
      dispatch(chooseArtist(data.maker));
      dispatch(chooseVenue(data.flavor));
      dispatch(chooseDate(data.year));
      dispatch(chooseUser(data.rating));

      server_calls.create(store.getState())
      setTimeout( () => {window.location.reload()}, 500);
    }
    
  }

  return (


    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="artist">Artist</label>
          <input {...register('maker')} name='maker' placeholder="Artist" className="outline w-full m-5 py-1"/>
        </div>
        <div>
          <label htmlFor="venue">Venue</label>
          <input {...register('flavor')} name='flavor' placeholder="Venue" className="outline w-full m-5 py-1"/>
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input {...register('year')} name='year' placeholder="Date" className="outline w-full m-5 py-1"/>
        </div>
        <div>
          <label htmlFor="user">Your First Name</label>
          <input {...register('rating')} name='rating' placeholder="Name" className="outline w-full m-5 py-1"/>
        </div>
        <div className="flex p-1">
          <button
            className="flex justify-start m-3 bg-black p-2 rounded hover:bg-slate-800 text-white">
              Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
