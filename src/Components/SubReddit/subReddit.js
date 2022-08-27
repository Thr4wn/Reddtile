import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export const SubReddit = ({ showSidebar }) => {

  return (
    <Menu right customBurgerIcon={false} isOpen={showSidebar} >
      <a className="menu-item" href="/sub1">
        Subreddit 1
      </a>

      <a className="menu-item" href="/sub2">
       Subreddit 2
      </a>

      <a className="menu-item" href="/sub3">
        Subreddit 3
      </a>

      <a className="menu-item" href="/sub4">
        Subreddit 4
      </a>

      <a className="menu-item" href="/sub5">
       Subreddit 5
      </a>
    </Menu>
  );
};