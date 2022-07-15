import React from "react";

function TodoItem(props) {
  const { item, todo_delete, todo_complete } = props;
  return (
    <tr className={item.b_comp ? "cancel del" : "del"}>
      <td className="x" onClick={() => todo_delete(item.b_id)}>
        &times;
      </td>
      <td onClick={() => todo_complete(item.b_id)}>{item.b_todo}</td>
      <td className="check">✓</td>
    </tr>
  );
}

export default TodoItem;
