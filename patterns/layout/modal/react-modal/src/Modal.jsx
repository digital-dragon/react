import { useState } from 'react'
import './Modal.css'
export default function Modal({children}) {
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={() => setShow(true)}>Show Modal</button>
            {
                show && (
                    <div className='modal-backdrop' onClick={() => setShow(false)}>
                        <div className='modal-content' onClick={e => e.stopPropagation()}>
                            <button onClick={() => setShow(false)}>Close Modal</button>
                            {children}
                        </div>
                    </div>
                )
            }

        </>
    )    
}