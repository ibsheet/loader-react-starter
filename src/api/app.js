const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8888;

// module.exports 를 리턴
const { info } = require('./data.js');

// sleep 기능
const sleep = (ms) => {
	return new Promise(resolve => {
		setTimeout(resolve, ms);
	});
}

// 다른 도메인, 포트에 있는 리소스를 요청을 허용하도록 CORS 허용
app.use(cors());
app.get('/api/data', async (req, res) => {
	info.Total = info.data.length;
	// sleep 실행
	await sleep(700);
	// json 응답을 전송.
	res.json(info);
});

app.listen(PORT, () => console.log(`express server ${ PORT }`));
