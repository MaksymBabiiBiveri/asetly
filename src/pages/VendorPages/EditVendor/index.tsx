import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteVendor, GetOneVendor } from '@Actions/vendor.action';
import { RootState } from '@RootStateType';
import { Loader } from '@common';
import { HeaderEditAction, ModalDelete } from '@components';
import { useToggle } from '@hooks';
import Preview from '@pages/VendorPages/EditVendor/Preview';
import Edit from '@pages/VendorPages/EditVendor/Edit';

type VendorParams = {
  PartnerID: string;
};

interface EditVendorProps {}

const getVendorState = (state: RootState) => state.VendorReducer;

const EditVendor: React.FC<EditVendorProps> = () => {
  const params = useParams<VendorParams>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modeEdit, setModeEdit] = useToggle();
  const [openModal, setOpenModal] = useToggle();

  const { currentVendor, loadingVendor } = useSelector(getVendorState);
  const partnerID = params.PartnerID ? params.PartnerID : '';

  const deleteVendors = () => {
    if (currentVendor) {
      dispatch(deleteVendor([currentVendor.partnerId]));
    }
    setOpenModal(!open);
    navigate('/Vendors');
  };

  useEffect(() => {
    dispatch(GetOneVendor(partnerID));
  }, []);

  if (loadingVendor || !currentVendor) {
    return <Loader />;
  }

  return (
    <div>
      <div className="padding_wrapper_page">
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
          onDelete={deleteVendors}
        />
      </div>
    </div>
  );
};

export default EditVendor;
