import React, { memo } from 'react';
import { Table } from 'rsuite';
import { CustomCheckbox } from '@UiKitComponents';

interface CheckboxCellProps {
  checkedKeys: string[] | number[];
  rowData?: any;
  dataKey?: any;
  onChange?: (
    value?: string | number | undefined,
    checked?: boolean,
    event?: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

const CheckboxCell: React.FC<CheckboxCellProps> = (props) => {
  const { rowData, onChange, checkedKeys, dataKey, ...rest } = props;

  const checkKeys = checkedKeys.some((item: any) => item === rowData[dataKey]);

  return (
    <Table.Cell
      {...rest}
      style={{
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        <CustomCheckbox
          style={{ margin: '0 auto' }}
          value={rowData[dataKey]}
          inline
          onChange={onChange}
          checked={checkKeys}
        />
      </div>
    </Table.Cell>
  );
};
export default memo(CheckboxCell);
