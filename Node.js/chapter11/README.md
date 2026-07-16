# 📘 Chapter 11 : Semantic Versioning (SemVer)

---

# What is Semantic Versioning?

## 📖 Technical Definition (Interview)

> **Semantic Versioning (SemVer) is a versioning standard that follows the format `MAJOR.MINOR.PATCH` to indicate the type and impact of changes made in a software release.**

---

# 💡 Simple Explanation

Suppose tumne install kiya.

```bash
npm install express
```

Aur package.json me aaya.

```json
"express": "^5.1.0"
```

Question.

Ye

```text
5.1.0
```

ka matlab kya hai?

Ye random numbers nahi hain.

Har number ka apna meaning hota hai.

```text
5.1.0

│ │ │

│ │ └── Patch

│ └──── Minor

└────── Major
```

Isi numbering system ko bolte hain.

> **Semantic Versioning**

---

# Why do we need Semantic Versioning?

Suppose.

Express ki ek nayi version release hui.

Question.

Developer ko kaise pata chalega.

* Sirf bug fix hua hai?
* Naya feature add hua hai?
* Ya purani functionality break ho gayi?

Isi problem ko solve karta hai.

Semantic Versioning.

---

# Version Structure

```text
MAJOR.MINOR.PATCH
```

Example.

```text
5.1.0
```

Yaha.

```text
Major = 5

Minor = 1

Patch = 0
```

Ab ek-ek samajhte hain.

---

# 1️⃣ Major Version

## 📖 Technical Definition

> **The MAJOR version is incremented when backward-incompatible changes are introduced.**

---

## 💡 Simple Explanation

Major version tab badhti hai.

Jab package me aise changes aaye.

Jo purana code tod sakte hain.

Example.

```text
5.1.0

↓

6.0.0
```

Ye indicate karta hai.

Breaking Changes.

---

## Real World

Suppose.

Express 5 me.

```javascript
app.listen(...)
```

ka syntax completely change ho gaya.

Ab purana project chal hi nahi raha.

Ye Major Update hai.

---

# 2️⃣ Minor Version

## 📖 Technical Definition

> **The MINOR version is incremented when new backward-compatible features are added.**

---

## 💡 Simple Explanation

Minor version tab badhti hai.

Jab naye features aaye.

Lekin purana code fir bhi chale.

Example.

```text
5.1.0

↓

5.2.0
```

New Features.

No Breaking Changes.

---

## Real World

Express me.

Naya middleware feature add hua.

Purani APIs still work.

Ye Minor Update hai.

---

# 3️⃣ Patch Version

## 📖 Technical Definition

> **The PATCH version is incremented when backward-compatible bug fixes are released.**

---

## 💡 Simple Explanation

Patch update.

Sirf bugs fix karta hai.

Example.

```text
5.1.0

↓

5.1.1
```

Koi naya feature nahi.

Koi breaking change nahi.

Sirf bug fix.

---

# Visual Representation

```text
5.1.0

│ │ │

│ │ └── Bug Fix

│ └──── New Feature

└────── Breaking Change
```

---

# Exact Version

Suppose.

Tum install karte ho.

```bash
npm install express@5.1.0
```

package.json

```json
"express":"5.1.0"
```

Question.

Kal.

Express.

```text
5.2.0
```

release ho gaya.

Dusra developer project clone kare.

Kaunsa version install hoga?

👉

```text
5.1.0
```

Exactly wahi.

Kyuki exact version likhi hui hai.

---

# Caret (`^`) Version

Suppose.

```json
"express":"^5.1.0"
```

Question.

Kaun si updates allow hongi?

Answer.

```text
Major

❌

Minor

✅

Patch

✅
```

Matlab.

Ye allowed hai.

```text
5.1.1

5.2.0

5.8.9
```

Lekin.

```text
6.0.0
```

❌

Allowed nahi.

---

# Why?

Major updates me breaking changes ho sakti hain.

npm risk nahi leta.

---

# Tilde (`~`) Version

Example.

```json
"express":"~5.1.0"
```

Allowed.

```text
5.1.1

5.1.5

5.1.20
```

Not Allowed.

```text
5.2.0

6.0.0
```

---

# Why?

Tilde aur bhi strict hota hai.

Sirf patch updates allow karta hai.

---

# Comparison

