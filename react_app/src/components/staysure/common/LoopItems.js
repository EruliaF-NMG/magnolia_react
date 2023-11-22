const LoopItems = ({
    items=[],
    renderElemnt=(item,index)=>null,
}) =>  {
    return(
        <>
            {
                (items).map((item,index)=>{
                    return (
                        renderElemnt(item,index)
                    )
                })
            }
        </>
    )
}

export {
    LoopItems
}