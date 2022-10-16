// @ts-nocheck
import fs from 'fs';
import { singlePath } from '../../constants';

const setPath = fileName => `${singlePath}/${fileName}.json`;

const createSingleFile = async data => {
  const { fileName, payloadId, payload } = data;
  fs.writeFileSync(
    setPath(fileName),
    JSON.stringify({ payloadId, payload }),
    (e, data) => {}
  );
};

const getFile = async fileName => {
  const data = fs.readFileSync(setPath(fileName), (e, data) => {
    JSON.parse(data.toString());
  });
  return data.toString();
};

const createSinglePayloadHandler = async req => {
  const { fileName, payloadId, payload } = req.body;

  const data_ = {
    fileName: fileName,
    payloadId: payloadId,
    payload: payload,
  };

  await createSingleFile(data_);

  const result = await getFile(data_.fileName);

  return JSON.parse(result);
};

export default createSinglePayloadHandler;
