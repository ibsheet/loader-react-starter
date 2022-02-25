const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

const info = {};

// sleep 기능
const sleep = (ms) => {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	});
}

// 다른 도메인, 포트에 있는 리소스를 요청을 허용하도록 CORS 허용
app.use(cors());
app.get('/api/data', async (req, res) => {
	// param 응답 전송 (param 확인 가능)
	// res.send(req.query.ibpage + ',' + req.query.data + ',' + req.query.total + ',' + req.query.searchMode);
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

app.listen(PORT, () => console.log(`express server ${ PORT }`));
