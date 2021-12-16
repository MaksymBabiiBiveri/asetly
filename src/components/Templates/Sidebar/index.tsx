import React from 'react';
import classes from './Sidebar.module.scss';
import { Dashboard, HideBar, Logo } from '@common';
import cl from 'classnames';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <aside className={cl(classes.sidebar, 'sidebar')}>
      <div className={classes.wrapper}>
        <div className={classes.logo_box}>
          <Logo />
          <HideBar />
        </div>
        <nav className={classes.navigation}>
          <ul className={classes.list}>
            <li className={classes.list_item}>
              <Dashboard />
              <a href="" onClick={(e) => e.preventDefault()}>
                Dashboard
              </a>
            </li>
          </ul>
          <h5 className={classes.title_overline}>management</h5>
          <ul className={classes.list}>
            <li className={classes.list_item}>
              <Dashboard />
              <a href="" onClick={(e) => e.preventDefault()}>
                Dashboard
              </a>
            </li>
            <li className={classes.list_item}>
              <Dashboard />
              <a href="" onClick={(e) => e.preventDefault()}>
                Dashboard
              </a>
            </li>
            <li className={classes.list_item}>
              <Dashboard />
              <a href="" onClick={(e) => e.preventDefault()}>
                Dashboard
              </a>
            </li>
            <li className={classes.list_item}>
              <Dashboard />
              <a href="" onClick={(e) => e.preventDefault()}>
                Dashboard
              </a>
            </li>
          </ul>
          <h5 className={classes.title_overline}>management</h5>
          <ul className={classes.list}>
            <li className={classes.list_item}>
              <Dashboard />
              <a href="" onClick={(e) => e.preventDefault()}>
                Dashboard
              </a>
            </li>
            <li className={classes.list_item}>
              <Dashboard />
              <a href="" onClick={(e) => e.preventDefault()}>
                Dashboard
              </a>
            </li>
            <li className={classes.list_item}>
              <Dashboard />
              <a href="" onClick={(e) => e.preventDefault()}>
                Dashboard
              </a>
            </li>
            <li className={classes.list_item}>
              <Dashboard />
              <a href="" onClick={(e) => e.preventDefault()}>
                Dashboard
              </a>
            </li>
          </ul>
          <h5 className={classes.title_overline}>management</h5>
          <ul className={classes.list}>
            <li className={classes.list_item}>
              <Dashboard />
              <a href="" onClick={(e) => e.preventDefault()}>
                Dashboard
              </a>
            </li>
            <li className={classes.list_item}>
              <Dashboard />
              <a href="" onClick={(e) => e.preventDefault()}>
                Dashboard
              </a>
            </li>
            <li className={classes.list_item}>
              <Dashboard />
              <a href="" onClick={(e) => e.preventDefault()}>
                Dashboard
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
