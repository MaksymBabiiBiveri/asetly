import { ApplicationActions, ApplicationState } from '@Types/application.types';

const initialState: ApplicationState = {
  token: '',
  error: null,
};

export const ApplicationReducer = (
  state = initialState,
  action: ApplicationActions
): ApplicationState => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};
