// @ts-nocheck
import express from 'express';
import mainController from '../controllers/main.controller';

const router = express.Router();

router.route('/').get(mainController.getAllPayload);
router.route('/by').get(mainController.getPayloadBy);
router.route('/create').post(mainController.createPayload);
router.route('/update').patch(mainController.updatePayload);
router.route('/delete').delete(mainController.deletePayload);

export default router;
