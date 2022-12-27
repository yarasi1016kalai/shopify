import  cr from "./cr.svg";
import React from "react";
import { Product } from "./product";
import { useState } from "react";

export const Navabar = () => {
    const[count,setcount]=useState(0)

    const[qq1,set1]=useState(false)
    const[qq2,set2]=useState(false)
    const[qq3,set3]=useState(false)
    const[qq4,set4]=useState(false)
    const[qq5,set5]=useState(false)
    const[qq6,set6]=useState(false)
    const[qq7,set7]=useState(false)
    const[qq8,set8]=useState(false)
    
      let w=[ 
        function xx1() { setcount(count+1) 
            set1(true)
        console.log (count);   
     },function xx2() { setcount(count+1)
        set2(true)
        console.log (count);   
     },function xx3() { setcount(count+1)
        set3(true)
        console.log (count);   
     },function xx4() { setcount(count+1)
        set4(true)
        console.log (count);   
     },function xx5() { setcount(count+1)
        set5(true)
        console.log (count);   
     },function xx6() { setcount(count+1)
        set6(true)
        console.log (count);   
     },function xx7() { setcount(count+1)
        set7(true)
        console.log (count);   
     },function xx8() { setcount(count+1)
        set8(true)
        console.log (count);   
     },]
     
    
       
    

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container px-4 px-lg-5">
          <a class="navbar-brand" href="#!">
            Start Bootstrap
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#!">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#!">
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#!">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <button class="btn btn-outline-dark" type="submit">
                <i>
                    <img src={cr}></img>
                </i>
                Cart
                <span class="badge bg-dark text-white ms-1 rounded-pill">
                  { count}
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>

      <header class="bg-dark py-5">
        <div class="container px-4 px-lg-5 my-5">
          <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Shop in style</h1>
            <p class="lead fw-normal text-white-50 mb-0">
              With this shop hompeage template
            </p>
          </div>
        </div>
      </header>

      <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <Product props={w} 
          A = {qq1} 
          B = {qq2}
          C = {qq3}
          D = {qq4}
          E = {qq5}
          F = {qq6}
          G = {qq7}
          H ={qq8}

          ></Product>


          









          </div>
        </div>
      </section>
    </>
  );
};
