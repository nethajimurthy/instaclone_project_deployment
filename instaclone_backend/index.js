import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import router from "./Routers/posts.js";
import path from "path";
import multer from 'multer';
import url from 'url';

const app = express();
//Multer configs for image upload

const storage = multer.diskStorage({
  destination: (req, res, callback) => {
    callback(null, "./images/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

export const upload = multer({
  storage: storage,
});

function currDir(fileUrl) {
  const __filename = url.fileURLToPath(fileUrl);
  return path.dirname(__filename);
}

const __dirname = currDir(import.meta.url);

const photo = path.join(__dirname, "./images");

app.use(express.static(photo));

//------------------------------------------------------------------------
//Express , cors , bodyparser 

app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/posts',router)


//------------------------------------------------------------------
//Atlas online database

const URL =
  "mongodb+srv://Nethajinandhu007:Nethaji90@nethaji.q5d8x7m.mongodb.net/Nethaji";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running at ${PORT}`))
  )
  .catch((error) => console.log(error.message));
