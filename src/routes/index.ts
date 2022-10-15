import express from 'express';
import mainRouter from './gen.router';

const router = express.Router();

router.use('/gen', mainRouter);

export default router;
