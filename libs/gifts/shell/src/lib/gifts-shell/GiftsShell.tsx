import GiftsCostsContainer from '../gifts-costs-container/GiftsCostsContainer';
import './GiftsShell.module.scss';

/* eslint-disable-next-line */
export interface GiftsShellProps {}

export function GiftsShell(props: GiftsShellProps) {
  return <GiftsCostsContainer />;
}

export default GiftsShell;
