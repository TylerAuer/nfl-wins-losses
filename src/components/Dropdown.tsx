import React, { useState } from 'react';
import Button from './Button';
import './Dropdown.scss';

interface Owner {
  owner: {
    shortName: string;
  };
}

interface Props {
  owner: string | null;
  setOwner: (string: string | null) => void;
  rankings: Owner[] | null;
}

export default function Dropdown({ owner, setOwner, rankings }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  // Use rankings to generate a list of Owners
  let ownerList = ['Loading', 'list', 'of', 'owners'];
  if (rankings) {
    ownerList = rankings.map((o: Owner): string => {
      return o.owner.shortName;
    });
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const onOwnerClick = (owner: string | null): void => {
    toggleMenu();
    setOwner(owner);
  };

  const closed = (
    <Button key={1} onClick={toggleMenu} text={owner || 'Owner'} />
  );

  const open = (
    <>
      <Button className="button--close" onClick={toggleMenu} text="&times;" />
      <div className="dropdown__list-div">
        <ul className="dropdown__list-ul">
          {ownerList.map((owner) => {
            return (
              <li className="dropdown__list-item" key={owner}>
                <Button text={owner} onClick={() => onOwnerClick(owner)} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );

  return <menu className="dropdown">{isOpen ? open : closed}</menu>;
}
