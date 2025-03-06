import React,{useState}  from "react";
 import FormInput from "./FormInput";
  
  
 
function Login_form({onSubmit,accunt}){

  const[form,newform]=useState({
    username:"",
    password:"",
    action:"submit"
  });
  // const[account,eventaaunt]=useState(null);
  function Submit(e){
     e.preventDefault();
   onSubmit(form)
  }
  function evnet(e)
    {
      
      newform(function(pre){
        if(e.target.name==="username")
        {
          return{
          username:e.target.value,
          password:pre.password,
          action:pre.action
          }
        }else if(e.target.name==="psw")
        {
          return{
            username:pre.username,
            password:e.target.value,
            action:pre.action
            }
        }
      })
      
    }
    // function accunt(e)
    // {
    //   e.preventDefault();
    //  eventaaunt("accunt");
    //  onclick(account);
    // }
    return(
       <>
       <main > 
    <div className="container">

      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              
              <div ></div>
    
              {/* <!-- End Logo --> */}
              <div className="d-flex justify-content-center py-4">
                <a href="index.html" className="logo d-flex align-items-center w-auto">
                  <img src="my_img/logo.png" alt="profile-logo"/>
                  <span className="d-none d-lg-block">user-profile</span>
                </a>
              </div>

              <div className="card mb-3">

                <div className="card-body">

                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                     <p className="text-center small">Enter your username & password to login</p>
                  </div>

                  <form className="row g-3 needs-validation" novalidate  method="post" onSubmit={Submit} >

                    <div className="col-12">
                      <FormInput label_val={"username"} labelmsg="username" type={"text"} name={"username"} id={"username"} placeholder="username"msg={"username"} onChange={evnet} value={form.username}/>                
                       </div>

                    <div className="col-12">
                    <FormInput label_val={"psw"} labelmsg="password" type={"password"} name={"psw"} id={"psw"} placeholder="password"msg={"password"} onChange={evnet} value={form.password}/>                

                    </div>

                    
                    <div className="col-12">
                      <button className="btn btn-primary w-100" type="submit" id="submit" name="submit">Login</button>
                    </div>
                    </form>
                    <div className="col-12">
                      <p className="small mb-0">Don't have user-profile account? <button style={{border:"none",color:"blue",backgroundColor:"white"}} onClick={accunt}>Create a user-profile</button></p>
                    </div>
                  

                </div>
              </div>

              
              </div>
     </div>
     </div>
    
     </section>
     </div>
     </main>
         

</>
       
       
    )
}

export default Login_form;