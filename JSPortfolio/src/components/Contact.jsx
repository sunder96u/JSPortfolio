import { useState } from 'react'



export default function Contact () {

    const initialState = {
        name: '',
        email: '',
        message: ''
    }

    const [formState, setFormState] = useState(initialState)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const contact = {
            name: formState.name,
            email: formState.email,
            message: formState.message
        }
        setFormState(initialState)
    }

    const handleChange = (e) => {
            setFormState({...formState, [e.target.id]: e.target.value })
        }

    return (
        <div className="col">
            <div className="form" onSubmit={handleSubmit}>
                <form>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" placeholder="Enter your name" id="name" onChange={handleChange} value={formState.Name} />
                    <label htmlFor='email'>Email:</label>
                    <input type="text" placeholder="Enter your email" id="email" onChange={handleChange} value={formState.email}/>
                    <label htmlFor='message'>Message:</label>
                    <textarea placeholder="Enter your message" id="message" onChange={handleChange} value={formState.email}></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}