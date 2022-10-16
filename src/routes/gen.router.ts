// @ts-nocheck
import express from 'express';
import mainController from '../controllers/main.controller';

const router = express.Router();

router.route('/').get(mainController.getAllPayload);
router.route('/by').get(mainController.getPayloadBy);
router.route('/create-single').post(mainController.createSinglePayload);
router.route('/create-multi').post(mainController.createMultiPayload);
router.route('/update').patch(mainController.updatePayload);
router.route('/delete').delete(mainController.deletePayload);

export default router;
