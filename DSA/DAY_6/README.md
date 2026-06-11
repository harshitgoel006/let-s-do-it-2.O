# Maximum Average Subarray I (#643)

## Pattern

Fixed Size Sliding Window

## Category

* Array
* Sliding Window

---

## Problem

Find maximum average of any subarray of size:

```text
k
```

---

## Key Observation

Window size fixed hai.

```text
Window Size = k
```

---

## Brute Force

Har subarray of length:

```text
k
```

Generate karo.

Average calculate karo.

### Complexity

```text
TC = O(n * k)

SC = O(1)
```

---

## Optimal Approach

### Initial Window

Calculate sum from:

```text
0 → k-1
```

### Slide Window

```text
windowSum

=

windowSum

- outgoing element

+ incoming element
```

---

## Why Sum Instead Of Average?

```text
k fixed hai
```

Maximum Sum

=

Maximum Average

---

## Complexity

```text
TC = O(n)

SC = O(1)
```

---

## Interview Trigger

```text
Fixed Length Window

Subarray Size K

Maximum Average
```

↓

```text
Fixed Size Sliding Window
```

---

## Memory Hook

```text
Fixed Window

Remove Left

Add Right
```

---

## Revision Status

🟢 A

### Why?

```text
Brute Force ✓

Sliding Window ✓

Complexity ✓

Window Movement ✓
```

### Revisit

```text
Day 10

Day 20
```

---

# Contains Duplicate II (#219)

## Pattern

HashMap

OR

Sliding Window + HashSet

---

## Category

* Array
* Hashing
* Sliding Window

---

## Problem

Find duplicate elements such that:

```text
distance <= k
```

---

## Key Observation

Need:

```text
Duplicate

+

Distance Constraint
```

---

## HashMap Store

```text
Value -> Last Index
```

---

## Check

```text
Current Index

-

Previous Index

<= k
```

Then answer found.

---

## Complexity

```text
TC = O(n)

SC = O(n)
```

---

## Interview Trigger

```text
Duplicate

Nearby Duplicate

Distance Constraint
```

↓

```text
Store Index
```

---

## Map Store

```text
Value -> Last Index
```

---

## Memory Hook

```text
Duplicate + Distance

Think Index Storage
```

---

## Revision Status

⭐ New Learning

### Revisit

```text
Day 7

Day 12

Day 20
```

---

# Longest Substring Without Repeating Characters (#3)

## Pattern

Sliding Window

*

HashMap

---

## Category

* Strings
* Sliding Window
* Hashing

---

## Problem

Find longest substring having:

```text
No Repeating Characters
```

---

## Observation

Window mein duplicate allow nahi hai.

---

## Store

```text
Character -> Last Index
```

---

## Duplicate Mile?

```java
left = Math.max(
    left,
    lastIndex + 1
);
```

---

## Window Length

```text
right - left + 1
```

---

## Complexity

```text
TC = O(n)

SC = O(n)
```

---

## Interview Trigger

```text
Longest Substring

No Repeating Characters
```

↓

```text
Sliding Window

+

HashMap
```

---

## Map Store

```text
Character -> Last Index
```

---

## Memory Hook

```text
Duplicate Mila

Move Left

Update Length
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

# Permutation in String (#567)

## Pattern

Fixed Size Sliding Window

*

Frequency Count

---

## Category

* Strings
* Sliding Window
* Hashing

---

## Problem

Check whether:

```text
Any permutation of s1
```

exists inside:

```text
s2
```

---

## Key Observation

Permutation means:

```text
Same Characters

Same Frequency

Order Doesn't Matter
```

---

## Window Size

Always:

```text
s1.length()
```

Fixed.

---

## Approach

### Step 1

Store frequency of:

```text
s1
```

using:

```text
freq1
```

### Step 2

Create first window frequency:

```text
freq2
```

### Step 3

Compare

```java
Arrays.equals(freq1,freq2)
```

### Step 4

Slide Window

Add Incoming Character

```java
freq2[right]++;
```

Remove Outgoing Character

```java
freq2[left]--;
```

Compare Again.

---

## Sliding Window Formula

```text
Add Right

Remove Left
```

---

## Complexity

### Time

```text
O(n)
```

### Space

```text
O(1)
```

(26-size frequency array)

---

## Interview Trigger

```text
Permutation

Anagram

Same Frequency

Fixed Length
```

↓

```text
Fixed Size Sliding Window
```

---

## Common Mistakes

1. Generating all permutations

2. Comparing strings

3. Wrong window size

4. Forgetting remove left

---

## Memory Hook

```text
Permutation

↓

Frequency Match

↓

Fixed Window

↓

Add Right

