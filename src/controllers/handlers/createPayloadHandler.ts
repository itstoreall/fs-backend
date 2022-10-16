// @ts-nocheck
import fs from 'fs';

const createFile = async a => {
  fs.writeFileSync('./src/db/data/a.json', JSON.stringify(a), (e, data) => {});
};

const getFile = async () => {
  const data = fs.readFileSync('./src/db/data/a.json', (e, data) => {
    JSON.parse(data.toString());
  });
  return data.toString();
};

const createPayloadHandler = async req => {
  const { payloadId, payload } = req.body;

  const a = {
    payloadId: payloadId,
    payload: payload,
  };

  await createFile(a);

  const result = await getFile();

  return JSON.parse(result);
};

export default createPayloadHandler;
