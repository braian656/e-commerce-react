
function ChoseColor ({clr1, clr2, clr3, onClick}){
    const colors = [clr1, clr2, clr3]

    return (

        <div className="preference_box">
            <h3 className="color text-white my-1.5 text-center">Color</h3>
            <div className="flex p-1" 
            onClick={(e)=>onClick(e)}>
                {
                    colors.map((clr, index)=>(
                        <button 

                        key={index}
                        name="Color"
                        data-clr={clr} 
                        className={`block p-2 m-1.5 w-4 ${clr} pointer rounded-md border-2 border-solid border-transparent hover:border-2 hover:border-solid hover:border-white`}>
                
                        </button>
                    ))
                }
            </div>
        </div>

    )
}

export default ChoseColor