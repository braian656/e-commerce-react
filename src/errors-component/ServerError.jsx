
// Verificar uso del los useHooks - check

function ServerError({error}){


    console.log('COMPONENT SERVER ERROR')
    return(


        <div className="content-error">
            <h1>{error}</h1>
        </div>
        
    )
}

export default ServerError