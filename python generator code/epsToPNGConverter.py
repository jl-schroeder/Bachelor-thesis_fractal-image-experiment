from PIL import Image

# read temporary image eps file
image_eps = 'tempFile.eps'
im = Image.open(image_eps)

fig = im.convert('RGBA')

image_png= 'images/new_arrow/Hexa_arrow_2_iteration_6_false.png'
#iteration 'images/Tri_square_4_iteration_3.png'
#false_turn 'images/Tri_square_4_false_4.png'
#fractal 'images/Tri_square_4.png'

#save image as png file
fig.save(image_png, lossless = True)
