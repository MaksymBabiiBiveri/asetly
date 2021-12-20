import React, { memo, useEffect, useState } from 'react';
import classes from './Header.module.scss';
import cl from 'classnames';
import avatar from '@image/avatar.png';
import { Bell, DropArrow, Info, Search } from '@common';
import { useLocation } from 'react-router-dom';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const { pathname } = useLocation();
  const [title, setTitle] = useState<string>();
  const pathSlice = () => {
    const findIndex = pathname.split('').reduce((a, e, i) => {
      if (e === '/') {
        a.push(i);
      }
      return a;
    }, [] as number[]);
    const filterStr = pathname
      .split('')
      .slice(findIndex[0] + 1, findIndex[1])
      .join('');
    setTitle(filterStr);
  };

  useEffect(() => {
    pathSlice();
  }, [pathname]);

  return (
    <header className={cl(classes.header, 'header')}>
      <div className={classes.header_box}>
        <div className={classes.name_page}>
          <h4>{title}</h4>
        </div>
        <div className={classes.header_actions}>
          <div className={classes.simple_actions}>
            <a href="">
              <Search />
            </a>
            <a href="">
              <Info />
            </a>
            <a href="">
              <Bell />
            </a>
          </div>
          <div className={classes.user_actions}>
            <div className={classes.avatar_box}>
              <img src={avatar} alt="" />
              <p>Frederic Ewing</p>
            </div>
            <DropArrow color="blue" />
          </div>
        </div>
      </div>
    </header>
  );
};
export default memo(Header);
