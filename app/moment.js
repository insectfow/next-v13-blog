import moment from "moment";

import 'moment/locale/ko';


export const setDate = (date) => {
  return moment(date).format('YY/MM/DD hh:mm:ss');
}