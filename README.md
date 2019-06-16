# Introduction

I created this repo to rehearse data structures and algorithms, knowledge which I feel like I haven't used much of since I got out of university.

# Layout

I'll roughly follow the course plan of the course Algorithms, Data Structures and Complexity from KTH. The aim of the course is to, at the end of the course, be able to:

- Independently construct computer programs that use time and memory efficiently
- In professional life identify and attack problems that are unrealistically resource demanding or not possible to solve on a computer

## Data structures

- Review of data structures
  - Hashtable
  - Heap
  - Balanced tree
  - Bloom filter
- Use and implementation of data structures
- Computability and complexity
  - The concept of reduction
  - Complexity classes P and NP
- NP-complete problems
  - Undecidable problems
- Coping with computationally intractable problems

## Design principles of algorithms

- Decomposition
  - Greedy algorithms
  - Dynamic programming
  - Local and exhaustive search
- Algorithm analysis
- Approximation algorithms and hueristics
- Application with algorithms for problems on sets, graphs, arithmetic and geometry
- Implementation of algorithms

# Tests

To run tests, use

`node -r ts-node/register --max-old-space-size=8192 --expose-gc heap/heapsort-test.ts`

[Node CLI docs](https://nodejs.org/api/cli.html)

## `--max-old-space-size`

Increase the heap memory size of the process.

## `--expose-gc`

Allows for running garbage collection in the code.
