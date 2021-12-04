from tkinter import *
import turtle

turtle.setup(1440,1440)
t = turtle.Turtle()
t.resizemode("user")
t.ht() #hideturtle
t.right(30)
t.penup() #penup

# Setup:
# define depth of fractal
depth = 4

#define objSize
genSize = 6 #change to 8 for arrow
#____________________

# recursive function
def hierarchical_recursion(size, order):

    if order == 0:
        t.shapesize(genSize/(2*depth),genSize/(2*depth),1)
    #    turnShape() #for fractal generation
        if t.heading() == 90:
            turnShape()

    #        t.forward(20)
    #        turnShape()
    #        t.backward(20)
    #        t.forward(40)
    #        turnShape()
    #        t.backward(40)

        #if t.heading() == 210:
        #    turnShape()
        #if t.heading() == 330:
        #    turnShape()

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
#            t.left(60)
#        if order == 1:
#            t.right(60) # half of t.left() below in for-loop

        for i in range(0,3):
            t.forward(size)
            hierarchical_recursion(size/2.2,order-1)
            t.backward(size)
            t.left(120)

        # change to Non-Fractal:
#        if order == 2:
#            t.right(60)
#        if order == 1:
#            t.left(60) # same as t.right() in other non-fractal change


#function to turn shapes correctly
# for some shapes need to add fine rotation (e.g. triangle + 150, arrow -90)
def turnShape():

    turtleStats = t.heading()
    #
    t.right(turtleStats)#+150)
    t.stamp()
    t.left(turtleStats)#+150)

#______________________________________________________________________________ PROGRAM START:


t.right(90)
t.forward(50)
t.left(90)

# change shape (might need to look at turnShape() for adjustment!):
t.shape('circle')
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
