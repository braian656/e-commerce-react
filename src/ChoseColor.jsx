
function ChoseColor ({clr1, clr2, clr3, onClick}){
    const colors = [clr1, clr2, clr3]

    console.log(colors)
    const mapColors = colors.map((clr, index)=>(
        <button 

        key={index}
        name="Color"
        data-clr={clr} 
        className={`block p-2 m-1.5 w-4 h-4 ${clr} pointer rounded-full border-2 border-solid border-transparent hover:border-2 hover:border-solid hover:border-white`}>

        </button>
    ))

    return (

        <div className="preference_box">
            <h3 className="color text-white my-1.5 text-center">Color</h3>
            <div className="flex p-1" onClick={(e)=>onClick(e)}>
                {mapColors}
            </div>
        </div>

    )
}

export default ChoseColor