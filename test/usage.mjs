// -*- coding: utf-8, tab-width: 2 -*-

import largeDataObject from '../package.json';


export default [

  function shallow(t) {
    t.plan(8);

    const someToken = 'deadbeef';
    const ctx = {
      data: largeDataObject,
      token: someToken,
    };

    // All refs still valid:
    t.strictEqual(someToken.length, 8);
    t.strictEqual(typeof largeDataObject.scripts.test, 'string');
    t.strictEqual(ctx.token.length, 8);
    t.strictEqual(typeof ctx.data.scripts.test, 'string');

    // Now invalidate all refs, so garbage collection can free them:
    t.nullifyObjectValuesShallowInplace(ctx);

    // All ctx refs should be null:
    t.strictEqual(ctx.token, null);
    t.strictEqual(ctx.data, null);

    // All original objects should be unaffected:
    t.strictEqual(someToken.length, 8);
    t.strictEqual(typeof largeDataObject.scripts.test, 'string');
  },


];
