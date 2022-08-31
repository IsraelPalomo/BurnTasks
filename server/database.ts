import { connect } from 'mongoose';

export const StartDB = async () => {
  try {
    const db = await connect(
      'mongodb+srv://israel:Alumno$1@cluster0.tg7i6pb.mongodb.net/?retryWrites=true&w=majority'
    );
    console.log('DB Connect ✅', db.connection.name);
  } catch (error) {
    console.log(error);
  }
};
