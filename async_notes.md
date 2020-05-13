### You Don't Know JS: Async & Performance:

## Table of contents:

# Chapter 1: Asynchrony: Now and later:

- A program in chunks
- Event loop
- Parallel threading
- Concurrency
- Jobs
- Statement ordering

# Chapter 2: Callbacks:

- Continuations
- Sequential Brain
- Trust issues
- Trying to save callbacks

# Chapter 3: Promises:

- What is a promise?
- Thenable Duck-Typing
- Promise trust
- Chain flow
- Error handling
- Promise Patterns
- Promise API Recap
- Promise Limitations

# Chapter 4: Generators:

- Breaking Run-to-completion
- Generatoring values
- Iterating Generators Asynchronously
- Generators + Promises
- Generator delegation
- Generator Concurrency
- Thunks
- Pre-ES6 Generators

# Chapter 5: Program Performance:

- Web Workers
- Parallel JS
- SIMD
- asm.js

# Chapter 6: Benchmarking & Tuning

- Benchmarking
- Context is King
- jsPerf.com
- Writing good tests
- Micro-performance
- Tail Call Optimization (TCO)

### Chapter 1: Asynchrony --> Now and later:

- It's about what happens when part of your program runs now and, another part of your program runs later. There's a gap between now and later where your program isn't actively executing.
- Practically all nontrivial programs ever written (especially in JS) have in some way or another had to manage this gap.
- Examples of when these gaps occur:

  1. Waiting for user input.
  2. Requesting data from a database or file system
  3. Sending data across the network and waiting for a response
  4. Performing a repeated task at a fixed interval of time (like animation).

- In fact, the relationship between the now and later parts of your program is at the heart of asynchronous programming.

### A deep dive into understanding what asynchrony is and how it operates in JS.

## A program in chunks:

- Any time you wrap a portion of code into a function and specify that it should be executed in response to some event (timer, mouse click, Ajax response etc), you are creating a later chunk of your code, and thus introducing asynchrony to your program.
