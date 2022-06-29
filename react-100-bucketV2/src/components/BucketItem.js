import React, { useState } from "react";

const b_flag_text = ["일반", "중요", "매우중요", "긴급"];

function BucketItem(props) {
  const { item, functions } = props;
  const {
    bucket_delete,
    bucket_flag_toggle,
    bucket_complete,
    bucket_item_edit,
  } = functions;
  /*
  react code에서 component 간의 계층구조가 매우 복잡할 수 있다.
  복잡한 계층구조에서 데이터의 CRUD를 구현할 때
  데이터를 표출하기 위하여 변수={값} 형식으로 자식 component에게 전달하고
  자식 component는 props를 통해 데이터를 받아서 표출한다.
  이때 만약 자식 component에서 부모 component가 생성 선언한 state 변수를 변경해야 할 경우가 발생하면
  부모 component에서 state 변수를 변경하는 함수를 함께 만들어 자식 component에게 전달해 주어야 한다.

  지금 <td onClick = {()=>bucket_complete(id)}> 의 코드를 보면
  현재 화면(component)에 선언된 td가 클릭되었을 때 bucket_complete 함수를 실행하고 있지만
  이 함수는 BucketMain에서 만들어 내려보낸 함수이다.
  */
  const [bucket_IsEdit, setEdit] = useState(false);

  const bucket_edit = (e) => {
    setEdit(!bucket_IsEdit);
  };

  const bucket_edit_complete = (e, id) => {
    if (e.keyCode === 13) {
      // Enter
      bucket_item_edit(id, e.target.value);
      setEdit(false);
    } else if (e.keyCode === 27) {
      // Esc
      setEdit(false);
    }
  };

  return (
    <tr className={item.b_end_date ? "cancel" : ""}>
      <td onClick={() => bucket_flag_toggle(item.b_id)}>
        {b_flag_text[item.b_flag % 4]}
      </td>
      <td>{item.b_start_date}</td>
      {bucket_IsEdit && item.b_end_date === "" ? (
        <td>
          <input
            defaultValue={item.b_bucket}
            onKeyDown={(e) => bucket_edit_complete(e, item.b_id)}
          />
        </td>
      ) : (
        <td onClick={bucket_edit}> {item.b_bucket}</td>
      )}
      <td onClick={() => bucket_complete(item.b_id)}>{item.b_end_date}</td>
      <td onClick={() => bucket_delete(item.b_id)}>&times;</td>
    </tr>
  );
}
/* 
event handler에서 어떤 값을 전달하면서 실행할 때 다음과 같은 코드는 절대 사용하면 안된다.
<td onClick={bucket_complete(item.b_id)}></td>
위의 코드는 event와 관계없이 화면이 rendering 될 때 내부의 함수가 실행되어 버린다.
event handler에 어떤 값을 전달하면서 실행하기 위해서는 한 번 더 함수를 감싸줘야 한다.
<td onClick={()=>bucket_complete(item.b_id)}></td>
*/

export default BucketItem;
