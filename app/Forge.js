'use client'
import React from 'react'
import styles from './page.module.css'

function Forge() {

    const forge = () => {
        alert('coming soon')
    }

    return (
        <button className={styles['button']} onClick={forge}>Forge Prompt</button>
    )
}

export default Forge