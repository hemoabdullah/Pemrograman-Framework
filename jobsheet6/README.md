## JOBSHEET PRACTICUM 6 - Custom Document & Custom Error Page

### 📚 Course Information

|  | Pemrograman Berbasis Framework 2026 |
|--|--|
| NIM |  2341720203|
| Nama |  Hammam Abdullah B.G |
| Kelas | TI - 3I |

---

## 🎯 Learning Objectives

After completing this practicum, students will be able to:
1. **Understand the function** of `pages/_document.js`
2. **Configure global HTML structure** such as `lang` attribute and meta tags
3. **Create custom error page** at `pages/404.jsx`
4. **Add custom styling** for error pages
5. **Display illustrations** from the `public` folder
6. **Handle global components** so navbar does not appear on 404 page

---

## 📚 Basic Theory

The `_document.js` file in Next.js controls the entire HTML document structure shared across all pages, including the `<html>`, `<head>`, and `<body>` tags. It is the right place for global meta tags, language attributes, and external scripts. The `404.js` page is automatically shown by Next.js when a route is not found. Files in the `public` folder are served directly from the root URL without needing imports.

---

## 📸 Screenshots & Implementation

### 1. Home Page
**Route**: `/` | **File**: `pages/index.js`

**Key Code**:
```jsx
const HomePage = () => {
  return (
    <section className="hero">
      <p className="eyebrow">Week 6 Practical</p>
      <h1>Custom Document dan Custom Error Page</h1>
    </section>
  )
}
```

**Explanation**: Main page with links to test 404 error

**Screenshot**:
![Home Page](img/1.png)

---

### 2. Custom Document (_document.js)
**File**: `pages/_document.js`

**Key Code**:
```jsx
class MyDocument extends Document {
  render() {
    return (
      <Html lang="id">
        <Head>
          <meta name="description" content="Week 6 Praktikum" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
```

**Explanation**: Sets global HTML attributes like language and meta tags

**Screenshot**:
![Custom Document](img/2.png)

---

### 3. Custom 404 Page
**Route**: Any non-existent URL | **File**: `pages/404.jsx`

**Key Code**:
```jsx
const Custom404 = () => {
  return (
    <section className={styles.error}>
      <img src="/page-not-found.svg" alt="Not found" />
      <h1>404 - Halaman Tidak Ditemukan</h1>
      <Link href="/" className={styles.error__button}>
        Kembali ke Home
      </Link>
    </section>
  )
}
```

**Explanation**: Custom error page with illustration and back button

**Screenshot**:
![404 Page](img/3.png)

---

### 4. 404 Styling Module
**File**: `styles/404.module.scss`

**Explanation**: Custom styling for error page layout, fonts, and colors

**Screenshot**:
![404 Styling](img/4.png)

---

### 5. Public Folder Illustration
**File**: `public/page-not-found.svg`

**Explanation**: SVG illustration served directly from root URL without import

**Screenshot**:
![Public Illustration](img/5.png)

---

### 6. Navbar Hidden on 404
**File**: `src/components/layouts/AppShell/index.jsx`

**Key Code**:
```jsx
{!disableNavbar.includes(router.pathname) && <Navbar />}
```

**Explanation**: Navbar hidden when route is '/404' using conditional rendering

**Screenshot**:
![Navbar Hidden](img/6.png)

---

## 📋 Assignment

### Assignment 1 – Custom 404 Page Content
**Task:** Add page title, short description, and illustration image to 404 page.

**Implementation:**
- Created `pages/404.jsx` with custom content
- Added heading, description text, and SVG illustration
- Professional error page design with Jobsheet2 theme

**Screenshot**:
![Assignment 1](img/prak1.png)

### Assignment 2 – Custom Styling and Navbar Handling
**Task:** Create custom colors, fonts, and layout for 404 page. Navbar should not appear on 404 page.

**Implementation:**
- Created `styles/404.module.scss` for complete styling
- Added route check in AppShell to hide navbar on '/404'
- Consistent design with professional error layout

**Screenshot**:
![Assignment 2](img/prak2.png)

### Assignment 3 – Back to Home Button
**Task:** Add "Kembali ke Home" button using Next.js `Link` component.

**Implementation:**
- Added `<Link href="/">` button on 404 page
- Styled with primary button classes
- Provides easy navigation back to homepage

**Screenshot**:
![Assignment 3](img/prak3.png)

---

## 📝 Questions

### 1. What is the main function of `_document.js`?

**Answer:**
It manages the global HTML document structure of the application (`html`, `head`, `body` tags) and global properties like `lang` or common meta tags. It controls the entire document wrapper that is shared across all pages.

### 2. Why is `<title>` not recommended in `_document.js`?

**Answer:**
Because page titles should be specific per page, so it is more appropriate to place them in individual pages using the `Head` component. Putting title in `_document.js` would make every page have the same title, which is bad for SEO and user experience.

### 3. What is the difference between a normal page and a `404.js` page?

**Answer:**
Normal pages are accessed through existing routes defined in the pages folder. The `404` page is automatically displayed by Next.js when a route is not found, without needing to create a matching file in the pages directory.

### 4. Why does the `public` folder not need to be imported?

**Answer:**
Because files in the `public` folder are served directly from the root URL of the application, so they can be accessed via paths like `/page-not-found.svg` without any import statement. Next.js handles this automatically during static file serving.

---

## 🎯 Conclusion

Through this practicum, students have learned that Next.js Pages Router:
- ✅ **Simplifies global document configuration** through `_document.js`
- ✅ **Provides automatic custom error pages** with `404.js`
- ✅ **Supports direct static file serving** from the `public` folder
- ✅ **Allows layout control** through conditional component rendering

All document and error handling concepts have been implemented with consistent styling and good user experience.