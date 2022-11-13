import React from 'react';

function FormField({ label, type, name, values, ...otherProps }) {
    return (
        <div className="form-row" {...otherProps}>
            <div className="form-col">
                <label className="form-label">{label}</label>
            </div>
            <div className="form-col">
                {type == "input" && <input className="form-input" name={name} value={values} />}
                {type == "textarea" && <textarea className="form-textarea" name={name}>{values}</textarea>}
                {type == "select" && <select className="form-select" name={name}>
                    {values.map((option, index) => {
                        return(<option key={index} value={option.value}>{option.name}</option>)
                    })}
                </select>}
                {type == "submit" && <button class="form-btn" type="submit">{values}</button>}
            </div>
            
        </div>
    );
}

export default FormField;