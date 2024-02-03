import React from 'react';
import OwnersBenefits from './OwnersBenefits/OwnersBenefits';
import Footer from'../../components/footer/Footer';
import OwnerServices from './OwnersServices/OwnersServices';
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
    <div>
      <OwnerHeader/>
      <OwnersBenefits />
      <OwnersTestimony />
      <OwnerServices />
      <OwnersProducts/>
      <Footer />
    </div>
  );
}

export default Owners

