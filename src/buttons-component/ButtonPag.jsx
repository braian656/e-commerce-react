function ButtonPag({text, onClick, clr}){


    return(
        <button onClick={(e)=>onClick(e)} className={`add mt-3 text-button font-bold rounded-md ${clr} p-4 w-full ease-out duration-700 hover:bg-button2`}>
            {text}
        </button>
    )

}

export default ButtonPag