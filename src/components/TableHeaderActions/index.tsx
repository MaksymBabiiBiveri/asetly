import React from 'react';
import classes from './ListHeaderActions.module.scss';
import { Button, SearchInput } from '@UiKitComponents';
import { useNavigate } from 'react-router-dom';
import { Export, Import } from '@common';

interface TableHeaderActionsProps {
  pageCreatingUrl: string;
  textRedirectButton: string;
  checkedItemsList?: number[] | string[];
  actionButtonExport?: () => void;
  actionButtonImport?: () => void;
  actionButtonDelete?: () => void;
}

const TableHeaderActions: React.FC<TableHeaderActionsProps> = (props) => {
  const {
    pageCreatingUrl,
    textRedirectButton,
    checkedItemsList = [],
    actionButtonExport,
    actionButtonImport,
    actionButtonDelete,
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
        {checkedItemsList && !checkedItemsList.length ? (
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
              {textRedirectButton}
            </Button>
          </>
        ) : (
          <div className={classes.deleteButton_box}>
            <Button variant="primary" onClick={actionButtonDelete}>
              Delete
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default TableHeaderActions;
