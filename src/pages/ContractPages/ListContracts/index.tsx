import React from 'react';
import { RootState } from '@RootStateType';
import { useSelector } from 'react-redux';
import { ContractState } from '@Types/contract.types';
import { Loader } from '@common';
import { EmptyPage, TableHeaderActions } from '@components';
import classes from './ListContracts.module.scss';

interface ListContractsProps {}

const getContractState = (state: RootState) => state.ContractReducer;

const ListContracts: React.FC<ListContractsProps> = () => {
  const { contracts, loadingContract } = useSelector<RootState, ContractState>(
    getContractState
  );

  if (loadingContract) {
    return <Loader />;
  }
  if (!contracts.length) {
    return (
      <EmptyPage textButton="Contract" redirectPath="newContract">
        <h5>You don`t have contracts yet</h5>
        <h5>Click the button and create a new contract</h5>
      </EmptyPage>
    );
  }

  return (
    <div className={classes.contractList}>
      <div className={classes.contractList_wrapper}>
        <TableHeaderActions
          pageCreatingUrl="/Contract/newContract"
          textRedirectButton="New Contract"
        />
      </div>
    </div>
  );
};

export default ListContracts;
