
import { useState, useEffect , useMemo} from "react"
import { contextProducts } from "./context"


const ProductsContext = ({children})=>{

const techProducts = [
        {
          id: 1,
          img: 'https://http2.mlstatic.com/D_NQ_NP_635906-MLU78118086857_082024-O.webp',
          descripcion: 'Smartphone con pantalla OLED y cámara triple.',
          producto: 'Smartphone X Pro',
          precio: 799.99,
          stars: 4,
        },
        {
          id: 2,
          img: 'https://http2.mlstatic.com/D_NQ_NP_899320-MLU77331743888_072024-O.webp',
          descripcion: 'Laptop con procesador Intel i7 y 16GB de RAM.',
          producto: 'Laptop Slim 15',
          precio: 1099.99,
          stars: 5,
        },
        {
          id: 3,
          img: 'https://http2.mlstatic.com/D_NQ_NP_930155-MLU74276874564_022024-O.webp',
          descripcion: 'Televisor 4K UHD con HDR y 55 pulgadas.',
          producto: 'Televisor 4K 55"',
          precio: 599.99,
          stars: 4,
        },
        {
          id: 4,
          img: 'https://http2.mlstatic.com/D_NQ_NP_936214-MLA77375822380_072024-O.webp',
          descripcion: 'Auriculares inalámbricos',
          producto: 'Auriculares Noise Cancelling',
          precio: 199.99,
          stars: 3,
        },
        {
          id: 5,
          img: 'https://http2.mlstatic.com/D_NQ_NP_931536-MLA75572884580_042024-O.webp',
          descripcion: 'Tablet con pantalla de 10 pulgadas + 128GB',
          producto: 'Tablet Z10',
          precio: 349.99,
          stars: 4,
        },
        {
          id: 6,
          img: 'https://http2.mlstatic.com/D_NQ_NP_626239-MLU75342388763_032024-O.webp',
          descripcion: 'Consola de videojuegos con 1TB de almacenamiento.',
          producto: 'Consola Ps5 Slim Estándar',
          precio: 499.99,
          stars: 2,
        },
        // {
        //   id: 7,
        //   img: 'https://i.pinimg.com/564x/e9/e7/df/e9e7dfb794b7af79500a5d68b0abbb2f.jpg',
        //   descripcion: 'Reloj inteligente con monitoreo de salud y GPS integrado.',
        //   producto: 'Smartwatch Fit Pro',
        //   precio: 249.99
        // },
        // {
        //   id: 8,
        //   img: 'https://i.pinimg.com/564x/e9/e7/df/e9e7dfb794b7af79500a5d68b0abbb2f.jpg',
        //   descripcion: 'Cámara réflex digital con lente de 24MP y grabación 4K.',
        //   producto: 'Cámara DSLR Pro',
        //   precio: 1199.99
        // },
        // {
        //   id: 9,
        //   img: 'https://i.pinimg.com/564x/e9/e7/df/e9e7dfb794b7af79500a5d68b0abbb2f.jpg',
        //   descripcion: 'Monitor 27 pulgadas 144Hz para gaming con resolución QHD.',
        //   producto: 'Monitor Gamer QHD 27"',
        //   precio: 399.99
        // },
        // {
        //   id: 10,
        //   img: 'https://i.pinimg.com/564x/e9/e7/df/e9e7dfb794b7af79500a5d68b0abbb2f.jpg',
        //   descripcion: 'Teclado mecánico retroiluminado con switches azules.',
        //   producto: 'Teclado Mecánico RGB',
        //   precio: 89.99
        // },
        // {
        //   id: 11,
        //   img: 'https://i.pinimg.com/564x/e9/e7/df/e9e7dfb794b7af79500a5d68b0abbb2f.jpg',
        //   descripcion: 'Bocina Bluetooth portátil resistente al agua.',
        //   producto: 'Bocina Bluetooth Waterproof',
        //   precio: 59.99
        // },
        // {
        //   id: 12,
        //   img: 'https://i.pinimg.com/564x/e9/e7/df/e9e7dfb794b7af79500a5d68b0abbb2f.jpg',
        //   descripcion: 'Disco duro externo de 2TB para respaldo de datos.',
        //   producto: 'Disco Duro Externo 2TB',
        //   precio: 79.99
        // },
        // {
        //   id: 13,
        //   img: 'https://i.pinimg.com/564x/e9/e7/df/e9e7dfb794b7af79500a5d68b0abbb2f.jpg',
        //   descripcion: 'Cargador inalámbrico rápido para smartphones y auriculares.',
        //   producto: 'Cargador Inalámbrico FastCharge',
        //   precio: 29.99
        // },
        // {
        //   id: 14,
        //   img: 'https://i.pinimg.com/564x/e9/e7/df/e9e7dfb794b7af79500a5d68b0abbb2f.jpg',
        //   descripcion: 'Router WiFi de doble banda con alta velocidad.',
        //   producto: 'Router WiFi Dual Band',
        //   precio: 99.99
        // },
        // {
        //   id: 15,
        //   img: 'https://i.pinimg.com/564x/e9/e7/df/e9e7dfb794b7af79500a5d68b0abbb2f.jpg',
        //   descripcion: 'Mouse ergonómico inalámbrico con 6 botones programables.',
        //   producto: 'Mouse Inalámbrico Pro',
        //   precio: 49.99
        // },
        // {
        //   id: 16,
        //   img: 'https://i.pinimg.com/564x/e9/e7/df/e9e7dfb794b7af79500a5d68b0abbb2f.jpg',
        //   descripcion: 'Smart TV de 65 pulgadas con sistema operativo Android.',
        //   producto: 'Smart TV Android 65"',
        //   precio: 899.99
        // },
        // {
        //   id: 17,
        //   img: 'https://i.pinimg.com/564x/e9/e7/df/e9e7dfb794b7af79500a5d68b0abbb2f.jpg',
        //   descripcion: 'Sistema de sonido envolvente 5.1 con conectividad Bluetooth.',
        //   producto: 'Sistema de Sonido 5.1',
        //   precio: 349.99
        // },
        // {
        //   id: 18,
        //   img: 'https://i.pinimg.com/564x/e9/e7/df/e9e7dfb794b7af79500a5d68b0abbb2f.jpg',
        //   descripcion: 'Impresora multifuncional con conexión WiFi y escáner integrado.',
        //   producto: 'Impresora Multifuncional WiFi',
        //   precio: 129.99
        // },
        // {
        //   id: 19,
        //   img: 'https://i.pinimg.com/564x/e9/e7/df/e9e7dfb794b7af79500a5d68b0abbb2f.jpg',
        //   descripcion: 'Proyector Full HD portátil con 3000 lúmenes de brillo.',
        //   producto: 'Proyector Portátil Full HD',
        //   precio: 499.99
        // },
        // {
        //   id: 20,
        //   img: 'https://i.pinimg.com/564x/e9/e7/df/e9e7dfb794b7af79500a5d68b0abbb2f.jpg',
        //   descripcion: 'Cámara de seguridad IP con visión nocturna y detección de movimiento.',
        //   producto: 'Cámara de Seguridad IP',
        //   precio: 149.99
        // }
    ];
      
    
    const [ productData, setProductData ]= useState(techProducts)
    const [openPagProduct, setOpenPagProduct] = useState(false)
    // actualProduct, muestra la informacion del producto en una pag nueva
    const [actualProduct, setActualProduct] = useState({
      index : '',
      image : '',
      product : '',
      descr : '',
      total : '',
    })

    const [totalPrice , setTotalPrice] = useState([])

    console.log('Total precio en el componente del context',totalPrice)

    const [selectingPrice, setSelectingPrice] = useState(null)
    const [productCart, setProductCart] = useState([]);
    

    const pagProduct = (_id, _image, _product, _description, _price)=>{
      
      setActualProduct(({
        index : _id,
        image : _image,
        product : _product,
        descr : _description,
        total : _price,
      }));
      setOpenPagProduct(true)
      console.log('Abrir Product', actualProduct)
      
    }
    console.log('Producto carrito', productCart)
    const productsSelecting = (id,image,product,price)=>{
      setSelectingPrice(price)
      const item = {id:id, value:product, cost:price, img:image}
      setProductCart([...productCart, item])
    }
    
    const renderTotalPrice = useMemo(() => {
      return totalPrice.reduce((acc, curr) => acc + curr, 0);
      }, [totalPrice]);
    

    useEffect(() => {
      if (selectingPrice !== null && !totalPrice.includes(selectingPrice)) {
        setTotalPrice((prevPrice) => [...prevPrice, selectingPrice]);
      }
    }, [selectingPrice, totalPrice]); // Añadimos totalPrice como dependencia
    
  

    return(

        <contextProducts.Provider
        value={{
          productData, 
          setProductData, 
          pagProduct, 
          productsSelecting, 
          productCart,
          setProductCart,
          totalPrice,
          setTotalPrice,
          actualProduct,
          setActualProduct,
          renderTotalPrice,
          openPagProduct,
          setOpenPagProduct
        }}>

        {children}

        </contextProducts.Provider>
    )
}

export default ProductsContext