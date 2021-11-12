const initState = {
  modalShow: false,
};

const showModal = (state = initState, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return {
        ...state,
        modalShow: action.payload,
      };
    default:
      return { ...state };
  }
};

export default showModal;