import { Button, Dialog, DialogActions, DialogContent, DialogTitle, InputLabel } from "@mui/material";
import DropDownList from "../Partials/DropDownList";
import { useForm } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import { useEffect } from "react";

export default function TodoEditDialog({open, handleClose, todoData, setOpen}){
  const { data, setData, post, processing, errors, reset, setDefaults} = useForm({
    id: '',
    title: '',
    priority: '',
    due_date: '',
});

  const priorityOptions = [
    { value: '高', label: '高' },
    { value: '中', label: '中' },
    { value: '低', label: '低' }
  ];

  useEffect(() => {
    if(open){
      setData(data => ({...data, id: todoData.id}));
      setData(data => ({...data, title: todoData.title}));
      setData(data => ({...data, priority: todoData.priority}));
      setData(data => ({...data, due_date: todoData.due_date}));
    }
  }, [open])

  const handleTodoUpdate = (e) => {    
    e.preventDefault();
    post(route('todos.edit'), {
      preserveScroll: true,
      onSuccess: () => {
        setOpen(false);
        reset();
    }});
  }

  return(
    open ?
    <Dialog open={open} onClose={() => handleClose(reset)} fullWidth={true} maxWidth="sm">
      <DialogTitle>タスク編集</DialogTitle>
      <DialogContent>
        <div>タスクのタイトル</div>
        <input 
        id="title"
        type="textbox" 
        className="border-2 border-gray-200 px-4 py-2 my-2 w-full"
        value={data.title}
        onChange={(e) => setData('title', e.target.value)}
        />
        <InputError className="mt-1" message={errors.title} />
        <div>優先度</div>
        <DropDownList 
        name={"priority"} 
        options={priorityOptions}
        setData={setData}
        todoData={todoData}
        data={data}
        />
        <div>期限</div>
        <input 
        id="due_date"
        type="date" 
        className="border-2 border-gray-200 my-2" 
        value={data.due_date}
        onChange={(e) => setData('due_date', e.target.value)}
        />        
        <InputError className="mt-1" message={errors.due_date} />
      </DialogContent>
      <DialogActions>
        <Button onClick={(e) => handleTodoUpdate(e)} disabled={processing}>更新</Button>
        <Button onClick={() => handleClose(reset)} disabled={processing}>キャンセル</Button>
      </DialogActions>
    </Dialog>
    :
    <>
    </>
  );
}