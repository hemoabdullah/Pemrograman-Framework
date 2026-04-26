## JOBSHEET PRACTICUM 4 - Link Navigation & Catch-All Routing

### 📚 Course Information

|  | Pemrograman Berbasis Framework 2026 |
|--|--|
| NIM |  2341720203|
| Nama |  Hammam Abdullah B.G |
| Kelas | TI - 3I |

---

## 🎯 Learning Objectives

After completing this practicum, students will be able to:
1. **Create catch-all routes** to capture multiple URL segments
2. **Use Link component** for declarative navigation between pages
3. **Use router.push()** for imperative navigation
4. **Implement conditional redirects** based on login status
5. **Add global layout** with navbar and footer on all pages

---

## 📚 Basic Theory

Next.js Pages Router supports catch-all routing using `[...slug].js` files, which capture all URL segments after the folder name as an array. Navigation can be done declaratively with the `Link` component or imperatively with `useRouter().push()`. Layout global can be applied through `pages/_app.jsx` to wrap all pages consistently.

---

## 📸 Screenshots & Implementation

### 1. Home Page
**Route**: `/` | **File**: `pages/index.jsx`

**Key Code**:
```jsx
const HomePage = () => {
  return (
    <section className="hero">
      <p className="eyebrow">Week 4 Practical</p>
      <h1>Linking, Catch-All Routing, and Imperative Navigation</h1>
    </section>
  )
}
```

**Explanation**: Main page with navigation demos and route samples

**Screenshot**:
![Home Page](img/1.png)

---

### 2. Catch-All Route
**Route**: `/category/[...slug]` | **File**: `pages/category/[...slug].js`

**Key Code**:
```jsx
const CategoryPage = () => {
  const { slug } = router.query
  return (
    <section className="pageBlock">
      <h1>/category/[...slug]</h1>
      <ul>
        {slug.map((item, index) => (
          <li key={index}>{index + 1}. {item}</li>
        ))}
      </ul>
    </section>
  )
}
```

**Explanation**: Displays all URL segments as a list array

**Screenshot**:
![Catch-All Route](img/2.png)

---

### 3. Login Page with Imperative Navigation
**Route**: `/auth/login` | **File**: `pages/auth/login.jsx`

**Key Code**:
```jsx
const handleLogin = () => {
  localStorage.setItem('week4-auth', 'true')
  router.push('/product')
}
```

**Explanation**: Uses router.push() for imperative navigation after login

**Screenshot**:
![Login Page](img/3.png)

---

### 4. Register Page with Link Navigation
**Route**: `/auth/register` | **File**: `pages/auth/register.jsx`

**Key Code**:
```jsx
<Link className="primaryButton" href="/auth/login">
  Back to Login
</Link>
```

**Explanation**: Uses Link component for declarative navigation

**Screenshot**:
![Register Page](img/4.png)

---

### 5. Protected Product Page
**Route**: `/product` | **File**: `pages/product/index.jsx`

**Key Code**:
```jsx
useEffect(() => {
  if (!localStorage.getItem('week4-auth')) {
    router.replace('/auth/login')
  }
}, [router])
```

**Explanation**: Auto-redirects to login if user is not authenticated

**Screenshot**:
![Product Page](img/5.png)

---

### 6. Global Layout (AppShell)
**File**: `components/layouts/AppShell/index.jsx`

**Key Code**:
```jsx
const AppShell = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer>Week 4 Praktikum</footer>
    </>
  )
}
```

**Explanation**: Navbar and footer appear on all pages through _app.jsx

**Screenshot**:
![Layout](img/6.png)

---

## 📋 Assignment

### Assignment 1 – Catch-All Routing
**Task:** Create route `/category/[...slug]` and display all URL parameters as a list.

**Implementation:**
- Created catch-all route that captures multiple URL segments
- Slug parameters displayed as an array list
- Route examples: `/category/tech/javascript`, `/category/design/ui`

**Screenshot**:
![Assignment 1](img/prak1.png)

### Assignment 2 – Navigation
**Task:** Navigate from login to product using `router.push()`, and between login/register using `Link`.

**Implementation:**
- Login button uses `router.push('/product')` after setting auth
- Register page uses `<Link href="/auth/login">` for declarative nav
- Both methods work without page refresh

**Screenshot**:
![Assignment 2](img/prak2.png)

### Assignment 3 – Conditional Redirect
**Task:** If user is not logged in, accessing `/product` redirects to `/auth/login`.

**Implementation:**
- Used `useEffect` to check localStorage auth status
- Used `router.replace('/auth/login')` for redirect
- Product page protected from unauthenticated access

**Screenshot**:
![Assignment 3](img/prak3.png)

---

## 📝 Questions

### 1. What is the difference between `[id].js` and `[...slug].js`?

**Answer:**
`[id].js` only captures a single URL segment, while `[...slug].js` captures multiple segments and returns them as an array. For example, `/category/tech/javascript` with `[...slug].js` gives `['tech', 'javascript']`, but with `[id].js` it would only match one segment.

### 2. Why is the slug in the form of an array?

**Answer:**
Because catch-all routes capture all URL parts after the route folder name, and Next.js returns them as an array of segments. This allows handling dynamic nested paths like `/category/a/b/c/d` flexibly.

### 3. When should we use `Link` versus `router.push()`?

**Answer:**
`Link` is best for declarative navigation between pages (like menu links, buttons that go somewhere). `router.push()` is best for imperative navigation triggered by logic, validation, or processes (like after form submission, login success, or conditional redirects).

### 4. Why does Next.js navigation not refresh the page?

**Answer:**
Because Next.js uses client-side navigation. The router handles route changes in the browser without doing a full page reload, making transitions faster and preserving state. This is unlike traditional websites that reload the entire HTML page on every navigation.

---

## 🎯 Conclusion

Through this practicum, students have learned that Next.js Pages Router:
- ✅ **Supports catch-all routing** naturally with `[...slug]` syntax
- ✅ **Provides both declarative and imperative navigation** options
- ✅ **Enables conditional redirects** for authentication flows
- ✅ **Simplifies global layout management** through `_app.jsx`

All navigation and routing concepts have been implemented with consistent styling and good user experience.