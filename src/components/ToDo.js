
//import axios from "axios";
import React from 'react';
import { AiFillDelete } from "react-icons/ai";
import { BiEdit} from "react-icons/bi";
//import { baseURL } from "../utils/constant";

const ToDo = ({ text, updateMode, deleteToDo}) => {
 // const deleteTodo = () => {
   // axios.delete(`${baseURL}/delete/${id}`).then((res) => {
     // console.log(res.data);
      //setUpdateUI((prevState) => !prevState);
   // });
 // };

  //const updateToDo = () => {
   // setPopupContent({ text, id });
    //setShowPopup(true);
 // };

  return (
    <div className="todo">
        <div className="text">{text}</div>
      <div className="icons">
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteToDo} />
      </div>
    </div>
  )
}

export default ToDo
