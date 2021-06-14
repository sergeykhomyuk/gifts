import { Provider } from 'react-redux';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { GiftsShell } from '@and-open/gifts/shell';
import styles from './app.module.scss';
import { appStore } from './app.store';

export function App() {
  return (
    <Provider store={appStore}>
      <div className={styles.app}>
        <GiftsShell />
      </div>
    </Provider>
  );
}

export default App;
