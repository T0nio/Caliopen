import { combineReducers } from 'redux';
import notifyReducer from 'react-redux-notify';
import { routerReducer } from 'react-router-redux';
import applicationReducer from './modules/application';
import contactReducer from './modules/contact';
import deviceReducer from './modules/device';
import discussionReducer from './modules/discussion';
import draftMessageReducer from './modules/draft-message';
import i18nReducer from './modules/i18n';
import localIdentityReducer from './modules/local-identity';
import messageReducer from './modules/message';
import openPGPKeychainReducer from './modules/openpgp-keychain';
import tabReducer from './modules/tab';
import tagReducer from './modules/tag';
import userReducer from './modules/user';

const reducer = combineReducers({
  notifications: notifyReducer,
  application: applicationReducer,
  contact: contactReducer,
  device: deviceReducer,
  discussion: discussionReducer,
  draftMessage: draftMessageReducer,
  i18n: i18nReducer,
  localIdentity: localIdentityReducer,
  message: messageReducer,
  openPGPKeychain: openPGPKeychainReducer,
  tab: tabReducer,
  tag: tagReducer,
  user: userReducer,
  router: routerReducer,
});

export default reducer;
