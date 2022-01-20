import React, { useEffect, useState } from 'react';
import { RootState } from '@RootStateType';
import { useDispatch, useSelector } from 'react-redux';
import { ContractState } from '@Types/contract.types';
import { Loader } from '@common';
import { EmptyPage, TableHeaderActions } from '@components';
import { getContractList } from '@Actions/contracts.action';
import { CustomTable } from '@UiKitComponents';
import { DataKeyType } from '@Types/application.types';

interface ListContractsProps {}

const dataKeyContractList: DataKeyType[] = [
  {
    key: 'name',
    label: 'Contract name',
    align: 'left',
    flexGrow: 1,
    sortable: true,
  },
  {
    key: 'partnerId',
    label: 'Vendor',
    align: 'left',
    flexGrow: 1,
    sortable: true,
  },

  {
    key: 'price',
    label: 'Amount',
    align: 'left',
    flexGrow: 1,
    sortable: true,
  },
  {
    key: 'currencyId',
    label: 'Currency',
    align: 'left',
    flexGrow: 1,
  },
  {
    key: 'endDate',
    label: 'End date',
    align: 'left',
    flexGrow: 1,
    sortable: true,
  },
];

const getContractState = (state: RootState) => state.ContractReducer;

const ListContracts: React.FC<ListContractsProps> = () => {
  const { contracts, loadingContract } = useSelector<RootState, ContractState>(
    getContractState
  );
  const dispatch = useDispatch();
  const [checkedItemsList, setCheckedItemsList] = useState<number[] | string[]>(
    []
  );
  useEffect(() => {
    if (!contracts.length) {
      dispatch(getContractList());
    }
  }, []);

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
    <div>
      <div className="padding_wrapper_table-page">
        <TableHeaderActions
          checkedItemsList={checkedItemsList}
          pageCreatingUrl="newContract"
          textRedirectButton="New Contract"
        />
        <CustomTable
          data={contracts}
          dataKey={dataKeyContractList}
          currentDataKey="contractId"
          setCheckedItemsList={setCheckedItemsList}
        />
      </div>
    </div>
  );
};

export default ListContracts;
