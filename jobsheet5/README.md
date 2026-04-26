## JOBSHEET PRACTICUM 5 - Styling in Next.js

### 📚 Course Information

|  | Pemrograman Berbasis Framework 2026 |
|--|--|
| NIM |  2341720203|
| Nama |  Hammam Abdullah B.G |
| Kelas | TI - 3I |

---

## 🎯 Learning Objectives

After completing this practicum, students will be able to:
1. **Understand styling techniques** available in Next.js
2. **Implement Global CSS and CSS Module**
3. **Use inline style** for small dynamic needs
4. **Use SCSS** for more structured styling
5. **Integrate Tailwind CSS** for utility-based styling
6. **Refactor project structure** for better maintainability

---

## 📚 Basic Theory

Next.js supports multiple styling approaches: Global CSS for application-wide styles, CSS Modules for component-scoped styles that prevent naming conflicts, Inline Styles for dynamic small adjustments, SCSS for variables and nesting, and Tailwind CSS for rapid utility-first development. The choice depends on feature complexity and project maintainability needs.

---

## 📸 Screenshots & Implementation

### 1. Home Page
**Route**: `/` | **File**: `pages/index.jsx`

**Key Code**:
```jsx
const HomePage = () => {
  return (
    <section className="homeHero">
      <p className="homeLabel">Week 5 Practical</p>
      <h1>Styling pada Next.js Pages Router</h1>
    </section>
  )
}
```

**Explanation**: Main page showcasing different styling approaches

**Screenshot**:
![Home Page](img/1.png)

---

### 2. Login Page with Multiple Styling
**Route**: `/auth/login` | **File**: `src/views/auth/Login/index.jsx`

**Key Code**:
```jsx
<h1 className="text-3xl font-bold text-blue-600 tracking-tight mb-4"
    style={{ color: 'red', borderRadius: '10px', padding: '10px' }}>
  Halaman Login
</h1>
```

**Explanation**: Combines Tailwind utility classes, SCSS module, and inline styles

**Screenshot**:
![Login Page](img/2.png)

---

### 3. Register Page with CSS Module
**Route**: `/auth/register` | **File**: `src/views/auth/Register/index.jsx`

**Key Code**:
```jsx
<section className={styles.register}>
  <h1 className={styles.title}>Halaman Register</h1>
  <button className={styles.primaryButton}>Create Account</button>
</section>
```

**Explanation**: Uses CSS Module for scoped component styling

**Screenshot**:
![Register Page](img/3.png)

---

### 4. Product Page with Refactored Views
**Route**: `/product` | **File**: `src/views/product/ProductPage/index.jsx`

**Key Code**:
```jsx
<ProductPage>
  <HeroSection />
  <MainSection />
</ProductPage>
```

**Explanation**: Separated into reusable view components for maintainability

**Screenshot**:
![Product Page](img/4.png)

---

### 5. Global CSS
**File**: `styles/globals.css`

**Explanation**: Global styles applied across all pages through `_app.jsx`

**Screenshot**:
![Global CSS](img/5.png)

---

### 6. Tailwind Configuration
**File**: `tailwind.config.js`

**Explanation**: Utility-first CSS framework configured for the project

**Screenshot**:
![Tailwind Config](img/6.png)

---

## 📋 Assignment

### Assignment 1 – Register Page with CSS Module
**Task:** Create register page using CSS Module for scoped styling.

**Implementation:**
- Created `src/views/auth/Register/index.jsx`
- Created `src/views/auth/Register/Register.module.css`
- Component-scoped styles prevent naming conflicts

**Screenshot**:
![Assignment 1](img/prak1.png)

### Assignment 2 – Refactor Product Page to Views
**Task:** Separate Product page into HeroSection and MainSection components in views folder.

**Implementation:**
- Created `src/views/product/ProductPage/index.jsx`
- Created `src/views/product/HeroSection/index.jsx`
- Created `src/views/product/MainSection/index.jsx`
- Better separation of concerns and reusability

**Screenshot**:
![Assignment 2](img/prak2.png)

### Assignment 3 – Tailwind CSS Integration
**Task:** Apply Tailwind CSS with minimum 5 utility classes.

**Implementation:**
- Added Tailwind directives to `styles/globals.css`
- Configured `tailwind.config.js` and `postcss.config.js`
- Used classes: `text-3xl font-bold text-blue-600 tracking-tight mb-4`

**Screenshot**:
![Assignment 3](img/prak3.png)

---

## 📝 Questions

### 1. When should we use CSS Module instead of Global CSS?

**Answer:**
CSS Module should be used for component-specific styles to prevent naming conflicts. Global CSS is suitable for resets, base styles, and common utilities used across pages. CSS Modules ensure that class names are locally scoped, preventing accidental style overriding between components.

### 2. What are the weaknesses of inline styling?

**Answer:**
Inline styling is less suitable for complex styles because it is difficult to maintain, does not support pseudo selectors directly (like `:hover`, `:focus`), and makes JSX code become cluttered quickly. It is also harder to reuse styles across multiple elements.

### 3. Why is SCSS suitable for large-scale projects?

**Answer:**
SCSS supports variables, nesting, mixins, and more modular structure, making it easier to maintain style consistency and manage large codebases. Variables ensure consistent colors and values, while nesting keeps related styles organized.

### 4. What are the advantages of Tailwind over traditional CSS?

**Answer:**
Tailwind speeds up styling with ready-to-use utility classes, maintains design consistency through a constrained system, and reduces context switching between JSX and CSS files. Developers can style directly in JSX without writing separate CSS files.

---

## 🎯 Conclusion

Through this practicum, students have learned that Next.js is flexible for various styling needs:
- ✅ **Global CSS** for basic application styles
- ✅ **CSS Module** for component-scoped styles
- ✅ **Inline style** for simple dynamic cases
- ✅ **SCSS** for scalable style structure
- ✅ **Tailwind CSS** for fast and consistent workflow

The choice of styling technique should be adjusted to feature complexity and project maintainability requirements.