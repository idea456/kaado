'use client'

import styles from "./Search.module.scss";
import {MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import {FunnelIcon, ViewColumnsIcon} from '@heroicons/react/24/outline'

export default function Search() {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <MagnifyingGlassIcon className={styles.icon} />
            </div>
            <div className={styles.item}>
                <input className={styles['search-bar']} />
            </div>
            <div className={styles.item}>
                <FunnelIcon className={styles.icon} />
            </div>
            <div className={styles.item}>
                <ViewColumnsIcon className={styles.icon} />
            </div>
        </div>
    );
}
