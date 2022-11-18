import { useEffect, useState } from "react"


export const Products = () => {
    const [products, setProducts] = useState([])
    const [topPriced, setTopPriced] = useState(false)
    const [filteredProducts, setFilteredProducts] = useState([])


	useEffect(() => {
		fetch('http://localhost:8088/products')
		  .then((res) => res.json())
		  .then((productsArray) => {
			setProducts(productsArray)
		  })
		},
		[products]
	)

    useEffect(
        () => {
            if (topPriced) {
                const topPriceProductsArray = products.filter(product => product.pricePerUnit >= 1)
                setFilteredProducts(topPriceProductsArray)
            } 
            else {
                setFilteredProducts(products)
            }
        },
        [products, topPriced]
    )

    return (
        <>
        <h2>Products</h2>

        <button onClick={ () => { setTopPriced(true) }}>Top Priced</button>
        <button onClick={ () => { setTopPriced(false) }}>All Products</button>
        
        <article className="products">
            {
                filteredProducts.map(
                    (product) => {
                        return <section className="product" key={`product--${product.id}`}>
                                    <h3>{product.name}</h3>
                                    <div>Price per unit: ${product.pricePerUnit}</div>
                        </section>
                    }
                )
            }
            </article>
        </>
    ) 
}