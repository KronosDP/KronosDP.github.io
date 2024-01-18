---
title: Volume dan Luas Permukaan Bola
date: 2024-01-01 12:04:30 +0700
categories: [UTBK, PK]
tags: [
    Mathematics,
    Calculus,
    Sphere,
    Volume of Sphere,
    Surface Area of Sphere,
    Integrals,
    Mathematical Proofs,
    Geometry
  ]
math: True
---

## Motivasi

Rumus volume dan luas Bola lingkaran adalah hal yang sudah kita pelajari sejak kelas 6 SD. Pertanyaannya adalah bagaimana rumus tersebut muncul?

## Prasyarat

Kalkulus, rumus volume fungsi yang diputer, luas permukaan fungsi yang diputar.

Perhatikan apa yang terjadi jika kita memutar fungsi $$y=\sqrt{r^2-x^2}$$ menurut sumbu x. Perhatikan bahwa kita mendapatkan sebuah bola bukan? Kita hanya tinggal memasukkannya ke rumus volume fungsi yang diputar.

$$
\begin{align*}
V &= \pi\int_{-r}^{r}\left(\sqrt{r^2-x^2}\right)^2\;dx \\
&= \pi\int_{-r}^{r}{r^2-x^2}\;dx \\
&= \pi\left[r^2x-\frac13 x^3\right]_{-r}^r\\
&= \pi\left(\left(r^3-\frac13 r^3\right)-\left(-r^3+\frac13(-r)^3\right)\right) \\
&= \frac43 \pi r^3
\end{align*}
$$

Dan begitulah cara kita mendapat volume bola. Bagaimana dengan luas permukaan bola?

## Luas Permukaan Bola

Ingat bahwa rumus luas permukaan adalah sebagai berikut:

$$\int_{a}^{b}2\pi y\sqrt{1+\left(\frac{dy}{dx}\right)^2}\;dx$$

Langsung saja kita masukkan apa yang kita ketahui:

$$
\begin{align*}
LP&=\int_{-r}^{r} 2\pi \sqrt{r^2-x^2} \sqrt{1 + \left(\frac{d}{dx}\sqrt{r^2-x^2}\right)^2} \;dx \\
&= \int_{-r}^{r} 2\pi \sqrt{r^2-x^2} \sqrt{1 + \left(-\frac{x}{\sqrt{r^2-x^2}}\right)^2} \;dx \\
&= \int_{-r}^{r} 2\pi \sqrt{r^2-x^2} \sqrt{1 + \frac{x^2}{r^2-x^2}} \;dx \\
&= \int_{-r}^{r} 2\pi \sqrt{r^2-x^2} \sqrt{\frac{r^2}{r^2-x^2}} \;dx \\
&= \int_{-r}^{r} 2\pi r \;dx \\
&= 2\pi r \int_{-r}^{r} \;dx \\
&= 2\pi r \left[x\right]_{-r}^{r} \\
&= 2\pi r (r - (-r)) \\
&= 4\pi r^2
\end{align*}
$$

Begitulah penurunan rumus luas permukaan bola. Semoga bisa membantu kamu ya~
