import moment from 'moment';

export const numberDayPassed = (originalDateString: string) => {
  return moment(originalDateString).fromNow();
};
