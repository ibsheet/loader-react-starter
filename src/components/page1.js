import React, { useEffect } from 'react';
import loader from '@ibsheet/loader';
import { SheetSampleData } from '../shared/ibsheet-data';

const Page1 = () => {
  const sheetId = 'sheet';
  const sheetEl = 'sheetContainer';

  useEffect(() => {
    const { data, options } = SheetSampleData[0];
    console.log('sampleData', data, options);

    // IBSheet.create 의 인자를 기반으로 생성.
    loader.createSheet({
      id: sheetId,
      el: sheetEl,
      options,
    }).then(sheet => {
      // sheet 객체만 생성된 상태.
      console.log('created sheet', sheet.id);
    });
    return () => {
      loader.removeSheet(sheetId);
    };
  }, []);

  return (
    <div>
      <p>page1 works!</p>
      <div id={ sheetEl }></div>
    </div>
  );
}

export default Page1;
