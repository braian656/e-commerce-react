import {Smile} from 'lucide-react'
import {ChartLine} from 'lucide-react'
import ButtonPag from "../buttons-component/ButtonPag"

function  SliderInfo(){
    return(

    <div className="caja absolute bottom-10 left-0 w-full z-60  flex items-center  sm:items-end flex-col px-6 sm:flex-row sm:justify-between">
        <div className="box-txt w-96 text-start">
            <h1 className='font-bold text-white text-2xl sm:text-4xl my-3'>Realme T300 Cancelación Ruido 30db Audio Espacial 360° Orange</h1>
            <p className="text-text text-wrap mb-3 text-sm sm:text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur veniam, illum architecto, ullam, nesciunt expedita quis eaque quibusdam eligendi cum harum nobis ad nostrum distinctio dolore laborum molestias vitae quo?
            </p>
            {/* <ButtonPag text="VER PRODUCTO" clr='text-text'></ButtonPag> */}
            <button className='p-3 border-md bg-button2 text-white font-bold'>VER PRODUCTO</button>
            {/* arreglar el tamaño del componente btn */}
        </div>

        <div className="boxs-info flex mt-3 sm:mt-16">

            <div className="box-1 m-2 flex justify-center items-center flex-col p-4 w-20 h-20 border-solid border-text border-2 rounded-md">
                <span className="icon mb-2">
                    <ChartLine size={32} color="#d0d0d1" />
                </span>
                <h2 className='text-text text-sm text-[#d0d0d1] font-bold'>15.500</h2>
            </div>

            <div className="box-2 m-2 flex justify-center items-center flex-col p-4 w-20 h-20 border-solid border-text border-2 rounded-md">
                <span className="icon mb-2">
                    <Smile size={32} color="#d0d0d1" />
                </span>
                <h2 className='text-text text-sm text-[#d0d0d1] font-bold'>95%</h2>
            </div>
            <div className="box-2 m-2 flex justify-center items-center flex-col p-4 w-20 h-20 border-solid border-text border-2 rounded-md">
                <span className="icon mb-2">
                    <Smile size={32} color="#d0d0d1" />
                </span>
                <h2 className='text-text text-sm text-[#d0d0d1] font-bold text-center'>95%</h2>
            </div>
        </div>
        
        
    </div>
    )
}
export default SliderInfo