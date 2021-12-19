import React, { memo } from 'react';
import classes from './Sidebar.module.scss';
import {
  Asset,
  Attributes,
  Companies,
  Contracts,
  Dashboard,
  Departments,
  Deprecation,
  HideBar,
  Locations,
  Logo,
  Others,
  Supplies,
  Vendors,
  WorkOrders,
} from '@common';
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
              <a href="">Dashboard</a>
            </li>
          </ul>
          <h5 className={classes.title_overline}>management</h5>
          <ul className={classes.list}>
            <li className={classes.list_item}>
              <Asset />
              <a href="">Assets</a>
            </li>
            <li className={classes.list_item}>
              <WorkOrders />
              <a href="">Work orders</a>
            </li>
            <li className={classes.list_item}>
              <Deprecation />
              <a href="">Depreciation</a>
            </li>
            <li className={classes.list_item}>
              <Supplies />
              <a href="">Supplies</a>
            </li>
          </ul>
          <h5 className={classes.title_overline}>properties</h5>
          <ul className={classes.list}>
            <li className={classes.list_item}>
              <Attributes />
              <a href="">Attributes</a>
            </li>
            <li className={classes.list_item}>
              <Companies />
              <a href="">Companies</a>
            </li>
            <li className={classes.list_item}>
              <Vendors />
              <a href="">Vendors</a>
            </li>
            <li className={classes.list_item}>
              <Departments />
              <a href="">Departments</a>
            </li>
            <li className={classes.list_item}>
              <Locations />
              <a href="">Locations</a>
            </li>
            <li className={classes.list_item}>
              <Others />
              <a href="">Other</a>
            </li>
            <li className={classes.list_item}>
              <Contracts />
              <a href="">Contracts</a>
            </li>
          </ul>
          <h5 className={classes.title_overline}>user</h5>
          <ul className={classes.list}>
            <li className={classes.list_item}>
              <Dashboard />
              <a href="">Users</a>
            </li>
            <li className={classes.list_item}>
              <Dashboard />
              <a href="">Roles</a>
            </li>
            <li className={classes.list_item}>
              <Dashboard />
              <a href="">Role Authorization</a>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default memo(Sidebar);
