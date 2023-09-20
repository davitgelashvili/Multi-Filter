export const CheckBox = ({text, type, value, name, onChange}: any) => {
    return (
        <label>
            <input 
                // className={styles.input}
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                />
            <p>{text}</p>
        </label>
    )
}