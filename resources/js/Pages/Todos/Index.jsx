import { Head } from "@inertiajs/react";
import TodoList from "./Partials/TodoList";

export default function Index({ todo }){
  return(
    <>
      <Head title="TODO" />
      <div className="px-14 py-12">
      {
          <TodoList todo={ todo }/>      
      }
      </div>
    </>
  );
}