
// Verificar uso del los useHooks - check

function TableItems({items}){
  console.log(items)

    console.log('COMPONENT TABLEITEMS')
    const table = items.map((item, i)=>(

      <article key={i} className="prod">
        <h2 className="product">{item.producto}</h2>

        <div className="items">
          <h2 className="sub-item">Precio: ${item.price}</h2>
          <h2 className="sub-item">Unidades: {item.cantidad}</h2>
        </div>
      </article>


      ))

    return(
        <>
    
        
            {table}

  

        </>
    )
}

export default TableItems