from PIL import Image, ImageDraw, ImageFont
import sys


# Margin
margin_x = 30
margin_y = 10

# Var
tot_x = margin_x
tot_y = margin_y

endline_num = 2

# Font
font_size = 16
font = ImageFont.truetype("Sarasa.ttf", font_size)


# Line
line_space = 0
line_height = font_size

# str
str = ""
with open("input.in", "r") as file:
    str = file.read()

# Size
width = 400
height = margin_y*2+(line_space+line_height)*(len(str) //
                                              ((width-margin_x*2)//font_size)+1+endline_num)


class word:
    str = ""
    start = -1
    end = -1
    len = -1

    def __init__(self, str, start, len):
        self.str = str
        self.start = start
        self.len = len
        self.end = start+len

    def print_(self):
        print(self.str)


class line:
    index = -1
    text = []

    def __init__(self, index):
        self.index = index
        self.text = []

    def add(self, w):
        self.text.append(w.str)

    def print_(self):
        print(self.text)


im = Image.new("RGB", (width, height), "white")
d = ImageDraw.Draw(im)

# print(d.textlength('人', font=font))

# for index in range(0, len(str)):
#     if str[index] == '\n':
#         tot_y += font_size
#         tot_x = margin_x
#         if tot_y+font_size+margin_y > height:
#             break
#         else:
#             continue
#     else:
#         d.text((tot_x, tot_y), str[index], fill="blue", anchor="la", font=font)

#     if index == len(str)-1:
#         break
#     else:
#         x, y = d.textsize(chr(ord(str[index+1])), font=font)
#         print(x, y)
#     tot_x += x
#     if tot_x+font_size+margin_x > width:
#         tot_y += font_size
#         tot_x = margin_x
#     if tot_y+font_size+margin_y > height:
#         break

# im.save("test.jpeg")

# im.save("test.jpeg", "JPEG")
