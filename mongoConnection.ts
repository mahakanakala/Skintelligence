import mongoose from 'mongoose';

async function connectToDatabase() {
  const uri = 'mongodb+srv://mahakanakala:kenoughkenough@skincare-rec.x6uyw0b.mongodb.net/';
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }
    return { db: mongoose.connection };
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
}

export default connectToDatabase;
