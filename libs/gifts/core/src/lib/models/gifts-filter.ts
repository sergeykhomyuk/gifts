import { Gender } from './gender';
import { Region } from './region';

export interface GiftsFilter {
  readonly minimalSpend?: number;
  readonly region?: Region;
  readonly gender?: Gender;
}
