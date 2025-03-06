import React from "react";
function PostImg(props)
{
    return(
        <>
           <div className="card col-xl-3 "  style={{marginTop:"50px"}}>
               <nav class="header-nav ms-auto">
                 <ul class="d-flex align-items-center">
                     <li class="nav-item dropdown pe-3">
                        <div class="icon" data-bs-toggle="dropdown">
                        <i class="bi bi-three-dots-vertical" style={{fontSize:"1.8em",marginTop:"5px"}}></i>
                        </div>

                         <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">  
                           <li>
                             <hr class="dropdown-divider"/>
                          </li>
                           <li>
                           <button style={{border:"none"}} id={props.id} name={props.name} class="dropdown-item d-flex align-items-center" onClick={props.onClick} >           
                          <span>delete </span>
                        </button>
                         </li>
                         </ul>
                     </li>
                 </ul>
                </nav>
      
             <div  style={{marginTop:"20px"}}>
            <img src={props.src} alt="postimg" className="card-img-top" width="100px" height="400px"/>
           </div>
           </div>
        </>
    )
}
export default PostImg;