| Version  | Major | Minor | Patch |
| -------- | ----- | ----- | ----- |
| `5.1.0`  | ❌     | ❌     | ❌     |
| `^5.1.0` | ❌     | ✅     | ✅     |
| `~5.1.0` | ❌     | ❌     | ✅     |

---

# Which One Should We Use?

Ye humne discussion me bhi cover kiya tha.

## Exact Version

Use when.

* Maximum stability required.
* Production systems.
* Critical packages.

---

## Caret (`^`)

Most Common.

Default.

Reason.

Bug fixes aur new features milte rehte hain.

Breaking changes avoid hoti hain.

---

## Tilde (`~`)

Use when.

Sirf bug fixes chahiye.

New features bhi avoid karne hain.

---

# npm Default Behavior

Question.

```bash
npm install express
```

Default package.json me kya aata hai?

```json
"express":"^5.1.0"
```

Why?

npm by default **caret (`^`)** use karta hai.

---

# package-lock.json Connection ⭐⭐⭐⭐⭐

Ye humari discussion ka favourite point tha.

Suppose.

Aaj.

```json
"express":"^5.1.0"
```

Package install hua.

Us time latest version.

```text
5.1.0
```

Tha.

Kal.

```text
5.2.0
```

Release ho gaya.

Question.

Dusra developer project clone kare.

Kaunsa version milega?

**Answer (Important):**

Agar **`package-lock.json` present hai**, to **exact wahi version install hoga jo lock file me recorded hai** (maan lo 5.1.0), chahe `^` future minor versions allow karta ho.

Agar **`package-lock.json` nahi hai**, to npm `package.json` ke version range (`^5.1.0`) ke according latest compatible version choose karega (jaise 5.2.0).

Ye difference interview me bahut important hai.

---

# Internal Working

```text
package.json

↓

Version Range

↓

npm Install

↓

package-lock.json

↓

Exact Version Lock

↓

node_modules
```

---

# Real World Example

Smart Cart.

Suppose.

```text
Express

↓

^5.1.0
```

Production me.

package-lock.json commit hai.

To poori team.

Same dependency versions use karegi.

"No works on my machine" wali problem bahut kam ho jati hai.

---

# Best Practices

✅ `package-lock.json` ko commit karo.

✅ Version ranges samajh kar use karo.

✅ Production me dependency updates test karke hi deploy karo.

---

# ⚠️ Interview Traps

### Question

Which version is safer?

❌ Wrong.

`~` hamesha better hai.

✅ Correct.

Situation pe depend karta hai.

Lekin generally npm default `^` use karta hai aur ye most common choice hai.

---

### Question

Does `^` allow major updates?

❌ Yes.

✅ No.

---

### Question

Does exact version always install the same package version?

✅ Yes (jab tak manually change na kiya jaye).

---

# Common Mistakes

❌ Thinking `^` updates everything.

↓

Major updates allow nahi hoti.

---

❌ Thinking `~` allows minor updates.

↓

Sirf patch updates.

---

❌ Thinking package.json alone guarantees same versions.

↓

Exact dependency tree ke liye `package-lock.json` bhi zaroori hai.

---

# Visual Mind Map

```text
             Semantic Versioning
                     │
        ┌────────────┼────────────┐
        │            │            │
        ▼            ▼            ▼
     Major        Minor        Patch
 Breaking      New Feature    Bug Fix
 Change      (Compatible)   (Compatible)

Version Prefixes

Exact → 5.1.0

^

↓

Minor + Patch

~

↓

Patch Only
```

---

# Quick Revision

```text
MAJOR.MINOR.PATCH

↓

Breaking

↓

Feature

↓

Bug Fix

↓

^

↓

Minor + Patch

↓

~

↓

Patch Only

↓

Exact

↓

Same Version
```

---

# Chapter Summary

* Semantic Versioning `MAJOR.MINOR.PATCH` format follow karti hai.
* Major updates breaking changes indicate karti hain.
* Minor updates naye backward-compatible features add karti hain.
* Patch updates sirf bug fixes ke liye hoti hain.
* `^` major ko lock karta hai aur minor + patch allow karta hai.
* `~` sirf patch updates allow karta hai.
* Exact version hamesha wahi version specify karti hai.
* `package-lock.json` exact installed dependency versions ko lock karta hai aur team me consistency maintain karta hai.

---
