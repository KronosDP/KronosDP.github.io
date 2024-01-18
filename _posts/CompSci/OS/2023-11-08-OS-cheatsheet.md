---
title: "OS: Cheatsheet for Making Tarball and Copy TO OS1"
date: 2023-11-8 10:57:30 +0700
categories: [CompSci, Operating System]
tags: [
Operating Systems,
Cheatsheet,
Tarball,
Compression,
XZ,
Encryption,
Asymmetric Encryption,
GPG,
SCP,
SSH,
Command Line,
Bash,
Linux,
File Transfer,
Tutorial
]
---

## Disclaimer

This cheatsheet is based on Fredo's Notebook on his notion namely his OS CheatSheet. Lots of the content of this blog is based of his cheatsheet.

## Steps

### Archive the directory to tarball as file "WEEK07.tar"

Firstly, do this line to make a new tar named `WEEK07.tar` from your folder (in this case `KronosDP`)

```bash
tar cvf WEEK07.tar KronosDP
```

### Compressing Tarball With "xz"

Next, to compress convert `tarball` to `xz`, do this line. The example below is to convert `WEEK07.tar` to `WEEK07.tar.xz`

```bash
xz -v WEEK07.tar
```

### Encrypting the file Aymmetrically

To encrypt your file, do this line. This line basically made a new file called `WEEK07.tar.xz.asc` from `WEEK07.tar.xz`. The `asc` file is the file that has been encrypted.

```bash
gpg --armor --output WEEK07.tar.xz.asc --encrypt --recipient 63FB12B215403B20 --recipient 9872F455A8A21061 WEEK07.tar.xz
```

### Copying to `os1.cs.ui.ac.id.`

To copy the `asc` file from the `current` directory to `/home/zzzSHARE/KronosDP/` do this line

```bash
scp WEEK07.tar.xz.asc KronosDP@os1.cs.ui.ac.id:/home/zzzSHARE/KronosDP/
```

### Checking your encrypted file on `os1.cs.ui.ac.id.`

To check that your file has been copied on `/home/zzzSHARE/KronosDP/`, do this:

```bash
ssh KronosDP@os1.cs.ui.ac.id
cd /home/zzzSHARE/KronosDP/
```

Then check your file that you just copied there.
