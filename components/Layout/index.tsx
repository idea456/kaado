'use client'

import React from 'react'
import Header from "@/components/Header";
import styles from "./Layout.module.scss";

export default function Layout({ children }: React.PropsWithChildren<unknown>) {
    return (
        <div className={styles.container}>
            <Header />
            <main>{children}</main>
        </div>
    );
}
