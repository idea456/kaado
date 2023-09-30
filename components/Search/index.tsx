import styles from './Search.module.scss';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { FunnelIcon, ViewColumnsIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Autocomplete from '../Autocomplete';

export default function Search() {
    return (
        <div className={styles.container}>
            <div className={classNames(styles.item, styles['item--toggle'])}>
                <MagnifyingGlassIcon className={styles.item_icon} />
            </div>
            <div className={styles.item}>
                {/* <input className={styles['search-bar']} placeholder='Search word' /> */}
                {/* <Autocomplete placeholder='Search word' /> */}
            </div>
            <div className={classNames(styles.item, styles['item--toggle'])}>
                <FunnelIcon className={styles.item_icon} />
            </div>
            <div className={classNames(styles.item, styles['item--toggle'])}>
                <ViewColumnsIcon className={styles.item_icon} />
            </div>
        </div>
    );
}
