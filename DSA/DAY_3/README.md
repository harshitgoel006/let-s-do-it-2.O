# Valid Palindrome (#125)

## Pattern

Two Pointer

String

## Category

* Strings
* Two Pointers

## Problem

Check whether a string is a palindrome after:

1. Ignoring special characters
2. Ignoring spaces
3. Ignoring case (A == a)

---

## Brute Force Approach

### Steps

1. Traverse string

2. Keep only alphanumeric characters

3. Convert all characters to lowercase

4. Store in new StringBuilder/String

5. Check palindrome

### Complexity

```text
TC = O(n)

SC = O(n)
```

---

## Optimal Approach

### Observation

Extra string banane ki zaroorat nahi hai.

Hum original string par hi:

```text
Left Pointer
Right Pointer
```

laga sakte hain.

### Algorithm

```text
1. left = 0

2. right = n - 1

3. If left character is not alphanumeric
      left++

4. If right character is not alphanumeric
      right--

5. Compare lowercase versions

6. If mismatch
      return false

7. Otherwise
      move both pointers
```

---

## Important Functions

```java
Character.isLetterOrDigit(ch)

Character.toLowerCase(ch)
```

---

## Complexity

```text
TC = O(n)

SC = O(1)
```

---

## Interview Trigger

```text
Palindrome

Ignore Spaces

Ignore Special Characters

Case Insensitive
```

↓

```text
Two Pointer
```

---

## Common Mistakes

1. Not handling uppercase/lowercase

2. Comparing special characters

3. Creating unnecessary extra string

4. Forgetting Character.isLetterOrDigit()

---

## Example

```text
Input:

"A man, a plan, a canal: Panama"

Filtered:

amanaplanacanalpanama

Output:

true
```

---

## Map Store

```text
No Map Required
```

---

## One-Line Memory Hook

```text
Ignore Invalid Characters

Compare Valid Characters

Move Both Pointers
```

---

## Revision Status

🟢 A

### Revisit

```text
Day 7

Day 14
```

---

# Reverse String (#344)

## Pattern

Two Pointer

## Category

* Strings
* Two Pointers

## Observation

Leftmost aur rightmost character swap karte jao.

---

## Algorithm

```text
left = 0

right = n - 1

swap

left++

right--
```

---

## Complexity

```text
TC = O(n)

SC = O(1)
```

---

## Interview Trigger

```text
Reverse String

Reverse Array

In-place Reverse
```

↓

```text
Two Pointer
```

---

## Map Store

```text
No Map Required
```

---

## One-Line Memory Hook

```text
Swap Ends

Move Inwards
```

---

## Revision Status

🟢 A

### Revisit

```text
Day 10

Day 20
```

---

# Longest Common Prefix (#14)

## Pattern

String Comparison

## Category

* Strings

## Observation

Common prefix sab strings mein same index par same character hoga.

---

## Optimal Approach

### Idea

First string ko reference banao.

Har character ko baaki sab strings ke same index par compare karo.

Mismatch aate hi stop.

---

## Example

```text
Input:

["flower","flow","flight"]

Index 0 -> f ✓
Index 1 -> l ✓
Index 2 -> mismatch

Answer:

fl
```

---

## Complexity

```text
TC = O(N × M)

N = Number Of Strings

M = Length Of Smallest String
```

```text
SC = O(1)
```

---

## Common Mistakes

1. Empty string handle na karna

2. Index out of bound

3. substring(0,i) bhool jana

---

## Interview Trigger

```text
Common Prefix

Matching Prefix

Multiple Strings
```

↓

```text
Character By Character Comparison
```

---

## Map Store

```text
No Map Required
```

---

## One-Line Memory Hook

```text
Pehli String Reference

Character By Character Check
```

---

## Revision Status

⭐ New Learning

### Revisit

```text
Day 5

Day 10

Day 20
```

---

# Isomorphic Strings (#205)

## Pattern

HashMap

Character Mapping

## Category

* Strings
* Hashing

## Observation

One-To-One Mapping required.

Invalid Example:

```text
a -> x

b -> x
```

Because two characters cannot map to same character.

---

## Why Two Maps?

Need both:

```text
sChar -> tChar

tChar -> sChar
```

Forward mapping bhi valid honi chahiye.

Reverse mapping bhi valid honi chahiye.

---

## Complexity

```text
TC = O(n)

SC = O(n)
```

---

## Interview Trigger

```text
Character Mapping

One To One Mapping

Pattern Matching
```

↓

```text
Two HashMaps
```

---

## Map Store

```text
Map1:

sChar -> tChar

Map2:

tChar -> sChar
```

---

## One-Line Memory Hook

```text
Forward Mapping

Reverse Mapping

Both Must Match
```

---

## Revision Status

⭐ New Learning

### Revisit

```text
Day 5

Day 10

Day 20
```

---

# Two Sum II (#167)

## Pattern

Two Pointer

Sorted Array

## Category

* Arrays
* Two Pointers

## Observation

Array already sorted hai.

Ye sabse important clue hai.

---

## Better Approach

For every element:

```text
target - current
```

Binary Search

### Complexity

```text
TC = O(n log n)
```

---

## Optimal Approach

```text
left = 0

right = n - 1
```

### Rules

```text
sum < target

→ left++


sum > target

→ right--


sum == target

→ answer found
```

---

## Why Two Pointer Works?

Array sorted hai.

Agar sum chhota hai:

```text
Left increase karo
```

Agar sum bada hai:

```text
Right decrease karo
```

---

## Complexity

```text
TC = O(n)

SC = O(1)
```

---

## Interview Trigger

```text
Sorted Array

Pair Sum

Target Sum
```

↓

```text
Two Pointer
```

---

## Map Store

```text
No Map Required
```

---

## One-Line Memory Hook

```text
Sorted Array

Think Two Pointers First
```

---

## Revision Status

⭐ New Learning

### Revisit

```text
Day 5

Day 10

Day 20
```
