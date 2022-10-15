// @ts-nocheck
const setCurrentDate = _timestamp => {
  if (_timestamp) {
    const date = new Date(_timestamp * 1000)
      .toLocaleString()
      .split('/')
      .join('-');

    return { timestamp: _timestamp, date };
  }

  const timestamp = Math.floor(new Date().getTime() / 1000);
  const date = new Date(timestamp * 1000).toLocaleString().split('/').join('-');

  return { timestamp, date };
};

export default setCurrentDate;
