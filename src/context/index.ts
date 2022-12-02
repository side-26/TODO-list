import { createContext } from 'react';
import { todoContext } from './todo/todo';
export const Context = createContext({ ...todoContext })