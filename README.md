# Tests

To run tests, use

`node -r ts-node/register --max-old-space-size=8192 --expose-gc heap/heapsort-test.ts`

## `--max-old-space-size`

Increase the heap memory size of the process.

## `--expose-gc`

Allows for running garbage collection in the code.
