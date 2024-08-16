import { Request, Response, NextFunction } from 'express';
import jwt, { JwtPayload as DefaultJwtPayload } from 'jsonwebtoken';
import mongoose from 'mongoose';
import User, { IUser } from '../models/User';

// Define the expected structure of the JWT payload
interface JwtPayload extends DefaultJwtPayload {
  _id: string;
}

// Create an interface for the additional properties
interface CustomAuthProps {
  user?: mongoose.Document<any, any, IUser> & IUser;
  token?: string;
}

// Use intersection type to combine Request and CustomAuthProps
type AuthenticatedRequest = Request & CustomAuthProps;

const authMiddleware = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  try {
    const authorizationHeader = req.header('Authorization');

    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
      return res.status(401).send({ error: 'Authorization token missing or malformed.' });
    }

    const token = authorizationHeader.replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

    if (!decoded || !decoded._id) {
      return res.status(401).send({ error: 'Invalid token payload.' });
    }

    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

    if (!user) {
      return res.status(401).send({ error: 'User not found. Please authenticate.' });
    }

    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    console.error('Authentication error:', error);
    res.status(401).send({ error: 'Please authenticate.' });
  }
};

export default authMiddleware;