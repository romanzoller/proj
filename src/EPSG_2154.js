/**
 * @module ngeo.proj.EPSG2154
 */
import {get as getProjection} from 'ol/proj.js';
import {register} from 'ol/proj/proj4.js';

import lcc from './lcc.js';
import proj4 from 'proj4/lib/index.js';

const epsg2154def = [
  `+proj=${lcc}`,
  '+lat_0=46.5',
  '+lon_0=3',
  '+lat_1=49',
  '+lat_2=44',
  '+x_0=700000',
  '+y_0=6600000',
  '+ellps=GRS80',
  '+towgs84=0,0,0,0,0,0,0',
  '+units=m',
  '+no_defs'
].join(' ');
const epsg2154extent = [-378305.81, 6093283.21, 1212610.74, 7186901.68];

proj4.defs('EPSG:2154', epsg2154def);
register(proj4);
getProjection('EPSG:2154').setExtent(epsg2154extent);

const exports = 'EPSG:2154';


export default exports;
