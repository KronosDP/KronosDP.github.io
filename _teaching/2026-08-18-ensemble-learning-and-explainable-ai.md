---
type: 'Guest Lecture & Academy Material'
venue: 'COMPFEST 18 Academy, Universitas Indonesia'
title: 'Ensemble Learning & Explainable AI (XAI): From Model Accuracy to Real-World Accountability'
date: 2026-08-18 09:00:00 +0700
categories: [CompSci, Machine Learning, AI]
tags:
  [
    Ensemble Learning,
    Explainable AI,
    XAI,
    Random Forest,
    Gradient Boosting,
    XGBoost,
    LightGBM,
    CatBoost,
    Stacking,
    LIME,
    SHAP,
    TreeSHAP,
    Feature Importance,
    Fairness in AI,
    COMPFEST
  ]
math: True
collection: teaching
author_profile: true
read_time: true
comments: true
share: true
related: true
slidesurl: '/files/talk-ensemble-xai-compfest.pdf'
header:
  teaser: 'teaching/ensemble-xai/01_cover.png'
---

Dokumentasi lengkap materi dan ringkasan komprehensif dari sesi perkuliahan tamu / *academy masterclass* **COMPFEST 18 Academy** (18 Agustus 2026) yang dibawakan oleh **Darrel Danadyaksa Poli** (*AI Engineer & Researcher*, Alumnus Ilmu Komputer UI).

Topik ini membedah dua pilar fundamental dalam ekosistem *machine learning* modern: **Ensemble Learning** (teknik mencapai akurasi optimal pada data tabular) dan **Explainable AI / XAI** (metodologi interpretasi model *black-box* demi akuntabilitas, kepatuhan regulasi, dan debugging sistemik).

---

<!-- Download & Slide Viewer Card -->
<div class="notice--primary" style="padding: 1.5rem; border-radius: 8px; margin: 1.5rem 0; background: rgba(59, 130, 246, 0.07); border-left: 4px solid #3b82f6;">
  <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 1rem;">
    <div>
      <h3 style="margin: 0 0 0.4rem 0; color: #2563eb; display: flex; align-items: center; gap: 8px;">
        <span>📑</span> Presentasi Resmi: Ensemble Learning & Explainable AI
      </h3>
      <p style="margin: 0; font-size: 0.95rem; line-height: 1.5; color: inherit;">
        Berkas lengkap 60 halaman <em>slide deck</em> perkuliahan COMPFEST 18 Academy (format PDF resolusi tinggi) memuat pembuktian matematis, studi kasus industri kredit perbankan, komparasi algoritma, serta studi implementasi XAI.
      </p>
    </div>
    <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
      <a href="/files/talk-ensemble-xai-compfest.pdf" target="_blank" class="btn btn--primary" style="display: inline-flex; align-items: center; gap: 6px; padding: 0.55rem 1.1rem; font-weight: 600; text-decoration: none; border-radius: 6px;">
        <span>📥</span> Unduh Slide PDF (2.7 MB)
      </a>
      <a href="#daftar-isi" class="btn btn--inverse" style="display: inline-flex; align-items: center; gap: 6px; padding: 0.55rem 1.1rem; text-decoration: none; border-radius: 6px;">
        <span>🧭</span> Baca Ringkasan
      </a>
    </div>
  </div>
</div>

---

<p align="center">
  <img src="/images/teaching/ensemble-xai/01_cover.png" alt="Cover Slide Ensemble Learning & Explainable AI COMPFEST 18 Academy" style="border-radius: 8px; box-shadow: 0 4px 14px rgba(0,0,0,0.12); max-width: 100%; height: auto;" />
  <br>
  <em>Gambar 1: Slide pembuka sesi Ensemble Learning & Explainable AI pada COMPFEST 18 Academy.</em>
</p>

---

## 📌 Daftar Isi {#daftar-isi}

