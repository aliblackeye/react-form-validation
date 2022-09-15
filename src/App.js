import FormInput from "./components/FormInput";

import "./App.scss";
import { useState } from "react";
function App() {

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    required: true,
  });

  const inputs = [
    {
      id: "1",
      name: "username",
      placeHolder: "Kullanıcı Adı",
      type: "text",
      required: true,
      pattern: "^[a-zA-Z0-9]{3,30}$",
      spanText: "En az 3, en fazla 30 karakterden oluşmalı!",
    },
    {
      id: "2",
      name: "email",
      placeHolder: "E-Posta",
      type: "email",
      required: true,
      pattern: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$",
      spanText: "(-,!,*) gibi özel işaretler içermemeli!",
    },
    {
      id: "3",
      name: "name",
      placeHolder: "Ad",
      type: "text",
      required: true,
      pattern: "^[a-zA-Z0-9]{3,30}$",
      spanText: "En az 3 karakter ve özel işaretler içeremez!",
    },
    {
      id: "4",
      name: "surname",
      placeHolder: "Soyad",
      type: "text",
      required: true,
      pattern: "^[a-zA-Z0-9]{3,40}$",
      spanText: "En az 3 karakter ve özel işaretler içeremez!",
    },
    {
      id: "5",
      name: "password",
      placeHolder: "Şifre",
      type: "password",
      required: true,
      pattern: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$",
      spanText:
        "En az 8 karakterden oluşmalı. En az bir büyük, bir küçük harf ve sayı içermeli.",
    },
    {
      id: "6",
      name: "confirmPassword",
      placeHolder: "Tekrar Şifre",
      type: "password",
      required: true,
      pattern: values.password,
      spanText: "Şifreler uyuşmuyor!",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1 className="title">Kayıt Ol</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            name={input.name}
            placeHolder={input.placeHolder}
            type={input.type}
            onChange={onChange}
            required={input.required}
            pattern={input.pattern}
            spanText={input.spanText}
          />
        ))}

        <button className="btn btn-primary">Kayıt Ol</button>
      </form>
    </div>
  );
}

export default App;
