import React,{useState,useEffect} from "react";
 import PostImg from "./PostImg";
 import $ from 'jquery';
function Profile({edit,props,del})
{
  // const savepostCallback = useCallback(savepost, [savepost]);
  // const [buttonClicked, setButtonClicked] = useState(false);
  const [ipost, newpost] = useState({
    username:props.username,
   
    action: "ipost",
    
  });
  const[rpost,newrpost]=useState(null);
  useEffect(() => {
    newpost(prevState => ({
        ...prevState,
        username: props.username,
       action:"ipost"
    }));
},[props]);
useEffect(() => {
  if(ipost.username)
  {
      const formData = new FormData();
       formData.append('username',ipost.username); 
       formData.append('action',"reciv");
       savepost(formData);
  }
},[ipost]);

// const [imag1, setimag1] = useState();
   function imgs(e) {
    const file1 = e.target.files[0];
    
    
    const formData = new FormData();
       formData.append('username',ipost.username);
       formData.append('img',file1);
       formData.append('action',ipost.action);
       

   savepost(formData);
  };
  // function fn(a)
  // {
  //   console.log(a.getAll('img'));
    
  //   console.log(a.getAll('username'));
  //   console.log(a.getAll('action'));
  // }




   function logout()
   {
    window.location.reload();
   }
   const[img2,newimg2]=useState("my_img/profile_db.webp")
   useEffect(() => {
    if(props.img2 ==="")
    {
    }else
    {
      newimg2(
        
      
        props.Profile_img
        
     );
    }
    
}, [props]);


    return (
        <>
        

<header id="header" class="header fixed-top d-flex align-items-center">

<div class="d-flex align-items-center justify-content-between">
  <a href="index.html" class="logo d-flex align-items-center">
   
    <span class="d-none d-lg-block">users-profile</span>
  </a>
</div>



<nav class="header-nav ms-auto">
  <ul class="d-flex align-items-center">


    <li class="nav-item dropdown pe-3">

      <button class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown" style={{border:"none"}}>
        <img src={img2} alt="Profile" class="rounded-circle"/>
        <span class="d-none d-md-block dropdown-toggle ps-2">{props.username}</span>
      </button>

      <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
        <li class="dropdown-header">
          <h6>{props.username}</h6>
          <span>{props.name}</span>
        </li>
        <li>
          <hr class="dropdown-divider"/>
        </li>

        <li>
          <button style={{border:"none"}} onClick={del}  class="dropdown-item d-flex align-items-center" >
            
            <span>delete account</span>
          </button>
        </li>
        <li>
          <hr class="dropdown-divider"/>
        </li>
        <li>
          <button style={{border:"none"}} onClick={logout} class="dropdown-item d-flex align-items-center">
           
            <span >log Out</span>
          </button>
        </li>

      </ul>
    </li>

  </ul>
</nav>

</header>
    <main id="main" className="main" style={{marginLeft:"40px"}}>
<section className="section profile">
  <div className="row">
    <div className="col-xl-3" >

      <div className="card" style={{marginTop:"50px"}}>
        <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

          <img src={img2} alt="Profile" className="rounded-circle"/>
          <h2>{props.username}</h2>
          <h3>{props.name}</h3>
          
        </div>
      </div>

    </div>
    

    <div className="col-xl-9 ">

      <div className="card" style={{marginTop:"50px"}}>
        <div className="card-body pt-3">
         
              <div className="row">
                <div className="col-lg-12 col-md-12 "><h3>{props.name}</h3></div>
               
               
              </div>
              
              <div className="row">
                <div className="col-lg-12 col-md-12 "><h3>{props.birth}</h3></div>
               
              </div>
             

              <div className="row">
                <div className="col-lg-3 col-md-4 "><h3>{props.phone}</h3></div>
                
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12"><h3>{props.bio}</h3></div>
                
              </div>
              <div className="row">
                <div className="col-lg-12 col-md-12 "><h3>{props.email}</h3></div>
               
                
              </div>
            
            

            </div>

            </div>

            <div className="col-lg-12 col-md-12 "><button type="submit" class="btn btn-primary" onClick={edit} >edit profile</button></div>
          

        
      </div>
      

    
  </div>
</section>
<section className="post phots">
<input type="file" id="postimg" style={{ display: 'none' }} onChange={imgs}/>
<div className="col-lg-12 col-md-12" style={{marginTop:"20px"}}>
  <button type="submit" class="btn btn-primary" onClick={() => { document.getElementById('postimg').click(); return false; }} >post_img</button>
  </div>

  <div className="row">
   
    

    <div className="col-xl-12 ">
      <div className="row">
      {/* {rpost.map((rpost) => (
          // <li key={rpost.id}>{rpost.username}</li>
          <PostImg src={rpost.postimg}/>

          
        ))} */}
         {
  rpost != null &&
  rpost.map((rpost) => (
    // <li key={post.id}>{post.username}</li>
    //  <PostImg src={post}/>
     <PostImg src={rpost.postimg} id={rpost.id} name={rpost.postimg} onClick={deletepost}/>

  ))
} 
      
     </div>
     </div>
  </div>
</section>

</main>
       </>
    )

     function deletepost(e)
     {
      const id = e.target.id;
      const name = e.target.name;
      const formData = new FormData();
       formData.append('id',id);
       formData.append('name',name);
       formData.append('action',"dpost");
       formData.append('username',ipost.username);
       savepost(formData);
    }
     function savepost(formData)
    {
      $.ajax({
        url: 'http://localhost/mp/backand/db.php',
      type: 'POST',
      data:formData,
      contentType: false,
      processData: false,
     success: function(response)
       {
        if(formData.get('action')==="ipost")
         {
          console.log(response);
          newrpost(response);
        }else if(formData.get('action')==="reciv")
         {
          newrpost(response);
           
          
        }else if(formData.get('action')==="dpost")
        {
          newrpost(response);
          // console.log(response)
          // newrpost(response);
          // console.log(response)

        }
       }
      })
     }
    
   
}
export default Profile;