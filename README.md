
<!--#echo json="package.json" key="name" underline="=" -->
nullify-object-values-shallow-inplace
=====================================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Replace all values in an object with null. Can be useful to help garbage
collection while still shadowing same-named prototype keys.
<!--/#echo -->



API
---

This module exports one function:

### nullifyObjectValuesShallowInplace(obj)

Assigns `null` to each enumerable own key of `obj`, then returns `obj`.



Usage
-----

see [test/usage.mjs](test/usage.mjs).


<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
