import express from 'express';
import { getPosts,addPost } from '../controllers/postControls.js';
import {upload} from '../index.js'

const router=express.Router();

router.get('/',getPosts);

router.post('/add',async ()=>{await upload.single("image")},addPost);

export default router;