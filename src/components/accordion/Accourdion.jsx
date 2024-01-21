import { useState } from "react";
import Panel from "./Panel";

const Accourdion = () => {
  const [isActive, setIsActive] = useState([
    {
      id: 1,
      title: "Paid Course-1",
      isActive: true,
    },
    {
      id: 2,
      title: "Free Course-1",
      isActive: false,
    },
    {
      id: 3,
      title: "Free Course-2",
      isActive: false,
    },
    {
      id: 4,
      title: "Paid Course-2",
      isActive: false,
    },
  ]);

  const handleActiveChange = (id) => {
    const nextState = isActive.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isActive: !item.isActive,
        };
      } else if (item.id !== id && item.isActive) {
        return {
          ...item,
          isActive: false,
        };
      }
      return item;
    });
    setIsActive(nextState);
  };

  return (
    <div className="w-[500px]">
      <h1 className="text-2xl">Learn with Sumit</h1>
      {isActive.map((item) => (
        <Panel
          key={item.id}
          onActive={() => handleActiveChange(item.id)}
          isActive={item.isActive}
          title={item.title}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure qui,
          minus, saepe itaque molestiae aut voluptatem hic corporis atque,
          laudantium aperiam dolore harum est. Illo expedita laudantium saepe
          maiores labore! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Architecto vero sint doloremque placeat! Ratione fugiat quia
          sapiente dolore provident id. Quo, ex aspernatur sunt dolore
          cupiditate repellat quasi eius soluta? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Et veniam sit fugiat doloribus similique
          necessitatibus non incidunt ut blanditiis ipsum iusto laboriosam
          voluptatem, mollitia itaque asperiores tempora corporis nisi libero?
        </Panel>
      ))}
    </div>
  );
};

export default Accourdion;
