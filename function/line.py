class line:
    index = -1
    text = []
    wit = -1

    def __init__(self, index):
        self.index = index
        self.text = []
        self.wit = 0

    def add(self, w, font_size_):
        self.text.append(w.str)
        self.wit += w.wit+font_size_*0.5

    def print_(self):
        print(self.text)