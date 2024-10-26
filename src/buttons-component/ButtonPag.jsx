function ButtonPag({text, onClick, clr, width,clrText}){

    // casi todos usan w-full, y el color es button
    return(
        <button 
        onClick={(e)=>onClick(e)} 
        className={`add mt-3 text-${clrText} font-bold rounded-md ${clr} p-4 ${width} ease-out duration-700 hover:bg-button2`}>
            {text}
        </button>
    )

}

export default ButtonPag