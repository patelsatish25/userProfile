import React from "react";
function FormInput(prop)
{
     return (
        < >
        <label for={prop.label_val} className="form-label">{prop.labelmsg}</label> 
        <div className="input-group has-validation">
          
        <input type={prop.type} name={prop.name} className="form-control" id={prop.id} placeholder={prop.placeholder} required  onChange={prop.onChange} value={prop.value} />
      <div className="invalid-feedback">{prop.msg}</div>
   <hr/>
</div>
</>

     )
}
export default FormInput;