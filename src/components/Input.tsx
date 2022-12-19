import { useState } from 'react';

type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ value, handleChange }: InputProps) => {
    const [text, setText] = useState(value);


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    return (
        <div>
            <input type="text" value={text} onChange={handleInputChange}/>
        </div>
    );
};
