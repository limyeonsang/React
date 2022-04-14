import React, { useState, useEffect } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  // useEffect(() => {
  //   console.log("rendering complete");
  //   console.log({
  //     name,
  //     nickname,
  //   });
  // });

  // useEffect(() => {
  //   console.log("run on mount");
  // }, []);

  // useEffect(() => {
  //   console.log(name, "run on name value update");
  // }, [name]);

  useEffect(() => {
    console.log("effect");
    console.log(name);
    return () => {
      console.log("cleanup");
      console.log(name);
    };
  });

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>

      <div>
        <b>Name: </b> {name}
      </div>
      <div>
        <b>NickName: </b> {nickname}
      </div>
    </div>
  );
};

export default Info;
