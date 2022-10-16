// @ts-nocheck
import fs from 'fs';
import { dataPath } from '../../constants';

const setPath = name => `${dataPath}/${name}.json`;

const createFile = async data => {
  const { name, payloadId, payload } = data;
  fs.writeFileSync(
    setPath(name),
    JSON.stringify({ payloadId, payload }),
    (e, data) => {}
  );
};

const getFile = async name => {
  const data = fs.readFileSync(setPath(name), (e, data) => {
    JSON.parse(data.toString());
  });
  return data.toString();
};

const createSinglePayloadHandler = async req => {
  const { name, payloadId, payload } = req.body;

  const data_ = {
    name: name,
    payloadId: payloadId,
    payload: payload,
  };

  await createFile(data_);

  const result = await getFile(data_.name);

  return JSON.parse(result);
};

export default createSinglePayloadHandler;
