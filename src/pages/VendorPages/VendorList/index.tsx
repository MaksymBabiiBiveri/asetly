import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetVendorList } from '../../../store/actions/vendor.action';
import { VendorTypes } from '../../../store/types/vendor.types';
import classes from './VendorList.module.scss';
import { Button, EmptyPage } from '@components';
import { RootState } from '../../../store';

interface VendorListProps {}

const VendorList: React.FC<VendorListProps> = () => {
    const dispatch = useDispatch();
    const vendorList = useSelector<RootState, VendorTypes[]>(
        (state) => state.CompanyReducer.companyList
      );

    useEffect(() => {
        if(!VendorList.length) {
            dispatch(GetVendorList());
        }
    }, []);

    console.log(vendorList);
    

    if (!vendorList.length) {
        return (
            <EmptyPage textButton="Vendor" redirectPath="newVendor">
                <h5>You don`t have vendors yet</h5>
                <h5>Click the button and create a new vendor</h5>
            </EmptyPage>
        );
    }

    return (
        <div className={classes.vendor_list}>
            <div className={classes.vendorList_wrapper}>
                <div className={classes.button_wrapper}>
                    <Button color="primary">test</Button>
                </div>
                <div className={classes.vendorList_table_wrapper}>
                    {vendorList.map((el:any) => (
                        <div key={el.partnerId}>{el.email}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VendorList;