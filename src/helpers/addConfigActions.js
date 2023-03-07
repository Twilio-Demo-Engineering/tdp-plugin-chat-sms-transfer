import { packageName, configForm, uiSchema, pluginConfig } from '../constants';

export const addConfigActions = (flex) => {
  flex.Actions.registerAction('FetchPluginConfig', (payload) => {
    return payload;
  });
  flex.Actions.registerAction('FetchedPluginConfig', (payload) => {
    return payload;
  });

  flex.Actions.addListener('beforeFetchPluginConfig', (payload) => {
    if (payload.name === packageName) {
      flex.Actions.invokeAction('FetchedPluginConfig', {
        name: packageName,
        configForm,
        uiSchema,
        defaultValues: pluginConfig,
      });
    }
  });
};
