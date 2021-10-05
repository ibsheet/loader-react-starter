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
    })
    return () => {
      loader.removeSheet(sheetId);
    };
  }, []);

  return (
    <div>
      <p>page2 works!</p>
      <div id={ sheetEl }></div>
    </div>
  );
}

export default Page2
