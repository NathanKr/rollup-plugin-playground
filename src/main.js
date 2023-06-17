import {sum} from './utils';
import dayjs from 'dayjs'
import { version } from '../package.json'; 

console.log(`version : ${version}`);

console.log('in main.js ...');
console.log(`sum(1,2) : ${sum(1,2)}`);

console.log(`tomorrow : ${dayjs().add(1,'day')}`);