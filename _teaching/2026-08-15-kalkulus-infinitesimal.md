---
type: 'Lecture Notes'
venue: 'Faculty of Computer Science, University of Indonesia'
title: 'Univariate Calculus via Nonstandard Analysis: The Infinitesimal Approach'
date: 2026-08-15 14:00:00 +0700
categories: [Mathematics, Calculus, Analysis]
tags:
  [
    Calculus,
    Nonstandard Analysis,
    Infinitesimals,
    Hyperreal Numbers,
    Limits,
    Derivatives,
    Continuity,
    Abraham Robinson,
    Jerome Keisler
  ]
math: True
collection: teaching
author_profile: true
read_time: true
comments: true
share: true
related: true
---

Catatan teori dan ringkasan pendekatan **Kalkulus Univariat dengan Analisis Non-Standar (Infinitesimal)**. Kerangka kerja ini mengadopsi formalisasi modern dari Abraham Robinson dan pendekatan pedagogis H. Jerome Keisler (*Elementary Calculus: An Infinitesimal Approach*).

Pendekatan infinitesimal memberikan intuisi geometri dan diferensial yang sangat alami (seperti yang mula-mula digagas oleh Leibniz dan Newton) tanpa mengorbankan ketatnya pembuktian matematika (*rigor*).

---

## 1. Aksioma Sistem Bilangan Hiperreal $\mathbb{R}^*$

Sistem bilangan hiperreal $\mathbb{R}^*$ memperluas sistem bilangan riil standar $\mathbb{R}$ dengan menambahkan kuantitas infinitesimal dan kuantitas tak terhingga (*infinite*):

1. **Prinsip Ekstensi**: $\mathbb{R} \subset \mathbb{R}^*$. Setiap bilangan riil adalah bilangan hiperreal.
2. **Keterurutan & Aljabar (*Ordered Field*)**: $\mathbb{R}^*$ adalah lapangan terurut (*ordered field*) yang memenuhi seluruh aksioma aljabar biasa seperti komutatif, asosiatif, distributif, dan relasi transitif.
3. **Elemen Infinitesimal**: Terdapat elemen infinitesimal $\varepsilon \in \mathbb{R}^*, \varepsilon > 0$ sedemikian sehingga:
   $$\varepsilon < r \quad \forall r \in \mathbb{R}^+$$
4. **Elemen Tak Terhingga (*Infinite*)**: Kebalikan dari infinitesimal tak nol, yaitu $H = \frac{1}{\varepsilon}$, bernilai lebih besar dari semua bilangan riil:
   $$H > r \quad \forall r \in \mathbb{R}$$

---

## 2. Klasifikasi Bilangan Hiperreal $x \in \mathbb{R}^*$

Setiap elemen $x$ dalam $\mathbb{R}^*$ digolongkan ke dalam tiga kategori mendasar:

| Kategori | Definisi Formal | Contoh Representatif |
| :--- | :--- | :--- |
| **Infinitesimal** ($\approx 0$) | $|x| < r$ untuk semua $r \in \mathbb{R}^+$ (termasuk $x=0$) | $\varepsilon, \; \varepsilon^2, \; \frac{1}{H}, \; \sqrt{\varepsilon}$ |
| **Hingga (*Finite*)** | $|x| < r$ untuk suatu $r \in \mathbb{R}^+$ | $5, \; \pi, \; 3 + 2\varepsilon, \; \frac{4H+1}{2H-3}$ |
| **Tak Terhingga (*Infinite*)** | $|x| > r$ untuk semua $r \in \mathbb{R}^+$ | $H, \; H^2, \; \frac{1}{\varepsilon}, \; \sqrt{H}$ |

### Notasi Kedekatan Infinitesimal ($\approx$)
Dua bilangan hiperreal $a, b \in \mathbb{R}^*$ dikatakan **infinitesimally close** ($a \approx b$) jika selisih keduanya merupakan infinitesimal:
$$a \approx b \iff a - b \text{ adalah infinitesimal}$$

---

## 3. Operator Standard Part $\operatorname{st}(\cdot)$

