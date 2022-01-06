import React, { useState } from 'react';
import { Pagination, Table } from 'rsuite';
import { DataKeyType, UnknownDataType } from '@Types/application.types';
import { CheckboxCell } from '@UiKitComponents';
import './CustomTable.scss';
import useSortDataTable from '../../hooks/useSortDataTable';
import { useNavigate } from 'react-router-dom';
import useWindowDimensions from '../../hooks/useWindowSize';

interface DataType extends UnknownDataType {
  activeStatus?: 'ACTIVE' | null;
}

interface CustomTableProps {
  data: DataType[];
  dataKey: DataKeyType[];
  currentDataKey: string;
  setCheckedItemsList(state: string[] | number[]): void;
}

const CustomTable: React.FC<CustomTableProps> = (props) => {
  const { data, dataKey, currentDataKey, setCheckedItemsList } = props;

  const [checkedKeys, setCheckedKeys] = React.useState<any[]>([]);
  const [limitPage, setLimitPage] = useState(15);
  const [page, setPage] = useState(1);
  const [sortedData, options, handleSortColumn] = useSortDataTable(data);
  const navigate = useNavigate();
  const { height } = useWindowDimensions();

  const handleChangeLimit = (key: number) => {
    setPage(1);
    setLimitPage(key);
  };

  const onRowClick = (row: DataType) => {
    navigate(`${row[currentDataKey]}`);
  };

  const filteredData = sortedData.filter((v: any, i: any) => {
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

  return (
    <div className="table_wrapper">
      <Table
        onRowClick={onRowClick}
        height={height && height <= 1110 ? height - 280 : 780}
        sortColumn={options.sortColumn}
        sortType={options.sortType}
        onSortColumn={handleSortColumn}
        loading={options.loading}
        data={filteredData}
        rowClassName="custom_row"
        rowKey={currentDataKey}
        rowHeight={58}
      >
        <Table.Column width={50} align="center">
          <Table.HeaderCell style={{ padding: 0 }}>
            <div> </div>
          </Table.HeaderCell>
          <CheckboxCell
            dataKey={currentDataKey}
            checkedKeys={checkedKeys}
            onChange={handleCheck}
          />
        </Table.Column>

        {dataKey.map((dataItem) => {
          const { key, label, ...rest } = dataItem;
          return (
            <Table.Column {...rest} key={key} verticalAlign="middle">
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
          layout={['pager']}
          total={data.length}
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
