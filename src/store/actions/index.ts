import { ApplicationActions } from '../types/application.types';
import { CompanyActions } from '../types/company.types';
import { DefinitionActions } from '../types/definition.types';
import { VendorActions } from '../types/vendor.types';
import { ContractActions } from '@Types/contract.types';

export type ActionsTypes =
  | ApplicationActions
  | CompanyActions
  | DefinitionActions
  | VendorActions
  | ContractActions;
