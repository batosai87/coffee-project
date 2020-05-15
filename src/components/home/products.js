import React from "react"
import Product from "./product"
import Title from "../globals/title"
import { StaticQuery, graphql } from "gatsby"

const getProducts = graphql` {
    products:allContentfulCoffeeProduct{
edges{
node{
id
title
harga
image{
    fluid(maxHeight:426){
    src
        ...GatsbyContentfulFluid_tracedSVG
    }
}
}
}
}
}`;


export default function products() {
    return (
        <div>
            <StaticQuery
                query={getProducts}
                render={data => {
                    return (
                        <section className="py-5">
                            <div className="container">
                                <Title title="our products" />
                                <div className="row">
                                    {data.products.edges.map(({ node: product }
                                    ) => {
                                        return <Product key={product.id} product=
                                            {product} />;
                                    })}
                                </div>
                            </div>
                        </section>
                    )
                }}
            />
        </div>
    )
}
