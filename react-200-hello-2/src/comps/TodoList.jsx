import TodoItem from "./TodoItem";
const TodoList = (props) => {
  // props로부터 todoList를 수신!
  const { todoList } = props;

  // todoList 배열을 map(forEach)을 반복문으로 반복하면서
  // 각각의 요소를 TodoItem에 item 변수에 담아 보내고
  // 생성된 TodoItem 요소들을 모아서 _tempTodoList를 생성하기
  const _tempTodoList = todoList.map((todo) => {
    const todo_td = <TodoItem todo={todo} />;
    return todo_td;
  });

  return (
    <table className="w3-table w3-table-all">
      <thead>{_tempTodoList}</thead>
    </table>
  );
};

export default TodoList;
