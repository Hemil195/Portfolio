import React, { useState } from 'react';
import '../styles/Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [inputvalue, setInputvalue] = useState({
    fname: '',
    lname: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const getvalue = (e) => {
    const { name, value } = e.target;
    setInputvalue(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sentUserdata = async (e) => {
    e.preventDefault();
    const { fname, lname, email, mobile, message } = inputvalue;

    if (!fname) {
      toast.error('First name is required');
    } else if (!lname) {
      toast.error('Last name is required');
    } else if (!email) {
      toast.error('Email is required');
    } else if (!email.includes('@')) {
      toast.error('Invalid email');
    } else if (!mobile) {
      toast.error('Mobile number is required');
    } else {
      setIsLoading(true);
      try {
        const res = await fetch('http://localhost:6002/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            fname,
            lname,
            email,
            mobile,
            message
          })
        });

        const data = await res.json();

        if (data.status === 201) {
          toast.success('Your response has been submitted!');
          setInputvalue({
            fname: '',
            lname: '',
            email: '',
            mobile: '',
            message: ''
          });
        } else {
          toast.error(data.message || 'Something went wrong');
        }
      } catch (error) {
        toast.error('Failed to send message. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="contact-container section fade-slide-up">
      <h2 className="contact-title">Contact Us</h2>
      <form className="contact-form" onSubmit={sentUserdata}>
        <div className="form-group">
          <label htmlFor="fname">First Name</label>
          <input type="text" name="fname" id="fname" value={inputvalue.fname} onChange={getvalue} disabled={isLoading} />
        </div>

        <div className="form-group">
          <label htmlFor="lname">Last Name</label>
          <input type="text" name="lname" id="lname" value={inputvalue.lname} onChange={getvalue} disabled={isLoading} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={inputvalue.email} onChange={getvalue} disabled={isLoading} />
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile</label>
          <input type="text" name="mobile" id="mobile" value={inputvalue.mobile} onChange={getvalue} disabled={isLoading} />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" rows="4" value={inputvalue.message} onChange={getvalue} disabled={isLoading}></textarea>
        </div>

        <div className="form-button">
          <button type="submit" className="button" disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Submit'}
          </button>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Contact;
