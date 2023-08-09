import { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import Swal from 'sweetalert2'
import emailjs from 'emailjs-com'


export default function Contact () {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_h8nhu2a', 'template_q3b7bz4', e.target, 'fyQJ0h_kmVB34FtEf')
        .then((result) => {
            console.log(result.text)
            Swal.fire({
                icon:'success',
                title: 'Your message has been sent',
                showConfirmButton: false,
                timer: 1500
            })
        }, (error) => {
            console.log(error.text);
            Swal.fire({
                icon: 'error',
                title: error.text,
                showConfirmButton: false,
                timer: 1500
            })
        e.target.reset()
        })
    }

    return (
        <div className="col-12">
            <h1>Contact Me:</h1>
            <div className='App' >
                <Form onSubmit={handleOnSubmit}>
                <Form.Field
                    id='form-input-control-email'
                    control={Input}
                    label='Email'
                    name='user_email'
                    placeholder='Email…'
                    required
                    icon='mail'
                    iconPosition='left'
                />
                <Form.Field
                    id='form-input-control-last-name'
                    control={Input}
                    label='Name'
                    name='user_name'
                    placeholder='Name…'
                    required
                    icon='user circle'
                    iconPosition='left'
                />
                <Form.Field
                    id='form-textarea-control-opinion'
                    control={TextArea}
                    label='Message'
                    name='user_message'
                    placeholder='Message…'
                    required
                />
                <Button type='submit' color='green'>Submit</Button>
                </Form>
            </div>
        </div>
    )
}