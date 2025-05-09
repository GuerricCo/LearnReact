type InputProps = {
    color : string;
    placeholder : string;
    name : string;
    id : string;
    label : string
}

function Input({color, placeholder, name, id, label} : InputProps){
    return(
            <label htmlFor = "name" className="flex flex-col items-start"> {label} 
                <input 
                type = "text" 
                name = {name}
                id={id}
                placeholder={placeholder}  
                minLength={4}
                maxLength={10}
                required
                style={{color}}
                />
            </label>
    )
}

export default Input 