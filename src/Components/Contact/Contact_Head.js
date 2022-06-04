import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css'

function Contact_Head(props) {
    return (
        <div className='contact_head_sec pt-4 pb-4'>
            <Container>
                <div className='contact_heading'>
                    Contact<br />
                    <span>US</span>
                </div>
            </Container>
        </div>
    );
}

export default Contact_Head;