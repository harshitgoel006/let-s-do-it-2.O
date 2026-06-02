# DAY 2 REVISION NOTES

---

# Top K Frequent Elements (#347)

## Pattern

HashMap + Sorting

## Category

* Array
* Hashing
* Frequency Count
* Sorting

## Problem

Array ke Top K most frequent elements return karo.

### Example

```text
nums = [1,1,1,2,2,3]
k = 2

Output:
[1,2]
```

## Key Observation

Element important nahi hai.

Frequency important hai.

```text
1 -> 3
2 -> 2
3 -> 1
```

Top 2 Frequent:

```text
[1,2]
```

## Approach 1

### Frequency Count + Sorting

#### Step 1

HashMap use karke frequency count karo.

```text
Element -> Frequency
```

#### Step 2

Map entries ko List mein convert karo.

#### Step 3

Frequency ke basis pe descending sort karo.

#### Step 4

First K elements return kar do.

## Complexity

### Frequency Count

```text
O(n)
```

### Sorting

```text
O(m log m)
```

Where:

```text
m = unique elements
```

Worst Case:

```text
O(n log n)
```

### Space

```text
O(n)
```

## Interview Trigger

```text
Top K
Most Frequent
Highest Frequency
Frequency Ranking
```

↓

```text
HashMap + Sorting
```

## Future Upgrade

Heap / Priority Queue

Complexity:

```text
O(n log k)
```

## Common Mistakes

1. Element ko sort kar dena frequency ko nahi

2. getKey() aur getValue() confuse kar dena

3. Frequency count galat kar dena

## Map Store

```text
Value -> Frequency
```

## One-Line Memory Hook

```text
Frequency Count Karo

Frequency Ke Basis Pe Sort Karo

Top K Return Karo
```

## Revision Status

⭐ New Learning

### Revisit

```text
Day 4
Day 8
Day 15
```

---

# Sort Colors (#75)

## Pattern

Counting Sort

## Category

* Array
* Counting
* Sorting

## Observation

Sirf 3 values hain:

```text
0
1
2
```

## Approach 1

Sorting

```text
TC = O(n log n)
```

## Approach 2

Count Frequency

```text
count0
count1
count2
```

Array refill karo.

```text
TC = O(n)
SC = O(1)
```

## Interview Trigger

```text
0 1 2

Limited Values

Color Sorting
```

↓

```text
Counting
```

## Map Store

```text
No Map Required
```

## One-Line Memory Hook

```text
3 values hi hain

Count karo

Fill karo
```

## Revision Status

🟢 A

### Revisit

```text
10-14 Days
```
# Merge Intervals (#56)

## Pattern

Intervals + Sorting

## Category

* Array
* Greedy
* Intervals

## Key Observation

Sort intervals by starting point.

If:

```text
currentStart <= previousEnd
```

Then overlap exists.

## Merge Condition

```text
currentStart <= previousEnd
```

## New Interval

```text
start = previousStart

end = max(previousEnd,currentEnd)
```

## Algorithm

### Step 1

Sort intervals.

### Step 2

Add first interval into result.

### Step 3

For every interval:

```text
Overlap?

Yes -> Merge

No -> Add New Interval
```

## Complexity

### Sorting

```text
O(n log n)
```

### Traversal

```text
O(n)
```

### Total

```text
TC = O(n log n)

SC = O(n)
```

## Interview Trigger

```text
Intervals

Overlapping Ranges

Merge Ranges
```

↓

```text
Sort + Merge
```

## Common Mistakes

1. Sort karna bhool jana

2. max(end1,end2) na lagana

3. Last interval update na karna

## Map Store

```text
No Map Required
```

## One-Line Memory Hook

```text
Sort

Overlap?

Merge

Else Add
```

## Revision Status

🟡 B

### Why?

```text
Sorting yaad thi

Overlap condition yaad thi

Implementation yaad nahi thi
```

### Revisit

```text
Day 6
Day 12
Day 20
```

---

# Rotate Array (#189)

## Pattern

Array Reversal

Two Pointers

## Category

* Array
* In-place Manipulation

## Key Observation

Array har n rotations ke baad same ho jaati hai.

Therefore:

```text
k = k % n
```

## Optimal Approach

### Step 1

Reverse complete array.

### Step 2

Reverse first k elements.

### Step 3

Reverse remaining elements.

## Example

```text
nums = [1,2,3,4,5,6,7]

k = 3
```

### Reverse All

```text
[7,6,5,4,3,2,1]
```

### Reverse First K

```text
[5,6,7,4,3,2,1]
```

### Reverse Remaining

```text
[5,6,7,1,2,3,4]
```

## Complexity

```text
TC = O(n)

SC = O(1)
```

## Interview Trigger

```text
Rotate Array

In-place Rotation

Right Shift Array
```

↓

```text
Reverse Technique
```

## Common Mistakes

1. k = k % n bhool jana

2. Reverse ranges galat lena

3. Pointer updates galat kar dena

## One-Line Memory Hook

```text
Reverse All

Reverse First K

Reverse Remaining
```

## Revision Status

🟢 A

### Revisit

```text
10-14 Days
```

---

# Subarray Sum Equals K (#560)

## Pattern

Prefix Sum + HashMap

## Category

* Array
* Hashing
* Prefix Sum

## Problem

Count number of subarrays whose sum = k.

### Example

```text
nums = [1,1,1]

k = 2

Output = 2
```

## Key Observation

Suppose:

```text
currentPrefix = 10

k = 3
```

Need:

```text
10 - oldPrefix = 3
```

Therefore:

```text
oldPrefix = 7
```

If 7 already exists:

```text
Current Prefix - Old Prefix = K
```

