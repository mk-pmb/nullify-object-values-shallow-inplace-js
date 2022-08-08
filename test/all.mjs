// -*- coding: utf-8, tab-width: 2 -*-

import 'usnam-pmb';
import pTapeAllInList from 'p-tape-all-in-list';

import nullifyObjectValuesShallowInplace from '../index.js';

import usageTests from './usage.mjs';

pTapeAllInList({
  extraApi: { nullifyObjectValuesShallowInplace },
}, [
  ...usageTests,
]);
