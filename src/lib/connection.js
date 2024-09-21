// import mongoose from "mongoose";
// const MONGODB_URL = process.env.MONGODB_URL;

// if (!MONGODB_URL) {
//   throw new Error(
//     "Please define the MONGODB_URL environment variable in .env.local"
//   );
// }

// let cached = global.mongoose;

// if (!cached) {
//   cached = global.mongoose = { conn: null, promise: null };
// }

// async function dbConnect() {
//   if (cached.conn) {
//     return cached.conn;
//   }
//   if (!cached.promise) {
//     const option = {
//       bufferCommands: false,
//     };

//     cached.promise = mongoose.connect(MONGODB_URL, option).then((mongoose) => {
//       return mongoose;
//     });

//     cached.conn = await cached.promise;
//     return cached.conn;
//   }
// }

// export default dbConnect;
const mongo_url = process.env.MONGODB_URL;

export const connectionStr = mongo_url;
