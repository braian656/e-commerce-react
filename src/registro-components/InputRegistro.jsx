import { useEffect, useState } from "react"

function InputRegistro({id ,name, type, text,value, onChange, err, setHaveErrs, haveErrs,textPassword}){
    const [actualErr, setActualErr] = useState('');
    const [activeMsj, setActiveMsj] = useState(false)
    function handleErrors() {
    if (haveErrs) {
        const filtrar = err.find((error) => Object.keys(error).includes(name));

    if (filtrar) {
        setActualErr(filtrar[name]);
        setActiveMsj(true)
    } else {
        setActualErr('');
        setActiveMsj(false)
    }


    } else {
        setActualErr(''); 
        setActiveMsj(false)
    }

    }

    // useEffect para ejecutar `handleErrors` cada vez que `err` o `haveErrs` cambien
    useEffect(() => {
        handleErrors();

        const timeoutId = setTimeout(()=>{
            setActiveMsj(false)
        }, 1000)

        return () => clearTimeout(timeoutId);

    }, [err, haveErrs]);

    
    return(
        <div className="input-form flex items-center flex-col pt-2 relative">
            <div className="w-4/5 justify-start items-center">
            <label
            htmlFor={name}
            className="font-semibold text-button"
            >{text}</label> 
            </div>
            
            <input 
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            className="bg-white text-slate-500 px-1 py-2 m-2 w-4/5" 
            type={type} 
            placeholder={text} 
            required
            /> 
            <p className="text-xs text-start text-wrap w-80">
                {textPassword}
            </p>
            <span className="absolute top-10 -right-2 text-xs font-bold"> 
                {activeMsj && <p className="text-red-600 duration-300 ease-out">{actualErr}</p>}
            </span>
        </div>
    )
}
export default InputRegistro