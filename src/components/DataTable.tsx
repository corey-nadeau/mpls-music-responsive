import  { useState } from 'react';
import { server_calls } from '../api/Wishlist';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';
import bg2 from '../assets/images/bg.jpg';
import ConcertTable from '../api/ConcertTable';
import Modal from './Modal'

const columns: GridColDef[] = [
  { field: 'maker', headerName: 'Artist', flex: 1, headerAlign: 'left'},
  { field: 'flavor', headerName: 'Venue', flex: 1, headerAlign: 'left'},
  { field: 'year', headerName: 'Date of Event', flex: 1, headerAlign: 'left'},
  { field: 'rating', headerName: 'Users First Name', flex: 1, headerAlign: 'left'}
]

function DataTable() {
  const [ open, setOpen ] = useState(false);
  const { contactData, getData } = useGetData();
  const [ selectionModel, setSelectionModel ] = useState<string[]>([])
  const handleOpen = () => {
    setOpen(true)
    }
  const handleClose = () => {
    setOpen(false)
    }
  const deleteData = () => {
    server_calls.delete(selectionModel[0]);
    getData();
    console.log(`Selection model: ${selectionModel}`)
    setTimeout( () => { window.location.reload() }, 500)
    }

  return (
    <div style={{ backgroundImage: `url(${ bg2 })`}} className='sm:bg-cover'>
      <Modal id={selectionModel} open={open} onClose={handleClose}/>
        <div className='flex flex-row justify-center pt-44'>
          <button onClick={handleOpen} className='p-3 bg-red-400 text-black m-3 rounded-xl hover:bg-slate-800 hover:text-white ' >Enter New Concert</button>
          <button onClick={handleOpen} className="p-3 bg-red-400 text-black m-3 rounded-xl hover:bg-slate-800 hover:text-white" >Update</button>
          <button onClick={deleteData} className="p-3 bg-red-400 text-black m-3 rounded-xl hover:bg-slate-800 hover:text-white" >Delete Show</button>
        </div>
        <div className={ open ? "hidden" : "container flex flex-col md:mx-20 2xl:pl-52"} style={{ height: 680, width: '100%' }}>
          <h2 className="p-3 bg-red-500  text-center rounded-3xl">My Concert Wishlist<h6 
            className='text-sm'>Scroll down to see suggestions for upcoming events!</h6></h2>
          <DataGrid rows={contactData} columns={columns} checkboxSelection={false} onRowSelectionModelChange={ (item:any) => {setSelectionModel(item)}} sx={{m:1, 
            borderColor:'red', color:'black', borderRadius: 4, p:1 }}/>
        </div>
      <ConcertTable/>
    </div>
  )
}

export default DataTable