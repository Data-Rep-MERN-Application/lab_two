
# Lab 2 (Vite Edition): Data Representation & Querying

## Exercise 1: Setting up Git Repository

**Create a Git Repository:**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

---

## Exercise 2: Creating and Modifying a React Application

**Set Up React Application with Vite:**

```bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
```

👉 By default, the dev server runs at **http://localhost:5173** (not 3000).

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

## Exercise 3: Componentization

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

**`src/components/Footer.jsx`:**

```jsx
export default function Footer() {
  return <h3>My Footer in another component</h3>;
}
```

**Update `src/App.jsx`:**

```jsx
import Header from './components/Header.jsx'
import Content from './components/Content.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
```

---

## Exercise 4: Adding Bootstrap

**Install Bootstrap:**

```bash
npm install react-bootstrap bootstrap
```

**Import Bootstrap in `src/main.jsx`:**

```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
```

---

## Exercise 5: Navigation Bar and Routing

**Install React Router:**

```bash
npm install react-router-dom
```

**`src/components/NavigationBar.jsx`:**

```jsx
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/create">Create</Nav.Link>
          <Nav.Link as={Link} to="/read">Read</Nav.Link>
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

## Exercise 6: Client Side Routing

React Router enables "client side routing".

**Modify `src/App.jsx` to conditionally render Header/Footer under Navbar:**

```jsx
import { Routes, Route, useLocation } from 'react-router-dom'
import NavigationBar from './components/NavigationBar.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Content from './components/Content.jsx'

export default function App() {
  const location = useLocation();

  const showUnderNavbar =
    location.pathname === '/read' ? <Footer /> :
    location.pathname === '/create' ? <Header /> :
    null;

  return (
    <>
      <NavigationBar />
      {showUnderNavbar}
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/read" element={<h1>Read Component</h1>} />
        <Route path="/create" element={<h1>Create Component</h1>} />
      </Routes>
    </>
  );
}
```

---

## Notes

- Vite dev server runs at **http://localhost:5173**
- Scripts in `package.json`:
  ```json
  {
    "scripts": {
      "dev": "vite",
      "build": "vite build",
      "preview": "vite preview"
    }
  }
  ```


