import { builder } from './builder';
import './models/Comment';
import './models/Message';
import './models/Post';
import './models/User';

export const schema = builder.toSchema();
