import React, { useState } from 'react';

type DataType<T> = {
  [KeyType in keyof T]: T[KeyType];
};

type ReturnedData<T> = {
  loading?: boolean;
  sortedData: T[];
  sortColumnMethod: (column: string, type: 'desc' | 'asc') => void;
};

export function useSortDataTable<T>(data: DataType<T>[]): ReturnedData<T> {
  const [sortColumn, setSortColumn] = useState<string>();
  const [sortType, setSortType] = React.useState<'desc' | 'asc'>();
  const [loading, setLoading] = React.useState(false);

  const getData = () => {
    if (sortColumn && sortType) {
      return data.sort(
        (a: { [key: string]: any }, b: { [key: string]: any }) => {
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
        }
      );
    }
    return data;
  };
  const sortedData = getData();
  const handleSortColumn = (column: string, type: 'desc' | 'asc') => {
    setLoading(true);
    setSortColumn(column);
    setSortType(type);
    setLoading(false);
  };

  return { sortedData, loading, sortColumnMethod: handleSortColumn };
}
