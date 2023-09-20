'use client';

import styles from './InputText.module.scss'

export const InputText =  ({text, type, value, name, onChange}: any) => {

    return (
        <label>
            <p>{text}</p>
            <input 
                className={styles.input}
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                />
        </label>
    )
}