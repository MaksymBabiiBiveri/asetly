import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteSite, GetOneSite } from '@Actions/site.action';
import { RootState } from '@RootStateType';
import { Loader } from '@common';
import { HeaderEditAction, ModalDelete } from '@components';
import { useToggle } from '@hooks';
import Preview from '@pages/SitePages/EditSite/Preview';
import Edit from '@pages/SitePages/EditSite/Edit';

type SiteParams = {
  LocationID: string;
};

interface EditSiteProps {}

const getSiteState = (state: RootState) => state.SiteReducer;

const EditSite: React.FC<EditSiteProps> = () => {
  const params = useParams<SiteParams>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modeEdit, setModeEdit] = useToggle();
  const [openModal, setOpenModal] = useToggle();
  console.log(params.LocationID);
  

  const { currentSite, loadingSite } = useSelector(getSiteState);
  const siteID = params.LocationID ? params.LocationID : '';

  const deleteSites = () => {
    if (currentSite) {
      dispatch(deleteSite([currentSite.siteId]));
    }
    setOpenModal(!open);
    navigate('/Locations');
  };

  useEffect(() => {
    dispatch(GetOneSite(siteID));
  }, []);

  if (loadingSite || !currentSite) {
    return <Loader />;
  }

  return (
    <div>
      <div className="padding_wrapper_page">
        {!modeEdit && (
          <HeaderEditAction
            title={currentSite.name}
            onEditButton={setModeEdit}
            onDeleteButton={setOpenModal}
          />
        )}
        {modeEdit ? (
          <Edit currentSite={currentSite} backToPreview={setModeEdit} />
        ) : (
          <Preview currentSite={currentSite} />
        )}
        <ModalDelete
          title="site"
          body="the site"
          name={currentSite.name}
          open={openModal}
          setOpen={setOpenModal}
          onDelete={deleteSites}
        />
      </div>
    </div>
  );
};

export default EditSite;
