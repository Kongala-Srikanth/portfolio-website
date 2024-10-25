import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import "./index.css"

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [formSubmit, setFormSubmit] = useState(false)

    const onFormSuccess = () => {
        setTimeout(() => {
            setFormSubmit(false)
        }, 5000)
    }

    
    const onSubmitForm = async (event) => {
        event.preventDefault();
        const data = {
            id: uuidv4(),
            name: name,
            email: email,
            message: message,
        };
        
        const url = 'https://script.google.com/macros/s/AKfycbzXrT6I5crKixpOABqMuaeEEE-7L27AP5LYJFE0IDRS1VKNIPM7e07xTSXKQN5-NYjt/exec'; // your actual script URL
    
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                mode: 'no-cors',
            });
            // Clear form fields and show success message
            setName('');
            setEmail('');
            setMessage('');
            setFormSubmit(true);
            onFormSuccess();
    
            if (!response.ok) {
                const errorMessage = await response.text();
                console.error(`Error: ${response.status} - ${errorMessage}`);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            
    
        } catch (error) {
            console.error('Error during fetch:', error);
        }
    };
    


    return (
        <div id="contact" className='contact-section-container'>
        <div className="wrapper">
        <div className="bg"> Contact Me </div>
        <div className="fg"> Contact Me </div>
      </div>
        <div className="contact-container">
            <div className="description-container">
                <h3>Let’s Connect</h3>
                <p className="contact-description">If you have any questions, feel free to ask. I’m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Your thoughts and inquiries are important to me, and I believe that great ideas come from collaboration. Don’t hesitate to share your thoughts or ask about how we can work together. <br/>
                   <br/> Reach out via the form below, and I’ll get back to you as soon as possible. I’m excited to hear what you have in mind and look forward to the possibility of working with you!
                </p>
            </div>
            <div className="container">
                <div className="form-wrapper">
                    <h2>Contact Us</h2>
                    <form className="contact-form" onSubmit={onSubmitForm}>
                        <div className="form-group">
                            <label for="fullName">Full Name</label>
                            <input type="text" id="fullName" name="fullName" value={name} required onChange={e => setName(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" value={email} required onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" name="message" rows="4" value={message} required onChange={e => setMessage(e.target.value)}></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                    {
                        formSubmit && <p className='success-message'>Thank you! Your message has been successfully sent.</p>
                    }
                    
                </div>
             </div>
        </div>
        </div>
    )
}

export default Contact