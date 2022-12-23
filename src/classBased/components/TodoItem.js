import React from "react";
import styles from "./TodoItem.module.css"

export default class TodoItem extends React.Component {

state = {
    editing: false,
      
}
handleEditing = () => {
    this.setState({
      editing: true,
    })
  }
  handleUpdatedDone = event => {
    if (event.key === "Enter") {
        this.setState({ editing: false })
      }
  }
    render () {
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
          }
        const { completed, id, title } = this.props.todo;
        let viewMode = {}
        let editMode = {}

        if (this.state.editing) {
        viewMode.display = "none"
        } else {
        editMode.display = "none"
        }
        return (
            <li className={styles.item}>
                <div onDoubleClick={this.handleEditing} style={viewMode}>
                    <input checked={completed}
                    type= "checkbox" 
                    className={styles.checkbox}
                    onChange={() => this.props.handleChangeProps(id)}/>
                    <button onClick={() => this.props.deleteTodoProps(id)}>
                        Delete
                    </button>
                    <span style={completed ? completedStyle : null}>
                        {title}
                    </span>
                </div>
                <input type="text"
                style={editMode} value={title}
                onChange={e => {
                    this.props.setUpdate(e.target.value, id)
                  }}
                className={styles.textInput}
                onKeyDown={this.handleUpdatedDone} 
                />
            </li>
        )
    }
}