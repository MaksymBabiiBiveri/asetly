import React from 'react';
import classes from './ListHeaderActions.module.scss';
import { Button, SearchInput } from '@UiKitComponents';
import { useNavigate } from 'react-router-dom';
import { Export, Import } from '@common';

interface TableHeaderActionsProps {
  pageCreatingUrl: string;
  checkedItemsList: number[] | string[];
  actionButtonExport?: () => void;
  actionButtonImport?: () => void;
  btnName: string;
}

const TableHeaderActions: React.FC<TableHeaderActionsProps> = (props) => {
  const {
    pageCreatingUrl,
    checkedItemsList,
    actionButtonExport,
    actionButtonImport,
    btnName,
  } = props;
  const navigate = useNavigate();
  const redirectToPageCreating = () => {
    navigate(pageCreatingUrl);
  };
  return (
    <div className={classes.headerActions}>
      <div className={classes.search_wrapper}>
        <SearchInput />
      </div>
      <div className={classes.button_wrapper}>
        {!checkedItemsList.length ? (
          <>
            <Button
              variant="secondary"
              onClick={actionButtonExport}
              iconElement={<Export />}
            >
              Export
            </Button>
            <Button
              variant="secondary"
              onClick={actionButtonImport}
              iconElement={<Import />}
            >
              Import
            </Button>
            <Button variant="primary" onClick={redirectToPageCreating}>
              {btnName}
            </Button>
          </>
        ) : (
          <div className={classes.deleteButton_box}>
            <Button variant="primary">Delete</Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default TableHeaderActions;
