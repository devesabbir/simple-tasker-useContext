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

export const taskReducer = (draft, action) => {
  switch (action.type) {
    case "added": {
      draft.push({
        id: nextId(draft),
        text: action.payload,
      });
      break;
    }

    case "edited": {
      const index = draft.findIndex((item) => item.id === action.payload.id);
      draft[index] = {
        ...draft[index],
        text: action.payload.text,
      };
      break;
    }

    case "deleted": {
      return draft.filter((item) => item.id !== action.id);
    }

    default: {
      throw new Error("Invalid action type");
    }
  }
};
