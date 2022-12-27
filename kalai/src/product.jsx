import  start from "./start.svg";

import React from 'react'

export const Product = (kk) => {
   console.log(kk.props[1])
  return (<>
    
       {/* product 1 */}
       <div className="col mb-5">
       <div className="card h-100">
           {/* <!-- Product image--> */}
           <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
           {/* <!-- Product details--> */}
           <div className="card-body p-4">
               <div className="text-center">
                   {/* <!-- Product name--> */}
                   <h5 className="fw-bolder">Fancy Product</h5>
                   <div class="d-flex justify-content-center small text-warning mb-2">
                                     <div> <img src={start}></img></div>
                                     <div ><img src={start}></img></div>
                                     <div ><img src={start}></img></div>
                                     <div ><img src={start}></img></div>
                                     <div ><img src={start} ></img></div>
                            
                                    
                                    </div>
                   {/* <!-- Product price--> */}
                   $40.00 - $80.00
               </div>
           </div>
           {/* <!-- Product actions--> */}
           <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
               <div className="text-center"><button onClick={kk.props[0]} disabled ={kk.A}className="btn btn-outline-dark mt-auto">View options</button></div>
           </div>
       </div>
   </div>
{/* product 2 */}
<div className="col mb-5">
       <div className="card h-100">
 {/* <!-- Product image--> */}
 <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }} >Sale</div>
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
           {/* <!-- Product details--> */}
           <div className="card-body p-4">
               <div className="text-center">
                   {/* <!-- Product name--> */}
                   <h5 className="fw-bolder"> Special item</h5>
                   <div class="d-flex justify-content-center small text-warning mb-2">
                   <div> <img src={start}></img></div>
                                     <div ><img src={start}></img></div>
                                     <div ><img src={start}></img></div>
                                     <div ><img src={start}></img></div>
                                     <div ><img src={start} ></img></div>
                                    </div>
                   {/* <!-- Product price--> */}
                   $20.00 - $18.00
               </div>
           </div>
           {/* <!-- Product actions--> */}
           <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
               <div className="text-center"><button onClick={kk.props[1]} disabled ={kk.B}>Add to card</button></div>
           </div>
       </div>
   </div>
{/* product 3 */}
<div className="col mb-5">
       <div className="card h-100">
       {/* <!-- Product image--> */}
       <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }} >Sale</div>
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
           {/* <!-- Product details--> */}
           <div className="card-body p-4">
               <div className="text-center">
                   {/* <!-- Product name--> */}
                   <h5 className="fw-bolder">sale item</h5>
                   <div class="d-flex justify-content-center small text-warning mb-2">
                   <div> <img src={start}></img></div>
                                     <div ><img src={start}></img></div>
                                     <div ><img src={start}></img></div>
                                     <div ><img src={start}></img></div>
                                     <div ><img src={start} ></img></div>
                                    </div>
                   {/* <!-- Product price--> */}
                   $40.00 - $80.00
               </div>
           </div>
           {/* <!-- Product actions--> */}
           <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
               <div className="text-center"><button onClick={kk.props[2]} disabled ={kk.C}> Add to card</button></div>
           </div>
       </div>
   </div>
{/* product 4 */}
<div className="col mb-5">
       <div className="card h-100">
           {/* <!-- Product image--> */}
           <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
           {/* <!-- Product details--> */}
           <div className="card-body p-4">
               <div className="text-center">
                   {/* <!-- Product name--> */}
                   <h5 className="fw-bolder">popular item</h5>
                   <div class="d-flex justify-content-center small text-warning mb-2">
                   <div> <img src={start}></img></div>
                                     <div ><img src={start}></img></div>
                                     <div ><img src={start}></img></div>
                                     <div ><img src={start}></img></div>
                                     <div ><img src={start} ></img></div>
                                    </div>
                   {/* <!-- Product price--> */}
                   $40.00 - $80.00
               </div>
           </div>
           {/* <!-- Product actions--> */}
           <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
               <div className="text-center"><button onClick={kk.props[3]} disabled ={kk.D}> Add to card</button></div>
           </div>
       </div>
   </div>
{/* product 5 */}
<div className="col mb-5">
       <div className="card h-100">
        {/* <!-- Product image--> */}
        <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }} >Sale</div>
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
           {/* <!-- Product details--> */}
           <div className="card-body p-4">
               <div className="text-center">
                   {/* <!-- Product name--> */}
                   <h5 className="fw-bolder"> sale item</h5>
                   <div class="d-flex justify-content-center small text-warning mb-2">
                   <div> <img src={start}></img></div>
                                     <div ><img src={start}></img></div>
                                     <div ><img src={start}></img></div>
                                     <div ><img src={start}></img></div>
                                     <div ><img src={start} ></img></div>
                                    </div>
                   {/* <!-- Product price--> */}
                   $40.00 - $80.00
               </div>
           </div>
           {/* <!-- Product actions--> */}
           <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
               <div className="text-center"><button onClick={kk.props[4]} disabled ={kk.E}> Add to card</button></div>
           </div>
       </div>
   </div>

