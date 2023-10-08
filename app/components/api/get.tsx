import connectToDatabase from '../../../mongoConnection';
import Question from '../../../questionModel';

export default async function handler(req, res) {
  try {
    const { db } = await connectToDatabase();
    const recommendations = await Question.find({}); // Fetch all recommendations
    res.status(200).json(recommendations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch recommendations.' });
  }
}
