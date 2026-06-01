# DAY 1

---

## 1. Two Sum

### Pattern

HashMap

### Key Idea

For every element:

required = target - nums[i]

If required already exists in HashMap,
answer found.

Otherwise store current element and index.

### Why HashMap?

O(1) lookup.

### Approaches

#### Brute Force

Check every pair.

TC: O(n²)

SC: O(1)

#### Optimal

Single Pass HashMap

TC: O(n)

SC: O(n)

### Important Observation

Complement = target - currentElement

### Common Mistakes

* Using wrong HashMap method
* Inserting before checking complement
* Using same index twice

### Interview Trigger

* Pair
* Target Sum
* Return Indices
* Unique Solution

→ Think HashMap

### Revision Status

🟡 B Category

Pattern remembered.

Minor implementation issue.

---

## 2. Contains Duplicate

### Pattern

HashSet

### Key Idea

If element already exists in set,
duplicate found.

### Why HashSet?

O(1) average lookup.

### Approaches

#### Brute Force

TC: O(n²)

SC: O(1)

#### Optimal

Use HashSet.

TC: O(n)

SC: O(n)

### Common Mistakes

* Returning wrong boolean
* Adding before checking

### Interview Trigger

* Duplicate
* Repeated Element
* Unique Elements

→ Think HashSet

### Revision Status

🟢 A Category

Pattern and complexity remembered.

---

## 3. Valid Anagram

### Pattern

Frequency Count

### Key Idea

Same characters.

Same frequencies.

### Observation

Different lengths

→ false

### Approaches

#### Sorting

Sort both strings and compare.

TC: O(n log n)

#### Frequency Array

Count frequencies using int[26].

TC: O(n)

SC: O(1)

### Interview Trigger

* Anagram
* Character Frequency
* Count Occurrences

→ Think Frequency Array

### Common Mistakes

* Forgetting length check

### Revision Status

🟢 A Category

Frequency optimization missed initially.

---

## 4. Intersection of Two Arrays

### Pattern

HashSet

### Key Idea

Store first array in HashSet.

Check elements of second array.

### Approaches

#### Brute Force

TC: O(n*m)

SC: O(1)

#### Optimal

HashSet Lookup

TC: O(n+m)

SC: O(n)

### Important Observation

Result contains unique elements.

### Interview Trigger

* Common Elements
* Intersection
* Unique Values

→ Think HashSet

### Common Mistakes

* Adding duplicates to result

### Revision Status

🟢 A Category

Pattern recognized immediately.

---

## 5. Missing Number

### Pattern

* HashSet
* Math Formula
* XOR

### Observation

Numbers range from 0 to n.

Exactly one number is missing.

### Approaches

#### HashSet

TC: O(n)

SC: O(n)

#### Sorting

TC: O(n log n)

#### Math Formula

ExpectedSum = n*(n+1)/2

Answer = ExpectedSum - ActualSum

TC: O(n)

SC: O(1)

#### XOR

XOR all numbers and array elements.

Remaining value = missing number.

TC: O(n)

SC: O(1)

### Common Mistakes

* Integer overflow

### Revision Status

🟢 A Category

---

## 6. Product of Array Except Self

### Pattern

Prefix Product + Suffix Product

### Key Idea

Answer[i]

=

Left Product × Right Product

### Brute Force

TC: O(n²)

SC: O(1)

### Optimal

Prefix Array

Suffix Array

Combine both.

TC: O(n)

SC: O(n)

### Follow Up

O(1) extra space using answer array.

### Common Mistakes

* Using division
* Wrong indexing
* Zero handling

### Memory Hook

Current element remove karo.

Left Product × Right Product

### Revision Status

🟡 B/C Category

Pattern remembered.

Implementation weak.

---

## 7. Maximum Subarray

### Pattern

Kadane's Algorithm

### Key Observation

Negative running sum future answer improve nahi karega.

### Brute Force

TC: O(n²)

SC: O(1)

### Optimal

currentSum = max(nums[i], currentSum + nums[i])

maxSum = max(maxSum, currentSum)

TC: O(n)

SC: O(1)

### Interview Trigger

* Maximum Subarray
* Largest Contiguous Sum

→ Think Kadane

### Common Mistakes

* Initializing currentSum as 0
* Failing on all-negative arrays

### Memory Hook

Negative prefix ko fek do.

### Revision Status

🟢 A Category

---

## 8. Majority Element

### Pattern

Boyer Moore Voting Algorithm

### Approaches

#### Brute Force

TC: O(n²)

#### Sorting

TC: O(n log n)

#### HashMap

TC: O(n)

SC: O(n)

#### Optimal

Candidate + Count

Pairwise cancellation.

TC: O(n)

SC: O(1)

### Interview Trigger

* Majority Element
* Frequency > n/2

→ Think Boyer Moore

### Revision Status

🟡 B/C Category

Algorithm partially remembered.

---

## 9. Find Duplicate Number (#287)

### Pattern

HashSet

### Key Idea

Already seen?

Yes → return duplicate

No → add to set

### Brute Force

TC: O(n²)

SC: O(1)

### Better

HashSet

TC: O(n)

SC: O(n)

### Common Mistakes

* Adding before checking
* Confusing with Missing Number XOR pattern

### Memory Hook

Seen before?

→ Duplicate

### Revision Status

🟢 A Category

---

## 10. Longest Consecutive Sequence

### Pattern

HashSet + Sequence Expansion

### Key Observation

Start only from sequence beginnings.

A number is a start if:

(num - 1) is not present.

### Example

1,2,3,4

Start = 1

Because 0 does not exist.

### Complexity

TC: O(n)

SC: O(n)

### Interview Trigger

* Longest Consecutive
* O(n) Follow Up

→ Think HashSet + Start Point

### Memory Hook

Sequence wahi se start karo
jiska previous element present na ho.

### Revision Status

⭐ N Category

New learning.
