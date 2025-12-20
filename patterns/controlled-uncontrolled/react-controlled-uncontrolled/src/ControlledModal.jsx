import './Modal.css'
export default function ControlledModal({show, closeModalFn = () => {}, children}) {
    return (
        <>
            {
                show && (
                    <div className='modal-backdrop' onClick={closeModalFn}>
                        <div className='modal-content' onClick={e => e.stopPropagation()}>
                            <button onClick={closeModalFn}>Close Controlled Modal</button>
                            {children}
                        </div>
                    </div>
                )
            }

        </>
    )    
}