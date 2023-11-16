import { router } from "@inertiajs/react";
import { useState } from "react";

export default function TodoListRecord({ element, onClick }){
  const [checkTask, setCheckTask] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [timerId, setTimerId] = useState(null);
  const [color, setColor] = useState("");  

  const handleCheckbox = (e) => { 
    if(timerId){
      clearTimeout(timerId);
      setTimerId(null);
    }

    if (e.target.checked){
      setCheckTask("line-through");
      const id = setTimeout(() => {        
        setIsVisible(false);
        e.preventDefault();              
        router.post('/todos/update', {id: element.id});
      }, 5000);
      setTimerId(id);
    }else{
      setCheckTask("");
      setIsVisible(true);
    }
  }

  const checkboxChecked = () => {
    if(element.status === 'done'){
      setIsVisible(false);
      return true;
    }else{
      return false;
    }
  }

  const handleRecordMouseOver = (e) => {
    setColor("whitesmoke");
  }

  const handleRecordMouseOut = (e) => {
    setColor("");
  }

  return(
    isVisible?
    <tr bgcolor={color} onMouseOver={(e) => handleRecordMouseOver(e)} onMouseOut={(e) => handleRecordMouseOut(e)} onClick={(e) => onClick(e, element)}>
      <td className="border-t-2 border-gray-200 px-4 py-3" id={element.id}>
        <input type="checkbox" id={element.id} defaultChecked={checkboxChecked()} onChange={(e) => handleCheckbox(e)}/>
      </td>
      <td className={`border-t-2 border-gray-200 px-4 py-3 ${checkTask}`} id={element.id}>{element.title}</td>
      <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900" id={element.id}>{element.priority}</td>                         
      <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900" id={element.id}>{element.due_date}</td>
    </tr>
    :
    <>
    </>
  );
}