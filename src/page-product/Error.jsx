function Error ({visible, setVisible, messageModal}){
    console.log(visible)

    const visibility = visible ? 'flex' : 'hidden'
    
    return (
        <article className={`${visibility} w-80 h-80 bg-white absolute top[50%] left[50%] p-3 border-5 border-solid border-button2 rounded-md flex justify-between items-center flex-col`}>

            <h2 className="logo text-red-500 text-center font-extrabold">E-comm</h2>


            <h1 className="text-extrabold text-text font-xlg">
                {messageModal}
            </h1>

            <button 
            onClick={()=>setVisible(!visible)}
            className="errar mt-6 text-button font-bold rounded-md bg-red-400 p-4 w-full ease-out duration-700 hover:bg-red-500">
                Cerrar
            </button>

        </article>
    )


}


export default Error

