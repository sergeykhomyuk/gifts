import { Gender } from './gender';
import { Region } from './region';

export interface User {
  readonly id: string;
  readonly birthday: number;
  readonly spend: number;
  readonly region: Region;
  readonly gender: Gender;
}
