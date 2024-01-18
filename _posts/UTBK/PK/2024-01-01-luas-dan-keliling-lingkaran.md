---
title: Luas dan Keliling Lingkaran
date: 2024-01-01 11:21:30 +0700
categories: [UTBK, PK]
tags: [Mathematics,
Calculus,
Circle,
Area of Circle,
Circumference of Circle,
Integrals,
Trigonometry,
Mathematical Proofs,
Geometry
]
math: True
---

## Motivasi

Rumus luas dan keliling lingkaran adalah hal yang sudah kita pelajari sejak kelas 6 SD. Pertanyaannya adalah bagaimana rumus tersebut muncul?

## Prasyarat

Kalkulus, rumus luas dibawah semua kurva fungsi, dan rumus panjang kurva.

## Luas

Perhatikan bahwa lingkaran dengan titik pusat 0 dengan jari-jari `r` fungsinya adalah:

$$x^2+y^2=r^2$$

Ingat juga bahwa rumus luas dibawah dengan suatu kurva dengan suatu batas tertentu:

$$\int_{a}^{b}f(x)\;dx$$

**Ingat bahwa** tujuan kita adalah untuk mencari luas lingkaran. Disini kita bisa memanipulasi persamaan lingkaran menjadi:

$$y=\sqrt{r^2-x^2}$$

Kemudian kita bisa langsung mengintegralkan dan mengkalikan dengan 2 integral itu. Kemudian, kita bisa memasukkan batas integralnya juga, yaitu `-r` dan `r` karena batas pada x nya adalah `-r` dan `r`.

$$2\int_{-r}^{r}\sqrt{r^2-x^2}\;dx$$

Mari selesaikan integral bagian dalam terlebih dahulu:

$$
\begin{align*}
\int_{-r}^{r}\sqrt{r^2-x^2}\;dx &= \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}\sqrt{r^2 - (r\sin(\theta))^2} \cdot r\cos(\theta)\,d\theta \\
&= \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}}\sqrt{r^2 - r^2\sin^2(\theta)} \cdot r\cos(\theta)\,d\theta \\
&= \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} r^2\cos^2(\theta)\,d\theta \\
&= r^2 \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \cos^2(\theta)\,d\theta.
\end{align*}
$$

Dengan _double angle formula_ $\cos^2(\theta) = \frac{1 + \cos(2\theta)}{2}$:

$$
\begin{align*}
r^2 \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \cos^2(\theta)\,d\theta &= r^2 \int_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \frac{1 + \cos(2\theta)}{2}\,d\theta \\
&= r^2 \left[\frac{1}{2}\theta + \frac{1}{4}\sin(2\theta)\right]_{-\frac{\pi}{2}}^{\frac{\pi}{2}} \\
&= r^2 \left(\frac{\pi}{4} + \frac{1}{4}\sin(\pi) - \left(-\frac{\pi}{4} - \frac{1}{4}\sin(-\pi)\right)\right) \\
&= r^2 \left(\frac{\pi}{4} + \frac{\pi}{4}\right) \\
&= \frac{\pi r^2}{2}.
\end{align*}
$$

Jadi, $\int_{-r}^{r}\sqrt{r^2-x^2}\;dx = \frac{\pi r^2}{2}$.

Ingat bahwa integral awalnya adalah:

$$2\int_{-r}^{r}\sqrt{r^2-x^2}\;dx=2\cdot\frac{\pi r^2}{2}=\pi r^2$$

Jadi luas lingkaran adalah $\pi r^2$.

## Keliling

Ingat rumus panjang kurva di kalkulus diberikan dengan rumus berikut yang diturunkan dari rumus pythagoras.

$$
\begin{align*}
x^2 + y^2 &= r^2 \\
2x\,dx + 2y\,dy &= 2r\,dr \\
x\,dx + y\,dy &= r\,dr \\
\int \sqrt{1 + \left(\frac{dy}{dx}\right)^2} \,dx &= \int dr \\
S &= \int \sqrt{1 + \left(\frac{dy}{dx}\right)^2} \,dx
\end{align*}
$$

Dengan mengingat bahwa kita inngin mencari keliling lingkaran dan fungsi yang kita gunakan adalah $y=\sqrt{r^2-x^2}$, kita bisa langsung memasukkannya ke dalam integral, beserta dengan batasnya, yaitu:

$$
\begin{align*}
S &= \int_{-r}^r \sqrt{1 + \left(\frac{dy}{dx}\right)^2}\;dx\\
&= \int_{-r}^r \sqrt{1 + \left(\frac{d}{dx}\left(\sqrt{r^2-x^2}\right)\right)^2}\;dx\\
&= \int_{-r}^r \sqrt{1 + \left(\frac{d}{dx}\left((r^2-x^2)^{1/2}\right)\right)^2}\;dx\\
&= \int_{-r}^r \sqrt{1 + \left(\frac{-x}{(r^2-x^2)^{1/2}}\right)^2}\;dx\\
&= \int_{-r}^r \sqrt{1 + \frac{x^2}{r^2-x^2}}\;dx\\
&= \int_{-r}^r \sqrt{\frac{r^2-x^2 + x^2}{r^2-x^2}}\;dx\\
&= \int_{-r}^r \sqrt{\frac{r^2}{r^2-x^2}}\;dx\\
&= \int_{-r}^r \frac{r}{\sqrt{r^2-x^2}}\;dx\\
&= r\int_{-r}^r \frac{1}{\sqrt{1-\left(\frac{x}{r}\right)^2}}\;dx\\
&= r\arcsin\left(\frac{x}{r}\right)\bigg|_{-r}^r\\
&= r\left[\arcsin\left(\frac{r}{r}\right) - \arcsin\left(\frac{-r}{r}\right)\right]\\
&= r(\pi - (-\pi))\\
&= r(2\pi)\\
&= 2\pi r
\end{align*}
$$

Terbukti bahwa keliling lingkaran adalah $2\pi r$.
