---
title: Proof of Inverse Existence for A^TA
date: 2023-12-19 22:44:30 +0700
categories: [CompSci, Linear Algebra]
tags: [rank, nulitas, ruang baris, ruang kolom, ruang null, review, uas]
math: True
---

# Theorem 6.4.3

If $ A $ is an $ m \times n $ matrix, then the following are equivalent.

(a) The column vectors of $ A $ are linearly independent.

(b) $ A^TA $ is invertible.

## Proof

We will prove both directions.

### (a) ⇒ (b)

Assume that the column vectors of $ A $ are linearly independent.

The matrix $ A^TA $ has size $ n \times n $.

To prove that $ A^TA $ is invertible, show that $ A^TA\mathbf{x} = \mathbf{0} $ has only the trivial solution.

If $ \mathbf{x} $ is a solution of $ A^TA\mathbf{x} = \mathbf{0} $, then $ A\mathbf{x} $ is in the null space of $ A^T $ and also in the column space of $ A $.

By Theorem 4.8.7(b), the null space of $ A^T $ and the column space of $ A $ are orthogonal complements.

Due to orthogonality, part (b) of Theorem 6.2.4 implies $ A\mathbf{x} = \mathbf{0} $.

Since $ A $ is assumed to have linearly independent column vectors, the only solution to $ A\mathbf{x} = \mathbf{0} $ is $ \mathbf{x} = \mathbf{0} $.



### (b) ⇒ (a)

Assume that $ A^TA $ is invertible. We want to show that the column vectors of $ A $ are linearly independent.

Consider the linear combination $ c_1\mathbf{a}_1 + c_2\mathbf{a}_2 + \ldots + c_n\mathbf{a}_n = \mathbf{0} $, where $ \mathbf{a}_i $ is the $i$-th column vector of $ A $ and $ c_i $ are scalars.

Multiply both sides by $ A^T $ from the left:

$$ A^T(c_1\mathbf{a}_1 + c_2\mathbf{a}_2 + \ldots + c_n\mathbf{a}_n) = A^T\mathbf{0} $$

Using properties of transpose and the fact that $ A^TA $ is invertible, we get:

$$ c_1A^T\mathbf{a}_1 + c_2A^T\mathbf{a}_2 + \ldots + c_nA^T\mathbf{a}_n = \mathbf{0} $$

Since $ A^TA $ is invertible, its null space contains only the zero vector. This implies that the above equation can only be true if $ c_1 = c_2 = \ldots = c_n = 0 $, showing that the column vectors of $ A $ are linearly independent.

Therefore, we have shown both (a) ⇒ (b) and (b) ⇒ (a), and the two statements are equivalent.


