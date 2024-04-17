import { useState } from "react";

const SignUpForm = () => {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);
    const [dob, setDOB] = useState("");
    const [terms, setTerms] = useState(0);
   
   const setSignupDetails = (event) => 
   {
      event.preventDefault();
      console.log(username, password, email, phone, dob, terms);
   }

return (<div className="card">
   <form onSubmit={setSignupDetails}>
   <input type="text" value={username} placeholder="UserName" required onChange={(e) => setUserName(e.target.value)}/>
   <input type="password" value={password} placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
   <input type="email" value={email} placeholder="Email" required onChange={(e) => setEmail(e.target.value)}/>
   <input type="tel" value={phone} placeholder="Phone" onChange={(e) => setPhone(e.target.value)}/>
   <input type="date" value={dob} placeholder="DOB" onChange={(e) => setDOB(e.target.value)}/>
   <p>I agree to the TOS<input type="Checkbox" value={terms} required onChange={(e) => setTerms(e.target.value)}/></p>
   <button type="Submit">Sign In</button>
   </form>
</div>);
}

export default SignUpForm;
