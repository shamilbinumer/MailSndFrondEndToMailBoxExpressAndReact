// import nodemailer  from 'nodemailer';
import axios from 'axios';
import './App.css'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
      const [to, setTo] = useState("");  
      const [subject, setSubject] = useState("");
      const [message, setMessage] = useState("");

      const handleSubmit =async (e) => {
        e.preventDefault()
        const res= await axios.post("http://localhost:3030/api/send",{to,subject,message})
        if(res.status==200){
          toast.success('Email Send successfully', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            // transition: Zoom,
          });
        }
      };

  return (
    <>
     <ToastContainer/>
   <div className="caard">
   <form onSubmit={handleSubmit}>
          <input 
            type="email"
            placeholder="To"
            value={to}
            onChange={(e) => setTo(e.target.value)}  
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}  
          />
          <textarea 
            rows="3"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}  
          ></textarea>
          <button type="submit">Send Email</button>
        </form>
   </div>
        
    </>
  )
}

export default App
