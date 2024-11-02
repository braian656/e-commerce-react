function ButtonPag({text, onClick, clr, width,clrText, border, hoverButton}){

    return(
        <button 
        onClick={(e)=>onClick(e)} 
        className={`add  mt-3 text-${clrText} font-bold rounded-md ${clr}  p-4 ${width} ${border} ease-out duration-700 ${hoverButton}`}>
            {text}
        </button>
    )

}

export default ButtonPag