import mapValues from 'lodash/mapValues';
import get from 'lodash/get';


const selectLangage = (locale) => mapValues({

}, (trads) => get(trads, locale));

export const fr = selectLangage('fr');
export const en = selectLangage('en');
