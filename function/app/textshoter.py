from PIL import Image, ImageDraw, ImageFont
import os
import warnings
from .word import word
from .line import line

warnings.filterwarnings("ignore")

script_path = os.path.abspath(__file__)
script_directory = os.path.dirname(script_path)


def textshoter(margin_x, margin_y, font_size, line_space, width, color, str):

    line_height = font_size

    font_file_path = os.path.join(script_directory, "Sarasa.ttf")
    font = ImageFont.truetype(font_file_path, font_size)

    im = Image.new("RGB", (1, 1), "white")
    d = ImageDraw.Draw(im)

    word_list = str.split()
    word_num = len(word_list)

    line_list = [line(0)]
    line_num = 1
    width_tmp = 0

    for i in range(0, word_num):
        word_list[i] = word(word_list[i], width_tmp, font)
        width_tmp += word_list[i].wit

    for i in range(0, word_num):
        line_list[line_num-1].add(word_list[i], font_size)
        if i == word_num-1:
            break
        if (line_list[line_num-1].wit+word_list[i+1].wit+font_size*0.5+margin_x*2 > width):
            line_num += 1
            line_list.append(line(line_num-1))

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

    image_file_path = os.path.join(script_directory, "textshoter.jpeg")
    im_.save(image_file_path)


if __name__ == "__main__":
    textshoter()
