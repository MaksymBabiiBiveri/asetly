import { ApplicationActions } from '@Types/application.types';
import { CompanyActions } from '@Types/company.types';
import { DefinitionActions } from '@Types/definition.types';
import { ContractActions } from '@Types/contract.types';

export type ActionsTypes =
  | ApplicationActions
  | CompanyActions
  | DefinitionActions
  | ContractActions;
