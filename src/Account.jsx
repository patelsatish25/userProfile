import React,{useState} from "react";
import AccInput from "./AccInput";
// import { upload } from "@testing-library/user-event/dist/upload";
// import { event } from "jquery";
function Account({onSubmit})
{
   const[from,newform]=useState({
    usernme:"",
    name:"",
    password:"",
    email:"",
    bio:"",
    birth:"",
    phone:"",
    img:"",
    action:"insert"
   })
   const [imageUrl, setImageUrl] = useState('my_img/profile_db.webp');

   function img1(e) {
    const file = e.target.files[0];
    
    newform(function(pre){
      
        return{
        username:pre.username,
        name:pre.name,
        password:pre.password,
         email:pre.email,
        bio:pre.bio,
        birth:pre.birth,
        phone:pre.phone,
        img:file,
        action:pre.action
        
      
        }
      
    })
    const reader = new FileReader();
    reader.onload = () => {
      setImageUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };
   function event(e)
    {
      
      newform(function(pre){
        if(e.target.name==="username")
        {
          return{
          username:e.target.value,
          name:pre.name,
          password:pre.password,
           email:pre.email,
          bio:pre.bio,
          birth:pre.birth,
          phone:pre.phone,
          img:pre.img,
          action:pre.action
        
          }
        }else if(e.target.name==="name")
        {
          return{
            username:pre.username,
            name:e.target.value,
            password:pre.password,
             email:pre.email,
            bio:pre.bio,
            birth:pre.birth,
            phone:pre.phone,
            img:pre.img,
            action:pre.action
            }
        }
        else if(e.target.name==="password")
        {
          return{
            username:pre.username,
            name:pre.name,
            password:e.target.value,
            email:pre.email,
            bio:pre.bio,
            birth:pre.birth,
            phone:pre.phone,
            img:pre.img,
            action:pre.action
            }
        }else if(e.target.name==="email")
        {
          return{
            username:pre.username,
            name:pre.name,
            password:pre.password,
             email:e.target.value,
            bio:pre.bio,
            birth:pre.birth,
            phone:pre.phone,
            img:pre.img,
            action:pre.action
            }
        }else if(e.target.name==="bio")
        {
          return{
            username:pre.username,
            name:pre.name,
            password:pre.password,
            email:pre.email,
            bio:e.target.value,
            birth:pre.birth,
            phone:pre.phone,
            img:pre.img,
            action:pre.action
            }
        }
        else if(e.target.name==="birth")
        {
          return{
            username:pre.username,
            name:pre.name,
            password:pre.password,
            email:pre.email,
            bio:pre.bio,
            birth:e.target.value,
            phone:pre.phone,
            img:pre.img,
            action:pre.action
            }
        }
        else if(e.target.name==="phone")
        {
          return{
            username:pre.username,
            name:pre.name,
            password:pre.password,
            email:pre.email,
            bio:pre.bio,
            birth:pre.birth,
            phone:e.target.value,
            img:pre.img,
            action:pre.action
            }
        }
      })
      
    }
    function submit(e){
    
      e.preventDefault();
      
      onSubmit(from);
     }
     function imgs2(e)
     {
      e.preventDefault();
     }
    return(
        <>
  <header id="header" className="header fixed-top d-flex align-items-center">
  <a href="index.html" class="icon" style={{fontSize:"25px",border:"none",backgroundColor:"white" }}>
          <i class="bi bi-arrow-left"></i>
          
        </a>
    <div className="d-flex align-items-center justify-content-between" style={{marginLeft:"10px"}}>
      <div  className="logo d-flex align-items-center">
         <span className="d-none d-lg-block">user-profile</span>
      </div>
     
    </div>
   
  </header>
  
  
  <main id="main" className="main">

  
    <section className="section profile">
    
      <div className="row" >
      
         <div className="col-xl-4">
          <div className="card" style={{marginTop:"150px",marginLeft:"10PX"}}>
            <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

              <img src={imageUrl} alt="Profile" id="profile_img" className="rounded-circle"/>
             <from enctype="multipart/form-data" onSubmit="file" method="post">
             <div className="social-links mt-2">
                <from encType="multipart/form-data" method="post">
              <input type="file" id="fileinput" style={{ display: 'none' }} onChange={img1}  />

             <button className="btn btn-primary btn-sm" title="Upload new profile image" type="submit" onClick={() => { document.getElementById('fileinput').click(); return false; }}>
                    <i className="bi bi-upload"></i>
                  </button>
                <input type="submit" style={{display:"none"}} id="file" onClick={imgs2}  />
                </from>
              </div>
              </from>
            </div>
          </div>
       </div> 

        <div className="col-xl-7 offset-xl-1">

          <div className="card">
            <div className="card-body pt-3">
        
              <ul className="nav nav-tabs nav-tabs-bordered">

                

                <li className="nav-item">
                  <p>create Profile</p>
                </li>

              

                

              </ul>
              <div className="tab-content pt-2">

                <div  id="profile-edit">

                 
                  <form  id="alldata"  method="POST" onSubmit={submit}>
                    

                    <AccInput msg="enter username" type="text" id="username" name="username"  for="username" onChange={event} value={from.username} pattern="{3,30}" title="Minimum 3chars and Max 30 Chars Only and pls charter" required/>
                    <AccInput msg="enter name" type="text" id="name" name="name" for="name" onChange={event} value={from.name} required/>
                   <AccInput msg="enter password" type="text" id="password" name="password" for="password" onChange={event} value={from.password} required/>
                    <AccInput msg="enter phone number" type="number" id="phone" name="phone" for="phone"onChange={event} value={from.phone}/>
                    <AccInput msg="enter bithday" type="date" id="birth" name="birth" for="birth"onChange={event} value={from.birth}/>
                    <AccInput msg="enter email email" type="email" id="email" name="email" for="email"onChange={event} value={from.email}/> 
                    
                

                     <div className="row mb-3">
                      <label for="bio" className="col-md-4 col-lg-3 col-form-label">bio</label>
                      <div className="col-md-8 col-lg-9">
                        <textarea name="bio" className="form-control" id="bio" style={{height: "100px"}} onChange={event} >{from.bio}</textarea>
                      </div>
                    </div> 
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary" id="save" name="up" onClick={() => { document.getElementById('file').click(); return false; }}>Save </button>
                    </div>
                  </form>
                
                </div>

               
                  
                

                

               

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  

  </main>

        </>
    )
}
export default Account;