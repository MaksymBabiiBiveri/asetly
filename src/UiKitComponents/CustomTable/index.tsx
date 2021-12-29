import React, { useState } from 'react';
import { Pagination, Table } from 'rsuite';
import { DataKeyType } from '@Types/application.types';
import { CheckboxCell } from '@UiKitComponents';
import './CustomTable.scss';

type DataType = {
  [k: string]: any;
  activeStatus?: 'ACTIVE' | null;
};

interface CustomTableProps {
  data: DataType[];
  dataKey: DataKeyType[];
  dataKeyCheckbox: string;
  setCheckedItemsList(state: string[] | number[]): void;
}

const CustomTable: React.FC<CustomTableProps> = (props) => {
  const { data, dataKey, dataKeyCheckbox, setCheckedItemsList } = props;


  const [sortColumn, setSortColumn] = React.useState<string>();
  const [sortType, setSortType] = React.useState<'desc' | 'asc'>();
  const [loading, setLoading] = React.useState(false);

  const [checkedKeys, setCheckedKeys] = React.useState<any[]>([]);
  const [limitPage, setLimitPage] = useState(15);
  const [page, setPage] = useState(1);

  const handleChangeLimit = (key: number) => {
    setPage(1);
    setLimitPage(key);
  };

  const filteredData = data.filter((v, i) => {
    const start = limitPage * (page - 1);
    const end = start + limitPage;
    return i >= start && i < end;
  });

  const handleCheck = (value?: string | number, checked?: boolean) => {
    const keys = checked
      ? [...checkedKeys, value]
      : checkedKeys.filter((item: any) => item !== value);
    setCheckedItemsList(keys);
    setCheckedKeys(keys);
  };

  const getData = () => {
    if (sortColumn && sortType) {
      return filteredData.sort((a, b) => {
        let x = a[sortColumn];
        let y = b[sortColumn];

        if (typeof x === 'string') {
          x = x.charCodeAt(0);
        }
        if (typeof y === 'string') {
          y = y.charCodeAt(0);
        }
        if (sortType === 'asc') {
          return x - y;
        } else {
          return y - x;
        }
      });
    }
    return filteredData;
  };

  const handleSortColumn = (
    sortColumns: string,
    sortTypes?: 'desc' | 'asc'
  ) => {
    setLoading(true);
    setSortColumn(sortColumns);
    setSortType(sortTypes);
    setLoading(false);
  };

  return (
    <div className="table_wrapper">
      <Table
        hover={false}
        height={670}
        sortColumn={sortColumn}
        sortType={sortType}
        onSortColumn={handleSortColumn}
        loading={loading}
        data={getData()}
        rowClassName="custom_row"
      >
        <Table.Column width={50} align="center">
          <Table.HeaderCell style={{ padding: 0 }}>
            <div> </div>
          </Table.HeaderCell>
          <CheckboxCell
            dataKey={dataKeyCheckbox}
            checkedKeys={checkedKeys}
            onChange={handleCheck}
          />
        </Table.Column>

        {dataKey.map((dataItem) => {
          const { key, label, ...rest } = dataItem;
          return (
            <Table.Column {...rest} key={key}>
              <Table.HeaderCell>{label}</Table.HeaderCell>
              <Table.Cell dataKey={key} />
            </Table.Column>
          );
        })}
      </Table>
      <div className="pagination_wrapper">
        <Pagination
          prev
          next
          ellipsis
          boundaryLinks
          maxButtons={2}
          size="sm"
          layout={['limit', 'pager']}
          total={data.length}
          limitOptions={[10, 15]}
          limit={limitPage}
          activePage={page}
          onChangePage={setPage}
          onChangeLimit={handleChangeLimit}
        />
      </div>
    </div>
  );
};
export default CustomTable;
