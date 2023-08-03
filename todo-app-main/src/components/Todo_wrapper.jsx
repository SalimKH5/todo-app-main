import React, { useState } from 'react'
import Close from "../images/icon-cross.svg"
const Todo_wrapper = ({filterTodos,id,Mode,todos,setTodos,text_in,complete,darkMode}) => {

    
    const [inputTodo,setInputTodo]=useState('')
    const handleSubmit=()=>{
            if(inputTodo!==""){
                setTodos([...todos,
                {
                    id:parseInt(todos.length+1),
                    text:inputTodo,
                    complete:false,
                }
                ])
             setInputTodo('')   
            }
    }
    const handleRemoveItem = (index) => {
        const updatedData = [...todos]; // Create a copy of the data array
        updatedData.splice(index, 1); // Remove the item at the specified index
        setTodos(updatedData); // Update the state with the new data array
        
    };

    const handleComplete=(index,complete)=>{
    const newArray = [...todos];

    // Update the element at the specified index with the new value
    newArray[index] = {
        id:index,
        text:newArray[index].text,
        complete:complete,
    };
    setTodos(newArray)
    }
    
    
    
  return (
    <div className={!darkMode?"todo-center todo-center-light":"todo-center todo-center-dark"}>
        {
            Mode?
        <div className="radio-complete" onClick={handleSubmit}>
          
          <div className="radioC" >

          </div>
        </div>
        :
        complete?
        <div className="radio-complete" onClick={()=>handleComplete(id,false)}>
          
          <div className="radioC CheckRadio">

          </div>
        </div>
        :
        <div className="radio-complete" onClick={()=>handleComplete(id,true)}>
          
        <div className="radioC">

        </div>
      </div>

        }
        
        {Mode?
        <input id="input-todo" value={inputTodo} onChange={(e)=>setInputTodo(e.target.value)} type="text" placeholder="Add some note"/>
        :
        <>
        {complete?
        <p className={!darkMode?"Checktext todo-texte todo-text-dark":"todo-texte todo-text-lightd  Checktext"}>{text_in}</p>
        :
        <p className={!darkMode?"todo-texte todo-text-dark":"todo-texte todo-text-lightd"}>{text_in}</p>
        }
        <img className="close-icon" src={Close} onClick={()=>handleRemoveItem(id)} alt=""/>
        </>
        }
    </div>
  )
}

export default Todo_wrapper