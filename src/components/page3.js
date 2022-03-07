import React, { useEffect } from 'react';
import loader from '@ibsheet/loader';
import { SheetSampleData } from '../shared/ibsheet-data';

const Page3 = () => {
  const sheetId = 'sheet';
  const sheetEl = 'sheetContainer';

  useEffect(() => {
    const { data, options } = SheetSampleData[2];

    loader.createSheet({
      id: sheetId,
      el: sheetEl,
      options,
      data
    }).then(sheet => {
      console.log('created sheet', sheet.id);
    });

    return () => {
      loader.removeSheet(sheetId);
    };
  }, []);

  return (
    <div>
      <p>React, axios 를 사용하여 데이터를 조회하는 샘플입니다.</p>
      <div id={ sheetEl }></div>
    </div>
  );
}

export default Page3;
