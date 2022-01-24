import { useState } from 'react';
import { UnknownDataType } from '@Types/application.types';

type OptionsType = {
  loading: boolean;
  sortColumn?: string;
  sortType?: 'desc' | 'asc';
};

const useSortDataTable = (
  data: UnknownDataType[]
): [
  sortedData: UnknownDataType,
  options: OptionsType,
  handleSortColumn: (sortColumn: string, sortType?: 'desc' | 'asc') => void
] => {
  const [sortedData, setSortedData] = useState<UnknownDataType[]>(data);
  const [sortColumn, setSortColumn] = useState<string | undefined>();
  const [sortType, setSortType] = useState<'desc' | 'asc' | undefined>();
  const [loading, setLoading] = useState(false);

  const sortColumns = () => {
    if (sortColumn && sortType) {
      return data.sort((a, b) => {
        let x = a[sortColumn];
        let y = b[sortColumn];
        console.log(typeof x);
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
    return data;
  };
  const handleSortColumn = (sortColumn: string, sortType?: 'desc' | 'asc') => {
    setLoading(true);
    setSortColumn(sortColumn);
    setSortType(sortType);
    setSortedData(sortColumns());
    setLoading(false);
  };

  const options = {
    loading,
    sortColumn,
    sortType,
  };
  return [sortedData, options, handleSortColumn];
};

export default useSortDataTable;
