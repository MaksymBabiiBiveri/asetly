import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from './EditVendor.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { GetOneVendor } from '@Actions/vendor.action';
import { RootState } from '@RootStateType';
import { Loader } from '@common';
import { HeaderEditAction } from '@components';
import { useToggle } from '@hooks';
import Preview from '@pages/VendorPages/EditVendor/Preview';
import Edit from '@pages/VendorPages/EditVendor/Edit';
import ModalDelete from '../../../UiKitComponents/ModalDelete';

type VendorParams = {
  PartnerID: string;
};

interface EditVendorProps {}

const getVendorState = (state: RootState) => state.VendorReducer;

const EditVendor: React.FC<EditVendorProps> = () => {
  const params = useParams<VendorParams>();
  const dispatch = useDispatch();
  const [modeEdit, setModeEdit] = useToggle();
  const [openModal, setOpenModal] = useToggle();

  const { currentVendor, loadingVendor } = useSelector(getVendorState);
  const partnerID = params.PartnerID ? params.PartnerID : '';

  const deleteVendor = () => {
    console.log('delete');
    setOpenModal(!open);
  };
console.log(params);

  useEffect(() => {
    dispatch(GetOneVendor(partnerID));
  }, []);

  if (loadingVendor || !currentVendor) {
    return <Loader />;
  }

  return (
    <div className={classes.editVendor}>
      <div className={classes.editVendor_wrapper}>
        {!modeEdit && (
          <HeaderEditAction
            title={currentVendor.name}
            onEditButton={setModeEdit}
            onDeleteButton={setOpenModal}
          />
        )}
        {modeEdit ? (
          <Edit currentVendor={currentVendor} backToPreview={setModeEdit} />
        ) : (
          <Preview currentVendor={currentVendor} />
        )}
        <ModalDelete
          title="vendor"
          body="the vendor"
          name={currentVendor.name}
          open={openModal}
          setOpen={setOpenModal}
          onDelete={deleteVendor}
        />
      </div>
    </div>
  )
}

export default EditVendor;