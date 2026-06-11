Reverse Words in a String (#151)
Pattern
String
Stack
Observation
Words ka order reverse karna hai

Characters ka nahi.
Approach
Extract Words

Push into Stack

Pop and Build Answer
Complexity
TC = O(n)

SC = O(n)
Common Mistake
String ko reverse mat kar dena

Words ko reverse karna hai
Memory Hook
Reverse Order of Words

Think Stack
Status
⭐ New Learning

Aur bhai ye wali approach mujhe pasand aayi kyunki tune khud derive ki.

code --- 
class Solution {
    public String reverseWords(String s) {

        Stack<String> stack = new Stack<>();

        StringBuilder word = new StringBuilder();

        for(int i = 0; i < s.length(); i++){

            char ch = s.charAt(i);

            if(ch != ' '){
                word.append(ch);
            }
            else{

                if(word.length() > 0){
                    stack.push(word.toString());
                    word.setLength(0);
                }
            }
        }

        // Last word
        if(word.length() > 0){
            stack.push(word.toString());
        }

        StringBuilder ans = new StringBuilder();

        while(!stack.isEmpty()){

            ans.append(stack.pop());

            if(!stack.isEmpty()){
                ans.append(" ");
            }
        }

        return ans.toString();
    }
}




Merge Strings Alternately (#1768)
Pattern
String Traversal
Two Pointer / Index Based
Category
Strings
Two Pointer
Problem

Given:

word1 = "abc"

word2 = "pqr"

Output:

"apbqcr"

Take characters alternately from both strings.

If one string finishes first:

Append remaining characters
Observation
Take one character from word1

Take one character from word2

Repeat

Append remaining part
Approach
Step 1
i = 0
Step 2

While both strings have characters:

sb.append(word1.charAt(i));

sb.append(word2.charAt(i));

i++;
Step 3

Append remaining characters.

word1.substring(i)

word2.substring(i)
Code
class Solution {
    public String mergeAlternately(String word1, String word2) {

        StringBuilder sb = new StringBuilder();

        int i = 0;

        while(i < word1.length()
              && i < word2.length()){

            sb.append(word1.charAt(i));
            sb.append(word2.charAt(i));

            i++;
        }

        sb.append(word1.substring(i));
        sb.append(word2.substring(i));

        return sb.toString();
    }
}
Example
word1 = "abc"

word2 = "pqrs"

Process:

a + p

b + q

c + r

Current:

apbqcr

Remaining:

s

Final:

apbqcrs
Complexity
Time
O(n + m)

where:

n = length of word1

m = length of word2
Space
O(n + m)

(Output StringBuilder)

Interview Trigger
Alternate Merge

Interleave Two Strings

Take Characters One by One

↓

Two Pointer / Index Traversal
Common Mistakes
1. Forgetting remaining characters

2. Index Out of Bounds

3. Returning before appending leftover part
Memory Hook
Take One

Take One

Append Remaining
Status
🟢 A
Revisit
Day 8
Day 15




# String Compression (#443)

## Pattern

```text
Two Pointer
In-place Array Modification
```

---

## Category

```text
Strings
Array Manipulation
```

---

## Problem

Given:

```java
['a','a','b','b','c','c','c']
```

Compress it into:

```java
['a','2','b','2','c','3']
```

Return:

```java
6
```

(length of compressed string)

---

## Key Observation

Question total frequency nahi pooch raha.

❌

```text
a -> 4
b -> 2
```

---

Question continuous groups pooch raha hai.

✅

```text
aaa -> a3

bb -> b2

a -> a
```

---

## Example

```java
[a,a,a,b,b,c,c,c]
```

Groups:

```text
aaa
bb
ccc
```

Compressed:

```text
a3b2c3
```

---

## Approach

### Read Pointer

```text
Group Count Karega
```

---

### Write Pointer

```text
Compressed Answer Likhega
```

---

## Algorithm

### Step 1

Current character pakdo.

```java
char current = chars[read];
```

---

### Step 2

Us group ka count nikalo.

```java
while(chars[read] == current)
```

Count++

---

### Step 3

Character write karo.

```java
chars[write] = current;
```

---

### Step 4

Agar count > 1

Count ko string mein convert karke

har digit write karo.

Example:

```text
12
```

↓

```text
'1'
'2'
```

---

## Important Edge Case

### Count = 1

```java
[a]
```

Output:

```java
[a]
```

NOT

```java
[a,1]
```

❌

---

### Multi Digit Count

```java
[a x 12 times]
```

Output:

```text
a12
```

Store:

```text
a
1
2
```

as separate characters.

---

## Code

```java
class Solution {

    public int compress(char[] chars) {

        int write = 0;
        int read = 0;

        while(read < chars.length){

            char current = chars[read];
            int count = 0;

            while(read < chars.length &&
                  chars[read] == current){

                count++;
                read++;
            }

            chars[write] = current;
            write++;

            if(count > 1){

                String cnt =
                        String.valueOf(count);

                for(char ch : cnt.toCharArray()){

                    chars[write] = ch;
                    write++;
                }
            }
        }

        return write;
    }
}
```

---

## Complexity

### Time

```text
O(n)
```

---

### Space

```text
O(1)
```

(In-place modification)

---

## Interview Trigger

```text
Compress String

Group Characters

Modify Same Array
```

↓

```text
Read Pointer
+
Write Pointer
```

---

## Common Mistakes

```text
1. Using total frequency instead of group frequency

2. Writing count = 1

3. Forgetting multi-digit counts

4. Creating a new array instead of modifying existing one
```

---

## Memory Hook

```text
Read Group

Count Group

Write Character

Write Count
```

---

## Status

```text
⭐ New Learning
```

### Revisit

```text
Day 6
Day 10
Day 20
```

Kyunki ye naya pattern hai aur pehli baar mein bhoolne ke chances zyada hote hain. 🔥😈



# Partition Labels (#763)

## Pattern

```text
Greedy
String
Last Occurrence Tracking
```

---

## Category

```text
Strings
Greedy
```

---

## Problem

String ko aise partitions mein divide karna hai ki:

```text
Har character sirf
ek hi partition mein aaye.
```

---

## Example

```java
s = "ababcbacadefegdehijhklij"
```

Output:

```java
[9,7,8]
```

Partitions:

```text
ababcbaca | defegde | hijhklij
```

Lengths:

```text
9
7
8
```

---

# Key Observation

Har character ki:

```text
Last Occurrence
```

pata honi chahiye.

---

Example

```java
ababcbaca
```

Last Occurrences:

```text
a -> 8
b -> 5
c -> 7
```

---

## Greedy Idea

Traverse karte hue:

```text
current partition ka end
```

maintain karo.

---

### Rule

```java
end =
Math.max(
    end,
    lastOccurrence[currentChar]
);
```

---

## Partition Kab Banega?

Jab:

```java
i == end
```

Tab.

Kyunki us partition ke saare characters ki last occurrence cover ho chuki hai.

---

# Dry Run

```java
s = "ababcbaca"
```

---

i = 0

```text
a
```

Last:

```text
8
```

```java
end = 8
```

---

i = 1

```text
b
```

Last:

```text
5
```

```java
end = max(8,5)
    = 8
```

---

i = 4

```text
c
```

Last:

```text
7
```

```java
end = max(8,7)
    = 8
```

---

i = 8

```java
i == end
```

Partition complete.

Length:

```java
8 - 0 + 1
=
9
```

Add:

```java
9
```

---

# Code

```java
class Solution {

    public List<Integer> partitionLabels(String s) {

        int[] last = new int[26];

        for(int i = 0; i < s.length(); i++){

            last[s.charAt(i) - 'a'] = i;
        }

        List<Integer> ans =
                new ArrayList<>();

        int start = 0;
        int end = 0;

        for(int i = 0; i < s.length(); i++){

            end = Math.max(
                    end,
                    last[s.charAt(i) - 'a']
            );

            if(i == end){

                ans.add(end - start + 1);

                start = i + 1;
            }
        }

        return ans;
    }
}
```

---

# Complexity

### Time

```text
O(n)
```

---

### Space

```text
O(1)
```

(26 lowercase characters)

---

# Interview Trigger

```text
Partition String

Last Occurrence

Character should appear in
only one partition
```

↓

```text
Store Last Index

Greedy Expansion
```

---

# Common Mistakes

```text
1. Using frequency instead of last occurrence

2. Partitioning too early

3. Not updating end using max()
```

---

# Memory Hook

```text
Find Last Occurrence

Keep Expanding End

When i == end

Cut Partition
```

---

# Status

```text
⭐ New Learning
```

### Revisit

```text
Day 6
Day 10
Day 20
```

Kyunki ye pehli baar kiya hai aur Greedy + Last Occurrence wala pattern future mein Graph aur Interval type questions mein bhi kaam aayega. 🔥😈

---

# DAY 5 Tracker

✅ Reverse Words in a String ⭐

✅ Merge Strings Alternately 🟢

✅ String Compression ⭐

✅ Partition Labels ⭐

Bhai honestly, DAY 5 kaafi productive tha. Strings phase ka major chunk cover ho gaya. 🚀🔥
