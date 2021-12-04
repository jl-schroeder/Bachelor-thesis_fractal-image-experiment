from tkinter import *
import turtle

turtle.setup(1440,1440)
#turtle.resizemode('auto')
t = turtle.Turtle()
t.resizemode("user")

t.ht() #hideturtle
#print(t.heading())
t.right(30) #30 for Tri//Hexa | 45 for Quad | -18 Penta
t.penup() #penup

#____________________
# Setup

#define depth of fractal
depth = 4

#define objSize
genSize = 8 #change to 8 for arrow, else 6


#____________________

# recursive function
def hierarchical_recursion(size, order):

    if order == 0:

        t.shapesize(genSize/(2*depth),genSize/(2*depth),1)
#        print(t.heading())
#        turnShape(order) #for fractal generation

        if t.heading() == 150.0:   # TRI 90 210 330 TRI_false 150 260 30| QUAD_false 0 90 180 270  QUAD 45 135 225 315
            turnShape(order)
        if t.heading() == 270.0:
           turnShape(order)
        if t.heading() == 30.0:
            turnShape(order)

#        if t.heading() == 315.0:
#            turnShape(order)

        t.shapesize(1,1,1)

    else:
        if order != depth:
            level = (depth-order)+1
            objSize = (genSize/level)
            t.shapesize(objSize,objSize,1)
            #t.left(30) #activate for square
            turnShape(order)
            #t.right(30) #activate for square
            t.shapesize(1,1,1)

        # change to Non-Fractal:
#        if order == 2:
#            t.left(60)
        if order == 1:
            t.right(60) # half of t.left() below in for-loop

        for i in range(0,3):
            t.forward(size)
            hierarchical_recursion(size/2.2,order-1)
            t.backward(size)
            t.left(120) # Tri:120 Quad:90 Penta:72 Hexa:60

        # change to Non-Fractal:
#        if order == 2:
#            t.right(60)
        if order == 1:
            t.left(60) # same as t.right() in other non-fractal change

#function to turn shapes correctly
# for some shapes need to add fine rotation (triangle + 150, arrow -90)
def turnShape(order):

    arrowMove = 0
    if order == depth:
        arrowMove = 32
    if order == depth-1:
        arrowMove = 16
    if order == depth-2:
        arrowMove = 12
    if order == depth-3:
        arrowMove = 8 # former 10 | 7 for ..._false_4
    if order == depth-4:
        arrowMove = 4

    turtleStats = t.heading()
    t.right(turtleStats-90)
    t.forward(arrowMove)
    t.stamp()
    t.backward(arrowMove)
    t.left(turtleStats-90)

#______________________________________________________________________________ PROGRAM START:


t.right(90)
t.forward(50)
t.left(90)
#t.shape('square')
t.speed(100)
t.shapesize(genSize,genSize,1)
turnShape(depth)
t.shapesize(1,1,1)

# close to avoid devision through 0
if depth == 0:
    ts = t.getscreen()
    ts.getcanvas().postscript(file="fractal_generated_pictures/tempFile.eps")
    turtle.done()

# run function and let python turtle draw
hierarchical_recursion(300,depth)
ts = t.getscreen()
ts.getcanvas().postscript(file="fractal_generated_pictures/tempFile.eps")
turtle.done()
