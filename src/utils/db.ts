// db.ts
import mongoose from "mongoose";

let isConnected: any;

const connect = async () => {
  if (isConnected) {
    console.log("Utilizando la conexión existente");
    return isConnected;
  }

  try {
    const db = await mongoose.connect(
      "mongodb+srv://devix:GnDjnquf7IDattGo@cluster0.1kakcaj.mongodb.net/?retryWrites=true&w=majority"
    );
    isConnected = db;
    console.log("Conexión exitosa");
    return db;
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
