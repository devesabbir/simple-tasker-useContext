/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTaskDispatch } from "../../context/TaskContext";

export default function Task({ item }) {
  const [isEdit, setEdit] = useState(false);
  const [input, setInput] = useState(item.text || "");
  const dispatch = useTaskDispatch();

  return (
    <div className="flex gap-x-2 justify-around items-jjjjjjjcenter my-2">
      <input
        onChange={(e) =>
          dispatch({
            type: "edited",
            payload: {
              id: item.id,
              text: item.text,
              done: e.target.checked,
            },
          })
        }
        checked={item.done}
        type="checkbox"
      />

      {isEdit ? (
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-[100px]"
          type="text"
        />
      ) : (
        <p>{item.text}</p>
      )}

      {isEdit ? (
        <button
          onClick={() => {
            dispatch({
              type: "edited",
              payload: {
                id: item.id,
                text: input,
                done: false,
              },
            });
            setEdit(false);
          }}
          className="border px-2 py-1"
        >
          Save
        </button>
      ) : (
        <button onClick={() => setEdit(true)} className="border px-2 py-1">
          Edit
        </button>
      )}

      <button
        onClick={() =>
          dispatch({
            type: "deleted",
            id: item.id,
          })
        }
        className="border px-2 py-1"
      >
        Delete
      </button>
    </div>
  );
}
