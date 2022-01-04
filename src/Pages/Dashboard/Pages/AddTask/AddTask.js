import React, { useRef,useState } from 'react';
import { Multiselect } from "multiselect-react-dropdown";

const AddTask = () => {
    const [options] = useState([
        { name: "Srigar", id: 1 },
        { name: "Sam", id: 2 }
      ]);
    const nameRef=useRef('');
    
    const taskName=nameRef.current.value;
    
    const multiselectRef = useRef('');
    const select=multiselectRef.current.value;

    const taskInfo={
       name:taskName,
       select: select
       
    }
   
    const submit=(e)=>{

        e.preventDefault()
        console.log(taskInfo);
    }
    return (
        <div>
            <h1>Add task here</h1>
            <form onSubmit={submit} >
            <div className="d-flex flex-md-row flex-column gap-0 gap-lg-5">
						<div className="my-3 w-25 add-product-input">
							<label htmlFor="formControlInput1" className="form-label">
								Task Name
							</label>
							<input
                               ref={nameRef}
								type="text"
								className="form-control"
								id="formControlInput1"
								placeholder="Enter your Task name..."
							/>
						</div>
						<div className="my-3 w-25 add-product-input">
							<label htmlFor="floatingTextarea2" className="form-label">
								Select your project type
							</label>
							<select
								className="form-select"
								aria-label="Default select example"
                              
							>
                                
								<option   value="Web Design">Web Design</option>
								<option    value="Web Development">Web Development</option>
								<option   value="React App">React App</option>
								<option    value="Next JS">Next JS</option>
							</select>
                          
						</div>
					</div>
                   <div>
                            <label htmlFor="floatingTextarea2" className="form-label">
								Assign user
							</label>
                            <Multiselect
                            className='w-25'
                                    options={options} // Options to display in the dropdown
                                    displayValue="name" // Property name to display in the dropdown options
                                    ref={multiselectRef}
                                />
                   </div>
                    <div>
						<div className="my-3 add-product-textarea">
							<label htmlFor="floatingTextarea2" className="form-label">
								Describe your requirements
							</label>
							<textarea
								className="form-control"
								placeholder="Describe here..."
								id="floatingTextarea2"
								style={{ height: "50px" }}
							></textarea>
						</div>
					</div>
                    <div className='text-center'>
                       <input  className='btn btn-danger ' type="submit" value="Added" />
                       <hr />
                    </div>

            </form>

                       

        </div>
    );
};

export default AddTask;