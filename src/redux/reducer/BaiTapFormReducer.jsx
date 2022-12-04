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
        editItem: action.editItem,
      });
    }
    case "SEARCH": {
      return (state = {
        ...state,
        arrS: action.arrS,
      });
    }
    case "UPDATA": {
      const { values, enter, Id, edit } = action;
      let arr = [...state.arr];
      let index = arr.findIndex((item) => item.id === values.id);
      if (index !== -1) {
        arr.splice(index, 1, values);
      }
      return {
        ...state,
        arr,
        enter,
        Id,
        edit,
        // editItem: { id: "", phone: "", name: "", email: "" },
      };
    }
    default:
      return state;
  }
};
