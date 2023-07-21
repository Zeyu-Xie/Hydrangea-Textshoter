from PIL import Image, ImageDraw, ImageFont
import sys

# ------------

# Margin
margin_x = 12
margin_y = 12

# Font
font_size = 16
font = ImageFont.truetype("Sarasa.ttf", font_size)

# Line
line_space = 10
line_height = font_size

# Size
width = 400

# str
str = ""
with open("input.in", "r") as file:
    str = file.read()
# color
color = "red"

# ------------

im = Image.new("RGB", (1, 1), "white")
d = ImageDraw.Draw(im)


class word:
    str = ""
    start = -1
    end = -1
    len = -1
    wit = -1

    def __init__(self, str, start):
        self.str = str
        self.start = start
        self.len = len(self.str)
        self.wit = 0
        for i in range(0, len(self.str)):
            x, y = d.textsize(chr(ord(self.str[i])), font=font)
            self.wit += x
        self.end = self.start+self.wit

    def print_(self):
        print(self.str)


class line:
    index = -1
    text = []
    wit = -1

    def __init__(self, index):
        self.index = index
        self.text = []
        self.wit = 0

    def add(self, w):
        self.text.append(w.str)
        self.wit += w.wit+font_size*0.5

    def print_(self):
        print(self.text)


word_list = str.split()
word_num = len(word_list)
line_list = [line(0)]
line_num = 1
width_draft = 0

for i in range(0, word_num):
    word_list[i] = word(word_list[i], width_draft)
    width_draft += word_list[i].wit

for i in range(0, word_num):
    print(word_list[i].start, word_list[i].end)

for i in range(0, word_num):
    line_list[line_num-1].add(word_list[i])
    if i == word_num-1:
        break
    if (line_list[line_num-1].wit+word_list[i+1].wit+font_size*0.5+margin_x*2 > width):
        line_num += 1
        line_list.append(line(line_num-1))

for i in range(0, line_num):
    line_list[i].print_()
    print(line_list[i].wit)

height = line_height*line_num+line_space*(line_num-1)+margin_y*2

im_ = Image.new("RGB", (width, height), "white")
d_ = ImageDraw.Draw(im_)

t_y = margin_y

for i in range(0, line_num):
    t_x = margin_x
    for j in range(0, len(line_list[i].text)):
        for k in range(0, len(line_list[i].text[j])):
            d_.text((t_x, t_y), line_list[i].text[j]
                    [k], fill=color, anchor="la", font=font)
            x, y = d.textsize(chr(ord(line_list[i].text[j][k])), font=font)
            t_x += x
        t_x += font_size*0.5
    t_y += line_height+line_space

im_.save("test.jpeg")
