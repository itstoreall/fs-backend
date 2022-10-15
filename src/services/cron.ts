// @ts-nocheck
// import cron from 'node-cron'; // *
// import db from '../db/connect'; // *
import logs from '../logs';
import startServer from '../helpers/startServer';
// import checkEvents from '../helpers/getEvents/checkEvents'; // *

export const Cron = async values => {
  // await dbSync(values);
  logs.fn.runServer(values);
  startServer();
};

/*
const dbSync = async values => {
  await db.sequelize.sync();
  logs.fn.runServer(values);
};
*/

// export const runCheckEvents = label =>
//   cron.schedule('*/30 * * * * *', () => checkEvents(label)); // *

// */35 * * * * * - every 35 sec
// */10 * * * * - every 10 min
// */24 * * * - every 24 hours
