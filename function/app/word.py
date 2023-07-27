from PIL import Image, ImageDraw


class word:

    str = ""
    len = -1
    start = -1
    end = -1
    wit = -1

    def __init__(self, str, start, font_):
        im = Image.new("RGB", (1, 1), "white")
        d = ImageDraw.Draw(im)
        self.str = str
        self.start = start
        self.len = len(self.str)
        self.wit = 0
        for i in range(0, len(self.str)):
            x = d.textlength(chr(ord(self.str[i])), font=font_)
            self.wit += x
        self.end = self.start+self.wit

    def print_(self):
        print(self.str)
