import { useEffect, useContext, useState } from "react"
import ButtonPag from "../buttons-component/ButtonPag"
import Table from "./Table"
import InfoUser from "./InfoUser"
import { CircleUserRound, ShoppingBasket } from "lucide-react"
import { contextProducts } from "../context/context"



function DashboardUser({setSliderActive,setUserLog, actualUser, setActualUser}){
    const {picUser} = useContext(contextProducts)
    const [sectionPurchaseHistory, setSectionPurchaseHistory] = useState(false)
    // const [seeSectionUser, setSeeSeccionUser] = useState(true)

    function signOut(){
        setActualUser(
            {
            name: "",
            surname: '',
            email: '',
            password: '',
            password_repeat: '',
            }
        )


        setUserLog(false)


    }

    function getPurchaseHistory(){
        console.log('Mostrare todas las compras realizadas')
        setSectionPurchaseHistory(true)
        console.log(purchasedProducts)
    }
    function getSectionUser(){
      console.log('mostrar seccion de usuario')
      setSectionPurchaseHistory(false)
    }
    useEffect(()=>{
        setSliderActive(false)
    }, [])

    console.log(actualUser)

    return(
                
        // <section className="dashboard-user bg-body flex items-start relative py-3">

        //     <aside className="w-[20%]">
        //         <ButtonPag 
        //         text="Usuario" 
        //         clr="bg-red-500">
        //         </ButtonPag>
        //         <ButtonPag 
        //         text="Historial de compras" 
        //         onClick={getPurchaseHistory}
        //         clr="bg-red-500">
        //         </ButtonPag>
        //     </aside>
        //     <div className="content-user w-[80%] flex justify-center items-center flex-col">

        //     <article className="user p-2">
        //     <div className="img h-52 w-52 rounded-full overflow-hidden">
        //         <img className="w-full h-full object-cover" src="https://i.pinimg.com/564x/52/1d/f6/521df6ecd68b081a175122b5b7477ba7.jpg" alt="" />
        //     </div>
        //     <div className="name mt-10">
        //         <h1 className="font-bold text-center">{actualUser.name + ' ' + actualUser.surname}</h1>
        //     </div>
        //     </article>
        
        //     <div className="cart-register w-full  p-2 sm:w-2/5 mt-10">
        //         <div className="p-1.5 compras h-9 border-solid border border-slate-500 rounded-md my-3 flex justify-between items-center">
        //         <h1>Item</h1>
        //         <p className="total">$0</p>
        //         </div>
        //         <div className="p-1.5 total h-9	border-solid border border-slate-500 rounded-md flex justify-between items-center">
        //         <h1>Item</h1>
        //         <p className="total">$0</p>
        //         </div>
        //     </div>
        
        //     <button 
        //     className="mt-3
        //     w-1/2
        //     text-button
        //     font-bold
        //     bg-button2
        //     p-3 sm:w-2/5
        //     ease-out duration-700
        //     hover:bg-white hover:text-text"
        //     onClick={signOut}>
        //         Cerrar Cuenta
        //     </button>

        //     </div>
            

        // </section>

    <div className="section-dashboard">
        <div className="content-user bg-button2">
         <div className="image">
            <div className="image-user">
             <img src={picUser} alt=""/>
            </div>
            <h1 className="name-user">
            {actualUser.name + ' ' + actualUser.surname}
            </h1>
         </div>
          <div className="more-inf">
            <h2 className="mail">
              Correo: {actualUser.email}
            </h2>
            <h2 className="num">
              00000000
            </h2>
          </div>
        </div>
        <div className="content-info-user mt-3">
          <aside className="content-op">
              
              <button 
              className={`text-center ${!sectionPurchaseHistory ? 'active' : ''}`} 
              onClick={getSectionUser}>
                <CircleUserRound 
                className="icon-scale"
                size={20} 
                color="#e4bc2c" 
                strokeWidth={1.5} />
                <h2 className="mr-2">Usuario</h2>
              </button>

              <button 
              className={`text-center ${sectionPurchaseHistory ? 'active' : ''}`} 
              onClick={getPurchaseHistory}>
                <ShoppingBasket 
                className="icon-scale" 
                size={20} 
                color="#e4bc2c" 
                strokeWidth={1.5} />
                <h2 className="mr-2">Compras</h2>
              </button>
              {/* <button className="bg-red-500">
                <i className="fa-solid fa-house"></i>
                <h2>Button 1</h2>
              </button> */}
          
              
          </aside>
          <div className="show-content display-content-info">
            {sectionPurchaseHistory ? <Table></Table> : <InfoUser actualUser={actualUser}></InfoUser>}
            
          </div>
        </div>
    </div>

    )
}

export default DashboardUser