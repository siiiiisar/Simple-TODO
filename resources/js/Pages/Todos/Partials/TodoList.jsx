import { Head, useForm } from "@inertiajs/react";
import NewTodoRecord from "./NewTodoRecord";
import TodoListHeader from "./TodoListHeader";
import TodoListRecord from "./TodoListRecord";
import { useState } from "react";
import TodoEditDialog from "../components/TodoEditDialog";

export default function TodoList({todo}){
  const { data, setData, post, processing, errors, reset} = useForm({
    title: '',
    priority: '中',
    due_date: '',
});

  const [open, setOpen] = useState(false);
  const [recordData, setRecordData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route('todos.store'), {
      preserveScroll: true,
      onSuccess: () => {
        reset();
    }});
  }

  const handleRecordClick = (e, element) => {
    if(e.target.type !== 'checkbox'){
      setRecordData(element);
      setOpen(true);
    }
  }

  const handleClose = (reset) => {
    setOpen(false);
    reset();
  }

  return(
    <>
      <Head title="Welcome" />
      <form onSubmit={handleSubmit}>
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <TodoListHeader/>
          <tbody>
          <NewTodoRecord 
          data={data}
          setData={setData}
          processing={processing}
          errors={errors}/>
          {
            todo.map((element) => (              
              <TodoListRecord 
              key={element.id} 
              element={element} 
              setOpen={setOpen}
              onClick={handleRecordClick}
              />      
            ))
          }
          </tbody>
        </table>
      </form>
      <TodoEditDialog
      open={open}
      handleClose={handleClose}
      todoData={recordData}
      setOpen={setOpen}
      />
    </>
  );
}