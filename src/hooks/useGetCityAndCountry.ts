import { RootState } from '@RootStateType';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCitiesList, getCountriesList } from '@Actions/definition.action';
import { City, Country } from '@Types/definition.types';

const getDefinitionState = (state: RootState) => state.DefinitionReducer;

const useGetCityAndCountry = (): {
  citiesList: City[];
  countriesList: Country[];
} => {
  const { citiesList, countriesList } = useSelector(getDefinitionState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!citiesList.length) {
      dispatch(getCitiesList());
    }
  }, []);
  useEffect(() => {
    if (!countriesList.length) {
      dispatch(getCountriesList());
    }
  }, []);

  return { citiesList, countriesList };
};

export default useGetCityAndCountry;
