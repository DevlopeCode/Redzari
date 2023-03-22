import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ContactInfo from './section-components/contact-info';
import ContactForm from './section-components/contact-form';
import Instagram from './section-components/instagram';
import Footer from './global-components/footer';
import NavbarV5 from './global-components/navbar-v5';

const Contact = () => {
    return <div>
        {/* <Navbar /> */}
        <NavbarV5 />
        <PageHeader headertitle="Contact" />
        <ContactInfo />
        <ContactForm />
        <Instagram />
        <Footer />
    </div>
}

export default Contact

