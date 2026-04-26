## JOBSHEET PRACTICUM 7 - API Routes & Firebase Integration

### 📚 Course Information

|  | Pemrograman Berbasis Framework 2026 |
|--|--|
| NIM |  2341720203|
| Nama |  Hammam Abdullah B.G |
| Kelas | TI - 3I |

---

## 🎯 Learning Objectives

1. Create API endpoints using Next.js Pages Router
2. Send JSON responses with status codes
3. Fetch API data on frontend using `fetch`
4. Integrate Firebase Firestore for dynamic data
5. Manage credentials through `.env.local`

---

## 📸 Screenshots

### 1. Home Page
![Home](img/1.png)

### 2. API Route (/api/produk)
![API](img/2.png)

### 3. Product Page (Frontend Fetch)
![Products](img/3.png)

### 4. Firebase Config
![Firebase](img/4.png)

### 5. Product Cards with Category
![Cards](img/5.png)

### 6. Refresh Data Button
![Refresh](img/6.png)

---

## 📋 Assignment

### Assignment 1 – Firestore Products Display
**Task:** Add min 3 products in Firestore, display on product page.
**Implementation:** Created `/api/produk` endpoint with Firestore + static fallback.
**Screenshot:**
![Assignment 1](img/prak1.png)

### Assignment 2 – Category Field
**Task:** Add and display `category` field on frontend.
**Implementation:** Added category badge to product cards.
**Screenshot:**
![Assignment 2](img/prak2.png)

### Assignment 3 – Refresh Data Button
**Task:** Fetch again without page reload.
**Implementation:** Added fetch button using useState/useEffect.
**Screenshot:**
![Assignment 3](img/prak3.png)

---

## 📝 Questions

### 1. What is the function of API Routes in Next.js?

**Answer:** API Routes let Next.js handle backend requests within the same project (e.g., `pages/api/produk.js`), so frontend can call internal endpoints without a separate server.

### 2. Why should `.env.local` not be pushed to the repository?

**Answer:** It contains sensitive credentials like API keys. If pushed, secrets would be exposed publicly, creating a serious security risk.

### 3. What is the difference between static and dynamic data?

**Answer:** Static data is fixed (hardcoded). Dynamic data comes from external sources like databases and can change without code modification.

### 4. Why is Next.js called a fullstack framework?

**Answer:** Because it supports both frontend (UI, routing) and backend (API Routes, server logic) in a single framework.

---

## 🎯 Conclusion

Through this practicum, students learned that Next.js:
- ✅ **Provides API Routes** for backend in the same project
- ✅ **Supports Firebase integration** for cloud database
- ✅ **Enables dynamic data fetching** from multiple sources
- ✅ **Protects credentials** through environment variables