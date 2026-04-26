## JOBSHEET PRACTICUM 8 - Client Side Rendering & Data Fetching

### 📚 Course Information

|  | Pemrograman Berbasis Framework 2026 |
|--|--|
| NIM |  2341720203|
| Nama |  Hammam Abdullah B.G |
| Kelas | TI - 3I |

---

## 🎯 Learning Objectives

1. Understand Client Side Rendering (CSR) concept
2. Implement manual client-side data fetching with `useEffect`
3. Create skeleton loading with animation
4. Use SWR library for caching and revalidation

---

## 📸 Screenshots

### 1. Home Page
![Home](img/1.png)

### 2. CSR Manual Page (useEffect)
![Manual](img/2.png)

### 3. CSR with SWR
![SWR](img/3.png)

### 4. Skeleton Loading Animation
![Skeleton](img/4.png)

### 5. SSR Example Page
![SSR](img/5.png)

### 6. API Endpoint
![API](img/6.png)

---

## 📋 Assignment

### Assignment 1 – CSR vs SSR vs SSG
**Task:** Explain differences between CSR, SSR, and SSG.
**Implementation:** Created three versions demonstrating each approach.
- **CSR**: Data fetched in browser after JS loads (`useEffect`)
- **SSR**: Rendered on server per request (`getServerSideProps`)
- **SSG**: Rendered at build time to static files

**Screenshot:**
![Assignment 1](img/prak1.png)

### Assignment 2 – Skeleton Loading & Animation
**Task:** Create product page with skeleton loading and shimmer animation.
**Implementation:** Created reusable `ProductCard` and `SkeletonCard` components in `src/views/products/index.jsx` with CSS shimmer animation.

**Screenshot:**
![Assignment 2](img/prak2.png)

### Assignment 3 – Refactor from useEffect to SWR
**Task:** Refactor data fetching from `useEffect` to `SWR` library.
**Implementation:**
- Manual version: `pages/produk/manual.jsx` with `useEffect` + `useState`
- SWR version: `pages/produk/index.jsx` with `useSWR` + `mutate()` for refresh

**Screenshot:**
![Assignment 3](img/prak3.png)

---

## 📝 Questions

### 1. What are the differences between CSR, SSR, and SSG?

**Answer:**
- **CSR (Client Side Rendering)**: Rendering happens in the browser after JavaScript runs. Data is fetched from the client side. Good for interactive applications but slower initial load.
- **SSR (Server Side Rendering)**: Rendering happens on the server for every request. HTML already contains data when sent to the browser. Better for SEO and faster initial display.
- **SSG (Static Site Generation)**: Pages are rendered at build time into static files. Best for data that rarely changes, extremely fast load times.

### 2. Why is `useEffect` alone considered verbose for data fetching?

**Answer:**
Because `useEffect` requires manually managing loading states, error handling, caching, and revalidation. Developers must write boilerplate code for each data fetch operation, making the code longer and harder to maintain.

### 3. What advantages does SWR provide over manual `useEffect`?

**Answer:**
SWR provides automatic caching, revalidation on focus, deduplication of requests, error retry, and simpler code. It handles loading and error states automatically, reducing boilerplate code significantly.

### 4. Why is skeleton loading better than a simple loading spinner?

**Answer:**
Skeleton loading shows a preview of the page layout before data arrives, reducing perceived loading time and preventing layout shift. It creates a better user experience by showing content structure immediately rather than a blank or spinning state.

---

## 🎯 Conclusion

Through this practicum, students learned that Next.js:
- ✅ **Supports multiple rendering strategies**: CSR, SSR, and SSG
- ✅ **Allows manual data fetching** with `useEffect` for full control
- ✅ **Provides SWR library** for automatic caching and revalidation
- ✅ **Enables skeleton loading** for better user experience during data fetching

All data fetching concepts have been implemented with proper loading states and professional structure.
