import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header-v2';
import CollectionPage from './shop-components/collection';
import Delivery from './section-components/delivery';
import Instagram from './section-components/instagram';
import Footer from './global-components/footer';
import NavbarV5 from './global-components/navbar-v5';
import Category from './section-components/category';
import ProductSlider from './section-components/product-slider';

const Collection = () => {
    return <div>
        {/* <Navbar /> */}
        <NavbarV5 />
        <PageHeader headertitle="SHOP" subheader="Women" />
        <CollectionPage />
        <Delivery />
        <Instagram />
        <Footer />
    </div>
}

export default Collection

