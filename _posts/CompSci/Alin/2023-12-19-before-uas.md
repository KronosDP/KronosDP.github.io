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

To prove that $ A^TA $ is invertible, show that $ A^TA\vec{x} = \vec{0} $ has only the trivial solution.

If $ \vec{x} $ is a solution of $ A^TA\vec{x} = \vec{0} $, then $ A\vec{x} $ is in the null space of $ A^T $ and also in the column space of $ A $.

By [Theorem 4.8.7(b)](#theorem-487b), the null space of $ A^T $ and the column space of $ A $ are orthogonal complements.

Due to orthogonality, part (b) of [Theorem 6.2.4](#theorem-624b) implies $ A\vec{x} = \vec{0} $.

Since $ A $ is assumed to have linearly independent column vectors, the only solution to $ A\vec{x} = \vec{0} $ is $ \vec{x} = \vec{0} $.

### (b) ⇒ (a)

Assume that $ A^TA $ is invertible. We want to show that the column vectors of $ A $ are linearly independent.

Consider the linear combination $ c_1\vec{a}\_1 + c_2\vec{a}\_2 + \ldots + c_n\vec{a}\_n = \vec{0} $, where $ \vec{a}_i $ is the $i$-th column vector of $ A $ and $ c_i $ are scalars.

Multiply both sides by $ A^T $ from the left:

$$ A^T(c_1\vec{a}\_1 + c_2\vec{a}\_2 + \ldots + c_n\vec{a}\_n) = A^T\vec{0} $$

Using properties of transpose and the fact that $ A^TA $ is invertible, we get:

$$ c_1A^T\vec{a}\_1 + c_2A^T\vec{a}\_2 + \ldots + c_nA^T\vec{a}\_n = \vec{0} $$

Since $ A^TA $ is invertible, its null space contains only the zero vector. This implies that the above equation can only be true if $ c_1 = c_2 = \ldots = c_n = 0 $, showing that the column vectors of $ A $ are linearly independent.

Therefore, we have shown both (a) ⇒ (b) and (b) ⇒ (a), and the two statements are equivalent.

## Theorem 4.8.7(b):

If $A$ is a matrix, then the null space of $A^T$ and the column space of $A$ are orthogonal complements.

**Proof:**
Let $\vec{v}$ be a vector in the null space of $A^T$, i.e., $A^T \vec{v} = \vec{0}$. This means that $\vec{v}$ is orthogonal to every row vector of $A^T$.

Since the rows of $A^T$ are the columns of $A$, $\vec{v}$ is orthogonal to every column vector of $A$. Thus, $\vec{v}$ is in the orthogonal complement of the column space of $A$.

Conversely, let $\vec{w}$ be in the orthogonal complement of the column space of $A$. This means that $\vec{w}$ is orthogonal to every column vector of $A$.

Since the columns of $A$ are the rows of $A^T$, $\vec{w}$ is orthogonal to every row vector of $A^T$. Hence, $\vec{w}$ is in the null space of $A^T$.

Therefore, the null space of $A^T$ and the column space of $A$ are orthogonal complements.

## Theorem 6.2.4(b)

If $A$ is a matrix and $A\vec{x} = \vec{0}$ has only the trivial solution, then the columns of $A$ are linearly independent.

**Proof:**
Assume that $A\vec{x} = \vec{0}$ has only the trivial solution. Suppose $c_1 \vec{v}_1 + c_2 \vec{v}_2 + \ldots + c_n \vec{v}_n = \vec{0}$, where $\vec{v}_i$ are the columns of $A$ and $c_i$ are scalars.

Let $A$ be an $m \times n$ matrix, and $\vec{v}_i$ be the $i$-th column vector of $A$. Then, $A\vec{x} = c_1 \vec{v}_1 + c_2 \vec{v}_2 + \ldots + c_n \vec{v}_n = \vec{0}$.

Since $A\vec{x} = \vec{0}$ has only the trivial solution, we must have $c_1 = c_2 = \ldots = c_n = 0$. Thus, the columns of $A$ are linearly independent.
