import React from "react";
import { EmptyPage } from '@components';

interface VendorListProps {}

const VendorList: React.FC<VendorListProps> = () => {    
    return (
        <EmptyPage textButton="Vendor" redirectPath="newVendor">
            <h5>You don`t have vendors yet</h5>
            <h5>Click the button and create a new vendor</h5>
        </EmptyPage>
    );
};

export default VendorList;