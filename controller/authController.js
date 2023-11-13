import bcrypt from 'bcrypt';
import User from '../models/user.js';
import jwt from 'jsonwebtoken';

const JWT_SECRET = 'My_fastity_framework'; 

async function signUp(request, reply) {
  const { username, email, password } = request.body;
  
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashedPassword });
    
    const token = jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    reply.send("User account Created successfully");
  } catch (error) {
    reply.status(500).send({ error: 'Internal Server Error' });
  }
}

async function login(request, reply) {
  const { username, password } = request.body;

  try {
    const user = await User.findOne({ where: { username } });

    if (!user) {
      reply.status(401).send({ error: 'Invalid username' });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      reply.status(401).send({ error: 'Invalid password' });
      return;
    }

    const token = jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
    reply.send({ token });
  } catch (error) {
    reply.status(500).send({ error: 'Internal Server Error' });
  }
}

export { signUp, login };
