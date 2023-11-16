import TodoList from "./Partials/TodoList";

export default function Index({ todo }){
  return(
    <div className="px-14 py-12">
    {
      <TodoList todo={ todo }/>
    }
    </div>
  );
}