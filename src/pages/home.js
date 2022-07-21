import React, { Fragment } from 'react';
import Header from '../components/globalComponents/header/headerComponent';
import Footer from '../components/globalComponents/footer/footerComponent';
import Banner from '../components/globalComponents/banner/bannerComponent';
import Contact from '../components/globalComponents/contact/contact';
import Desktop from '../components/home/desktopInfo/desktopInfo';
import Features from '../components/home/FeaturedComponent/featuresComponent';
import MobileInfo from '../components/home/mobileInfo/mobileInfo';
import MoreInfo from '../components/home/moreInfo/moreInfo';

function Home() {
return (
  <Fragment>
    <Header />
    <main className="homepage position-relative">
        <Banner />
        <Features />
        <MobileInfo />
        <Desktop />
        <MoreInfo />
        <Contact />
      </main>
    <Footer />
  </Fragment>
    )
}

export default Home