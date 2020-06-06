import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from "../actions/todoActions";

const AddTodo = ({ dispatch }) => {
    let input

    return (
       <div style={{
         display : "flex",
         flexDirection : "row",
         marginBottom : '20px'
        }}>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input ref={node => input = node} style={{
          padding :"10px",
          marginRight:'20px'
          }} />
        <button style={{
          padding : "10px",
          border : "none",
          outline : "none",
          cursor : "pointer",
          backgroundColor : "#ee91bc",
          color : "white"
        }} type="submit">
          Add Todo
        </button>
      </form>
    </div>
    )
}


export default connect()(AddTodo)
