import React from 'react'
import Product from './Product'

function Products() {

    var products=[
        {title:"Arqitel", description:"At Refokus, we’re redefining what a Webflow agency can be. We navigate the sweet spot between award-winning creativity and conversion-driven functionality. ", live:true, case:false},
        {title:"TTR", description:"At Refokus, we’re redefining what a Webflow agency can be. We navigate the sweet spot between award-winning creativity and conversion-driven functionality.", live:true, case:false},
        {title:"YIR 2022", description:"At Refokus, we’re redefining what a Webflow agency can be. We navigate the sweet spot between award-winning creativity and conversion-driven functionality.", live:true, case:true},
        {title:"Yahoo!!", description:"At Refokus, we’re redefining what a Webflow agency can be. We navigate the sweet spot between award-winning creativity and conversion-driven functionality.", live:true, case:true},
    ]
  return (
    <div>
      {products.map((val,index)=> <Product val={val}/>)}
    </div>
  )
}

export default Products