Valid subarray found.

## Formula

```text
oldPrefix = currentPrefix - k
```

## HashMap Store

```text
Prefix Sum -> Frequency
```

## Why Frequency?

Same prefix multiple times aa sakta hai.

Har occurrence ek valid subarray bana sakta hai.

## Algorithm

### Step 1

```java
map.put(0,1);
```

Store empty prefix.

### Step 2

```java
sum += nums[i];
```

### Step 3

Check:

```java
sum - k
```

Map mein hai?

```text
Yes
```

Then:

```java
count += map.get(sum-k);
```

### Step 4

Store current prefix.

## Complexity

```text
TC = O(n)

SC = O(n)
```

## Interview Trigger

```text
Count Subarrays

Subarray Sum = K

Continuous Sum

Count Ranges
```

↓

```text
Prefix Sum + HashMap
```

## Common Mistakes

1. Sliding Window lagana

2. map.put(0,1) bhool jana

3. Frequency store na karna

4. count++ kar dena

Instead:

count += frequency

## Map Store

```text
Prefix Sum -> Frequency
```

## One-Line Memory Hook

```text
Current Prefix - Old Prefix = K

=> Valid Subarray
```

## Revision Status

⭐ New Learning

### Revisit

```text
Day 4
Day 7
Day 14
```

---

# Contiguous Array (#525)

## Pattern

Prefix Sum + HashMap

## Key Observation

Convert:

```text
0 -> -1

1 -> +1
```

Then problem becomes:

```text
Longest Subarray with Sum = 0
```

## Most Important Line

```java
map.put(0,-1);
```

## Why?

Example:

```text
[0,1]
```

Convert:

```text
[-1,+1]
```

Prefix:

```text
-1
0
```

At index 1:

```text
Length = 1 - (-1)

= 2
```

Entire array count hogi.

## Map Store

```text
Prefix Sum -> First Occurrence Index
```

## Why First Occurrence?

Longest length chahiye.

## Complexity

```text
TC = O(n)

SC = O(n)
```

## Memory Hook

```text
0 -> -1

1 -> +1

Same Prefix Again

=> Sum 0 Subarray
```

## Revision Status

⭐ New Learning

### Revisit

```text
Day 4
Day 7
Day 14
```

---

# Subarray Sums Divisible By K (#974)

## Pattern

Prefix Sum + HashMap

## Key Observation

If:

```text
prefix1 % k

=

prefix2 % k
```

Then:

```text
(prefix2 - prefix1) % k

=

0
```

Valid subarray exists.

## Store

```text
Remainder -> Frequency
```

## Formula

```text
Same Remainder

=> Valid Subarray
```

## Complexity

```text
TC = O(n)

SC = O(n)
```

## Interview Trigger

```text
Subarray Sum Divisible By K

Modulo

Count Subarrays
```

↓

```text
Prefix Sum + Remainder Frequency
```

## Map Store

```text
Remainder -> Frequency
```

## One-Line Memory Hook

```text
Same Remainder Again

=> Divisible Subarray
```

## Revision Status

⭐ New Learning

### Revisit

```text
Day 4
Day 7
Day 14
```

---

# Longest Subarray With Sum K

## Pattern

Prefix Sum + HashMap

## Observation

```text
currentPrefix - oldPrefix = K
```

## Need

```text
Longest Length
```

## Map Store

```text
Prefix Sum -> First Index
```

## Why First Index?

Longest answer chahiye.

First occurrence maximum length generate karti hai.

## Complexity

```text
TC = O(n)

SC = O(n)
```

## Interview Trigger

```text
Longest Subarray

Sum = K

Maximum Length
```

↓

```text
Prefix Sum + First Occurrence
```

## One-Line Memory Hook

```text
Count?

→ Frequency

Length?

→ First Index
```

## Revision Status

⭐ New Learning

### Revisit

```text
Day 4
Day 7
Day 14
```

---

# PREFIX SUM FAMILY COMPARISON

| Question                     | Condition                | Observation                   | Map Store               | Why?                   |
| ---------------------------- | ------------------------ | ----------------------------- | ----------------------- | ---------------------- |
| #560 Subarray Sum Equals K   | Sum = K                  | currentPrefix - oldPrefix = K | PrefixSum → Frequency   | Count chahiye          |
| #525 Contiguous Array        | Equal 0s & 1s            | Same Prefix Sum               | PrefixSum → First Index | Longest Length chahiye |
| #974 Subarray Divisible By K | Sum % K = 0              | Same Remainder                | Remainder → Frequency   | Count chahiye          |
| #523 Continuous Subarray Sum | Sum % K = 0 & Length ≥ 2 | Same Remainder                | Remainder → First Index | Existence + Length     |

---

# SHORT CHEAT SHEET

## Count Questions

Store:

```text
Frequency
```

Examples:

```text
Subarray Sum Equals K

Subarray Divisible By K
```

Map:

```text
Prefix -> Frequency
```

---

## Length Questions

Store:

```text
First Occurrence Index
```

Examples:

```text
Contiguous Array

Longest Subarray Sum K
```

Map:

```text
Prefix -> First Index
```

---

## Search Questions

Store:

```text
Value -> Index
```

Example:

```text
Two Sum
```

---

## Frequency Questions

Store:

```text
Value -> Frequency
```

Examples:

```text
Top K Frequent

Anagram
```

---

# Placement Hack

Whenever a new Prefix Sum question appears:

```text
1. Question kya maang raha hai?

2. Prefix lag sakta hai?

3. Current aur old prefix ka relation kya hai?

4. Count chahiye ya Length?

5. Map mein kya store karna logically useful hoga?
```
