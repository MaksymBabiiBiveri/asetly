import React, { useState } from 'react';
import { Checkbox, Pagination, Table } from 'rsuite';
import { RootState } from '@RootStateType';
import { useSelector } from 'react-redux';
import './CustomTableRs.scss';
import { CheckboxCell } from '@UiKitComponents';

interface CustomTableRSProps {}

const getStateCompanyList = (state: RootState) =>
  state.CompanyReducer.companyList;

const CustomTableRS: React.FC<CustomTableRSProps> = () => {
  const [checkedKeys, setCheckedKeys] = React.useState<any[]>([]);
  const [limit, setLimit] = useState(3);
  const [page, setPage] = React.useState(1);
  const companyList = useSelector(getStateCompanyList);
  let checked = false;
  let indeterminate = false;

  const handleChangeLimit = (dataKey: number) => {
    setPage(1);
    setLimit(dataKey);
  };

  const data = companyList.filter((v, i) => {
    const start = limit * (page - 1);
    const end = start + limit;
    return i >= start && i < end;
  });

  if (checkedKeys.length === data.length) {
    checked = true;
  } else if (checkedKeys.length === 0) {
    checked = false;
  } else if (checkedKeys.length > 0 && checkedKeys.length < data.length) {
    indeterminate = true;
  }

  const handleCheckAll = (value: any, checkedBox: any) => {
    const keys = checkedBox ? data.map((item) => item.companyId) : [];
    setCheckedKeys(keys);
  };

  const handleCheck = (value: any, checkedBox: any) => {
    const keys = checkedBox
      ? [...checkedKeys, value]
      : checkedKeys.filter((item) => item !== value);
    setCheckedKeys(keys);
  };

  return (
    <div className="table_wrapper">
      <Table hover={false} data={data} height={670} rowClassName="custom_row">
        <Table.Column width={50} align="center">
          <Table.HeaderCell style={{ padding: 0 }}>
            <div style={{ lineHeight: '40px' }}>
              <Checkbox
                inline
                checked={checked}
                indeterminate={indeterminate}
                onChange={handleCheckAll}
              />
            </div>
          </Table.HeaderCell>
          <CheckboxCell
            dataKey="companyId"
            checkedKeys={checkedKeys}
            onChange={handleCheck}
          />
        </Table.Column>
        <Table.Column width={130} align="center" fixed sortable>
          <Table.HeaderCell>Company Id</Table.HeaderCell>
          <Table.Cell dataKey="companyId" />
        </Table.Column>
        <Table.Column flexGrow={1} align="center">
          <Table.HeaderCell>Company Code</Table.HeaderCell>
          <Table.Cell dataKey="companyCode" />
        </Table.Column>
        <Table.Column flexGrow={1} align="center" sortable>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.Cell dataKey="name" />
        </Table.Column>
        <Table.Column flexGrow={1} align="center">
          <Table.HeaderCell>Address</Table.HeaderCell>
          <Table.Cell dataKey="address" />
        </Table.Column>
      </Table>

      <div className="pagination_wrapper">
        <Pagination
          prev
          next
          ellipsis
          boundaryLinks
          maxButtons={2}
          size="xs"
          layout={['limit', '|', 'pager']}
          total={companyList.length}
          limitOptions={[3, 5]}
          limit={limit}
          activePage={page}
          onChangePage={setPage}
          onChangeLimit={handleChangeLimit}
        />
      </div>
    </div>
  );
};
export default CustomTableRS;
