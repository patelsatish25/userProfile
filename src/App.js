import React ,{useState}from "react";
import LoginForm from "./Login_form";
 import Profile from "./Profile";
 import Account from './Account.jsx';
// import Createacunt from "./Createacunt.JSX";
import Editprofile from "./Editprofile";


 import $ from 'jquery';


function App() {
  
    const[userdata,setuserdata]=useState({
   username:"",
    name:"",
    Profile_img:"",
   phone:"",
    bio:"",
   email:"",
   birth:"",
   password:""
    })
    const[user,newuser]=useState("");
    console.log(user);

     console.log(user);
   function acc()
    {
   $("#account").show();
   $("#login").hide();
    }
   function update(data)
   {

    
      const formData = new FormData();
      formData.append('user',user);
      formData.append('username',data.username);
      formData.append('name',data.name);
       formData.append('password',data.password);
      formData.append('email',data.email);
      formData.append('bio',data.bio);
      formData.append('birth',data.birth);
       formData.append('phone',data.phone);
      formData.append('img',data.img);
      formData.append('action',data.action);
    

       if(formData.get('username')!=="undefined")
     {
      
      backand(formData);
     }else
     {
       console.log("no data");
      }
     
   }
    function edit(data)
   {
     $("#profile").hide();
     $("#edit").show();
    //  console.log(data)
   }

   //accunt delete
   function del()
   {
    // const userResponse = confirm("Are you sure?");
    if (window.confirm("are you sore delete profile")) {
       const formData = new FormData();
       formData.append('action','del');
       formData.append('user',user);
       backand(formData);
    } 
  
    // console.log("Alert button clicked");
  
   
    
   }
   function backprofile(){
    $("#edit").hide();
    $("#profile").show();
   }
    
  return(
    <>
                <div id="login">

               
                 <LoginForm onSubmit={login} accunt={acc}/>
                 </div>
                  <div id="profile" style={{display:"none"}}>
                 <Profile 
                   props={userdata}
                   edit={edit} 
                   del={del}
                   />
                   
                 </div>  
                  <div id="account" style={{display:"none"}}>
                 <Account onSubmit={account}/>  
                </div>  
                <div  id="edit" style={{display:"none"}}>
                 <Editprofile  
                    Props={userdata}
                    onSubmit1={update}
                    back={backprofile}
                 />
                </div>
     </>
  )

   function account(data)
   {
    
    const formData = new FormData();
  
    formData.append('username',data.username);
    formData.append('name',data.name);
     formData.append('password',data.password);
     formData.append('email',data.email);
    formData.append('bio',data.bio);
      formData.append('birth',data.birth);
     formData.append('phone',data.phone);
     formData.append('img',data.img);
     formData.append('action',data.action);

      if(formData.get('username')!=="undefined")
     {
      
     backand(formData);
     }else
    {
      console.log("no data");
     }
     
  }
   function login(data)
   {
    const formData = new FormData();
    
     formData.append('username',data.username);
     formData.append('password',data.password);
    formData.append('action',data.action);
     backand(formData);
    
   }
  
   function backand(formData) {
    $.ajax({
       url: 'http://localhost/mp/backand/db.php',
       type: 'POST',
     data: formData,
     contentType: false,
     processData: false,
     success: function(response)
      {
        if(formData.get('action')==="insert")
       {
      //  console.log(response.count);
       if(response.count===0)
        {
         setuserdata({
              username:response.$username,
               name:response.$name,
              Profile_img:response.$img,
              phone:response.$phone,
              bio:response.$bio,
              password:response.$password,
               email:response.$email,
              birth:response.$birth

          }) 
          newuser(response.$username);
          
        $('#account').hide();
       $('#profile').show();
         
     }else
     {
       alert("username already exists please new username");
      }
    }else if(formData.get('action')==="submit")
   {
     if(response.$count > 0)
     {
  
      setuserdata({
         username:response.$username,
         name:response.$name,
         Profile_img:response.$img,
         phone:response.$phone,
         bio:response.$bio,
         password:response.$password,
         email:response.$email,
        birth:response.$birth

    }) 
    newuser(response.$username);
    $('#login').hide();
     $('#profile').show();
           
     }else
    {
      alert("invalid username or password")
    }   
    }else if(formData.get('action')==="edit")
    {
       if(response.count===0)
       {
        setuserdata({
          username:response.username,
          name:response.name,
          Profile_img:response.img,
          phone:response.phone,
          bio:response.bio,
          password:response.password,
          email:response.email,
         birth:response.birth
 
     })
     newuser(response.username);
       $("#edit").hide();
       $("#profile").show();
        
       }else
       {
        alert("username already exists please new username");
       }
    }else if(formData.get('action')==="del")
    {
      //  window.Location.relode();
       window.location.reload();
    }
     },
    
    });
 }
  
}


export default App;