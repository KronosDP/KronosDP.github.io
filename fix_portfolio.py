import os

filepath = r"d:\Codingan\DaBlog\blog-baru\KronosDP.github.io\_portfolio\2023-12-22-portfolio.md"

with open(filepath, "r", encoding="utf-8") as f:
    text = f.read()

# Insert after the frontmatter ends and before GEMASTIK
target = "### GEMASTIK Triumph"

insertion = """
# **Passionate Pursuit of Excellence 🚀**

Dedication fuels my relentless pursuit of knowledge and self-improvement in the technical realm. I've proudly achieved significant milestones and garnered valuable experiences, showcasing my commitment to growth. Here's a glimpse into my journey:

## Accomplishments with Provided Links

"""

if target in text and "Passionate Pursuit of Excellence" not in text:
    new_text = text.replace(target, insertion + target)
    with open(filepath, "w", encoding="utf-8", newline="\n") as f:
        f.write(new_text)
    print("Fixed!")
else:
    print("Already fixed or target not found.")
