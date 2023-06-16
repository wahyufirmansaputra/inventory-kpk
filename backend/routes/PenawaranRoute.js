import express from "express";
import {
    Me,
    Tampil,
    Tambah,
    Edit,
    Update,
    Delete
} from "../controllers/Penawaran.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/',verifyUser, Me);

router.get('/penawaran',verifyUser, Tampil);
router.post('/tambahpenawaran',verifyUser, Tambah);
router.get('/editpenawaran/:id',verifyUser, Edit);
router.put('/updatepenawaran/:id',verifyUser, Update);
router.delete('/deletepenawaran/:id',verifyUser, Delete);

export default router;