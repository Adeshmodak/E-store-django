import React from 'react'

 const ImageHelper=({product})=>{
     const imageurl = product ? product.image:`https://images-na.ssl-images-amazon.com/images/I/71cNqwz5lpL._AC_UX466_.jpg`
    return(
        <div className="rounded border border-success p-2">
            <img src={imageurl}
            style={{maxHeight:"100%",maxwidth:"100%"}}
            className="mb-3 rounded"
            alt=""/>

        </div>
    )
}

export default ImageHelper