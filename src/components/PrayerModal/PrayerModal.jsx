import "./PrayerModal.css";

function prayerModal({ activeModal, onClose, card }) {
  return (
    <div className={` modal ${activeModal === "preview" && "modal_open"} `}>
      <div className="modal__container prayer-modal__content">
        <button
          onClick={onClose}
          type="button"
          className="modal__close-button prayer-modal__white-close-button"
        />
        <div className="prayer-modal__info">
          <img
            className="prayer-modal__image"
            src={card.imageUrl}
            alt={card.title}
          />
          <div className="prayer-modal__caption">
            <h2 className="prayer-modal__title">{card.title}</h2>
            <p className="prayer-modal__prayer">{card.prayer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default prayerModal;
