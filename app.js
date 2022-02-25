const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

const info = {};
const info2 = {};

// sleep 기능
const sleep = (ms) => {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	});
}

// 다른 도메인, 포트에 있는 리소스를 요청을 허용하도록 CORS 허용
app.use(cors());

// page1.js 예제 rest api 를 이용한 ibpage
app.get('/api/data/:ibpage', async (req, res) => {
	// param 응답 전송 (param 확인 가능)
  console.log("page 값은 " + req.params.ibpage + " 입니다");
  // Total
	info.Total = 15000;
  // data
	info.data = [
    { sa_nm: '홍길동', sa_id: '9821450', sa_dept: '04',
        sa_position: 'B0', sa_enterdate: '19980305', sa_desc: '' },
    { sa_nm: '김한국', sa_id: '9510427', sa_dept: '01',
      sa_position: 'A3', sa_enterdate: '19890317', sa_desc: '' },
    { sa_nm: '홍길동', sa_id: '9821450', sa_dept: '04',
        sa_position: 'B0', sa_enterdate: '19980305', sa_desc: '' },
    { sa_nm: '김한국', sa_id: '9510427', sa_dept: '01',
      sa_position: 'A3', sa_enterdate: '19890317', sa_desc: '' },
    { sa_nm: '홍길동', sa_id: '9821450', sa_dept: '04',
        sa_position: 'B0', sa_enterdate: '19980305', sa_desc: '' },
    { sa_nm: '김한국', sa_id: '9510427', sa_dept: '01',
      sa_position: 'A3', sa_enterdate: '19890317', sa_desc: '' },
    { sa_nm: '홍길동', sa_id: '9821450', sa_dept: '04',
        sa_position: 'B0', sa_enterdate: '19980305', sa_desc: '' },
    { sa_nm: '김한국', sa_id: '9510427', sa_dept: '01',
      sa_position: 'A3', sa_enterdate: '19890317', sa_desc: '' },
    { sa_nm: '홍길동', sa_id: '9821450', sa_dept: '04',
        sa_position: 'B0', sa_enterdate: '19980305', sa_desc: '' },
    { sa_nm: '김한국', sa_id: '9510427', sa_dept: '01',
      sa_position: 'A3', sa_enterdate: '19890317', sa_desc: '' },
    { sa_nm: '홍길동', sa_id: '9821450', sa_dept: '04',
        sa_position: 'B0', sa_enterdate: '19980305', sa_desc: '' },
    { sa_nm: '김한국', sa_id: '9510427', sa_dept: '01',
      sa_position: 'A3', sa_enterdate: '19890317', sa_desc: '' },
    { sa_nm: '홍길동', sa_id: '9821450', sa_dept: '04',
        sa_position: 'B0', sa_enterdate: '19980305', sa_desc: '' },
    { sa_nm: '김한국', sa_id: '9510427', sa_dept: '01',
      sa_position: 'A3', sa_enterdate: '19890317', sa_desc: '' },
    { sa_nm: '홍길동', sa_id: '9821450', sa_dept: '04',
        sa_position: 'B0', sa_enterdate: '19980305', sa_desc: '' },
    { sa_nm: '김한국', sa_id: '9510427', sa_dept: '01',
      sa_position: 'A3', sa_enterdate: '19890317', sa_desc: '' },
    { sa_nm: '홍길동', sa_id: '9821450', sa_dept: '04',
        sa_position: 'B0', sa_enterdate: '19980305', sa_desc: '' },
    { sa_nm: '김한국', sa_id: '9510427', sa_dept: '01',
      sa_position: 'A3', sa_enterdate: '19890317', sa_desc: '' },
    { sa_nm: '홍길동', sa_id: '9821450', sa_dept: '04',
        sa_position: 'B0', sa_enterdate: '19980305', sa_desc: '' },
    { sa_nm: '김한국', sa_id: '9510427', sa_dept: '01',
      sa_position: 'A3', sa_enterdate: '19890317', sa_desc: '' },
    { sa_nm: '홍길동', sa_id: '9821450', sa_dept: '04',
        sa_position: 'B0', sa_enterdate: '19980305', sa_desc: '' },
    { sa_nm: '김한국', sa_id: '9510427', sa_dept: '01',
      sa_position: 'A3', sa_enterdate: '19890317', sa_desc: '' },
    { sa_nm: '홍길동', sa_id: '9821450', sa_dept: '04',
        sa_position: 'B0', sa_enterdate: '19980305', sa_desc: '' },
    { sa_nm: '김한국', sa_id: '9510427', sa_dept: '01',
      sa_position: 'A3', sa_enterdate: '19890317', sa_desc: '' },
    { sa_nm: '홍길동', sa_id: '9821450', sa_dept: '04',
        sa_position: 'B0', sa_enterdate: '19980305', sa_desc: '' },
    { sa_nm: '김한국', sa_id: '9510427', sa_dept: '01',
      sa_position: 'A3', sa_enterdate: '19890317', sa_desc: '' },
    { sa_nm: '홍길동', sa_id: '9821450', sa_dept: '04',
        sa_position: 'B0', sa_enterdate: '19980305', sa_desc: '' },
    { sa_nm: '김한국', sa_id: '9510427', sa_dept: '01',
      sa_position: 'A3', sa_enterdate: '19890317', sa_desc: '' },
    { sa_nm: '홍길동', sa_id: '9821450', sa_dept: '04',
        sa_position: 'B0', sa_enterdate: '19980305', sa_desc: '' },
    { sa_nm: '김한국', sa_id: '9510427', sa_dept: '01',
      sa_position: 'A3', sa_enterdate: '19890317', sa_desc: '' }
  ];
	// sleep 실행
	await sleep(700);
	// json 응답을 전송.
	res.json(info);
});

// page2.js 예제 doSearchPaging
app.get('/api/searchpaging', async (req, res) => {
  console.log(req.query.data, req.query.total);
  // Total
	info2.Total = req.query.total || 15000;
  // data
  function selectData(count) {
    const loaddata = [];
    const sdept = [
      'CEO',
      'SI사업부',
      '인사부',
      '솔루션사업부'
    ];
    const steam = [
      '임원',
      '개발1팀',
      '개발2팀',
      '인사1팀',
      '인사2팀'
    ];
    const sname = [
      '황정열',
      '강대호',
      '김미경',
      '김선희'
    ];
    const sgender = [
      '남',
      '여'
    ]
    for (let i = 0; i < count; i++) {
      loaddata.push({
        sDept: sdept[Math.floor(Math.random() * 4)],
        sTeam: steam[Math.floor(Math.random() * 5)],
        sName: sname[Math.floor(Math.random() * 4)],
        sGender: sgender[Math.floor(Math.random() * 2)]
      });
    }

    return loaddata;
  }

  info2.data = selectData(req.query.data || 100);
  // sleep 실행
	await sleep(700);
  res.send(info2);
});

app.listen(PORT, () => console.log(`express server ${ PORT }`));
