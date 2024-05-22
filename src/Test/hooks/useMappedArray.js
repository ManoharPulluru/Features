import { useMemo } from 'react';

const useMappedArray = (array, renderItem) => {
  return useMemo(() => {
    return array.map((item, index) => renderItem(item, index));
  }, [array, renderItem]);
};

export default useMappedArray;
