import find from 'lodash/find';
import { Dictionary, NumericDictionary } from 'types/lodash';


export default function(
  this: Dictionary<never>|NumericDictionary<never>,
  predicate: Function,
  fromIndex?: number,
): any {
  return find(this, predicate, fromIndex);
}
