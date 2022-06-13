import React, { useEffect } from 'react';
import loader from '@ibsheet/loader';
import { SheetSampleData } from '../shared/ibsheet-data';

const Page1 = () => {
  const sheetId = 'sheet';
  const sheetEl = 'sheetContainer';

  useEffect(() => {
    const { data, options } = SheetSampleData[0];

    loader.createSheet({
      id: sheetId,
      el: sheetEl,
      options,
      data
    }).then(sheet => {
      // 주의: 해당 구간에서 데이터 조회를 하면 안됩니다. 데이터 조회는 onRenderFirstFinish 이벤트에서 실행해야합니다.
      console.log('created sheet', sheet.id);
    });

    return () => {
      loader.removeSheet(sheetId);
    };
  }, []);

  return (
    <div>
      <p>SearchMode: 2, 기본 페이지 입니다.</p>
      <div id={ sheetEl }></div>
    </div>
  );
}

export default Page1;
