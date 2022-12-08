import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [newUser, setNewUser] = useState({
    nombre: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const emailRegex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    let nombreError = "";
    let emailError = "";

    if (!newUser.nombre || newUser.nombre.length < 5) {
      nombreError = "El nombre es requerido y debe tener al menos 5 caracteres";
    }

    if (!newUser.email || !emailRegex.test(newUser.email)) {
      emailError = "El email debe ser válido";
    }

    if (nombreError || emailError) {
      setErrors({ nombreError, emailError });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validate();

    console.log(errors);

    if (!isValid) {
      return;
    }

    //TODO: Implementar validaciones
    alert(`Gracias ${newUser.nombre}, te contactaremos cuando antes vía mail`);
  };

  return (
    <div>
      <form>
        <input name="nombre" type="text" onChange={handleInputChange} />
        {errors.nombreError && <label>{errors.nombreError}</label>}
        <input name="email" type="email" onChange={handleInputChange} />
        {errors.emailError && <label>{errors.emailError}</label>}
        <button onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
  );
};

export default Form;
