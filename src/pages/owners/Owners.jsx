import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import OwnersBenefits from './OwnersBenefits/OwnersBenefits';
import Footer from'../../components/footer/Footer';
import OwnersServices from './OwnersServices/OwnersServices';
import OwnersTestimony from './OwnersTestimony/OwnersTestimony';
import OwnersProducts from './OwnersProducts/OwnersProducts';
import OwnerHeader from './OwnersHeader/OwnersHeader';
import { useEffect } from "react";

const Owners = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "White";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
  return (
    <>
    <Navbar />
    <OwnerHeader />
    <OwnersBenefits />
    <OwnersTestimony />
    <OwnersServices />
    <OwnersProducts />
    <Footer />
</>
  );
}

export default Owners

