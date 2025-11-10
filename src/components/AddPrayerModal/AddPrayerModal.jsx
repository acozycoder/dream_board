import "./AddPrayerModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const AddPrayerModal = ({ onClose, onAddPrayerModalSubmit, isLoading }) => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [prayer, setPrayer] = useState("");
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const validateTitle = (title) => {
    if (!title.trim()) {
      return "Title is required";
    }
    if (title.trim().length < 2) {
      return "Title must be at least 2 characters";
    }
    return "";
  };

  const validateImageUrl = (url) => {
    if (!url.trim()) {
      return "Image url is required";
    }
    const urlPattern = /^https?:\/\/.+/;
    if (!urlPattern.test(url)) {
      return "Please enter a valid URL";
    }
    return "";
  };

  const validatePrayer = (prayer) => {
    if (!prayer) {
      return "Please include a prayer here";
    }
    return "";
  };

  const checkFormValidity = () => {
    const titleError = validateTitle(title);
    const imageError = validateImageUrl(imageUrl);
    const prayerError = validatePrayer(prayer);

    const newErrors = {
      title: titleError,
      imageUrl: imageError,
      prayer: prayerError,
    };

    setErrors(newErrors);

    const formIsValid = !titleError && !imageError && !prayerError;
    setIsValid(formIsValid);

    return formIsValid;
  };

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTitle(value);

    const titleError = validateTitle(value);
    setErrors((prev) => ({
      ...prev,
      title: titleError,
    }));

    checkFormValidity();
  };

  const handleImageUrlChange = (e) => {
    const value = e.target.value;
    setImageUrl(value);

    const imageUrlError = validateImageUrl(value);
    setErrors((prev) => ({
      ...prev,
      imageUrl: imageUrlError,
    }));

    checkFormValidity();
  };

  const handlePrayerChange = (e) => {
    const value = e.target.value;
    setPrayer(value);

    const prayerError = validatePrayer(value);
    setErrors((prev) => ({
      ...prev,
      prayer: prayerError,
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

    onAddPrayerModalSubmit({
      title: title.trim(),
      imageUrl: imageUrl.trim(),
      prayer: prayer.trim(),
    });
  }

  return (
    <ModalWithForm
      title="New prayer"
      submitButtonText={isLoading ? `Adding prayer...` : `Add prayer`}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValid}
    >
      <label htmlFor="prayer-title" className="modal__label">
        Prayer title
        <input
          id="prayer-title"
          type="text"
          placeholder="Prayer title"
          className="modal__input"
          minLength="2"
          maxLength="30"
          required
          onChange={handleTitleChange}
          value={title}
        />
      </label>
      <span className="modal__error" id="modal-title-error">
        {errors.title}
      </span>

      <label htmlFor="prayer-url" className="modal__label">
        Image
        <input
          id="prayer-url"
          type="url"
          placeholder="Inspirational image URL"
          className="modal__input"
          onChange={handleImageUrlChange}
          value={imageUrl}
          required
        />
      </label>
      <span className="modal__error" id="modal-url-error">
        {errors.imageUrl}
      </span>

      <label htmlFor="prayer" className="modal__label">
        Prayer
        <input
          id="prayer"
          type="text"
          placeholder="Write your prayer here"
          className="modal__input"
          onChange={handlePrayerChange}
          value={prayer}
          required
        />
      </label>
      <span className="modal__error" id="modal-prayer-error">
        {errors.prayer}
      </span>
    </ModalWithForm>
  );
};

export default AddPrayerModal;
