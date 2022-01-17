import React from 'react';
import { Table } from 'rsuite';
import { useNavigate } from 'react-router-dom';

interface CustomCellProps {
  currentDataKey: string;
  rowData?: any;
  dataKey?: any;
}

const CustomCell: React.FC<CustomCellProps> = (props) => {
  const { rowData, dataKey, currentDataKey, ...rest } = props;
  const navigate = useNavigate();

  const onClickNavigate = () => {
    navigate(`${rowData[currentDataKey]}`);
  };
  return (
    <Table.Cell onClick={onClickNavigate} {...rest}>
      {rowData[dataKey]}
    </Table.Cell>
  );
};

export default CustomCell;
