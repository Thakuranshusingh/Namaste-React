# Namaste React

# Parcel

- Dev build
- Local server
- HMR
- File watching algorithm - written in c++
- Caching faster build
- Image optimization
- Minification
- Bundling
- Chunking
- Compress
- Consistent hashing
- Code Splitting
- Differential bundling
- Diagnostics
- Error handling
- Https
- Tree shaking 'remove unused codes'
- Different prod and dev build

# Babel

- Babel is a js compiler and also a transpiler
- React.createElement => Js object => HTML
- Jsx => React.createElement => Js object => HTML
- Jsx => Transpiled => Js
- Transpiled means coverting the code which browser understands.

# Types of testing (devloper)

Unit Testing
Integration Testing
End to End Testing - e2e testing

# Redux Toolkit

Install @reduxjs/toolkit and react-redux
Build our store
Connect our store to our app
Slice (cartSlice)
dispatch(action)
Selector

# Setting up Testing in our app

Install React Testing Library
Installed jest
Installed Babel dependencies
Configure Babel
Configure Parcel Config file to disable default babel transpilation
Jest - npx jest --init
Install jsdom library
Install @babel/preset-react - to make JSX work in test cases
Include @babel/preset-react inside my babel config
npm i -D @testing-library/jest-dom
