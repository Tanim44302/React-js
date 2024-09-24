import React from 'react'
import Btn from './Btn'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";



const Todo = ({todo, index}) => {

  return (
    <div className='card shadow p-3 mb-2'>
        <div className='row'>

          <div className='col-8'>
            <h5> {++index}. {todo} </h5>

          </div>
          <div className='col-4 text-end'>
            <div className='btn-group'>

                <Btn className='btn-sm btn-warning'>
                    <FaEdit />
                </Btn>

                <Btn className='btn-sm btn-danger'>
                    <MdDelete />
                </Btn>
            </div>
          </div>


        </div>
    
    </div>
  )
}

export default Todo
