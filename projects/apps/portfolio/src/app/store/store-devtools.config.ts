import { StoreDevtoolsConfig } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

export const StoreDevToolsConfig: StoreDevtoolsConfig = {
  maxAge: 25, // Retains last 25 states
  logOnly: environment.production, // Restrict extension to log-only mode
};
