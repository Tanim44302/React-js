import React, { useState } from 'react'
import Btn from './Btn'
import { FiFolderPlus } from "react-icons/fi";
import Swal from 'sweetalert2';


const AddTodo = ({setTodos}) => {
  const [input, setInput] = useState("");

  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });


//* FORM SUBMIT -- ADD TODO 

const formSubmit = (e)=>{
  e.preventDefault();
  if(input.length <=3){
    Toast.fire({
      icon: "error",
      title: "Please type min 4 character"
    });
    return false
  }

   setTodos(prev => [input,...prev] );

   setInput('')

   
  Toast.fire({
    icon: "success",
    title: "Todo successfully added"
  });
  


}



  return (
    <div className="card">
        <div className="card-body">

          <form onSubmit={formSubmit}>
        <div className="d-flex shadow">
        <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
         type="text" 
         placeholder='Add Todo'
         className='form-control border-3' />

        <Btn className="col-4 btn-dark">
            Add Todo <FiFolderPlus/> 
            </Btn>


         </div>
         </form>
        </div>
    </div>
  )
}

export default AddTodo
