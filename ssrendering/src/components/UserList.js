import { useEffect } from "react";

const User = ({ user, onRemove, onToggle }) => {
  useEffect(() => {
    console.log("렌더링");
    return () => {
      console.log("컴포넌트 사라짐.");
    };
  }, []);

  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => onToggle(user.id)}
      >
        ㄴ{user.username}
      </b>
      <span>[{user.email}]</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
};

const UserList = ({ users, onRemove, onToggle }) => {
  return (
    <div>
      {users.map((user) => (
        <User
          key={user.id}
          user={user}
          onRemove={onRemove}
          onToggle={onToggle}
        ></User>
      ))}
    </div>
  );
};

export default UserList;
