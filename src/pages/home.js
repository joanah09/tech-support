import React from 'react';
import Contact from '../components/globalComponents/contact/contact';
import Banner from '../components/globalComponents/header/bannerComponent';
import Desktop from '../components/home/desktopInfo/desktopInfo';
import Features from '../components/home/FeaturedComponent/featuresComponent';
import MobileInfo from '../components/home/mobileInfo/mobileInfo';
import MoreInfo from '../components/home/moreInfo/moreInfo';

function Home() {
return (
<main className="homepage position-relative">
  <Banner />
  <Features />
  <MobileInfo />
  <Desktop />
  <MoreInfo />
  <Contact />
</main>
    )
}

export default Home