Salah satu pilar terpenting dalam analisis non-standar adalah **Teorema Bagian Standar (*Standard Part Principle*)**:

> **Teorema:** Untuk setiap bilangan hiperreal hingga $x \in \mathbb{R}^*$, terdapat **tepat satu** bilangan riil standar $r \in \mathbb{R}$ sedemikian sehingga $x \approx r$. Bilangan riil unik ini dilambangkan sebagai $\operatorname{st}(x)$.

$$\operatorname{st}(x) = r \quad \iff \quad x \approx r$$

### Sifat-Sifat Aljabar Operator $\operatorname{st}$
Misalkan $a, b \in \mathbb{R}^*$ adalah bilangan hiperreal hingga. Maka berlaku:
- **Penjumlahan:** $\operatorname{st}(a + b) = \operatorname{st}(a) + \operatorname{st}(b)$
- **Pengurangan:** $\operatorname{st}(a - b) = \operatorname{st}(a) - \operatorname{st}(b)$
- **Perkalian:** $\operatorname{st}(a \cdot b) = \operatorname{st}(a) \cdot \operatorname{st}(b)$
- **Pembagian:** $\operatorname{st}\left(\frac{a}{b}\right) = \frac{\operatorname{st}(a)}{\operatorname{st}(b)}$ (asalkan $\operatorname{st}(b) \neq 0$)
- **Akar / Pangkat:** $\operatorname{st}(\sqrt[n]{a}) = \sqrt[n]{\operatorname{st}(a)}$ (untuk $a > 0, n \in \mathbb{N}$)

---

## 4. Definisi Kontinuitas dan Turunan

Dengan menggunakan operator $\operatorname{st}$, kita dapat mendefinisikan konsep kalkulus sentral tanpa perlu menggunakan limit $\varepsilon$-$\delta$ yang rumit:

### A. Kontinuitas Fungsi
> **Definisi:** Suatu fungsi riil $f$ kontinu di titik $c \in \mathbb{R}$ jika untuk setiap perubahan infinitesimal $\Delta x \approx 0$:
> $$f(c + \Delta x) \approx f(c) \quad \iff \quad \operatorname{st}(f(c + \Delta x)) = f(c)$$

### B. Turunan (*Derivative*)
> **Definisi:** Misalkan $y = f(x)$. Turunan $f'(x)$ di titik $x \in \mathbb{R}$ didefinisikan sebagai bagian standar dari rasio diferensial $\frac{\Delta y}{\Delta x}$ untuk sembarang $\Delta x \approx 0$ ($\Delta x \neq 0$):
> $$f'(x) = \operatorname{st}\left(\frac{\Delta y}{\Delta x}\right) = \operatorname{st}\left(\frac{f(x + \Delta x) - f(x)}{\Delta x}\right)$$

---

## 5. Contoh Komputasi Turunan dengan Infinitesimal

Mari kita buktikan turunan dari fungsi $f(x) = x^2$ menggunakan metode infinitesimal:

1. Ambil kenaikan infinitesimal $\Delta x \neq 0, \Delta x \approx 0$.
2. Hitung selisih $\Delta y$:
   $$\Delta y = f(x + \Delta x) - f(x) = (x + \Delta x)^2 - x^2 = x^2 + 2x\Delta x + (\Delta x)^2 - x^2 = 2x\Delta x + (\Delta x)^2$$
3. Bentuk rasio diferensial:
   $$\frac{\Delta y}{\Delta x} = \frac{2x\Delta x + (\Delta x)^2}{\Delta x} = 2x + \Delta x$$
4. Ambil Standard Part ($\operatorname{st}$):
   $$f'(x) = \operatorname{st}\left(\frac{\Delta y}{\Delta x}\right) = \operatorname{st}(2x + \Delta x) = \operatorname{st}(2x) + \operatorname{st}(\Delta x) = 2x + 0 = 2x$$

Hasilnya diperoleh secara langsung dan sangat intuitif, memperjelas mengapa suku $(\Delta x)^2$ dapat diabaikan secara formal dan valid secara matematika.
