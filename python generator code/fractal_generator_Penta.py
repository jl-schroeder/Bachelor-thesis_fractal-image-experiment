from tkinter import *
import turtle

turtle.setup(1440,1440)

t = turtle.Turtle()
t.resizemode("user")

t.ht() #hideturtle
t.right(30)
t.penup() #penup

#define depth of fractal
depth = 2

#define objSize
genSize = 8

# recursive function
def hierarchical_recursion(size, order):

    if order == 0:

        t.shapesize(genSize/(2*depth),genSize/(2*depth),1)
#        print(t.heading())
#        turnShape(order)
        if t.heading() == 54.0: #18.0 90.0 162.0 234.0 306.0 FALSE: 54 126 198 270 342
            turnShape(order)
        if t.heading() == 126.0:
            turnShape(order)
        if t.heading() == 198.0:
            turnShape(order)
        if t.heading() == 270.0:
            turnShape(order)
        if t.heading() == 342.0:
            turnShape(order)

        t.shapesize(1,1,1)

    else:

        if order != depth:
            level = (depth-order)+1
            objSize = (genSize/level)
            t.shapesize(objSize,objSize,1)
            #t.left(30) #activate for square
            turnShape(order)
            #t.stamp()
            #t.right(30) #activate for square
            t.shapesize(1,1,1)

#        if order == 2:
#            t.left(36)
#
        if order == 1:
            t.right(36)

        for i in range(0,5):
            t.forward(size)
            hierarchical_recursion(size/2.5,order-1)
            t.backward(size)
            t.left(72)

#        if order == 2:
#            t.right(36)
#
        if order == 1:
            t.left(36)

#function to turn shapes correctly
# for some shapes need to add fine rotation (e.g. triangle + 150)
def turnShape(order):

    arrowMove = 0
    if order == depth:
        arrowMove = 32
    if order == depth-1:
        arrowMove = 22
    if order == depth-2:
        arrowMove = 14
    if order == depth-3:
        arrowMove = 10 # former 10 | 7 for ..._false_4
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

# change shape (might need to look at turnShape() for adjustment!):
#t.shape('triangle')
t.speed(100)

t.shapesize(genSize,genSize,1)
turnShape(depth)
t.shapesize(1,1,1)

# n order to make pentagon right side up
t.left(48)

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