{/* product 6 */}
<div className="col mb-5">
       <div className="card h-100">
           {/* <!-- Product image--> */}
           <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
           {/* <!-- Product details--> */}
           <div className="card-body p-4">
               <div className="text-center">
                   {/* <!-- Product name--> */}
                   <h5 className="fw-bolder">Fancy Product</h5>
                   <div class="d-flex justify-content-center small text-warning mb-2">
                   <div> <img src={start}></img></div>
                                     <div ><img src={start}></img></div>
                                     <div ><img src={start}></img></div>
                                     <div ><img src={start}></img></div>
                                     <div ><img src={start} ></img></div>
                                    </div>
                   {/* <!-- Product price--> */}
                   $40.00 - $80.00
               </div>
           </div>
           {/* <!-- Product actions--> */}
           <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
               <div className="text-center"><button onClick={kk.props[5]} disabled ={kk.F}> View options</button></div>
           </div>
       </div>
   </div>
{/* product 7 */}

<div className="col mb-5">
       <div className="card h-100">
         {/* <!-- Product image--> */}
         <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }} >Sale</div>
                            <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
       
           {/* <!-- Product details--> */}
           <div className="card-body p-4">
               <div className="text-center">
                   {/* <!-- Product name--> */}
                   <h5 className="fw-bolder">special item</h5>
                   <div class="d-flex justify-content-center small text-warning mb-2">
                   <div> <img src={start}></img></div>
                                     <div ><img src={start}></img></div>
                                     <div ><img src={start}></img></div>
                                     <div ><img src={start}></img></div>
                                     <div ><img src={start}></img></div>
                                    </div>
                   {/* <!-- Product price--> */}
                   $40.00 - $80.00
               </div>
           </div>
           {/* <!-- Product actions--> */}
           <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
               <div className="text-center"><button onClick={kk.props[6]} disabled ={kk.G}> Add to card</button></div>
           </div>
       </div>
   </div>
{/* product 8 */}
<div className="col mb-5">
       <div className="card h-100">
           {/* <!-- Product image--> */}
           <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
           {/* <!-- Product details--> */}
           <div className="card-body p-4">
               <div className="text-center">
                   {/* <!-- Product name--> */}
                   <h5 className="fw-bolder">popular item</h5>
                   <div class="d-flex justify-content-center small text-warning mb-2">
                   <div> <img src={start}></img></div>
                                     <div ><img src={start}></img></div>
                                     <div ><img src={start}></img></div>
                                     <div ><img src={start}></img></div>
                                     <div ><img src={start}></img></div>
                                    </div>
                   {/* <!-- Product price--> */}
                   $40.00 - $80.00
               </div>
           </div>
           {/* <!-- Product actions--> */}
           <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
               <div className="text-center"><button onClick={kk.props[7]} disabled ={kk.H}>Addtocard</button></div>
           </div>
       </div>
   </div>

  


 </>);
    
  
  
}

