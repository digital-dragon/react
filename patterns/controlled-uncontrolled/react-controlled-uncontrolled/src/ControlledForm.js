import React, { useState, useEffect } from 'react';
export default function ControlledForm( { nm, em }) {

    const [name, setName] = useState(nm || '');
    const [email, setEmail] = useState(em || '');
    const [formError, setFormError] = useState('');

    const submitForm = (formData) => {
        console.log(name, email);
    }

    useEffect(() => {
        if (name.length < 2) {
            setFormError("Name length must be more that 2");
        } else {
            setFormError("");
        }

    }, [name])
    
    return (
        <>
            <div style={{background: "lightgreen"}} >
                <div>******Controlled form************</div>
                { formError && <p style={{color: "red"}}>{formError}</p>}
                <form action={submitForm}>
                    { formError && <div style={{color: "red"}}></div>}
                    <label for="name">Name</label>
                    <input 
                        type="text"
                        value={name} 
                        onChange={e => setName(e.target.value)}
                        id="name" name="name" 
                        placeholder="Enter name"
                    ></input>
                    <label for="email">email</label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        id="email" 
                        name="email" 
                        placeholder="Enter email"
                    ></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}