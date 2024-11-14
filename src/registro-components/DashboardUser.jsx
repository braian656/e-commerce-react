import { useEffect, useContext, useState } from "react"
import ButtonPag from "../buttons-component/ButtonPag"
import Table from "./Table"
import InfoUser from "./InfoUser"
import { CircleUserRound, ShoppingBasket } from "lucide-react"
import { contextProducts } from "../context/context"



function DashboardUser({setSliderActive,setUserLog, actualUser,setActualUser}){
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
    
      <div className="section-dashboard">
          <div className="content-user bg-white rounded-lg">
          <div className="image">
              <div className="image-user">
              <img src={picUser} alt=""/>
              </div>
              <h1 className="name-user">
              {actualUser.name + ' ' + actualUser.surname}
              </h1>
              <div className="cerrar-session">

              </div>
          </div>
            <div className="more-inf">
              <h2 className="mail">
                {actualUser.email}
              </h2>
              {/* <h2 className="num">
                029491094
              </h2> */}
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
                  color="rgb(31 41 55)" 
                  strokeWidth={1.5} />
                  <h2 className="mr-2">
                    Usuario
                  </h2>
                </button>

                <button 
                className={`text-center ${sectionPurchaseHistory ? 'active' : ''}`} 
                onClick={getPurchaseHistory}>
                  <ShoppingBasket 
                  className="icon-scale" 
                  size={20} 
                  color="rgb(31 41 55)" 
                  strokeWidth={1.5} />
                  <h2 className="mr-2">
                    Compras
                  </h2>
                </button>                
            </aside>
            <div className="show-content display-content-info">
              {sectionPurchaseHistory ? 
              <Table></Table>
              :
              <InfoUser 
              actualUser={actualUser} 
              setActualUser={setActualUser}>
              </InfoUser>}

              
            </div>
          </div>
      </div>

    )
}

export default DashboardUser