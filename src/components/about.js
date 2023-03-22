import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import AboutWithVideo from './section-components/about';
import Team from './section-components/team';
import Instagram from './section-components/instagram';
import Footer from './global-components/footer';
import NavbarV5 from './global-components/navbar-v5';

const About = () => {
    return <div>
        {/* <Navbar /> */}
        <NavbarV5 />
        <PageHeader headertitle="About" />
        <AboutWithVideo />
        {/* <Team /> */}
        <Instagram />
        <Footer />
    </div>
}

export default About

