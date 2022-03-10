(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-location-open]'),
    closeModalBtn: document.querySelector('[data-modal-location-close]'),
    modal: document.querySelector('[data-modal-location]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    // document.getElementById('videoFrameClose').src = "not.found/404";
    // document.getElementById('videoFrameOpen').src = "https://www.youtube.com/embed/sqbGisHfNBo";
    refs.modal.classList.toggle('is-hidden');
  }
})();