import React, { useEffect, useState } from 'react'
import Todo_wrapper from './components/Todo_wrapper'
import Theme_dark from "./images/icon-moon.svg"
import Theme_light from "./images/icon-sun.svg"
const App = () => {

  const [todos,setTodos]=useState([])
  const [filterTodos,setFilterTodos]=useState(todos);

  const [darkMode,setDarkModeMode]=useState(false)
  
  useEffect(()=>{
    setFilterTodos(todos)
  },[todos])

  const swithTheme=(darkMode)=>{
    if(darkMode){
      setDarkModeMode(false)
    }else{
      setDarkModeMode(true)
    }
  }
  
  const All_items=()=>{
    setFilterTodos(todos)
  }

  const setActive=()=>{
    setFilterTodos(todos.filter((todo)=>todo.complete===false))
  }

  const setComplete=()=>{
    setFilterTodos(todos.filter((todo)=>todo.complete===true))
  }

  const clear_complet=()=>{
    setTodos([])
  }

  
  

  return (
    <>
    <div 
        className={!darkMode ?"home-container theme-light":"home-container theme-dark"}>
        <div className="home-content">
            <div className={!darkMode?"background-container  background-light":"background-container background-dark"}>
            </div>
      
      <div className="todo-container">
        <div className="todo-header">
            <div className="todo-logo">
              <h1>TODO</h1>
            </div>
            {darkMode?
              <div className="switcher-theme" onClick={()=>swithTheme(true)}>
                <img src={Theme_light} alt="Theme" />
            </div>
              :
              <div className="switcher-theme" onClick={()=>swithTheme(false)}>
                <img src={Theme_dark} alt="Theme" />
              </div>
            }
        </div>
        <Todo_wrapper filterTodos={filterTodos} Mode={true} todos={todos} setTodos={setTodos} darkMode={darkMode}/>
        
        <div className="todo-bottom">
        {
          filterTodos?.map((todo,index)=>(
            <Todo_wrapper id={index} darkMode={darkMode}  todos={todos} setTodos={setTodos} key={index} Mode={false} text_in={todo.text} complete={todo.complete}/>
          )
          )
        }
        
          <div className={!darkMode?'todo-options-wrapper todo-center-light':"todo-options-wrapper todo-center-dark"}>
                  <div className="option-content">
                      <div className="option-left">
                        <p>{todos.length} items left</p>
                      </div>
                      <div className="option-center">
                          <p onClick={All_items}>All</p>
                          <p onClick={setActive}>Active</p>
                          <p onClick={setComplete}>Completed</p>
                      </div>
                      <div className="option-right">
                        <p onClick={clear_complet}>Clear Completed</p>
                      </div>
                  </div>

          </div>
          <div className={!darkMode?'todo-options-wrapper-mobile todo-center-light':"todo-options-wrapper-mobile todo-center-dark"}>
                <div className="option-center-mobile">
                                <p onClick={All_items}>All</p>
                                <p onClick={setActive}>Active</p>
                                <p onClick={setComplete}>Completed</p>
                </div>
          </div>
        </div>
      </div>
      </div>
      </div>
      <div className={!darkMode?"attribution theme-light":"attribution theme-dark"}>
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
            Coded by <a href="#">Your Name Here</a>.
          </div>

  </>
  )
}

export default App