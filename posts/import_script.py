# %cd /home/workspace/honeyboss/posts
from bs4 import BeautifulSoup
import requests

res = requests.get("http://www.honeyboss.com/posts").text
soup = BeautifulSoup(res)
urls = [t.get("href") for t in soup.find_all("a")]


for sc in urls:
    print(sc)
    soup = BeautifulSoup(requests.get("http://www.honeyboss.com" + sc).text)
    title = soup.find('h3').text
    soup.find('div', class_='post_main')
    txt = soup.find('div', class_='post_main').prettify().split('</h3>')[1]
    with open(f"{sc.split('/')[-1]}.markdown", 'wt') as f:
        f.write(f'''---
layout: post
title: {title}
permalink: {sc}
---
        ''')
        f.write(txt.replace('<div>', '').replace('</div>', ''))
                         
                         
                         
