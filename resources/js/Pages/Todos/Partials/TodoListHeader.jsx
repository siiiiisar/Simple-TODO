import InputError from "@/Components/InputError";

export default function TodoListHeader(errors){
  return(
    <thead>
    <tr>
      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100"></th>
      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">タスクのタイトル</th>      
      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">優先度</th>                        
      <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">期限</th>
    </tr>
  </thead>
  );
}