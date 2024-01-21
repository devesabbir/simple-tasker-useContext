/* eslint-disable react/prop-types */
export default function Panel({ title, children, isActive, onActive }) {
  return (
    <div className="cursor-pointer border border-gray-950 my-1 bg-red-200">
      <h4
        onClick={onActive}
        className={`text-xl font-normal duration-500 ${
          isActive ? "bg-orange-500 text-white" : "bg-slate-50"
        } px-2 uppercase`}
      >
        {title}
      </h4>
      <p
        className={`duration-300 h-0 scale-y-0 overflow-hidden ${
          isActive
            ? "p-1 h-auto origin-top scale-y-100"
            : "h-0 scale-y-0 origin-bottom"
        } `}
      >
        {children}
      </p>
    </div>
  );
}
