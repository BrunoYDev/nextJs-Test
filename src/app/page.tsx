import TodoCreateForm from "@/components/TodoCreateForm/TodoCreateForm";
import TodoList from "@/components/TodoList/TodoList";

export default function Home() {
  return (
    <div>
      <TodoCreateForm />
      <TodoList />
      <a href="https://twitter.com/YkkoSz">Rede Social Do Passaro</a>
    </div>
  )
}
