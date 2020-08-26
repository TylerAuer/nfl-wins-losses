import React, { useState } from 'react';
import Button from './Button';
import './Dropdown.scss';

interface Props {
  category: string;
  list: string[];
}

export default function Dropdown({ category, list }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closed = (
    <Button key={1} onClick={toggleMenu} text={active || category} />
  );

  const open = (
    <>
      <Button className="button--close" onClick={toggleMenu} text="&times;" />
      <div className="dropdown__list-div">
        <ul className="dropdown__list-ul">
          {list.map((item) => {
            return (
              <li className="dropdown__list-item">
                <Button key={2} text={item} onClick={toggleMenu} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );

  return <menu className="dropdown">{isOpen ? open : closed}</menu>;
}
