/* eslint-disable react/prop-types */
export default function List({ id, data, parentId, onEdit }) {
  const item = data[id];
  const child = item.childIds;
  return (
    <li style={{ marginLeft: 5 }}>
      {item.title} <button onClick={() => onEdit(parentId, id)}>Delete</button>
      {child.length > 0 && (
        <ol>
          {child.map((childid) => (
            <List
              key={childid}
              id={childid}
              data={data}
              parentId={id}
              onEdit={onEdit}
            />
          ))}
        </ol>
      )}
    </li>
  );
}
