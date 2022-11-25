const stateDefault = {
  arrS: [],
  arr: [],
  enter: 0,
  edit: false,
  Id: false,
  editItem: { id: "", phone: "", name: "", email: "" },
};

export const Formredux = (state = stateDefault, action) => {
  switch (action.type) {
    case "LOAD": {
      return (state = {
        ...state,

        arr: action.arr,
      });
    }
    case "ADD": {
      return (state = {
        ...state,
        edit: action.edit,
        Id: action.Id,
        arr: action.arr,
        enter: action.enter,
      });
    }
    case "DELETE": {
      return (state = {
        ...state,
        arr: action.arr,
        enter: action.enter,
      });
    }
    case "EDIT": {
      return (state = {
        ...state,
        edit: action.edit,
        Id: action.Id,
        arr: action.arr,
        editItem: action.editItem,
      });
    }
    case "SEARCH": {
      return (state = {
        ...state,
        arrS: action.arrS,
      });
    }
    default:
      return state;
  }
};
