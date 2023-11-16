import PrimaryButton from "@/Components/PrimaryButton";
import DropDownList from "./DropDownList";
import InputError from "@/Components/InputError";

export default function NewTodoRecord({processing, setData, data, errors}){
  const priorityOptions = [
    { value: '高', label: '高' },
    { value: '中', label: '中' },
    { value: '低', label: '低' }
  ];

  return(
    <tr>
      <td className="border-t-2 border-gray-200 px-4 py-3">
        <PrimaryButton disabled={processing} id={"submit_add_todo"}>＋</PrimaryButton> 
      </td>
      <td className={"border-t-2 border-gray-200 px-4 py-3"}>
        <input 
        id="title"
        type="textbox" 
        className="border-2 border-gray-200 px-4 py-2 w-full"
        value={data.title}
        placeholder="新規タスク"
        onChange={(e) => setData('title', e.target.value)}
        />
        <InputError className="mt-1" message={errors.title} />
      </td>
      <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
        <DropDownList 
        name={"priority"} 
        options={priorityOptions} 
        setData={setData}
        data={data}/>
      </td>
      <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">
        <input 
        id="due_date"
        type="date" 
        className="border-2 border-gray-200" 
        value={data.due_date}
        onChange={(e) => setData('due_date', e.target.value)}
        />        
        <InputError className="mt-1" message={errors.due_date} />
      </td>
    </tr>
  );
}