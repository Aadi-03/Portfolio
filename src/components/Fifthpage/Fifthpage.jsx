import './Fifthpage.css';

const Fifthpage = () => {

        const handleSubmit = (e) => {
                e.preventDefault();
                if(e.target.form[0].value === '' || e.target.form[1].value === '' || e.target.form[2].value === ''){
                        if('@gmail.com' !== e.target.form[1].value.slice(-10) || e.target.form[1].value.slice(-10) === ''){
                                alert('Please enter a valid email address');
                        }
                        else alert('Please fill all the fields');
                }else{

                        alert('Message Sent Successfully');

                        e.target.form[0].value = '';
                        e.target.form[1].value = '';
                        e.target.form[2].value = '';

                }


        }


        return (
                <div className="fifthpage">
                        <div className="container">
                                <div className="title">
                                        <h1>Chat With Me</h1>
                                        <div className="line"></div>
                                </div>
                                <form action="">
                                        <input type="text" name="name" placeholder='Your Name' required/>
                                        <input type="email" name="email" placeholder='Your Email' required />
                                        <textarea name="message" id="" placeholder='Your Message' required></textarea>
                                        <button onClick={handleSubmit}>Send</button>
                                </form>
                        </div>
                </div>

        )
}

export default Fifthpage;