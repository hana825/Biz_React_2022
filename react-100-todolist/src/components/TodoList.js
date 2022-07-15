import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  const { todoList, todo_delete, todo_complete } = props;
  /*
bucketList 배열을 forEach하여 각 배열의 요소를 내부함수로 전달하고 
내부함수에서 연산을 수행한 후 return을 하면 
그 결과를 모두 모아서 새로운 배열 bucketBody를 만든다.
*/
  const todoBody = todoList.map((todo) => {
    return (
      <TodoItem
        key={todo.b_id}
        item={todo}
        todo_delete={todo_delete}
        todo_complete={todo_complete}
      />
    );
  });

  return (
    <table className="w3-table w3-table-all">
      <thead></thead>
      <tbody>{todoBody}</tbody>
    </table>
  );
}

export default TodoList;
