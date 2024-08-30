import { useState } from "react";


function Signup(){

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage]= useState("");
    const [error,setError]=useState(false);


   

    function onFormDataChange(e){

        const id=e.target.id;

        if(id==="userId"){
            setUserId(e.target.value);
        }
        else if(id==="password"){
            setPassword(e.target.value);
        }

    }

    function clearState(){
        setMessage("");
    }

    function onSignIn(e){
        e.preventDefault();
        clearState();
        // console.log(userId,password);
        if(userId.length<5){
            setError(true);
            setMessage("Less then 5 chrectare userId");
            return;
        }
        if(password.length<5){
            setError(true);
            setMessage("Less then 5 chrectare pasword");
            return;
        }
        setMessage("login Sucesful")
        setError(false);
    }

    return <div className="bg-info d-flex justify-content-center align-items-center vh-100" >

        <div style={{width:"30rem"}} className="card p-3 rounded-4 shadow-lg text-center">

            <h4 className="text-info " > SignIn </h4>

            <form onSubmit={onSignIn}>

                <div className="input-group" >
                    <input className="form-control m-1" onChange={onFormDataChange} value={userId} type="text" id="userId" placeholder="User Id"/>
                </div>


                <div  className="input-group" >
                    <input className="form-control m-1"  onChange={onFormDataChange} value={password} type="password" id="password" placeholder="Password"/>
                </div>


                <div  className="input-group" >
                    <input  className="btn btn-info text-white form-control m-1" type="submit" value="Sign In" />
                    </div>
            </form>
            <div className={(error) ? "text-danger":"text-success" } >{message}</div>
        </div>
       </div>

}
export default Signup;