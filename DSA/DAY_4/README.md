# Container With Most Water (#11)

## Pattern

Two Pointer

## Category

* Array
* Two Pointers
* Greedy Observation

---

## Problem

Given an array where each element represents the height of a vertical line.

Find two lines that together form a container holding the maximum amount of water.

---

## Key Observation

Area:

```text
Area = Min Height × Width
```

Where:

```text
Height = min(height[left], height[right])

Width = right - left
```

---

## Why Move Smaller Height?

Suppose:

```text
height[left] < height[right]
```

Current area:

```text
min(leftHeight,rightHeight) × width
```

Smaller height is limiting the area.

If we move the bigger height:

```text
Width decreases

Smaller height remains same
```

Answer improve hone ke chances kam ho jaate hain.

Therefore:

```text
Move Smaller Height
```

---

## Algorithm

```text
left = 0

right = n - 1

while(left < right)

    area calculate karo

    maxArea update karo

    smaller height move karo
```

---

## Rules

```text
height[left] < height[right]

→ left++


otherwise

→ right--
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
Area

Distance

Width

2 Ends

Maximum Pair
```

↓

```text
Two Pointer
```

---

## Common Mistakes

1. Bigger height move kar dena

2. Width calculation galat karna

3. Brute force se start na karna

---

## Map Store

```text
No Map Required
```

---

## One-Line Memory Hook

```text
Area = Height × Width

Move Smaller Height
```

---

## Revision Status

🟢 A

### Why?

```text
Brute Force     ✓

Pattern         ✓

Observation     ✓

Pointer Move    ✓

Complexity      ✓
```

### Revisit

```text
Day 10

Day 20
```

---

# 3Sum (#15)

## Pattern

Sorting

*

Two Pointer

---

## Category

* Array
* Sorting
* Two Pointer

---

## Problem

Find all unique triplets such that:

```text
a + b + c = 0
```

---

## Core Observation

Fix:

```text
a
```

Then solve:

```text
b + c = -a
```

Which becomes:

```text
Two Sum
```

---

## Algorithm

### Step 1

Sort Array

### Step 2

Fix one element

```text
nums[i]
```

### Step 3

Apply Two Pointer on remaining array

```text
left = i + 1

right = n - 1
```

### Step 4

Find:

```text
nums[left] + nums[right]

= -nums[i]
```

### Step 5

Skip duplicates

---

## Why Sorting?

Sorting helps:

```text
Duplicate Removal

Two Pointer
```

---

## Complexity

```text
TC = O(n²)

SC = O(1)
```

(excluding answer)

---

## Interview Trigger

```text
Triplets

Three Numbers

Find All Combinations

Unique Triplets
```

↓

```text
Fix One

Convert To Two Sum
```

---

## Common Mistakes

1. Duplicate triplets add kar dena

2. Array sort karna bhool jana

3. Pointer update galat kar dena

4. Duplicate left/right skip na karna

---

## Map Store

```text
No Map Required
```

---

## One-Line Memory Hook

```text
3Sum

↓

Fix One

↓

2Sum
```

---

## Revision Status

🟡 B+

### Why?

```text
Sorting intuition yaad thi

Brute force yaad tha

Reduction to Two Sum
partially yaad tha

Duplicate handling weak thi
```

### Revisit

```text
Day 5

Day 10

Day 15
```

---

# Move Zeroes (#283)

## Pattern

Two Pointer

---

## Category

* Array
* In-place Manipulation

---

## Observation

Non-zero elements ko front mein maintain karo.

Zero automatically end mein chale jayenge.

---

## Pointer Meaning

```text
i

→ Traverse Array


j

→ Next Non-Zero Position
```

---

## Algorithm

### Traverse

```text
i = 0 → n-1
```

Whenever:

```text
nums[i] != 0
```

Swap:

```text
nums[i]

with

nums[j]
```

Then:

```text
j++
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
Move Elements To End

Maintain Order

In-place
```

↓

```text
Two Pointer
```

---

## Common Mistakes

1. Relative order break kar dena

2. Extra array use karna

3. j pointer update bhool jana

---

## Map Store

```text
No Map Required
```

---

## One-Line Memory Hook

```text
Keep Non-Zeroes Together
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

# Backspace String Compare (#844)

## Pattern

Stack

StringBuilder as Stack

---

## Category

* String
* Stack

---

## Problem

Compare two strings after processing:

```text
#
```

which means:

```text
Delete Previous Character
```

---

## Observation

Normal Character:

```text
Push
```

Backspace:

```text
Pop
```

---

## Algorithm

### Build Final String For s

```text
Character

→ Append


#

→ Delete Last Character
```

### Build Final String For t

Same process.

### Compare

Final strings compare karo.

---

## Complexity

```text
TC = O(n + m)

SC = O(n + m)
```

---

## Interview Trigger

```text
Undo

Backspace

Delete Previous Character
```

↓

```text
Stack
```

---

## Common Mistakes

1. Empty stack se pop

2. Direct string compare without processing

3. Backspace count mishandle karna

---

## Map Store

```text
No Map Required
```

---

## One-Line Memory Hook

```text
# Means Undo Last Character
```

---

## Revision Status

🟡 B

### Why?

```text
Approach yaad thi

Implementation weak thi

Optimal follow-up naya tha
```

### Revisit

```text
Day 5

Day 10

Day 15
```
