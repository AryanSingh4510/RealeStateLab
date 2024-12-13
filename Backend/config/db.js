// import mongoose from "mongoose";
// import colors from "colors";
// const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGO_URL);
//     console.log(
//       `Conneted To Mongodb Databse ${conn.connection.host}`.bgMagenta.white
//     );
//   } catch (error) {
//     console.log(`Errro in Mongodb ${error}`.bgRed.white);
//   }
// };

// export default connectDB;


import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `Connected To Mongodb Database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Error in Mongodb ${error}`.bgRed.white);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;

