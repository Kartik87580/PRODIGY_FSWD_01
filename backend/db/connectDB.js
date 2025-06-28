<<<<<<< HEAD
// connectDB.js
 import mongoose from "mongoose";
=======
import mongoose from "mongoose";
>>>>>>> 9788c6e7d97eb83bc7f25049191dfa42d9c5c181

export const connectDB = async () => {
	try {
		console.log("mongo_uri: ", process.env.MONGO_URI);
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.log("Error connection to MongoDB: ", error.message);
		process.exit(1); // 1 is failure, 0 status code is success
	}
};