Remove Left
```

---

## Revision Status

⭐ New Learning

### Revisit

```text
Day 7

Day 12

Day 20
```

---

# Find All Anagrams in a String (#438)

## Pattern

Fixed Size Sliding Window

*

Frequency Count

---

## Category

* Strings
* Sliding Window
* Hashing

---

## Problem

Find all starting indices of anagrams.

---

## Relation With #567

### #567

Question:

```text
Any matching window?
```

Return:

```text
true / false
```

### #438

Question:

```text
Which windows match?
```

Return:

```text
List of indices
```

---

## Key Observation

Anagram means:

```text
Same Characters

Same Frequency
```

---

## Window Size

```text
p.length()
```

Fixed.

---

## Approach

### Step 1

Create:

```text
freqP
```

### Step 2

Create:

```text
freqS
```

for first window.

### Step 3

Compare frequencies.

Match?

```java
ans.add(0);
```

### Step 4

Slide Window

Add Incoming

Remove Outgoing

Compare Again

Match?

```java
ans.add(left);
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
Anagram

Permutation

Same Frequency

Fixed Window
```

↓

```text
Fixed Size Sliding Window

+

Frequency Count
```

---

## Memory Hook

```text
Anagram

↓

Same Frequency

↓

Fixed Window

↓

Add Right

Remove Left

↓

Store Left Index
```

---

## Revision Status

🟢 A

### Revisit

```text
Day 7

Day 12

Day 20
```

---

# Minimum Size Subarray Sum (#209)

## Pattern

Variable Size Sliding Window

---

## Category

* Array
* Sliding Window

---

## Problem

Find minimum length subarray such that:

```text
Sum >= Target
```

---

## Observation

Need:

```text
Minimum Length
```

---

## Expand

While:

```text
sum < target
```

↓

```text
right++
```

---

## Shrink

While:

```text
sum >= target
```

↓

```text
left++
```

---

## Why Shrink?

Need:

```text
Smaller Answer
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
Minimum Length

Target Sum

Positive Numbers
```

↓

```text
Variable Size Sliding Window
```

---

## Memory Hook

```text
Target Achieved?

↓

Shrink Window

↓

Try Smaller Answer
```

---

## Revision Status

⭐ New Learning

### Revisit

```text
Day 7

Day 12

Day 20
```

---

# Fruit Into Baskets (#904)

## Pattern

Variable Size Sliding Window

*

HashMap

---

## Category

* Arrays
* Sliding Window
* Hashing

---

## Actual Question

Longest Subarray With:

```text
At Most 2 Distinct Elements
```

🔥

---

## Store

```text
Fruit -> Frequency
```

Using:

```java
HashMap<Integer,Integer>
```

---

## Expand Window

Always:

```text
right++
```

Add fruit frequency.

---

## Shrink Window

While:

```java
map.size() > 2
```

Remove left fruit.

Decrease frequency.

If:

```text
frequency == 0
```

Remove key.

---

## Answer

```java
maxLen =
Math.max(
    maxLen,
    right-left+1
);
```

---

## Complexity

### Time

```text
O(n)
```

### Space

```text
O(2)

≈ O(1)
```

Generalized:

```text
O(k)
```

---

## Interview Trigger

```text
At Most K Distinct Elements

Longest Valid Window

Frequency Tracking
```

↓

```text
Variable Size Sliding Window

+

HashMap
```

---

## Common Mistakes

1. Using if instead of while

2. Not removing frequency 0 keys

3. Using Set instead of Frequency Map

4. Calculating answer before window becomes valid

---

## Memory Hook

```text
2 Baskets

↓

At Most 2 Distinct Fruits

↓

map.size() > 2

↓

Shrink
```

---

## Similar Questions

```text
Fruit Into Baskets

↓

Longest Substring With At Most K Distinct Characters

↓

At Most K Distinct Elements
```

Same Pattern.

---

## Revision Status

⭐ New Learning

### Revisit

```text
Day 7

Day 12

Day 20
```

---

# SLIDING WINDOW CHEAT SHEET

## Fixed Size Window

Questions:

```text
Maximum Average Subarray

Permutation In String

Find All Anagrams
```

Formula:

```text
Add Right

Remove Left
```

---

## Variable Size Window

Questions:

```text
Longest Substring Without Repeat

Minimum Size Subarray Sum

Fruit Into Baskets
```

Formula:

```text
Expand

↓

Condition Satisfied?

No → Expand

Yes → Shrink
```

---

## Storage Rules

```text
Character -> Last Index

Longest Substring Without Repeat
```

```text
Value -> Last Index

Contains Duplicate II
```

```text
Fruit -> Frequency

Fruit Into Baskets
```

```text
Character -> Frequency

Anagram Family
```
