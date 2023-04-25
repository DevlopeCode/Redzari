import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header-v2';
import SingleProduct from './shop-components/single-product';
import RelatedProduct from './shop-components/related-product';
import Instagram from './section-components/instagram';
import Footer from './global-components/footer';
import NavbarV5 from './global-components/navbar-v5';

const ProductDetails = (props) => {
    console.log("++++++++++++++++++++++", );
    return <div>
        <NavbarV5 />
        <PageHeader headertitle="Shop" subheader="Product Details" />
        <SingleProduct {...props}/>
        <RelatedProduct />
        <Instagram />
        <Footer />
    </div>
}

export default ProductDetails

