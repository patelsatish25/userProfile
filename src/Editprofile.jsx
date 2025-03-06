import React,{useState,useEffect} from "react";
import AccInput from "./AccInput";
// import { upload } from "@testing-library/user-event/dist/upload";
// import { event } from "jquery";
function Editprofile({onSubmit1,Props,back})
{
   
   const[from,newfrom1]=useState({
    username: Props.username,
    name:Props.username,
    password:Props.password,
    email:Props.email,
    bio:Props.bio,
    birth:Props.birth,
    phone:Props.phone,
    img:Props.Profile_img,
    action:"edit"
   })

   useEffect(() => {
    newfrom1(prevState => ({
        ...prevState,
        username: Props.username,
        name:Props.name,
         password:Props.password,
        email:Props.email,
        bio:Props.bio,
        birth:Props.birth,
       phone:Props.phone,
       img:Props.Profile_img,
       action:"edit"
    }));
    setimag1(prevState =>(Props.Profile_img))
}, [Props]);
  //  console.log("from  "+from)
   
   const [imag1, setimag1] = useState('my_img/profile_db.webp');
  
   function editimg(e) {
    const file1 = e.target.files[0];
    
    newfrom1(function(pre){
      
        return{
        username:pre.username,
        name:pre.name,
        password:pre.password,
         email:pre.email,
        bio:pre.bio,
        birth:pre.birth,
        phone:pre.phone,
        img:file1,
        action:pre.action
        
      
        }
      
    })
    const reader = new FileReader();
    reader.onload = () => {
      setimag1(reader.result);
    };
    reader.readAsDataURL(file1);
  
  };
   function event(e)
    {
      
      newfrom1(function(pre){
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
      // console.log(from)
      onSubmit1(from);
     }
     function imgs12(e)
     {
      e.preventDefault();
     }
    return(
        <>
    
  <header id="header" className="header fixed-top d-flex align-items-center">

  <button class="icon" style={{fontSize:"25px",border:"none",backgroundColor:"white",color:"blue" }} onClick={back}>
          <i class="bi bi-arrow-left"></i>
          
        </button>
    <div className="d-flex align-items-center justify-content-between" style={{marginLeft:"10px"}}>
      <div  className="logo d-flex align-items-center">
         <span className="d-none d-lg-block">user-profile</span>
      </div>
     
    </div>
   
  </header>
  <main id="main" className="main">
    <section className="section profile">
      <div className="row">
         <div className="col-xl-4">
          <div className="card" style={{marginTop:"150px",marginLeft:"10PX"}}>
            <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

              <img src={imag1} alt="Profile" id="profileimg" className="rounded-circle"/>
             <from enctype="multipart/form-data" onSubmit="file" method="post">
              <div className="social-links mt-2">
                <from encType="multipart/form-data" method="post">
              <input type="file" id="filei" style={{ display: 'none' }} onChange={editimg}  />

             <button className="btn btn-primary btn-sm" title="Upload new profile imag1" type="submit" onClick={() => { document.getElementById('filei').click(); return false; }}>
                    <i className="bi bi-upload"></i>
                  </button>
                <input type="submit" style={{display:"none"}} id="file1" onClick={imgs12}  />
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
                  <p>edit Profile</p>
                </li>

              

                

              </ul>
              <div className="tab-content pt-2">

                <div  id="profile-edit">

                 
                  <form  id="alldata"  method="POST" onSubmit={submit}>
                    

                   <AccInput msg="username" type="text" id="username1" name="username"  for="username" onChange={event} value={from.username}/>
                    <AccInput msg="name" type="text" id="name1" name="name" for="name" onChange={event} value={from.name}/>
                   <AccInput msg="password" type="text" id="password1" name="password" for="password" onChange={event} value={from.password}/>
                    <AccInput msg="phone number" type="number1" id="phone" name="phone" for="phone"onChange={event} value={from.phone}/>
                    <AccInput msg="bithday" type="date" id="birth1" name="birth" for="birth"onChange={event} value={from.birth}/>
                    <AccInput msg="email" type="email" id="email1" name="email" for="email"onChange={event} value={from.email}/> 
                    
                

                     <div className="row mb-3">
                      <label for="bio" className="col-md-4 col-lg-3 col-form-label">bio</label>
                      <div className="col-md-8 col-lg-9">
                        <textarea name="bio" className="form-control" id="bio1" style={{height: "100px"}} onChange={event} >{from.bio}</textarea>
                      </div>
                    </div> 
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary" id="edit" name="up" onClick={() => { document.getElementById('file1').click(); return false; }}>edit </button>
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
export default Editprofile;