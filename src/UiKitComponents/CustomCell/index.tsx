import React, { memo } from 'react';
import { Table } from 'rsuite';
import { useNavigate } from 'react-router-dom';

interface CustomCellProps {
  currentDataKey: string;
  dataKey: string;
  rowData?: any;
}

const CustomCell: React.FC<CustomCellProps> = (props) => {
  const { rowData, dataKey, currentDataKey, ...rest } = props;
  const navigate = useNavigate();

  const mappingValue = (): string | number => {
    const arrKey = dataKey.split('.');
    let newData = rowData;
    arrKey.forEach((key) => {
      newData = newData[key];
    });
    return newData;
  };

  const onClickNavigate = () => {
    navigate(`${rowData[currentDataKey]}`);
  };
  return (
    <Table.Cell onClick={onClickNavigate} {...rest}>
      {mappingValue()}
    </Table.Cell>
  );
};

export default memo(CustomCell);
