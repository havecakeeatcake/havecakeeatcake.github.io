import React from 'react'
import Cart from '~/components/Cart'
import { Container } from '~/utils/styles'
import SEO from "../components/seo"

const CartPage = () => (
	<>
		<SEO title="Cart Page" keywords={[`gatsby`, `application`, `react`]} />
	  	<Container id="cartpage">
			<h1>Your cart</h1>
	    	<Cart />
	  	</Container>
 	</>
)

export default CartPage
