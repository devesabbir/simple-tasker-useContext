export const initialTask = [
  {
    id: 1,
    text: "Initial task",
    done: true,
  },
];

const nextId = (data) => {
  const id = data.reduce((acc, item) => Math.max(acc, item.id), 0);

  return id + 1;
};

export const taskReducer = (state, action) => {
  switch (action.type) {
    case "added": {
      return [
        ...state,
        {
          id: nextId(state),
          text: action.payload,
        },
      ];
    }

    case "edited": {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            ...action.payload,
          };
        }
        return item;
      });
    }

    case "deleted": {
      return state.filter((item) => item.id !== action.id);
    }

    default: {
      throw new Error("Invalid action type");
    }
  }
};
