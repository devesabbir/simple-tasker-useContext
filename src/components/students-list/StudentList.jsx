import { useState } from "react";
import List from "./List";
import { data } from "./../../db/db-tree";

function StudentList() {
  const [rootData, setRootData] = useState(data);
  const root = rootData[0];
  const classes = root.childIds;

  const editHandler = (parentId, childid) => {
    // Create a new version of the parent place
    // that doesn't include this child ID.
    // const nextParent = {
    //   ...parent,
    //   childIds: parent.childIds.filter((id) => id !== childid),
    // };
    // Update the root state object...
    setRootData({
      ...rootData,
      // ...so that it has the updated parent.
      [parentId]: {
        ...rootData[parentId],
        childIds: rootData[parentId].childIds.filter((id) => id !== childid),
      },
    });
  };

  return (
    <>
      <ol>
        {classes.map((id) => (
          <List
            key={id}
            id={id}
            data={rootData}
            parentId={0}
            onEdit={editHandler}
          />
        ))}
      </ol>
    </>
  );
}

export default StudentList;
