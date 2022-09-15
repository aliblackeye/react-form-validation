import { useState } from 'react';
import './forminput.scss';

export default function FormInput({ placeHolder, type, onChange, name, required, pattern, spanText }) {

    const [focused, setFocused] = useState(false)


    return (
        <div className="form-input">
            <label htmlFor={name}>{placeHolder}</label>
            <input pattern={pattern} required={required} name={name} type={type} onChange={e => onChange(e)} focused={focused.toString()} onBlur={() => {
                setFocused(true);
            }} />
            <span>
                {spanText}
            </span>
        </div>
    )
}
