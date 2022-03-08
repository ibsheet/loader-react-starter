import React, { useEffect } from 'react';
import loader from '@ibsheet/loader';
import { SheetSampleData } from '../shared/ibsheet-data';

const Page2 = () => {
  const sheetId = 'sheet';
  const sheetEl = 'sheetContainer';

  useEffect(() => {
    const { data, options } = SheetSampleData[1];

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
      <p>SearchMode: 0, 기본 페이지입니다.</p>
      <div id={ sheetEl }></div>
    </div>
  );
}

export default Page2;
