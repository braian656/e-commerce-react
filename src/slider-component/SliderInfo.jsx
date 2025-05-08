import {Smile} from 'lucide-react'
import {ChartLine} from 'lucide-react'
import ButtonPag from "../buttons-component/ButtonPag"

function  SliderInfo({bgContainer, image,title}){
    console.log('COMPONENT SLIDERINFO')

    return(

    <div className="item-slider">
        <div className="box-txt">
            <h1 className='big-text'>
                DR. DRE STUDIO 2.0
            </h1>
            <h2 className='text-slider'>
                {/* buscar una fuente para esta mierda */}
                Realme T300 Cancelación Ruido 30db Audio Espacial 360° Orange
            </h2>
            <button className='btn shadow-md hover:shadow-lg transition-shadow ...'>
                Ver producto
            </button>
        </div>
        <div className="img-product">
            <img src="./images/pngwing.com.png" alt="" loading='lazy'/>
        </div>
    </div>
    )
}
export default SliderInfo