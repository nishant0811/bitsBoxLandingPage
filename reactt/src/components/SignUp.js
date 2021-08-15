import {useState} from 'react';

function SignUp(){
  const [email ,setEmail] = useState('');

  const handleChange = e =>{
    setEmail(e.target.value)
  }
  return (
    <div className="signup">
      <h1>STAY IN LOOP!</h1>
      <p>Join our email list for deals and news</p>
      <input type="text" name="email" value={email} placeholder="Email" onChange={handleChange} />
      <a href="/#">Join</a>
    </div>
  )
}

export default SignUp;
