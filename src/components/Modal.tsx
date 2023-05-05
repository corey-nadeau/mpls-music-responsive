import ContactForm from './EntryForm';

type Props = {
    id?: string[];
    open: boolean;
    onClose: () => void;
}

const Modal = ( props: Props ) => {
    if ( !props.open ) return (<></>);
    return (
        <div onClick={ props.onClose } className='fixed w-full h-full flex overflow-auto z-1 pt-52 justify-center align-middle bg-gray-300 bg-opacity-70'>
            <div className='max-w-600px w-2/5 fixed flex z-1 mt-20 bg-slate-200 shadow-xl rounded' onClick={(e) => { e.stopPropagation() }}>
                <div className="w-full flex flex-col border-8 border-red-400">
                    <div className="flex flex-row space-apart">
                        <button className="flex justify-start m-3 bg-black p-2 rounded hover:bg-red-400 text-white" onClick={props.onClose}>Cancel</button>
                    </div>
                    <div className="flex flex-col items-center text-center mt-3 p-2">
                        <ContactForm id={ props.id }/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal