---
title: "Intro to Integral"
date: 2023-11-09 20:32:30 +0700
categories: [CompSci, Calculus]
tags: [integral]
math: True
---

## Prasyarat

Sebelum membaca blog ini, diharapkan Anda sudah cukup mengerti dan akrab dengan konsep turunan. Pastikan Anda memahami sifat-sifat berikut:

1. **Turunan Konstanta:** $\frac{d}{dx}(k) = 0\;\;\;\text{dimana } k \text{ adalah konstanta}$

2. **Aturan Perkalian:** $\frac{d}{dx}(f(x)g(x)) = f(x)g'(x) + g(x)f'(x)$

3. **Aturan Pembagian:** $\frac{d}{dx}\left(\frac{f(x)}{g(x)}\right) = \frac{f'(x)g(x) - f(x)g'(x)}{(g(x))^2}$

4. **Aturan Rantai (Chain Rule):** Jika $y = f(u)$ dan $u = g(x)$, maka turunan fungsi $y$ terhadap $x$ adalah $y' = f'(u) \cdot g'(x)$.

5. **Aturan Eksponensial:** $\frac{d}{dx}(a^x) = a^x \cdot \ln(a)$, di mana $a$ adalah konstanta positif.

6. **Aturan Logaritma:** $\frac{d}{dx}(\ln(x)) = \frac{1}{x}$

7. **Turunan Fungsi Trigonometri:** $\frac{d}{dx}(\sin(x)) = \cos(x)$ dan $\frac{d}{dx}(\cos(x)) = -\sin(x)$

Perlu diperhatikan beberapa hal untuk sifat-sifat turunan diatas, yaitu:
- Untuk aturan perkalian, mungkin dosen anda menggunakan u(x) ataupun v(x). Tetapi karena huruf u dan v sulit dibedakan ketika kita menulisnya dengan tangan, maka saya lebih suka dengan menggunakan f(x) dan g(x). Tetapi hal ini sebenarnya sama saja, yang penting adalah konsep bahwa f(x), g(x), u(x), ataupun v(x) menyatakan fungsi.
- Ada banyak fungsi trigonometri yang lain. Untuk tabel yang lebih lengkap bisa anda cari di google :D

## Berkenalan dengan Konsep Integral
> Bagaikan pengurangan yang adalah kebalikan penambahan
>
> Yang serupa hubungannya dengan pembagian yang adalah kebalikan perkalian
>
> Begitu juga hubungan integral dan turunan yang tidak lain juga merupakan kebalikan

_Yes I know, that was a sh*tty poem, but I hope you'll see that integrals aren't scary_. Pada dasarnya, integral hanyalah kebalikan dari turunan. Lihatlah contoh dibawah ini. 

Jika

$$\frac{d}{dx}(f(x))=f'(x)$$

maka

$$\int f'(x)\;dx=f(x)+c\;\;\;\;\;\text{dimana c adalah konstan}$$

Pertanyaannya adalah mengapa ada `+c` disana? Coba saja kamu turunkan $f(x)+c$. Lihat bahwa hasilnya adalah `f(x)` bukan? Perhatikan bahwa bagian `+c` hilang karena turunan dari bilangan konstan adalah 0.

## Contoh Hubungan Turunan dan Integral
Untuk dapat lebih memiliki _feeling_ terhadap hubungan operasi turunan dan integral, mari kita coba saksikan bagaimana keduanya dapat menjelaskan satu sama lain. Perhatikan fungsi berikut.

$$f(x)=x$$

Kita ingin mengetahui fungsi apa yang jika diturunkan menjadi f(x). Mari kita sebut fungsi misterius ini sebagai g(x).

1. Jika kita ingat-ingat lagi, turunan membuat sebuah fungsi memiliki pangkat yang dikurangi 1. Oleh karena itu, seharusnya fungsi g(x) memiliki pangkat 2. Hal ini adalah agar g(x) diturunkan, pangkatnya adalah pangkat 1 (sama seperti pangkat f(x) yang adalah target kita).

2. Tetapi perlu diingat, bahwa jika $g(x)=x^2$, jika kita menurunkan fungsi tersebut yang akan kita dapatkan adalah g'(x)=2x. Kita tidak menginginkan konstanta 2 di depan x. Oleh karena itu, kita bisa membagi saja dengan pangkatnya supaya tidak ada konstanta tambahan.

Dengan kedua hal tersebut, bisa kita dapatkan bahwa $g(x)=\frac{1}{2}x^2$ yang jika kita turunkan akan menghasilkan $g'(x)=f(x)=x$. 

Perhatikan bahwa $x^2$ didapatkan dari poin nomor `1` dan $\frac{1}{2}$ kita dapatkan dari poin nomor `2`, dimana kita tidak mau ada konstanta tambahan oleh karena itu kita bagi saja.

Itulah yang dilakukan oleh integral pada dasarnya. Untuk mencari tau `fungsi apakah` yang `jika diturunkan` akan menghasilkan fungsi `yang kita inginkan`.

## Akhir Kata
Sebenarnya perjalanan kita di _gurun kalkulus_ ini masih panjang, oleh karena panjangnya perjalanan yang perlu ditempuh (kebanyakan materi) diperlukan pemotongan materi-materi yang ada menjadi bagian-bagian yang lebih mudah dimengerti. _Stay tuned_ untuk bagian selanjutnya :D