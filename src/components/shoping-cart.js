import React from 'react';
import PageHeader from './global-components/page-header-v2';
import ShoppingCart from './shop-components/shopping-cart';
import Instagram from './section-components/instagram';
import Footer from './global-components/footer';
import NavbarV5 from './global-components/navbar-v5';

const ProductDetails = () => {
    return <div>
        <NavbarV5 />
        <PageHeader headertitle="Shopping Cart" subheader="Shopping Cart" />
        <ShoppingCart />
        <Instagram />
        <Footer />
    </div>
}

export default ProductDetails

