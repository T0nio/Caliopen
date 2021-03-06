import { createSelector } from 'reselect';

export const messageNotificationsSelector = createSelector(
  [state => state.notification],
  notificationState => notificationState.notifications
    .filter(notif => notif.emitter === 'smtp' && notif.type === 'event')
    // XXX: the API gives a json stringified. this is more like a quickfix,
    // should be in a normalizer
    // .map(notif => ({
    //   ...notif,
    //   body: JSON.parse(notif.body),
    // }))
);
