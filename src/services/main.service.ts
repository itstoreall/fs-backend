// @ts-nocheck
import db from '../db/connect';
import * as cl from '../logs/logMargins';

const getAllPayload = async () => {
  try {
    cl.mt(' * GET getAllPayload');
    const result = await db.Gen.findAll();
    return result;
  } catch (err) {
    cl.o(' * ERROR in getAllPayload:', err.message);
    throw new Error({ message: err.message });
  }
};

const getPayloadBy = async query => {
  try {
    cl.mt(' * GET getPayloadBy');
    const result = await db.Gen.findAll({
      where: { payloadId: query.id },
    });
    return result;
  } catch (err) {
    cl.o(' * ERROR in getPayloadBy:', err.message);
    throw new Error({ message: err.message });
  }
};

const createPayload = async body => {
  try {
    cl.mt(' * POST createPayload');
    const { dataValues } = await db.Gen.create(body);
    return dataValues;
  } catch (err) {
    cl.o(' * ERROR in createPayload:', err.message);
    throw new Error({ message: err.message });
  }
};

const updatePayload = async data => {
  try {
    cl.mt(' * POST updatePayload');
    const result = await db.Gen.update(
      { payload: data.value },
      { where: { payloadId: data.id } }
    );
    return result;
  } catch (err) {
    cl.o(' * ERROR in updatePayload:', err.message);
    throw new Error({ message: err.message });
  }
};

const deletePayload = async data => {
  try {
    cl.mt(' * DELETE deletePayload');
    const result = await db.Gen.destroy({
      where: { payloadId: data.id },
    });
    return result;
  } catch (err) {
    cl.mt(' * ERROR in deletePayload:', err.message);
    throw new Error({ message: err.message });
  }
};

export default {
  getAllPayload,
  getPayloadBy,
  createPayload,
  updatePayload,
  deletePayload,
};
