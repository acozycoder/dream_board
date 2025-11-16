import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const RegisterModal = ({
  onClose,
  onRegisterModalSubmit,
  isLoading,
  onSwitch,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validateEmail = (email) => {
    if (!email.trim()) {
      return "An email is required";
    }
    const emailPattern = /^\S+@\S+\.\S+$/;
    if (!emailPattern.test(email)) {
      return "Please enter a valid email";
    }
    return "";
  };

  const validatePassword = (password) => {
    if (!password.trim()) {
      return "Password is required";
    }
    if (password.trim().length < 8) {
      return "Password must be at least 8 characters";
    }
    return "";
  };

  const validateName = (name) => {
    if (!name.trim()) {
      return "Name is required";
    }
    if (name.trim().length < 2) {
      return "Name must be at least 2 characters";
    }
    return "";
  };

  const checkFormValidity = () => {
    const nameError = validateName(name);

    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    const newErrors = {
      name: nameError,

      email: emailError,
      password: passwordError,
    };

    setErrors(newErrors);

    const formIsValid = !nameError && !emailError && !passwordError;
    setIsValid(formIsValid);

    return formIsValid;
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);

    const nameError = validateName(value);
    setErrors((prev) => ({
      ...prev,
      name: nameError,
    }));

    checkFormValidity();
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    const passwordError = validatePassword(value);
    setErrors((prev) => ({
      ...prev,
      password: passwordError,
    }));

    checkFormValidity();
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailError = validateEmail(value);
    setErrors((prev) => ({
      ...prev,
      email: emailError,
    }));

    checkFormValidity();
  };

  function handleSubmit(e) {
    e.preventDefault();

    const formIsValid = checkFormValidity();

    if (!formIsValid) {
      console.log("Form has errors, cannot submit");
      return;
    }

    onRegisterModalSubmit({ email, password, name });
  }

  return (
    <ModalWithForm
      title="Sign up"
      submitButtonText={isLoading ? "Signing up..." : "Sign Up"}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
      switchButtonText={"or Log in"}
      onSwitch={onSwitch}
    >
      <label htmlFor="email" className="modal__label">
        Email*
        <input
          id="email"
          type="email"
          placeholder="Email"
          className="modal__input"
          required
          onChange={handleEmailChange}
          value={email}
        />
      </label>
      <span className="modal__error" id="modal-name-error">
        {errors.email}
      </span>

      <label htmlFor="password" className="modal__label">
        Password*
        <input
          id="password"
          type="password"
          placeholder="Password"
          className="modal__input"
          onChange={handlePasswordChange}
          value={password}
          required
        />
      </label>
      <span className="modal__error" id="modal-url-error">
        {errors.password}
      </span>

      <label htmlFor="name" className="modal__label">
        Name*
        <input
          id="name"
          type="text"
          placeholder="Name"
          className="modal__input"
          minLength="2"
          maxLength="30"
          required
          onChange={handleNameChange}
          value={name}
        />
      </label>
      <span className="modal__error" id="modal-name-error">
        {errors.name}
      </span>
    </ModalWithForm>
  );
};

export default RegisterModal;
