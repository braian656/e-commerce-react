function TableItems({items}){

    const table = items.map((item, i)=>(
        <div key={i} className="table-items flex">
          <div className="item">{item.producto}</div>
          <div className="item">item1</div>
          <div className="item">{item.color}</div>
          <div className="item">{item.cantidad}</div>        
        </div>
      ))

    return(
        <>
        
            {table}

        </>
    )
}

export default TableItems