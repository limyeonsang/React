import React, { useRef, useCallback, useState } from "react";
import produce from "immer";

const WithImmer = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: "", username: "" });
  const [data, setData] = useState({ array: [], uselessValue: null });

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setForm(
        produce(form, (draft) => {
          draft[name] = value;
        })
      );
    },
    [form]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username,
      };

      setData(
        produce(data, (draft) => {
          draft.array.push(info); // 배열에 직접적인 변화를 일으키는 push를 사용해도 무방함.
        })
      );

      setForm({
        name: "",
        username: "",
      });
      nextId.current += 1;
    },
    [data, form.name, form.username]
  );

  const onRemove = useCallback(
    (id) => {
      produce(data, (draft) => {
        draft.array.splice(
          draft.array.findIndex((info) => info.id === id),
          1
        );
      });
    },
    [data]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          placeholder="id"
          value={form.username}
          onChange={onChange}
        ></input>
        <input
          name="name"
          placeholder="name"
          value={form.name}
          onChange={onChange}
        ></input>
        <button type="submit">submit</button>
      </form>
      <div>
        <ul>
          {data.array.map((info) => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WithImmer;
