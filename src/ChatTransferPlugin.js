import { FlexPlugin } from '@twilio/flex-plugin';

import { addConfigActions, setUpActions, setUpComponents, setUpNotifications } from './helpers';
import { packageName } from './constants';

// TODO merge this with packageName in the future
const PLUGIN_NAME = 'ChatTransferPlugin';

export default class ChatTransferPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    addConfigActions(flex);

    const accountSid = manager.serviceConfiguration.account_sid;

    const enabledLsKey = `${packageName}-${accountSid}`;
    const enabled = localStorage.getItem(enabledLsKey);
    if (!enabled) {
      localStorage.setItem(enabledLsKey, 'true');
    } else if (enabled === 'false') {
      return;
    }

    setUpComponents();
    setUpNotifications();
    setUpActions();
  }
}
