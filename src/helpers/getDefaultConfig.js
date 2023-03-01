import deepmerge from 'deepmerge';

import { packageName, pluginConfig } from '../constants';

export const getDefaultConfig = (accountSid) => {
  try {
    const localStorageConfig = localStorage.getItem(`${packageName}-config-${accountSid}`);
    if (localStorageConfig) {
      const parsedConfig = JSON.parse(localStorageConfig);
      return deepmerge(pluginConfig, parsedConfig);
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(`error reading localStorage plugin config ${packageName}`, err);
  }
  return pluginConfig;
};