1. [Dilema Utama: Akurasi vs Akuntabilitas di Dunia Nyata](#1-dilema-utama-akurasi-vs-akuntabilitas)
2. [Bagian I: Ensemble Learning — Mengapa Kerumunan Model Lemah Mengalahkan Satu Model Kuat](#2-bagian-i-ensemble-learning)
   - [Intuisi Wisdom of Crowds & Penurunan Matematis Variansi](#21-intuisi-dan-penurunan-matematis-variansi)
   - [Bukti Probabilitas Majority Voting](#22-bukti-probabilitas-majority-voting)
   - [Tiga Paradigma Ensembling: Bagging, Boosting, dan Stacking](#23-tiga-paradigma-ensembling)
   - [Random Forest: Rahasia Feature Subsampling ($\sqrt{p}$)](#24-random-forest-feature-subsampling)
   - [Evolusi 30 Tahun Algoritma Boosting](#25-evolusi-30-tahun-algoritma-boosting)
   - [Stacking & Bahaya Fatal Data Leakage](#26-stacking-dan-out-of-fold-predictions)
   - [Matriks Komparasi Lengkap Ensemble](#27-matriks-komparasi-lengkap-ensemble)
3. [Bagian II: Explainable AI (XAI) — Dari "Apa" Menjadi "Mengapa"](#3-bagian-ii-explainable-ai-xai)
   - [Tiga Persona Pemangku Kepentingan (Audiens)](#31-tiga-persona-pemangku-kepentingan)
   - [Taksonomi Interpretability: Matriks 2x2](#32-taksonomi-interpretability)
   - [Jebakan Fitur `feature_importances_` Bawaan Tree](#33-jebakan-feature_importances_-bawaan)
   - [Permutation Feature Importance: Solusi Global yang Jujur](#34-permutation-feature-importance)
   - [LIME (Local Interpretable Model-agnostic Explanations)](#35-lime-local-interpretable-model-agnostic-explanations)
   - [SHAP (SHapley Additive exPlanations) & Landasan Teori Permainan](#36-shap-dan-landasan-teori-permainan-shapley)
   - [TreeSHAP: Komputasi Polinomial Eksak untuk Tree](#37-treeshap-keunggulan-komputasi-pada-tree)
   - [Mengubah Output SHAP Menjadi Kalimat Manusia](#38-mengubah-output-shap-menjadi-kalimat-manusia)
   - [Batas & Jebakan XAI (Korelasi $\neq$ Kausalitas, Kerentanan Adversarial)](#39-batas-dan-jebakan-xai)
4. [Playbook Senin Pagi: Checklist Praktis Engineering](#4-playbook-senin-pagi-checklist-praktis)
5. [Referensi & Bacaan Lanjutan](#5-referensi--bacaan-lanjutan)

---

## 1. Dilema Utama: Akurasi vs Akuntabilitas {#1-dilema-utama-akurasi-vs-akuntabilitas}

Di bangku universitas dan kompetisi sains data (seperti Kaggle), metrik evaluasi sering kali berfokus tunggal pada **Akurasi / ROC-AUC / F1-Score**. Model terbaik adalah model dengan skor tertinggi di *leaderboard*.

Namun, di industri dan sistem produksi nyata—terutama sektor berdampak tinggi (*high-stakes*) seperti perbankan, kesehatan, asuransi, dan ketenagakerjaan—metrik performa hanyalah separuh dari persyaratan:

```
                  ACCURATE (Akurat)
                         ↕
               ACCOUNTABLE (Dapat Dipertanggungjawabkan)
```

> *"Kampus mengajarkan kita cara memaksimalkan akurasi. Industri menuntut keduanya."*

### Kasus Nyata Kegagalan Model Black-Box:
1. **Apple Card (2019)**: Pasangan suami-istri dengan aset finansial gabungan dan riwayat kredit identik mendapatkan limit kartu kredit yang terpaut drastis (suami memperoleh limit jauh lebih tinggi daripada istri). Kasus ini berujung pada investigasi resmi oleh *New York Department of Financial Services (NYDFS)* atas dugaan bias gender algoritmik.
2. **Amazon AI Recruitment (2018)**: Sistem penyaring resume otomatis terpaksa dihentikan setelah model mempelajari korelasi historis bahwa industri teknologi didominasi pria, sehingga model secara aktif memotong skor kandidat yang memuat kata *"women's"* (misalnya *"women's chess club captain"*).
3. **Regulasi Global & Nasional (EU AI Act & OJK POJK 22/2023)**:
   Regulasi modern menetapkan bahwa dalih *"model AI yang memutuskannya"* tidak memiliki kekuatan hukum pembelaan. Lembaga keuangan diwajibkan memberikan *adverse action notices* (penjelasan spesifik mengapa pinjaman/layanan ditolak) kepada konsumen.

Ketika seorang nasabah ditolak pinjamannya dengan pesan dingin:
> *"Your loan application was declined. Ref: model_v3.2. No further explanation is available."*

Pihak nasabah, regulator, dan *engineer* internal semuanya menuntut jawaban atas pertanyaan yang sama: **Mengapa?**

---

## 2. Bagian I: Ensemble Learning {#2-bagian-i-ensemble-learning}

> **Prinsip Utama**: *"Banyak model lemah yang beragam akan mengalahkan satu model raksasa yang kompleks."*

### 2.1 Intuisi dan Penurunan Matematis Variansi {#21-intuisi-dan-penurunan-matematis-variansi}

Fenomena *Wisdom of Crowds* (Kebijaksanaan Kerumunan) pertama kali dicatat secara ilmiah oleh Francis Galton (1906) pada kontes menebak bobot ternak. Rata-rata dari ratusan tebakan orang awam jauh lebih mendekati nilai riil daripada tebakan individu para ahli ternak. Mengapa? Karena kesalahan individu yang acak saling meniadakan (*errors cancel out*).

Secara formal, mari kita tinjau rata-rata dari $n$ buah model prediksi acak $X_1, X_2, \dots, X_n$, di mana masing-masing model memiliki variansi error $\sigma^2$ dan korelasi antar-error berpasangan sebesar $\rho$:

$$\operatorname{Var}\left(\frac{1}{n} \sum_{i=1}^n X_i\right) = \frac{1}{n^2} \left( \sum_{i=1}^n \operatorname{Var}(X_i) + \sum_{i \neq j} \operatorname{Cov}(X_i, X_j) \right)$$

Karena terdapat $n$ suku variansi $\sigma^2$ dan $n(n-1)$ suku kovariansi $\rho \sigma^2$:

$$\operatorname{Var}\left(\bar{X}_n\right) = \frac{1}{n^2} \left[ n\sigma^2 + n(n-1)\rho \sigma^2 \right]$$

$$\operatorname{Var}\left(\bar{X}_n\right) = \frac{\sigma^2}{n} + \frac{n-1}{n} \rho \sigma^2 = \rho \sigma^2 + \frac{1 - \rho}{n}\sigma^2$$

$$\boxed{\operatorname{Var}\left(\frac{1}{n}\sum_{i=1}^n X_i\right) = \rho\sigma^2 + \frac{1-\rho}{n}\sigma^2}$$

#### Analisis Persamaan:
- Suku kanan $\frac{1-\rho}{n}\sigma^2 \to 0$ seiring bertambahnya jumlah model $n \to \infty$.
- Suku kiri $\rho \sigma^2$ **tidak pernah hilang** tidak peduli berapa juta model yang kita tambahkan!
- Nilai $\rho$ (korelasi antar-kesalahan model) adalah batas bawah (*theoretical floor*) dari reduksi variansi.
- **Kesimpulan krusial**: Menambah model identik ($\rho = 1$) tidak menghasilkan penurunan variansi sama sekali. **Diversitas (membuat $\rho$ sekecil mungkin) adalah kunci mutlak keberhasilan ensemble.**

---

### 2.2 Bukti Probabilitas Majority Voting {#22-bukti-probabilitas-majority-voting}

Misalkan kita memiliki 3 model klasifikasi biner independen. Masing-masing model memiliki akurasi $p = 70\%$ ($0.70$) dan salah di tempat yang berbeda. Jika keputusan akhir diambil berdasarkan suara terbanyak (*majority vote*, minimal 2 dari 3 benar), berapa probabilitas ensemble benar?

1. **Kasus 1: Ketiga model benar**
   $$P(\text{semua benar}) = p^3 = 0.70^3 = 0.343$$

2. **Kasus 2: Tepat dua model benar (dan satu salah)**
   $$P(\text{tepat 2 benar}) = \binom{3}{2} p^2 (1-p) = 3 \times (0.70)^2 \times (0.30) = 3 \times 0.49 \times 0.30 = 0.441$$

3. **Total Probabilitas Ensemble Benar**:
   $$P(\text{Ensemble Benar}) = 0.343 + 0.441 = \mathbf{0.784 \quad (78.4\%)}$$

Penggabungan 3 model berkemampuan $70\%$ berhasil mendongkrak akurasi sistem menjadi **$78.4\%$** (+8.4% kenaikan bersih) murni karena independensi error.

---

### 2.3 Tiga Paradigma Ensembling {#23-tiga-paradigma-ensembling}

Terdapat tiga arsitektur dasar dalam menggabungkan model:

1. **Bagging (Bootstrap Aggregating)**:
   - Pelatihan paralel pada $B$ sampel *bootstrap* (pengambilan data dengan pengembalian / *sampling with replacement*).
   - Mengurangi **variansi** (meredam *overfitting*).
   - Menghasilkan skor validasi gratis melalui data yang tidak terpilih (*Out-Of-Bag / OOB samples*, berkisar $\approx 36.8\%$ dari total data karena $\lim_{N \to \infty} (1 - 1/N)^N = 1/e \approx 0.368$).
2. **Boosting**:
   - Pelatihan sekuensial (berurutan). Setiap model baru dilatih secara spesifik untuk memprediksi dan memperbaiki sisa galat / *residual* (gradien dari fungsi loss) dari model sebelumnya.
   - Mengurangi **bias** (meningkatkan kapasitas prediksi model).
3. **Stacking (Stacked Generalization)**:
   - Pelatihan heterogen: melatih berbagai famili model yang sangat berbeda (misal: Random Forest + LightGBM + Logistic Regression + kNN) pada Level 0.
   - Prediksi dari seluruh model Level 0 dijadikan *feature input* bagi model meta (*Level 1 Meta-Learner*) untuk mempelajari bobot kombinasi optimal.

---

### 2.4 Random Forest: Rahasia Feature Subsampling ($\sqrt{p}$) {#24-random-forest-feature-subsampling}

Buku teks sering menyebutkan bahwa *diversity* pada Random Forest bersumber dari *bootstrap sampling*. Apakah klaim tersebut sepenuhnya akurat?

<p align="center">
  <img src="/images/teaching/ensemble-xai/15_rf_subsampling.png" alt="Random Forest Feature Subsampling Comparison" style="border-radius: 8px; box-shadow: 0 4px 14px rgba(0,0,0,0.12); max-width: 100%; height: auto;" />
  <br>
  <em>Gambar 2: Perbandingan Root Split pada 12 pohon bootstrap murni vs Random Forest dengan subset fitur acak (Data: 105.000 data kredit).</em>
</p>

#### Temuan Eksperimen:
- **Bootstrap Saja**: Dari 12 *decision tree* yang dilatih pada 12 sampel *bootstrap* terpisah dari 105.000 baris data, seluruh 12 pohon memilih fitur yang sama persis sebagai *root split* (`Late90Days`). Variasi data baris tidak cukup kuat untuk mengubah dominasi fitur terkuat. Korelasi $\rho$ tetap tinggi.
- **Random Forest (+ Random Feature Subsets)**: Pada setiap titik *split*, pohon dibatasi hanya boleh memilih dari $m = \sqrt{p}$ fitur acak.
- Trik ini **sengaja memperlemah masing-masing pohon individu**, namun **menghancurkan korelasi $\rho$ antar-pohon**. Hasilnya, muncul 6 variasi *root split* yang berbeda (`Late90Days`, `Late60Days`, `Late30Days`, `MonthlyIncome`, `CreditUtilization`).

Penurunan nilai $\rho$ ini jauh lebih bernilai dalam rumus variansi daripada sedikit penurunan performa pada pohon individu!

---

### 2.5 Evolusi 30 Tahun Algoritma Boosting {#25-evolusi-30-tahun-algoritma-boosting}

Metode *Boosting* bekerja dengan memperbaiki galat secara bertahap:

$$\hat{y}^{(m)} = \hat{y}^{(m-1)} + \eta \cdot h_m(x)$$

di mana $h_m(x)$ dilatih untuk memprediksi residual $r_i = y_i - \hat{y}_i^{(m-1)}$ dan $\eta$ adalah *learning rate*.

```
AdaBoost (1995)       ──► Re-weighting baris sampel yang salah diprediksi.
      │
Gradient Boosting      ──► Fitting pohon regresi ke pseudo-residual (gradien sembarang fungsi loss).
(Friedman, 2001)
      │
XGBoost (2016)        ──► Ekspansi Taylor orde ke-2, regularisasi L1/L2 terintegrasi, tree-pruning cepat.
      │
LightGBM (2017)       ──► Leaf-wise (best-first) growth, histogram binning, GOSS & EFB (sangat hemat memori & cepat).
      │
CatBoost (2018)       ──► Ordered boosting, native target encoding untuk fitur kategorikal tanpa target leakage.
```

---

### 2.6 Stacking dan Out-Of-Fold Predictions {#26-stacking-dan-out-of-fold-predictions}

Stacking menggabungkan keunggulan representasi dari arsitektur model yang berbeda secara fundamental (misalnya: *linear boundary* dari Logistic Regression dikombinasikan dengan *orthogonal non-linear partition* dari Tree).

> ⚠️ **Perangkap Fatal Stacking: Target Leakage**
>
> Jika model meta (Level 1) dilatih menggunakan prediksi *in-sample* (data *training*) dari model Level 0, model Level 0 yang mengalami *overfitting* akan menghasilkan prediksi sempurna, sehingga model meta memberikan bobot 100% pada model tersebut dan gagal total saat evaluasi data *test*.
>
> **Solusi Standar**: Wajib menggunakan prediksi **Out-Of-Fold (OOF)** via *k-Fold Cross Validation* untuk membangun matriks fitur Level 1.

---

### 2.7 Matriks Komparasi Lengkap Ensemble {#27-matriks-komparasi-lengkap-ensemble}

<p align="center">
  <img src="/images/teaching/ensemble-xai/24_ensemble_comparison.png" alt="Perbandingan Bagging vs Boosting vs Stacking" style="border-radius: 8px; box-shadow: 0 4px 14px rgba(0,0,0,0.12); max-width: 100%; height: auto;" />
  <br>
  <em>Gambar 3: Ringkasan komparasi arsitektural antara Bagging/Random Forest, Boosting, dan Stacking.</em>
</p>

| Dimensi | Bagging / Random Forest | Boosting (XGB/LGBM/CatBoost) | Stacking |
| :--- | :--- | :--- | :--- |
| **Mekanisme Utama** | Menghilangkan variansi (*errors cancel*) | Memperbaiki bias (*errors get fixed*) | Model mempelajari bobot kombinasi |
| **Pola Pelatihan** | Paralel (independen) | Sekuensial (berantai) | Bertingkat (Level 0 $\to$ Level 1) |
| **Risiko Overfitting thdp Jumlah Pohon** | Tidak (menambah pohon membuat kurva makin halus & stabil) | **Ya** (terlalu banyak iterasi tanpa early stopping akan overfit) | **Tinggi** jika tanpa validasi Out-Of-Fold |
| **Kebutuhan Hyperparameter Tuning** | Rendah (biasanya langsung bekerja baik *out-of-the-box*) | Tinggi (butuh tuning *learning rate*, kedalaman, regularisasi) | Sangat Tinggi |
| **Ketahanan thdp Label Noise** | Sangat Kuat | Rentan (cenderung berusaha keras mencocokkan *outlier*) | Bergantung pada model Level 0 |
| **Domain Unggulan** | Tabular aman & cepat | **Pemenang standar kompetisi data tabular** | Pembeda marjinal kompetisi tingkat atas |

---

## 3. Bagian II: Explainable AI (XAI) {#3-bagian-ii-explainable-ai-xai}

Setelah model ensemble (misalnya Gradient Boosting dengan 300 pohon) selesai dilatih dan mencapai skor AUC 0.866, sistem kita kini berstatus **Black-Box**.

Bagaimana kita menjelaskan alasan penolakan pinjaman kepada nasabah atau regulator?

### 3.1 Tiga Persona Pemangku Kepentingan {#31-tiga-persona-pemangku-kepentingan}

Satu model yang sama memiliki tiga audiens berbeda dengan kebutuhan penjelasan yang kontras:

1. **Nasabah / Pengguna (*The Applicant*)**:
   - Pertanyaan: *"Mengapa aplikasi saya ditolak, dan tindakan konkret apa yang harus saya ubah?"*
   - Kebutuhan: **Penjelasan lokal satu kasus dalam satu kalimat ringkas dan actionable.**
2. **Regulator / Tim Kepatuhan (*The Regulator*)**:
   - Pertanyaan: *"Buktikan bahwa model ini tidak mendiskriminasi kelompok demografis tertentu dan mematuhi regulasi."*
   - Kebutuhan: **Auditabilitas global seluruh model secara formal dan terdokumentasi.**
3. **Machine Learning Engineer (*The Developer*)**:
   - Pertanyaan: *"Mengapa performa model anjlok pada segmen data berpenghasilan tidak tetap?"*
   - Kebutuhan: **Diagnostik mendalam untuk proses debugging dan pendeteksian shortcut learning.**

---

### 3.2 Taksonomi Interpretability {#32-taksonomi-interpretability}

<p align="center">
  <img src="/images/teaching/ensemble-xai/33_xai_taxonomy.png" alt="Taksonomi Explainable AI 2x2 Matrix" style="border-radius: 8px; box-shadow: 0 4px 14px rgba(0,0,0,0.12); max-width: 100%; height: auto;" />
  <br>
  <em>Gambar 4: Taksonomi metode interpretasi model: Sumbu Global vs Local dan Sumbu Intrinsic vs Post-hoc.</em>
</p>

- **Global**: Menjelaskan perilaku model secara keseluruhan di seluruh dataset.
- **Local**: Menjelaskan alasan di balik satu prediksi tunggal untuk satu baris observasi spesifik.
- **Intrinsic (Interpretable by Design)**: Model yang dapat dibaca langsung oleh manusia (contoh: koefisien Regresi Linear, bobot Regresi Logistik, pohon keputusan dangkal).
- **Post-Hoc**: Metode penjelas eksternal yang diaplikasikan setelah model *black-box* selesai dilatih (contoh: Permutation Importance, PDP, LIME, SHAP).

---

### 3.3 Jebakan `feature_importances_` Bawaan Tree {#33-jebakan-feature_importances_-bawaan}

Mayoritas praktisi pemula menggunakan atribut bawaan *scikit-learn* atau LightGBM yaitu `model.feature_importances_` (yang menghitung *Mean Decrease in Impurity / MDI* atau Gini Importance).

#### Eksperimen Bukti:
Pada dataset risiko kredit 10 fitur riil, kita menambahkan satu kolom ke-11 berisi **bilangan acak murni** (*pure random noise*):

```python
df["kolom_sampah"] = np.random.rand(len(df))
```

Secara logika, fitur `kolom_sampah` harus berada di peringkat terbawah (peringkat 11). Namun saat dihitung dengan `feature_importances_`, **`kolom_sampah` menempati peringkat ke-2 dari 11 fitur!**

#### Mengapa MDI Berbohong?
1. **Bias terhadap fitur berkardinalitas tinggi / kontinu**: Fitur *float* kontinu memiliki ribuan titik pemotongan kandidat (*candidate split points*), sehingga secara statistik memiliki probabilitas sangat tinggi untuk menurunkan *impurity* murni karena faktor kebetulan (*pure luck*).
2. **Dihitung pada data pelatihan (*Training Data*)**: MDI mengukur seberapa keras model menghafal data *training*, bukan seberapa bermanfaat fitur tersebut dalam generalisasi ke data baru.

---

### 3.4 Permutation Feature Importance {#34-permutation-feature-importance}

Solusi global yang objektif adalah **Permutation Feature Importance**:

1. Latih model hingga selesai.
2. Evaluasi metrik performa awal (misal: ROC-AUC) pada data validasi / *test* yang ditahan (*held-out set*).
3. Untuk setiap fitur $j$:
   - Acak urutan nilai pada kolom $j$ (merusak hubungan antara fitur $j$ dengan target $y$).
   - Evaluasi ulang skor metrik pada data yang telah diacak tersebut.
   - Penurunan skor metrik adalah nilai *importance* sejati dari fitur $j$.

Jika sebuah kolom acak diacak ulang nilainya, skor model tidak akan berubah sama sekali ($\text{Importance} \approx 0$).

---

### 3.5 LIME (Local Interpretable Model-agnostic Explanations) {#35-lime-local-interpretable-model-agnostic-explanations}

Prinsip dasar LIME (Ribeiro et al., 2016): **Meskipun fungsi keputusan global sangat non-linear dan kompleks, di sekitar satu titik observasi tunggal ($x$), fungsi tersebut dapat didekati secara akurat dengan garis lurus (model linear lokal).**

```
                 Global: Sangat bergelombang / non-linear
                        /\     /\
                       /  \___/  \
                               • <--- Zoom in pada satu titik: 
                                      Lokal dapat didekati garis lurus!
```

#### Formulasi Matematis LIME:
Untuk menjelaskan prediksi titik $x$, LIME membuat sampel perturbasi acak $z \in \mathcal{Z}$, memprediksi output dengan *black-box* $f(z)$, dan memberikan bobot jarak eksponensial $\pi_x(z)$:

$$\pi_x(z) = \exp\left( -\frac{D(x, z)^2}{2\sigma^2} \right)$$

Model penjelasan lokal $g(z) = z^\top \hat{\beta}$ diperoleh melalui minimisasi fungsi objektif:

$$\xi(x) = \arg\min_{g \in \mathcal{G}} \sum_{z \in \mathcal{Z}} \pi_x(z) \left( f(z) - g(z) \right)^2 + \Omega(g)$$

Solusi memiliki bentuk tertutup (*closed-form solution*) melalui **Weighted Least Squares (WLS)**:

$$\boxed{\hat{\beta} = \left( Z^\top W Z + \lambda I \right)^{-1} Z^\top W y}$$

di mana vektor koefisien $\hat{\beta}$ adalah nilai kontribusi penjelasan lokal untuk setiap fitur.

> 🔍 **Studi Kasus Klasik LIME: Model Serigala vs Anjing Husky**
>
> Sebuah *deep neural network* memiliki akurasi nyaris sempurna dalam membedakan serigala (*wolf*) vs anjing husky. Saat diuji dengan LIME, terungkap bahwa model sama sekali tidak melihat bentuk telinga, mata, atau moncong hewan—model hanya mendeteksi keberadaan **salju (*snow*) pada latar belakang foto**! Penjelasan XAI adalah sarana *debugging* kritis, bukan sekadar pelengkap regulasi.

---

### 3.6 SHAP dan Landasan Teori Permainan (Shapley Values) {#36-shap-dan-landasan-teori-permainan-shapley}

SHAP (Lundberg & Lee, 2017) mengadopsi konsep **Shapley Values** dari teori permainan kooperatif (Lloyd Shapley, Peraih Nobel Ekonomi 1953):

> **Analogi**: Jika tiga orang $A, B, C$ berkolaborasi menyelesaikan suatu proyek dan menerima imbalan total 90 juta rupiah, berapa pembagian imbalan yang adil untuk masing-masing orang berdasarkan kontribusi marjinalnya di semua kemungkinan urutan koalisi?

<p align="center">
  <img src="/images/teaching/ensemble-xai/47_shapley_table.png" alt="Shapley Values Calculation Table" style="border-radius: 8px; box-shadow: 0 4px 14px rgba(0,0,0,0.12); max-width: 100%; height: auto;" />
  <br>
  <em>Gambar 5: Perhitungan kontribusi marjinal Shapley pada seluruh permutasi urutan koalisi (6 permutasi untuk 3 pemain).</em>
</p>

#### Pemetaan Konsep Teori Permainan ke Machine Learning:
- **Game** $\to$ Model machine learning Anda.
- **Pemain (*Player*)** $\to$ Fitur-fitur input ($x_1, x_2, \dots, x_p$).
- **Imbalan (*Payout*)** $\to$ Selisih antara prediksi saat ini $f(x)$ dengan ekspektasi rata-rata dasar $\mathbb{E}[f(X)]$.
- **Nilai Shapley ($\phi_i$)** $\to$ Nilai atribusi fitur ke-$i$.

#### Rumus Eksak Shapley Value:
$$\boxed{\phi_i(x) = \sum_{S \subseteq N \setminus \{i\}} \frac{|S|! \, (|N| - |S| - 1)!}{|N|!} \left[ v(S \cup \{i\}) - v(S) \right]}$$

#### Empat Sifat Unik (Aksioma) Shapley Values:
Shapley membuktikan bahwa formulasi di atas adalah **satu-satunya metode pembagian** yang memenuhi 4 aksioma keadilan sekaligus:
1. **Efficiency (Akurasi Lokal)**: Total kontribusi semua fitur sama persis dengan deviasi prediksi dari nilai rata-rata:
   $$f(x) = \phi_0 + \sum_{i=1}^M \phi_i(x) \quad \text{di mana } \phi_0 = \mathbb{E}[f(X)]$$
2. **Symmetry**: Dua fitur yang memberikan kontribusi marjinal identik pada setiap subset akan mendapatkan nilai $\phi$ yang sama.
3. **Dummy / Null Player**: Fitur yang tidak pernah mengubah nilai prediksi pada koalisi manapun akan mendapatkan $\phi_i = 0$.
4. **Additivity**: Nilai penjelasan dari gabungan dua model adalah penjumlahan dari nilai penjelasan masing-masing model ($\phi_{f+g} = \phi_f + \phi_g$).

---

### 3.7 TreeSHAP: Keunggulan Komputasi pada Tree {#37-treeshap-keunggulan-komputasi-pada-tree}

Menghitung Shapley value secara eksak membutuhkan evaluasi terhadap $2^p$ subset fitur (eksponensial). Untuk 100 fitur, $2^{100} \approx 1.26 \times 10^{30}$ kombinasi (mustahil dihitung).

Namun untuk model berbasis pohon (*Tree Ensembles* seperti Random Forest, XGBoost, LightGBM, CatBoost), **TreeSHAP** mengeksploitasi struktur pohon keputusan sehingga mampu menghitung nilai Shapley eksak dalam waktu polinomial:

$$\mathcal{O}\left( T \cdot L \cdot D^2 \right)$$

di mana $T$ adalah jumlah pohon, $L$ adalah jumlah daun maksimum, dan $D$ adalah kedalaman pohon maksimum. Model ensemble yang tadinya paling sulit dijelaskan kini memiliki algoritma penjelas eksak tercepat!

---

### 3.8 Mengubah Output SHAP Menjadi Kalimat Manusia {#38-mengubah-output-shap-menjadi-kalimat-manusia}

Plot visual seperti *Waterfall Plot* atau *Force Plot* sangat berguna bagi praktisi sains data, tetapi tidak dapat dipahami oleh nasabah awam. Kita harus mengubah atribusi matematis $\phi_i$ menjadi narasi bahasa manusia yang transparan dan dapat ditindaklanjuti (*actionable*):

<p align="center">
  <img src="/images/teaching/ensemble-xai/58_bank_explanation_comparison.png" alt="Transformasi Penjelasan Model Bank Sebelum dan Sesudah XAI" style="border-radius: 8px; box-shadow: 0 4px 14px rgba(0,0,0,0.12); max-width: 100%; height: auto;" />
  <br>
  <em>Gambar 6: Transformasi dari notifikasi penolakan black-box dingin menjadi adverse action notice yang manusiawi dan transparan.</em>
</p>

#### Contoh Implementasi Bahasa Alami:
> **Pemberitahuan Keputusan Pinjaman**:
> 
> *"Pengajuan pinjaman Anda saat ini belum dapat disetujui.*
> 
> **Faktor utama penyebab keputusan**:
> - Terdeteksi 4 kali keterlambatan pembayaran cicilan di atas 90 hari (+21.4% risiko).
> - Terdeteksi 3 kali keterlambatan pembayaran 60–89 hari (+14.2% risiko).
> 
> **Faktor positif yang mendukung profil Anda**:
> - Anda hanya menggunakan 16% dari total limit kredit yang tersedia (-6.8% risiko).
> - Anda memiliki riwayat kepemilikan rekening kredit yang panjang (-4.1% risiko).
> 
> *Estimasi skor risiko kredit Anda adalah 49.5% (sekitar 7x lipat dari rata-rata pemohon yang disetujui)."*

---

### 3.9 Batas dan Jebakan XAI {#39-batas-dan-jebakan-xai}

1. **Penjelasan $\neq$ Kausalitas (*Explanation is not Causation*)**:
   SHAP menjelaskan dependensi statistik di dalam model, bukan hubungan sebab-akibat di dunia nyata. Rekomendasi *"Turunkan rasio hutang Anda"* adalah pernyataan tentang pola internal model, bukan jaminan kepastian kausal.
2. **Fitur yang Berkorelasi Memecah Skor Kontribusi**:
   Jika terdapat fitur-fitur yang berkorelasi tinggi (misal: `Late30Days`, `Late60Days`, `Late90Days`), SHAP akan membagi imbalan di antara ketiganya, sehingga masing-masing fitur tampak kurang penting secara individual dibandingkan kenyataannya.
3. **Kerentanan Serangan Adversarial (Slack et al., 2020)**:
   Peneliti mendemonstrasikan bahwa model rasis/bias dapat dibungkus dengan *scaffolding logic* khusus yang memanipulasi perturbasi LIME/SHAP sehingga output penjelasannya tampak bersih dan bebas bias.
4. **Peringatan Cynthia Rudin (2019)**:
   > *"Stop explaining black box models for high-stakes decisions and use interpretable models instead."*
   
   Untuk aplikasi berisiko sangat kritis, pertimbangkan menggunakan model yang secara inheren dapat diinterpretasi sejak awal seperti **Explainable Boosting Machines (EBM / GA2M)**.

---

## 4. Playbook Senin Pagi: Checklist Praktis Engineering {#4-playbook-senin-pagi-checklist-praktis}

Berikut adalah panduan 5 langkah yang dapat Anda terapkan langsung pada proyek *machine learning* tabular di tempat kerja atau riset:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   MONDAY MORNING ML ENGINEERING PLAYBOOK              │
├────────────────────────────────────────────────────────────────────────┤
│ 1. BASELINE    │ Mulai dari model sederhana (Logistic Regression/Tree) │
│                │ dan catat metrik acuan sebagai tolok ukur awal.       │
├────────────────┼───────────────────────────────────────────────────────┤
│ 2. ENSEMBLE    │ Coba Random Forest terlebih dahulu (cepat & aman).    │
│                │ Beralih ke LightGBM/CatBoost jika kenaikan skor butuh │
│                │ dimaksimalkan.                                        │
├────────────────┼───────────────────────────────────────────────────────┤
│ 3. VALIDASI    │ Terapkan early stopping & k-Fold Out-Of-Fold (OOF).   │
│                │ Jangan pernah mempercayai skor training set!          │
├────────────────┼───────────────────────────────────────────────────────┤
│ 4. JELASKAN    │ Gunakan Permutation Importance untuk wawasan global.  │
│                │ Gunakan TreeSHAP untuk atribusi prediksi per sampel.  │
├────────────────┼───────────────────────────────────────────────────────┤
│ 5. SANITY      │ Diskusikan penjelasan SHAP bersama pakar domain.      │
│    CHECK       │ Jika penjelasan tidak masuk akal secara fisik/bisnis, │
│                │ model Anda yang salah/overfitting, bukan pakarnya.    │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 5. Referensi & Bacaan Lanjutan {#5-referensi--bacaan-lanjutan}

1. **Buku Utama**: Christoph Molnar, [*Interpretable Machine Learning: A Guide for Making Black Box Models Explainable*](https://christophm.github.io/interpretable-ml-book/) (Tersedia gratis secara daring).
2. **Makalah SHAP**: Scott M. Lundberg & Su-In Lee, *"A Unified Approach to Interpreting Model Predictions"*, NeurIPS 2017.
3. **Makalah TreeSHAP**: Scott M. Lundberg et al., *"From local explanations to global understanding with explainable AI for trees"*, Nature Machine Intelligence 2020.
4. **Makalah LIME**: Marco Tulio Ribeiro, Sameer Singh, Carlos Guestrin, *"'Why Should I Trust You?': Explaining the Predictions of Any Classifier"*, KDD 2016.
5. **Kritik Black-Box**: Cynthia Rudin, *"Stop explaining black box machine learning models for high stakes decisions and use interpretable models instead"*, Nature Machine Intelligence 2019.
6. **Library Python Terkait**:
   - [`shap`](https://github.com/shap/shap): Implementasi standar industri untuk Shapley values & TreeSHAP.
   - [`interpret`](https://github.com/interpretml/interpret): Framework interpretasi dari Microsoft Research termasuk Explainable Boosting Machines (EBM).
   - [`scikit-learn.inspection`](https://scikit-learn.org/stable/modules/classes.html#module-sklearn.inspection): Modul bawaan untuk `permutation_importance` dan `PartialDependenceDisplay`.

---

<div style="text-align: center; margin-top: 2.5rem; padding: 1.5rem; border-top: 1px solid #e4e4e7;">
  <p style="margin-bottom: 0.5rem; font-weight: 600;">Ada pertanyaan atau ingin berdiskusi seputar Ensemble Learning & XAI?</p>
  <p style="color: #71717a; font-size: 0.95rem; margin: 0;">Silakan tinggalkan komentar di bawah atau hubungi saya melalui kanal sosial media di panel profil.</p>
</div>
