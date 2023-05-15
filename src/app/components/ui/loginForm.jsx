import React, { useEffect, useState } from "react";
// НАСТРОИТЬ ЛОГИН ФОРМ
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { target } = e;
    setEmail(target.value);
  };

  useEffect(() => {
    console.log(email);
  }, [email]);
  return (
    <form action="">
      <div>
        <label htmlFor="email"> Email </label>
        <input id="Email" type="text" value={email} onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="password"> Пароль </label>
        <input type="text" value={password} />
      </div>
    </form>
  );
};

export default LoginForm;
