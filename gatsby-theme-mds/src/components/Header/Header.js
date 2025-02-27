import React from 'react';
import { Link } from '@innovaccer/design-system';
import { useHeaderItems } from '../../util/HeaderItems';

const Header = () => {
  const items = useHeaderItems();
  console.log(items)
  return (
    <div
      className="d-flex w-100 p-6 bg-light position-relative"
      style={{ boxShadow: "0px 10px 5px -10px rgb(0 0 0 / 16%)", boxSizing: 'border-box', zIndex: 1000 }}
    >
      <Link href="/">
        Gatsby Theme MDS
      </Link>
      <div className="ml-auto">
        {items.map(({link, label}, index) => {
          const isExternal = link.startsWith('http://') || link.startsWith('https://'); 
          return (
            <Link appearance="subtle" href={link} className="ml-6" target={isExternal && '_blank'}>
              {label}
            </Link>
          )
        }) }
      </div>
    </div>
  );
}

export default Header;
