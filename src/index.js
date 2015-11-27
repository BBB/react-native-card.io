import { NativeModules } from 'react-native';

const { BBBCardIO: { preload, } } = NativeModules;

import CardIOView from './CardIO.ios';
import * as constants from './constants';

export default CardIOView;
export const CardIOConstants = constants;
export { preload, };
