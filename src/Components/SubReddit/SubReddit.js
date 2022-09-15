import React, { useState, useEffect } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { getSubreddits } from '../API/RedditAPI';

export const SubReddit = ({ showSidebar, getSubData }) => {
  const [subs, setSubs] = useState([]);

  useEffect (() => {
    const subreddits = async () => {
      const query = await getSubreddits();
      const results = [];
      for (let c = 0; c < query.length; c++) {
        results[c] = query[c].data.display_name_prefixed;
      };
      setSubs(results);
    };

    subreddits();
  }, [])

  return (
    <Menu right customBurgerIcon={false} isOpen={showSidebar} >
      {subs.map((item, index) => <a className="menu-item" href="#" onClick={(() => getSubData(item))}
            key={index}>{item}</a>)}
    </Menu>
  );
};
