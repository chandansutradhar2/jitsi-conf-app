const express = require("express");
const app = express();

app.use(express.static("client"));

// app.get("/", (request, response) => {
// 	response.send({ status: true, result: "success" });
// });

const server = app.listen(3000, () => {
	console.log("signalling server listening on 3000");
});
