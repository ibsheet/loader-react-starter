import axios from 'axios';
// STATUS 를 사용하기 위한 IB_Preset 모듈
import { IB_Preset } from './common';

// doSearchPaging 을 사용하지 않은 페이지로 스크롤 맨마지막에 닿으면 재조회.
// axios 를 이용한 데이터 로드. 다음과 같이 page 로 직접 구현해서 만들어야 합니다.
function loadSearchData(evt, append) {
  axios.get('http://localhost:8000/api/data/' + evt.sheet.paging)
  .then(res => {
    // callback message
    function callback () {
      evt.sheet.showMessageTime('<span style=\'color:black\'>조회가 완료되었습니다.<br> 서버모듈 전체 데이터 건수 : ' + res.data.Total + '</span>', 1500);
    }
    evt.sheet.loadSearchData(res.data, append, callback);
  })
  .catch(e => console.log(e))
}

// ibsheet sample data
export const SheetSampleData = [
  // sheet1
  {
    data: [
      { sa_nm: '홍길동', sa_id: '9821450', sa_dept: '04',
        sa_position: 'B0', sa_enterdate: '19980305', sa_desc: '' },
      { sa_nm: '김한국', sa_id: '9510427', sa_dept: '01',
        sa_position: 'A3', sa_enterdate: '19890317', sa_desc: '' }
    ],
    options: {
      Cfg: { SearchMode: 0, InfoRowConfig: { Visible: 1 } },
      Def: { Col: { RelWidth: 1 }, Row: { CanFormula: true } },
      Cols: [
        // STATUS 를 사용하기 위한 IB_Preset 모듈
        { Header: '상태', Name: 'sa_status', Extend: IB_Preset.STATUS },
        { Header: { Value: '', HeaderCheck: 1, IconAlign: 'Center' }, Type: 'Bool', Name: 'sa_bool' },
        { Header: '이름', Name: 'sa_nm', Type: 'Text' },
        { Header: '사원번호', Name: 'sa_id', Type: 'Text',
        Align: 'center' },
        { Header: '부서', Name: 'sa_dept', Type: 'Enum',
          Enum: '|경영지원|총무|인사|설계|시공1|시공2',
          EnumKeys: '|01|02|03|04|05|06' },
        { Header: '직급', Name: 'sa_position', Type: 'Enum',
          Enum: '|대표|상무|이사|부장|차장|과장|대리|사원',
          EnumKeys: '|A1|A2|A3|B0|B1|C4|C5|C6' },
        { Header: '입사일', Name: 'sa_enterdate', Type: 'Date', Extend: IB_Preset.YMD },
        { Header: '비고', Name: 'sa_desc', Type: 'Text' }
      ],
      Events: {
         // SearchMode:0 을 SearchMode: 3 과 같이 동작하도록 핸들링.
        // 첫 렌더링시 조회
        onRenderFirstFinish: evt => {
          evt.sheet.paging = 1;
          loadSearchData(evt);
        },
        // 스크롤 마지막시에 재조회 하고 재조회한 데이터는 append 합니다. SearchMode: 3 과 똑같은 기능
        onVScrollEndPoint: evt => {
          loadSearchData(evt, true);
        },
        // 조회시 넘길 page 객체
        onSearchFinish: evt => {
          evt.sheet.paging++;
        }
      }
    }
  },
  // sheet2
  {
    options: {
      Def: {
        Col: { Align: 'Left', RelWidth: '1' }
      },
      Cfg: {
        SearchMode: 3,
        CanSort: '0'
      },
      Cols: [
        { Header: { Value: '', HeaderCheck: 1, IconAlign: 'Center' }, Type: 'Bool', Name: 'sa_bool', Align: 'Center' },
        { Header: '부서명', Type: 'Text', Name: 'sDept' },
        { Header: '팀명', Type: 'Text', Name: 'sTeam' },
        { Header: '직급', Type: 'Text', Name: 'sPosition' },
        { Header: '성명', Type: 'Text', Name: 'sName' },
        { Header: '성별', Type: 'Enum', Name: 'sGender', Align: 'Center',
          Enum: '|男|女|기타', EnumKeys: '|男|女|기타' },
        { Header: '연령대', Type: 'Enum', Name: 'sAgeRange', Align: 'Center',
          Enum: '|10대|20대|30대|40대|50대|60대',
          EnumKeys: '|10대|20대|30대|40대|50대|60대'
        },
        { Header: '거주지', Type: 'Text', Name: 'sAddr',
          Align: 'Center' },
        { Header: '나이', Type: 'Int', Name: 'sAge',
          Width: '130', Align: 'Right' },
        { Header: '근속기간(년)', Type: 'Int',
          Name: 'sPeriod', Align: 'Right' },
        { Header: '급여', Type: 'Int', Name: 'sSalary',
          Align: 'Right', Format: '#,###' },
        { Header: '상여', Type: 'Int', Name: 'sBonus',
          Align: 'Right', Format: '#,###' }
      ],
      Events: {
        onRenderFirstFinish: evt => {
          const param = {
            url: 'http://localhost:8000/api/searchpaging',
            // 카운팅 할 data 의 갯수와 전체 갯수를 param 으로 해서 보내도록 합니다.
            param: 'data=100&total=20000&searchMode=' + evt.sheet.SearchMode,
          };

          evt.sheet.doSearchPaging(param);
        }
      }
    }
  }
]
