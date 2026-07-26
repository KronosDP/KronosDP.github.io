import os
import glob

dirs = ['_teaching', '_portfolio', '_posts', '_pages']
for d in dirs:
    if not os.path.exists(d): continue
    for f in os.listdir(d):
        if f.endswith('.md') or f.endswith('.html'):
            p = os.path.join(d, f)
            with open(p, 'rb') as fp:
                content = fp.read()
            if content.startswith(b'\xef\xbb\xbf'):
                print(f'Removing BOM from {p}')
                with open(p, 'wb') as fp:
                    fp.write(content[3:])
print('Done.')
