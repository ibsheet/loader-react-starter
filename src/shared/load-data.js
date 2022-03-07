import axios from 'axios';

// axios 를 이용한 데이터 로드
const loadSearchData = evt => {
  axios.get('http://localhost:8888/api/data')
  .then(res => {
    const param = {
      data: res.data,
      callback: rtn => {
        evt.sheet.showMessageTime('<span style=\'color:black\'>조회가 완료되었습니다.<br> 서버모듈 전체 데이터 건수 : ' + rtn.data.Total + '</span>', 1500);
      }
    };

    evt.sheet.loadSearchData(param);
  })
  .catch(e => evt.sheet.showMessageTime('src/api 폴더에서 서버를 실행시켜주세요. (명령어: node app.js)'))
};

export default loadSearchData;
