import React from 'react';
import styles from './Masonry.module.scss';
import { TVocabulary } from '@/components/types';
import { PlusSmallIcon } from '@heroicons/react/20/solid';

type TMasonryProps = {
    results?: TVocabulary[];
};

export default function Masonry({ results }: TMasonryProps) {
    return (
        <div className={styles.container}>
            {/* <div className={styles.item}>
                <h1>何かを探しますか？</h1>
            </div> */}
            {/* <div className={styles.item}>
                <h1>魚</h1>
                <PlusSmallIcon className={styles['item-icon']} />
            </div>
            <div className={styles.item}>
                <h1>栄養</h1>
                <PlusSmallIcon className={styles['item-icon']} />
            </div>
            <div className={styles.item}>
                <h1>郵便局</h1>
                <PlusSmallIcon className={styles['item-icon']} />
            </div>
            <div className={styles.item}>
                <h1>一生懸命</h1>
                <PlusSmallIcon className={styles['item-icon']} />
            </div>
            <div className={styles.item}>
                <h1>熱する</h1>
                <PlusSmallIcon className={styles['item-icon']} />
            </div>
            <div className={styles.item}>
                <h1>薄い</h1>
                <PlusSmallIcon className={styles['item-icon']} />
            </div>
            <div className={styles.item}>
                <h1>魚</h1>
                <PlusSmallIcon className={styles['item-icon']} />
            </div>
            <div className={styles.item}>
                <h1>栄養</h1>
                <PlusSmallIcon className={styles['item-icon']} />
            </div>
            <div className={styles.item}>
                <h1>郵便局</h1>
                <PlusSmallIcon className={styles['item-icon']} />
            </div>
            <div className={styles.item}>
                <h1>一生懸命</h1>
                <PlusSmallIcon className={styles['item-icon']} />
            </div>
            <div className={styles.item}>
                <h1>熱する</h1>
                <PlusSmallIcon className={styles['item-icon']} />
            </div>
            <div className={styles.item}>
                <h1>薄い</h1>
                <PlusSmallIcon className={styles['item-icon']} />
            </div>
            <div className={styles.item}>
                <h1>魚</h1>
                <PlusSmallIcon className={styles['item-icon']} />
            </div>
            <div className={styles.item}>
                <h1>栄養</h1>
                <PlusSmallIcon className={styles['item-icon']} />
            </div>
            <div className={styles.item}>
                <h1>郵便局</h1>
            </div>
            <div className={styles.item}>
                <h1>一生懸命</h1>
            </div>
            <div className={styles.item}>
                <h1>熱する</h1>
            </div>
            <div className={styles.item}>
                <h1>薄い</h1>
            </div>
            <div className={styles.item}>
                <h1>魚</h1>
            </div>
            <div className={styles.item}>
                <h1>栄養</h1>
            </div>
            <div className={styles.item}>
                <h1>郵便局</h1>
            </div>
            <div className={styles.item}>
                <h1>一生懸命</h1>
            </div>
            <div className={styles.item}>
                <h1>熱する</h1>
            </div>
            <div className={styles.item}>
                <h1>薄い</h1>
            </div> */}
        </div>
    );
}
