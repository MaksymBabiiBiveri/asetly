import { ApplicationActions } from '../types/application.types';
import { CompanyActions } from '../types/company.types';
import { DefinitionActions } from '../types/definition.types';

export type ActionsTypes =
  | ApplicationActions
  | CompanyActions
  | DefinitionActions;
