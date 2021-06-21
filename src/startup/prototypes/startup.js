import setPrototypes from './setPrototypes';

setPrototypes(Array, require('./Array'));
setPrototypes(Object, require('./Object'));
setPrototypes(String, require('./String'));
setPrototypes(Number, require('./Number'));
setPrototypes(Date, require('./Date'));
setPrototypes(Function, require('./Function'));
