const express = require("express");
const app = express();
// require('dotenv').config();

// const vision = require('@google-cloud/vision');
// const fsP = require('fs').promises;
// var _ = require('lodash');
// const Jimp = require('jimp');
// const multer = require('multer');

// var storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/')
//     },
//     filename: function (req, file, cb) {
//         cb(null, 'input.jpg')
//     }
// })

// const upload = multer({ storage: storage });

// app.post('', upload.single('file'), async (req, res) => {
//     const resJSON = await main('./uploads/input.jpg');
//     console.log(resJSON)
//     res.json(resJSON)
// })

app.get('', async (req, res) => {
    res.send("hello")
})


// Creates a client
// const client = new vision.ImageAnnotatorClient({
//     keyFilename: "./celtic-current-337902-3c973da6e430.json"
// });

// const keyJSON = {
//     "type": process.env.type,
//     "project_id": process.env.project_id,
//     "private_key_id": process.env.private_key_id,
//     "private_key": process.env.private_key,
//     "client_email": process.env.client_email,
//     "client_id": process.env.client_id,
//     "auth_uri": process.env.auth_uri,
//     "token_uri": process.env.token_uri,
//     "auth_provider_x509_cert_url": process.env.auth_provider_x509_cert_url,
//     "client_x509_cert_url": process.env.client_x509_cert_url
// }

// const client = new vision.ImageAnnotatorClient({
//     credentials: keyJSON
// });

// async function detectFaces(inputFile) {
//     const request = { image: { source: { filename: inputFile } } };
//     const results = await client.faceDetection(request);
//     const faces = results[0].faceAnnotations;
//     const numFaces = faces.length;
//     console.log(`Found ${numFaces} face${numFaces === 1 ? '' : 's'}.`);
//     return faces;
// }

// async function funcJimp(x, y, w, h, img) {
//     const image = await Jimp.read(img);
//     image.crop(x, y, w, h + 0.2 * h)
//         .write('./crop.png');
// }


// async function main(inputFile) {
//     const results = await client.textDetection(inputFile);
//     const result = results[0].textAnnotations;
//     const aadharNo = result[0].description.match(/(\d+){4}\s(\d+){4}\s(\d+){4}/);
//     const dob = result[0].description.match(/(\d){2}\/(\d{2})\/(\d{4})/);
//     const gender = result[0].description.match(/(MALE|FEMALE|Male|Female)/)
//     const names = result[0].description.match(/([A-Z])([a-z])+/g)
//     _.remove(names, function (n) { return n === "Government" || n === "India" || n === "Date" || n === "Birth" || n === "Male" || n === "Female"; });
//     const name = _.join(names, [separator = ' ']);


//     const faces = await detectFaces(inputFile);
//     const x0 = faces[0].boundingPoly.vertices[0].x;
//     const y0 = faces[0].boundingPoly.vertices[0].y;
//     const x2 = faces[0].boundingPoly.vertices[2].x;
//     const y2 = faces[0].boundingPoly.vertices[2].y;
//     await funcJimp(x0, y0, x2 - x0, y2 - y0, inputFile);
//     const encoded = await fsP.readFile('./crop.png', 'base64');

//     const opJSON = {
//         Name: name,
//         DOB: dob[0],
//         Gender: gender[0],
//         AadharNo: aadharNo[0],
//         Photo: encoded
//     }
//     return opJSON;
// }

const port = 3000 || process.env.PORT;
app.listen(port, () => {
    console.log(`server running at port : ${port}`);
})