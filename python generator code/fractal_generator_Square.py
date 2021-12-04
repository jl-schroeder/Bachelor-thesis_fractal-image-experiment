from tkinter import *
import turtle

turtle.setup(1440,1440)

t = turtle.Turtle()
t.resizemode("user")

t.ht() #hideturtle
t.right(45) #30 for Tri/Penta/Hexa | 45 for Quad
t.penup() #penup


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
    ##    print(t.heading())
    #    turnShape() #for fractal generation

        if t.heading() == 45:
            turnShape()

    #        t.forward(20)
    #        turnShape()
    #        t.backward(20)
    #        t.forward(40)
    #        turnShape()
    #        t.backward(40)

        if t.heading() == 135:
           turnShape()
        if t.heading() == 225:
            turnShape()
        if t.heading() == 315:
            turnShape()

        t.shapesize(1,1,1)

    else:

        if order != depth:
            level = (depth-order)+1
            objSize = (genSize/level)
            t.shapesize(objSize,objSize,1)
            #t.left(30) #activate for square
            turnShape()
            #t.right(30) #activate for square
            t.shapesize(1,1,1)

        # change to Non-Fractal:
#        if order == 2:
#            t.left(45)
#        if order == 1:
#            t.right(45) # half of t.left() below in for-loop

        for i in range(0,4):
            t.forward(size)
            hierarchical_recursion(size/2.2,order-1)
            t.backward(size)
            t.left(90)

        # change to Non-Fractal:
#        if order == 2:
#            t.right(45)
#        if order == 1:
#            t.left(45) # same as t.right() in other non-fractal change

#function to turn shapes correctly
# for some shapes need to add fine rotation (e.g. triangle + 150, arrow -90)
def turnShape():

    turtleStats = t.heading()
    #
    t.right(turtleStats-90)
    t.stamp()
    t.left(turtleStats-90)

#______________________________________________________________________________ PROGRAM START:


t.right(90)
t.forward(50)
t.left(90)

# change shape (might need to look at turnShape() for adjustment!):
#t.shape('circle')
t.speed(100)


t.shapesize(genSize,genSize,1)
turnShape()
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
