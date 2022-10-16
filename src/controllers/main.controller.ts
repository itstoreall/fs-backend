import { Request, Response, NextFunction as Next } from 'express';
import createPayloadHandler from './handlers/createPayloadHandler';
import { HttpCode } from '../constants';
// import sortData from '../helpers/sortData';
import {
  creareReq,
  createRes,
  // createResLength,
  createResErr,
} from '../helpers/controllerLogs';

const getAllPayload = async (_: Request, res: Response, next: Next) => {
  const name = 'GET all payload';
  try {
    creareReq(name);
    // const response = await NFTService.getAllNFT();
    // createResLength(name, response);
    // return res
    //   .status(typeof response === 'string' ? 400 : 200)
    //   .json(sortData(response, 'id'));
  } catch (err) {
    createResErr(name, err);
    next(err);
  }
};

const getPayloadBy = async (req: Request, res: Response, next: Next) => {
  const name = 'GET payload by';
  try {
    creareReq(name);
    // const response = await getUserNFTHandler(req.query);
    // createResLength(name, response);
    // return res
    //   .status(typeof response === 'string' ? 400 : 200)
    //   .json(sortData(response, 'id'));
  } catch (err) {
    createResErr(name, err);
    next(err);
  }
};

const createPayload = async (req: Request, res: Response, next: Next) => {
  const name = 'POST payload';
  try {
    creareReq(name);
    const response = await createPayloadHandler(req);
    createRes(name, response);
    return res
      .status(HttpCode.CREATED)
      .json({ status: 'success', code: HttpCode.CREATED, data: response });
  } catch (err) {
    createResErr(name, err);
    next(err);
  }
};

const updatePayload = async (req: Request, res: Response, next: Next) => {
  const name = 'UPDATE payload';
  try {
    creareReq(name);
    // const response = await activateUserNFTHandler(req);
    // createRes(name, response);
    // return res.status(typeof response === 'string' ? 400 : 200).json(response);
  } catch (err) {
    createResErr(name, err);
    next(err);
  }
};

const deletePayload = async (req: Request, res: Response, next: Next) => {
  const name = 'DELETE payload';
  try {
    creareReq(name);
    // const response = await activateUserNFTHandler(req);
    // createRes(name, response);
    // return res.status(typeof response === 'string' ? 400 : 200).json(response);
  } catch (err) {
    createResErr(name, err);
    next(err);
  }
};

export default {
  getAllPayload,
  getPayloadBy,
  createPayload,
  updatePayload,
  deletePayload,
};
