import React from "react"
function AccInput(prop)
{

return(
<div className="row mb-3">
                      <label for={prop.for} className="col-md-4 col-lg-3 col-form-label">{prop.msg}</label>
                      <div className="col-md-8 col-lg-9">
                        <input name={prop.name} type={prop.type} className="form-control" id={prop.id} value={prop.value} onChange={prop.onChange} required={prop.required} pattern={prop.pattern} title={prop.title}/>
                      </div>
                    </div>
)
}
export default AccInput;