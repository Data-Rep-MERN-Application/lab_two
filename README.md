# Lab 2 : Data Representation & Querying

## Exercise 1: Creating and Modifying a React Application

**Set Up React Application with Vite:**

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

👉 By default, the dev server runs at **[http://localhost:5173](http://localhost:5173)**.

**Entry file (`src/main.jsx`):**

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

**Basic App (`src/App.jsx`):**

```jsx
export default function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}
```

---

## Exercise 2: Componentization

Create a `components/` folder in `src`.

**`src/components/Content.jsx`:**

```jsx
export default function Content() {
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}
```

**`src/components/Header.jsx`:**

```jsx
export default function Header() {
  return <h1>My Header in another component</h1>;
}
```

**Question:**
Create a new component called `Footer.jsx` inside the `components/` folder. This component should hold footer information for your app (e.g., your name, copyright, or any message). Then update `App.jsx` so that it renders the `Footer` component below the `Content` component.

---

## Exercise 3: Adding Bootstrap

**Install Bootstrap:**

```bash
npm install react-bootstrap bootstrap
```

**Import Bootstrap in `src/main.jsx`:**

```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
```

**Question:** Add a Navigation Bar component to your application using React Bootstrap. Ensure it has links for Home, Read, and Create pages.

---

## Exercise 4: Adding a Navigation Bar

**Question:** Add a Navigation Bar component to your application using React Bootstrap. Ensure it has links for Home, Read, and Create pages.

````

---

## Exercise 4: Navigation Bar and Routing

**Install React Router:**

```bash
npm install react-router-dom
````

**`src/components/NavigationBar.jsx`:**

```jsx
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavigationBar() {
  return (
     <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
  );
}
```

**Wrap app in Router (`src/main.jsx`):**

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
```

**Update `src/App.jsx`:**

```jsx
import { Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Content from './components/Content.jsx'

export default function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/read" element={<h1>Read Component</h1>} />
        <Route path="/create" element={<h1>Create Component</h1>} />
      </Routes>
      <Footer />
    </>
  );
}
```

---

## Exercise 5: Client Side Routing

React Router enables "client side routing".

**Modify `src/App.jsx` to conditionally render Header/Footer under Navbar:**

```jsx
import './App.css'
import Content from './components/test'
import Header from './components/Header'
import { Nav, Navbar, Container } from 'react-bootstrap'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/read" element={<Header />} />
          <Route path="/create" element={<Content />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
```

---

## Exercise 6: Setting up Git Repository

**Create a Git Repository:**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```
