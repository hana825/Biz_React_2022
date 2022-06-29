/* 
use* 로 시작되는 react의 함수들 : Hook 함수
component lifecycle과 관련된 함수들이다. state 만들거나, state 변화를 감시하거나
component가 rendering 되는 시점에 무언가를 실행시키거나 하는 용도의 함수들이다.
*/
import { useState, useEffect } from "react";
import uuid from "react-uuid";
import moment from "moment";
import BucketList from "./BucketList";

/*
component의 본문 만들기
함수를 선언하고 함수에서 component 코드를 return 한다.
이때 return 내의 component tag의 가장 바깥을 감싸서 한 개의 tag로 묶어야 한다.
*/
const BucketMain = () => {
  /*
  buckList state 변수를 배열로 선언
  state 변수를 배열로 선언하여 사용할 경우 
  표준 JS 코드에 있는 배열에 요소를 추가하는 함수를 사용할 수 없다.
  state 배열에 요소를 추가하는 경우는 setter 함수를 사용하는데 
  이 함수가 작동되는 방식은 기존에 배열을 새로운 배열로 복사하고, 
  요소를 추가한 후 새로운 배열과 기존의 배열을 교활하는 방식으로 이루어진다.
  */
  const [bucketList, setBucketList] = useState(() => {
    // 현재 브라우저의 localStorage에 BUCKETLIST 이름으로 데이터가 저장되어 있으면 데이터를 읽어서 JSON 데이털 변환한 후
    // bucketList를 생성하고, 없으면 빈(blank) 배열을 생성하라
    const bucketBody = JSON.parse(localStorage.getItem("BUCKETLIST"));
    if (bucketBody) return bucketBody;
    else return [];
  });
  /*
  bucketList 데이터가 추가, 수정, 삭제가 되면 localStorage에 BUCKETLIST라는 이름으로 JSON 데이터를 문자열로 변환하여 저장
  */
  useEffect(() => {
    console.log("EFFECT");
    localStorage.setItem("BUCKETLIST", JSON.stringify(bucketList));
  }, [bucketList]);

  // 버킷을 입력한 후 버킷을 추가할 때 사용하는 함수
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      const bucket = {
        b_id: uuid(), // uuid 사용하여 bucket PK 생성
        b_flag: 0, // 중요도
        b_start_date: moment().format("YYYY[-]MM[-]DD HH:mm:ss"),
        b_bucket: e.target.value,
        b_end_date: "",
      };

      setBucketList([...bucketList, bucket]);
      console.table(bucketList);
      e.target.value = "";
    }
  };

  const bucket_delete = (id) => {
    const bucketRemoveList = bucketList.filter((bucket) => {
      return bucket.b_id !== id;
    });
    setBucketList(bucketRemoveList);
  }; // end bucket_delete

  // 중요도
  const bucket_flag_toggle = (id) => {
    const bucketBody = bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        const _temp_bucket = { ...bucket, b_flag: bucket.b_flag + 1 };
        return _temp_bucket;
      }
      return bucket;
    }); // end map
    // 새로 생성된 bucketBody로 기존 bucketList 배열을 교체
    setBucketList(bucketBody);
  }; // end bucket_flag_toggle

  const bucket_complete = (id) => {
    const bucketBody = bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        const e_date = bucket.b_end_date
          ? ""
          : moment().format("YYYY[-]MM[-]DD HH:mm:ss");
        return { ...bucket, b_end_date: e_date };
      }
      return bucket;
    });
    setBucketList(bucketBody);
  }; // end bucket_complete

  const bucket_item_edit = (id, content) => {
    const bucketBody = bucketList.map((bucket) => {
      if (bucket.b_id === id) {
        const _temp_bucket = { ...bucket, b_bucket: content };
        return _temp_bucket;
      }
      return bucket;
    });
    setBucketList(bucketBody);
  };

  // const functions = {
  //   bucket_delete: bucket_delete,
  //   bucket_flag_toggle: bucket_flag_toggle,
  //   bucket_complete: bucket_complete,
  // };
  // JSO의 속성변수 이름과 값(함수)이 일치할 때는 변수명만으로 JSON 객체를 선언하면 위의 코드와 같이 생성된다.
  const functions = {
    bucket_delete,
    bucket_flag_toggle,
    bucket_complete,
    bucket_item_edit,
  };
  return (
    <>
      <div>
        <input
          onKeyDown={onKeyDown}
          placeholder="버킷에 추가할 내용을 입력하세요"
          className="w3-input w3-border w3-hover-gray w3-round"
        />
      </div>
      <div>
        <BucketList bucketList={bucketList} functions={functions} />
      </div>
    </>
  );
};

export default BucketMain;
