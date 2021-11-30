// Here, you can define all custom functions, you want to use and initialize some variables

/* Variables
*
*
*/
const coin = _.sample(["head", "tail"]); // You can determine global (random) parameters here
// Declare your variables here

// decide if this experiement is the counterbalanced version of the key-press task
const counterBal = _.sample(["normal","balance"]);

var gKeyRole = "";
var hKeyRole = "";

// assign value to kes for instructions
if(counterBal == "normal"){
  gKeyRole = "a fractal";
  hKeyRole = "not a fractal";
} else {
  hKeyRole = "a fractal";
  gKeyRole = "not a fractal";
}

continuation_test_list = [
  {p1:"images/Generated_Pictures/Quad_arrow_0.png", p2:"images/Generated_Pictures/Quad_arrow_1.png", p3:"images/Generated_Pictures/Quad_arrow_2.png", p4:"images/Generated_Pictures/Quad_arrow_3.png",  p5:"images/Generated_Pictures/Quad_arrow_4_false_4.png", p6:"images/Generated_Pictures/Quad_arrow_4.png", answer:"right"},
  {p1:"images/Generated_Pictures/Quad_square_3.png", p2:"images/Generated_Pictures/Quad_square_4_iteration_1.png", p3:"images/Generated_Pictures/Quad_square_4_iteration_2.png", p5:"images/Generated_Pictures/Quad_square_4_iteration_3_false.png", p6:"images/Generated_Pictures/Quad_square_4_iteration_3.png", answer:"right"},
];

// tri-images fractal /// done //PROBLEM: Quad_circle_4_iteration_3_false (?)
continuation_list_fractal = [
  {p1:"images/Generated_Pictures/Tri_circle_0.png", p2:"images/Generated_Pictures/Tri_circle_1.png", p3:"images/Generated_Pictures/Tri_circle_2.png", p4:"images/Generated_Pictures/Tri_circle_3.png",  p5:"images/Generated_Pictures/Tri_circle_4.png", p6:"images/Generated_Pictures/Tri_circle_4_false_4.png", answer:"left"},
  {p1:"images/Generated_Pictures/Tri_circle_0.png", p2:"images/Generated_Pictures/Tri_circle_1.png", p3:"images/Generated_Pictures/Tri_circle_2.png", p4:"images/Generated_Pictures/Tri_circle_3.png",  p5:"images/Generated_Pictures/Tri_circle_4.png", p6:"images/Generated_Pictures/Tri_circle_4_false_3.png", answer:"left"},
  {p1:"images/Generated_Pictures/Tri_circle_0.png", p2:"images/Generated_Pictures/Tri_circle_1.png", p3:"images/Generated_Pictures/Tri_circle_2.png",  p5:"images/Generated_Pictures/Tri_circle_3_false_3.png", p6:"images/Generated_Pictures/Tri_circle_3.png", answer:"right"},
  {p1:"images/Generated_Pictures/Tri_square_0.png", p2:"images/Generated_Pictures/Tri_square_1.png", p3:"images/Generated_Pictures/Tri_square_2.png", p4:"images/Generated_Pictures/Tri_square_3.png",  p5:"images/Generated_Pictures/Tri_square_4.png", p6:"images/Generated_Pictures/Tri_square_4_false_4.png", answer:"left"},
  {p1:"images/Generated_Pictures/Tri_square_0.png", p2:"images/Generated_Pictures/Tri_square_1.png", p3:"images/Generated_Pictures/Tri_square_2.png", p4:"images/Generated_Pictures/Tri_square_3.png",  p5:"images/Generated_Pictures/Tri_square_4_false_3.png", p6:"images/Generated_Pictures/Tri_square_4.png", answer:"right"},
  {p1:"images/Generated_Pictures/Tri_square_0.png", p2:"images/Generated_Pictures/Tri_square_1.png", p3:"images/Generated_Pictures/Tri_square_2.png",  p5:"images/Generated_Pictures/Tri_square_3.png", p6:"images/Generated_Pictures/Tri_square_3_false_3.png", answer:"left"},
  {p1:"images/Generated_Pictures/Tri_triangle_0.png", p2:"images/Generated_Pictures/Tri_triangle_1.png", p3:"images/Generated_Pictures/Tri_triangle_2.png", p4:"images/Generated_Pictures/Tri_triangle_3.png",  p5:"images/Generated_Pictures/Tri_triangle_4_false_4.png", p6:"images/Generated_Pictures/Tri_triangle_4.png", answer:"right"},
  {p1:"images/Generated_Pictures/Tri_triangle_0.png", p2:"images/Generated_Pictures/Tri_triangle_1.png", p3:"images/Generated_Pictures/Tri_triangle_2.png", p4:"images/Generated_Pictures/Tri_triangle_3.png",  p5:"images/Generated_Pictures/Tri_triangle_4.png", p6:"images/Generated_Pictures/Tri_triangle_4_false_3.png", answer:"left"},
  {p1:"images/Generated_Pictures/Tri_triangle_0.png", p2:"images/Generated_Pictures/Tri_triangle_1.png", p3:"images/Generated_Pictures/Tri_triangle_2.png",  p5:"images/Generated_Pictures/Tri_triangle_3_false_3.png", p6:"images/Generated_Pictures/Tri_triangle_3.png", answer:"right"},
  {p1:"images/Generated_Pictures/Tri_arrow_0.png", p2:"images/Generated_Pictures/Tri_arrow_1.png", p3:"images/Generated_Pictures/Tri_arrow_2.png", p4:"images/Generated_Pictures/Tri_arrow_3.png", p5:"images/Generated_Pictures/Tri_arrow_4_false_4.png", p6:"images/Generated_Pictures/Tri_arrow_4.png", answer:"right"},
  {p1:"images/Generated_Pictures/Tri_arrow_0.png", p2:"images/Generated_Pictures/Tri_arrow_1.png", p3:"images/Generated_Pictures/Tri_arrow_2.png", p4:"images/Generated_Pictures/Tri_arrow_3.png", p5:"images/Generated_Pictures/Tri_arrow_4_false_3.png", p6:"images/Generated_Pictures/Tri_arrow_4.png", answer:"right"},
  {p1:"images/Generated_Pictures/Tri_arrow_0.png", p2:"images/Generated_Pictures/Tri_arrow_1.png", p3:"images/Generated_Pictures/Tri_arrow_2.png",  p5:"images/Generated_Pictures/Tri_arrow_3.png", p6:"images/Generated_Pictures/Tri_arrow_3_false_3.png", answer:"left"},
  {p1:"images/Generated_Pictures/Quad_circle_0.png", p2:"images/Generated_Pictures/Quad_circle_1.png", p3:"images/Generated_Pictures/Quad_circle_2.png", p4:"images/Generated_Pictures/Quad_circle_3.png", p5:"images/Generated_Pictures/Quad_circle_4.png", p6:"images/Generated_Pictures/Quad_circle_4_false_4.png", answer:"left"},
  {p1:"images/Generated_Pictures/Quad_circle_0.png", p2:"images/Generated_Pictures/Quad_circle_1.png", p3:"images/Generated_Pictures/Quad_circle_2.png", p4:"images/Generated_Pictures/Quad_circle_3.png", p5:"images/Generated_Pictures/Quad_circle_4_false_3.png", p6:"images/Generated_Pictures/Quad_circle_4.png", answer:"right"},
  {p1:"images/Generated_Pictures/Quad_circle_0.png", p2:"images/Generated_Pictures/Quad_circle_1.png", p3:"images/Generated_Pictures/Quad_circle_2.png",  p5:"images/Generated_Pictures/Quad_circle_3_false_3.png", p6:"images/Generated_Pictures/Quad_circle_3.png", answer:"right"},
  {p1:"images/Generated_Pictures/Quad_circle_0.png", p2:"images/Generated_Pictures/Quad_circle_1.png", p3:"images/Generated_Pictures/Quad_circle_2.png",  p5:"images/Generated_Pictures/Quad_circle_3.png", p6:"images/Generated_Pictures/Quad_circle_3_false_2.png", answer:"left"},
  {p1:"images/Generated_Pictures/Quad_square_0.png", p2:"images/Generated_Pictures/Quad_square_1.png", p3:"images/Generated_Pictures/Quad_square_2.png", p4:"images/Generated_Pictures/Quad_square_3.png",  p5:"images/Generated_Pictures/Quad_square_4.png", p6:"images/Generated_Pictures/Quad_square_4_false_4.png", answer:"left"},
  {p1:"images/Generated_Pictures/Quad_square_0.png", p2:"images/Generated_Pictures/Quad_square_1.png", p3:"images/Generated_Pictures/Quad_square_2.png", p4:"images/Generated_Pictures/Quad_square_3.png",  p5:"images/Generated_Pictures/Quad_square_4.png", p6:"images/Generated_Pictures/Quad_square_4_false_3.png", answer:"left"},
  {p1:"images/Generated_Pictures/Quad_square_0.png", p2:"images/Generated_Pictures/Quad_square_1.png", p3:"images/Generated_Pictures/Quad_square_2.png",  p5:"images/Generated_Pictures/Quad_square_3.png", p6:"images/Generated_Pictures/Quad_square_3_false_3.png", answer:"left"},
  {p1:"images/Generated_Pictures/Quad_square_0.png", p2:"images/Generated_Pictures/Quad_square_1.png", p3:"images/Generated_Pictures/Quad_square_2.png",  p5:"images/Generated_Pictures/Quad_square_3.png", p6:"images/Generated_Pictures/Quad_square_3_false_2.png", answer:"left"},
  {p1:"images/Generated_Pictures/Quad_triangle_0.png", p2:"images/Generated_Pictures/Quad_triangle_1.png", p3:"images/Generated_Pictures/Quad_triangle_2.png", p4:"images/Generated_Pictures/Quad_triangle_3.png", p5:"images/Generated_Pictures/Quad_triangle_4_false_3.png", p6:"images/Generated_Pictures/Quad_triangle_4.png", answer:"right"},
  {p1:"images/Generated_Pictures/Quad_triangle_0.png", p2:"images/Generated_Pictures/Quad_triangle_1.png", p3:"images/Generated_Pictures/Quad_triangle_2.png", p4:"images/Generated_Pictures/Quad_triangle_3.png", p5:"images/Generated_Pictures/Quad_triangle_4_false_4.png", p6:"images/Generated_Pictures/Quad_triangle_4.png", answer:"right"},
  {p1:"images/Generated_Pictures/Quad_triangle_0.png", p2:"images/Generated_Pictures/Quad_triangle_1.png", p3:"images/Generated_Pictures/Quad_triangle_2.png",  p5:"images/Generated_Pictures/Quad_triangle_3_false_3.png", p6:"images/Generated_Pictures/Quad_triangle_3.png", answer:"right"},
  {p1:"images/Generated_Pictures/Quad_triangle_0.png", p2:"images/Generated_Pictures/Quad_triangle_1.png", p3:"images/Generated_Pictures/Quad_triangle_2.png",  p5:"images/Generated_Pictures/Quad_triangle_3_false_2.png", p6:"images/Generated_Pictures/Quad_triangle_3.png", answer:"right"},
  {p1:"images/Generated_Pictures/Quad_arrow_0.png", p2:"images/Generated_Pictures/Quad_arrow_1.png", p3:"images/Generated_Pictures/Quad_arrow_2.png", p4:"images/Generated_Pictures/Quad_arrow_3.png", p5:"images/Generated_Pictures/Quad_arrow_4_false_4.png", p6:"images/Generated_Pictures/Quad_arrow_4.png", answer:"right"},
  {p1:"images/Generated_Pictures/Quad_arrow_0.png", p2:"images/Generated_Pictures/Quad_arrow_1.png", p3:"images/Generated_Pictures/Quad_arrow_2.png", p4:"images/Generated_Pictures/Quad_arrow_3.png", p5:"images/Generated_Pictures/Quad_arrow_4.png", p6:"images/Generated_Pictures/Quad_arrow_4_false_3.png", answer:"left"},
  {p1:"images/Generated_Pictures/Quad_arrow_0.png", p2:"images/Generated_Pictures/Quad_arrow_1.png", p3:"images/Generated_Pictures/Quad_arrow_2.png",  p5:"images/Generated_Pictures/Quad_arrow_3.png", p6:"images/Generated_Pictures/Quad_arrow_3_false_3.png", answer:"left"},
  {p1:"images/Generated_Pictures/Quad_arrow_0.png", p2:"images/Generated_Pictures/Quad_arrow_1.png", p3:"images/Generated_Pictures/Quad_arrow_2.png",  p5:"images/Generated_Pictures/Quad_arrow_3.png", p6:"images/Generated_Pictures/Quad_arrow_3_false_2.png", answer:"left"},
  {p1:"images/Generated_Pictures/Penta_circle_0.png", p2:"images/Generated_Pictures/Penta_circle_1.png", p3:"images/Generated_Pictures/Penta_circle_2.png", p5:"images/Generated_Pictures/Penta_circle_3.png", p6:"images/Generated_Pictures/Penta_circle_3_false_3.png", answer:"left"},
  {p1:"images/Generated_Pictures/Penta_circle_0.png", p2:"images/Generated_Pictures/Penta_circle_1.png", p3:"images/Generated_Pictures/Penta_circle_2.png", p5:"images/Generated_Pictures/Penta_circle_3.png", p6:"images/Generated_Pictures/Penta_circle_3_false_2.png", answer:"left"},
  {p1:"images/Generated_Pictures/Penta_square_0.png", p2:"images/Generated_Pictures/Penta_square_1.png", p3:"images/Generated_Pictures/Penta_square_2.png", p5:"images/Generated_Pictures/Penta_square_3.png", p6:"images/Generated_Pictures/Penta_square_3_false_3.png", answer:"left"},
  {p1:"images/Generated_Pictures/Penta_square_0.png", p2:"images/Generated_Pictures/Penta_square_1.png", p3:"images/Generated_Pictures/Penta_square_2.png", p5:"images/Generated_Pictures/Penta_square_3_false_2.png", p6:"images/Generated_Pictures/Penta_square_3.png", answer:"right"},
  {p1:"images/Generated_Pictures/Penta_triangle_0.png", p2:"images/Generated_Pictures/Penta_triangle_1.png", p3:"images/Generated_Pictures/Penta_triangle_2.png", p5:"images/Generated_Pictures/Penta_triangle_3.png", p6:"images/Generated_Pictures/Penta_triangle_3_false_2.png", answer:"left"},
  {p1:"images/Generated_Pictures/Penta_triangle_0.png", p2:"images/Generated_Pictures/Penta_triangle_1.png", p3:"images/Generated_Pictures/Penta_triangle_2.png", p5:"images/Generated_Pictures/Penta_triangle_3_false_3.png", p6:"images/Generated_Pictures/Penta_triangle_3.png", answer:"right"},
  {p1:"images/Generated_Pictures/Penta_arrow_0.png", p2:"images/Generated_Pictures/Penta_arrow_1.png", p3:"images/Generated_Pictures/Penta_arrow_2.png", p5:"images/Generated_Pictures/Penta_arrow_3_false_3.png", p6:"images/Generated_Pictures/Penta_arrow_3.png", answer:"right"},
  {p1:"images/Generated_Pictures/Penta_arrow_0.png", p2:"images/Generated_Pictures/Penta_arrow_1.png", p3:"images/Generated_Pictures/Penta_arrow_2.png", p5:"images/Generated_Pictures/Penta_arrow_3.png", p6:"images/Generated_Pictures/Penta_arrow_3_false_2.png", answer:"left"},
  {p1:"images/Generated_Pictures/Hexa_circle_0.png", p2:"images/Generated_Pictures/Hexa_circle_1.png", p3:"images/Generated_Pictures/Hexa_circle_2.png", p5:"images/Generated_Pictures/Hexa_circle_3.png", p6:"images/Generated_Pictures/Hexa_circle_3_false_3.png", answer:"left"},
  {p1:"images/Generated_Pictures/Hexa_circle_0.png", p2:"images/Generated_Pictures/Hexa_circle_1.png", p3:"images/Generated_Pictures/Hexa_circle_2.png", p5:"images/Generated_Pictures/Hexa_circle_3_false_2.png", p6:"images/Generated_Pictures/Hexa_circle_3.png", answer:"right"},
  {p1:"images/Generated_Pictures/Hexa_square_0.png", p2:"images/Generated_Pictures/Hexa_square_1.png", p3:"images/Generated_Pictures/Hexa_square_2.png", p5:"images/Generated_Pictures/Hexa_square_3.png", p6:"images/Generated_Pictures/Hexa_square_3_false_3.png", answer:"left"},
  {p1:"images/Generated_Pictures/Hexa_square_0.png", p2:"images/Generated_Pictures/Hexa_square_1.png", p3:"images/Generated_Pictures/Hexa_square_2.png", p5:"images/Generated_Pictures/Hexa_square_3.png", p6:"images/Generated_Pictures/Hexa_square_3_false_2.png", answer:"left"},
  {p1:"images/Generated_Pictures/Hexa_triangle_0.png", p2:"images/Generated_Pictures/Hexa_triangle_1.png", p3:"images/Generated_Pictures/Hexa_triangle_2.png", p5:"images/Generated_Pictures/Hexa_triangle_3_false_2.png", p6:"images/Generated_Pictures/Hexa_triangle_3.png", answer:"right"},
  {p1:"images/Generated_Pictures/Hexa_triangle_0.png", p2:"images/Generated_Pictures/Hexa_triangle_1.png", p3:"images/Generated_Pictures/Hexa_triangle_2.png", p5:"images/Generated_Pictures/Hexa_triangle_3_false_3.png", p6:"images/Generated_Pictures/Hexa_triangle_3.png", answer:"right"},
  {p1:"images/Generated_Pictures/Hexa_arrow_0.png", p2:"images/Generated_Pictures/Hexa_arrow_1.png", p3:"images/Generated_Pictures/Hexa_arrow_2.png", p5:"images/Generated_Pictures/Hexa_arrow_3_false_2.png", p6:"images/Generated_Pictures/Hexa_arrow_3.png", answer:"right"},
  {p1:"images/Generated_Pictures/Hexa_arrow_0.png", p2:"images/Generated_Pictures/Hexa_arrow_1.png", p3:"images/Generated_Pictures/Hexa_arrow_2.png", p5:"images/Generated_Pictures/Hexa_arrow_3.png", p6:"images/Generated_Pictures/Hexa_arrow_3_false_3.png", answer:"left"},
];
fisherYatesShuffle(continuation_list_fractal);
//continuation_list_fractal = shuffle(continuation_list_fractal);

var continuation_list = [
{p1:"images/Generated_Pictures/Tri_circle_3.png", p2:"images/Generated_Pictures/Tri_circle_4_iteration_1.png", p3:"images/Generated_Pictures/Tri_circle_4_iteration_2.png", p5:"images/Generated_Pictures/Tri_circle_4_iteration_3.png", p6:"images/Generated_Pictures/Tri_circle_4_iteration_3_false.png", answer:"left"},
{p1:"images/Generated_Pictures/Tri_square_3.png", p2:"images/Generated_Pictures/Tri_square_4_iteration_1.png", p3:"images/Generated_Pictures/Tri_square_4_iteration_2.png", p5:"images/Generated_Pictures/Tri_square_4_iteration_3_false.png", p6:"images/Generated_Pictures/Tri_square_4_iteration_3.png", answer:"right"},
{p1:"images/Generated_Pictures/Tri_triangle_3.png", p2:"images/Generated_Pictures/Tri_triangle_4_iteration_1.png", p3:"images/Generated_Pictures/Tri_triangle_4_iteration_2.png", p5:"images/Generated_Pictures/Tri_triangle_4_iteration_3.png", p6:"images/Generated_Pictures/Tri_triangle_4_iteration_3_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Tri_arrow_3.png", p2:"images/Generated_Pictures/Tri_arrow_4_iteration_1.png", p3:"images/Generated_Pictures/Tri_arrow_4_iteration_2.png", p5:"images/Generated_Pictures/Tri_arrow_4_iteration_3_false.png", p6:"images/Generated_Pictures/Tri_arrow_4_iteration_3.png", answer:"right"},
{p1:"images/Generated_Pictures/Tri_circle_2.png", p2:"images/Generated_Pictures/Tri_circle_3_iteration_1.png", p3:"images/Generated_Pictures/Tri_circle_3_iteration_2.png", p5:"images/Generated_Pictures/Tri_circle_3_iteration_3_false.png", p6:"images/Generated_Pictures/Tri_circle_3_iteration_3.png", answer:"right"},
{p1:"images/Generated_Pictures/Tri_square_2.png", p2:"images/Generated_Pictures/Tri_square_3_iteration_1.png", p3:"images/Generated_Pictures/Tri_square_3_iteration_2.png", p5:"images/Generated_Pictures/Tri_square_3_iteration_3.png", p6:"images/Generated_Pictures/Tri_square_3_iteration_3_false.png", answer:"left"},
{p1:"images/Generated_Pictures/Tri_triangle_2.png", p2:"images/Generated_Pictures/Tri_triangle_3_iteration_1.png", p3:"images/Generated_Pictures/Tri_triangle_3_iteration_2.png", p5:"images/Generated_Pictures/Tri_triangle_3_iteration_3.png", p6:"images/Generated_Pictures/Tri_triangle_3_iteration_3_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Tri_arrow_2.png", p2:"images/Generated_Pictures/Tri_arrow_3_iteration_1.png", p3:"images/Generated_Pictures/Tri_arrow_3_iteration_2.png", p5:"images/Generated_Pictures/Tri_arrow_3_iteration_3_false.png", p6:"images/Generated_Pictures/Tri_arrow_3_iteration_3.png", answer:"right"},
{p1:"images/Generated_Pictures/Quad_circle_3.png", p2:"images/Generated_Pictures/Quad_circle_4_iteration_1.png", p3:"images/Generated_Pictures/Quad_circle_4_iteration_2.png", p5:"images/Generated_Pictures/Quad_circle_4_iteration_3.png", p6:"images/Generated_Pictures/Quad_circle_4_iteration_3_false.png", answer:"left"},
{p1:"images/Generated_Pictures/Quad_square_3.png", p2:"images/Generated_Pictures/Quad_square_4_iteration_1.png", p3:"images/Generated_Pictures/Quad_square_4_iteration_2.png", p5:"images/Generated_Pictures/Quad_square_4_iteration_3_false.png", p6:"images/Generated_Pictures/Quad_square_4_iteration_3.png", answer:"right"},
{p1:"images/Generated_Pictures/Quad_triangle_3.png", p2:"images/Generated_Pictures/Quad_triangle_4_iteration_1.png", p3:"images/Generated_Pictures/Quad_triangle_4_iteration_2.png", p5:"images/Generated_Pictures/Quad_triangle_4_iteration_3.png", p6:"images/Generated_Pictures/Quad_triangle_4_iteration_3_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Quad_arrow_3.png", p2:"images/Generated_Pictures/Quad_arrow_4_iteration_1.png", p3:"images/Generated_Pictures/Quad_arrow_4_iteration_2.png", p5:"images/Generated_Pictures/Quad_arrow_4_iteration_3_false.png", p6:"images/Generated_Pictures/Quad_arrow_4_iteration_3.png", answer:"right"},
{p1:"images/Generated_Pictures/Quad_circle_2.png", p2:"images/Generated_Pictures/Quad_circle_3_iteration_1.png", p3:"images/Generated_Pictures/Quad_circle_3_iteration_2.png", p5:"images/Generated_Pictures/Quad_circle_3_iteration_3.png", p6:"images/Generated_Pictures/Quad_circle_3_iteration_3_false.png", answer:"left"},
{p1:"images/Generated_Pictures/Quad_square_2.png", p2:"images/Generated_Pictures/Quad_square_3_iteration_1.png", p3:"images/Generated_Pictures/Quad_square_3_iteration_2.png", p5:"images/Generated_Pictures/Quad_square_3_iteration_3.png", p6:"images/Generated_Pictures/Quad_square_3_iteration_3_false.png", answer:"left"},
{p1:"images/Generated_Pictures/Quad_triangle_2.png", p2:"images/Generated_Pictures/Quad_triangle_3_iteration_1.png", p3:"images/Generated_Pictures/Quad_triangle_3_iteration_2.png", p5:"images/Generated_Pictures/Quad_triangle_3_iteration_3.png", p6:"images/Generated_Pictures/Quad_triangle_3_iteration_3_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Quad_arrow_2.png", p2:"images/Generated_Pictures/Quad_arrow_3_iteration_1.png", p3:"images/Generated_Pictures/Quad_arrow_3_iteration_2.png", p5:"images/Generated_Pictures/Quad_arrow_3_iteration_3.png", p6:"images/Generated_Pictures/Quad_arrow_3_iteration_3_false.png", answer:"left"},
{p1:"images/Generated_Pictures/Penta_circle_2.png", p2:"images/Generated_Pictures/Penta_circle_3_iteration_1.png", p3:"images/Generated_Pictures/Penta_circle_3_iteration_2.png", p4:"images/Generated_Pictures/Penta_circle_3_iteration_3.png", p5:"images/Generated_Pictures/Penta_circle_3_iteration_4.png", p6:"images/Generated_Pictures/Penta_circle_3_iteration_4_false.png", answer:"left"},
{p1:"images/Generated_Pictures/Penta_square_2.png", p2:"images/Generated_Pictures/Penta_square_3_iteration_1.png", p3:"images/Generated_Pictures/Penta_square_3_iteration_2.png", p4:"images/Generated_Pictures/Penta_square_3_iteration_3.png", p5:"images/Generated_Pictures/Penta_square_3_iteration_4_false.png", p6:"images/Generated_Pictures/Penta_square_3_iteration_4.png", answer:"right"},
{p1:"images/Generated_Pictures/Penta_triangle_2.png", p2:"images/Generated_Pictures/Penta_triangle_3_iteration_1.png", p3:"images/Generated_Pictures/Penta_triangle_3_iteration_2.png", p4:"images/Generated_Pictures/Penta_triangle_3_iteration_3.png", p5:"images/Generated_Pictures/Penta_triangle_3_iteration_4.png", p6:"images/Generated_Pictures/Penta_triangle_3_iteration_4_false.png", answer:"left"},
{p1:"images/Generated_Pictures/Penta_arrow_2.png", p2:"images/Generated_Pictures/Penta_arrow_3_iteration_1.png", p3:"images/Generated_Pictures/Penta_arrow_3_iteration_2.png", p4:"images/Generated_Pictures/Penta_arrow_3_iteration_3.png", p5:"images/Generated_Pictures/Penta_arrow_3_iteration_4_false.png", p6:"images/Generated_Pictures/Penta_arrow_3_iteration_4.png", answer:"right"},
{p1:"images/Generated_Pictures/Penta_circle_2.png", p2:"images/Generated_Pictures/Penta_circle_3_iteration_1.png", p3:"images/Generated_Pictures/Penta_circle_3_iteration_2.png", p5:"images/Generated_Pictures/Penta_circle_3_iteration_3_false.png", p6:"images/Generated_Pictures/Penta_circle_3_iteration_3.png", answer:"right"},
{p1:"images/Generated_Pictures/Penta_square_2.png", p2:"images/Generated_Pictures/Penta_square_3_iteration_1.png", p3:"images/Generated_Pictures/Penta_square_3_iteration_2.png", p5:"images/Generated_Pictures/Penta_square_3_iteration_3.png", p6:"images/Generated_Pictures/Penta_square_3_iteration_3_false.png", answer:"left"},
{p1:"images/Generated_Pictures/Penta_triangle_2.png", p2:"images/Generated_Pictures/Penta_triangle_3_iteration_1.png", p3:"images/Generated_Pictures/Penta_triangle_3_iteration_2.png", p5:"images/Generated_Pictures/Penta_triangle_3_iteration_3_false.png", p6:"images/Generated_Pictures/Penta_triangle_3_iteration_3.png", answer:"right"},
{p1:"images/Generated_Pictures/Penta_arrow_2.png", p2:"images/Generated_Pictures/Penta_arrow_3_iteration_1.png", p3:"images/Generated_Pictures/Penta_arrow_3_iteration_2.png", p5:"images/Generated_Pictures/Penta_arrow_3_iteration_3.png", p6:"images/Generated_Pictures/Penta_arrow_3_iteration_3_false.png", answer:"left"},
{p1:"images/Generated_Pictures/Penta_circle_3_iteration_1.png", p2:"images/Generated_Pictures/Penta_circle_3_iteration_2.png", p3:"images/Generated_Pictures/Penta_circle_3_iteration_3.png", p5:"images/Generated_Pictures/Penta_circle_3_iteration_4_false.png", p6:"images/Generated_Pictures/Penta_circle_3_iteration_4.png", answer:"right"},
{p1:"images/Generated_Pictures/Penta_square_3_iteration_1.png", p2:"images/Generated_Pictures/Penta_square_3_iteration_2.png", p3:"images/Generated_Pictures/Penta_square_3_iteration_3.png", p5:"images/Generated_Pictures/Penta_square_3_iteration_4.png", p6:"images/Generated_Pictures/Penta_square_3_iteration_4_false.png", answer:"left"},
{p1:"images/Generated_Pictures/Penta_triangle_3_iteration_1.png", p2:"images/Generated_Pictures/Penta_triangle_3_iteration_2.png", p3:"images/Generated_Pictures/Penta_triangle_3_iteration_3.png", p5:"images/Generated_Pictures/Penta_triangle_3_iteration_4.png", p6:"images/Generated_Pictures/Penta_triangle_3_iteration_4_false.png", answer:"left"},
{p1:"images/Generated_Pictures/Penta_arrow_3_iteration_1.png", p2:"images/Generated_Pictures/Penta_arrow_3_iteration_2.png", p3:"images/Generated_Pictures/Penta_arrow_3_iteration_3.png", p5:"images/Generated_Pictures/Penta_arrow_3_iteration_4.png", p6:"images/Generated_Pictures/Penta_arrow_3_iteration_4_false.png", answer:"left"},
{p1:"images/Generated_Pictures/Hexa_circle_2.png", p2:"images/Generated_Pictures/Hexa_circle_3_iteration_1.png", p3:"images/Generated_Pictures/Hexa_circle_3_iteration_2.png", p4:"images/Generated_Pictures/Hexa_circle_3_iteration_3.png", p5:"images/Generated_Pictures/Hexa_circle_3_iteration_4.png", p6:"images/Generated_Pictures/Hexa_circle_3_iteration_4_false.png", answer:"left"},
{p1:"images/Generated_Pictures/Hexa_square_2.png", p2:"images/Generated_Pictures/Hexa_square_3_iteration_1.png", p3:"images/Generated_Pictures/Hexa_square_3_iteration_2.png", p4:"images/Generated_Pictures/Hexa_square_3_iteration_3.png", p5:"images/Generated_Pictures/Hexa_square_3_iteration_4_false.png", p6:"images/Generated_Pictures/Hexa_square_3_iteration_4.png", answer:"right"},
{p1:"images/Generated_Pictures/Hexa_triangle_2.png", p2:"images/Generated_Pictures/Hexa_triangle_3_iteration_1.png", p3:"images/Generated_Pictures/Hexa_triangle_3_iteration_2.png", p4:"images/Generated_Pictures/Hexa_triangle_3_iteration_3.png", p5:"images/Generated_Pictures/Hexa_triangle_3_iteration_4.png", p6:"images/Generated_Pictures/Hexa_triangle_3_iteration_4_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Hexa_arrow_2.png", p2:"images/Generated_Pictures/Hexa_arrow_3_iteration_1.png", p3:"images/Generated_Pictures/Hexa_arrow_3_iteration_2.png", p4:"images/Generated_Pictures/Hexa_arrow_3_iteration_3.png", p5:"images/Generated_Pictures/Hexa_arrow_3_iteration_4_false.png", p6:"images/Generated_Pictures/Hexa_arrow_3_iteration_4.png", answer:"right"},
{p1:"images/Generated_Pictures/Hexa_circle_2.png", p2:"images/Generated_Pictures/Hexa_circle_3_iteration_1.png", p3:"images/Generated_Pictures/Hexa_circle_3_iteration_2.png", p5:"images/Generated_Pictures/Hexa_circle_3_iteration_3_false.png", p6:"images/Generated_Pictures/Hexa_circle_3_iteration_3.png", answer:"right"},
{p1:"images/Generated_Pictures/Hexa_square_2.png", p2:"images/Generated_Pictures/Hexa_square_3_iteration_1.png", p3:"images/Generated_Pictures/Hexa_square_3_iteration_2.png", p5:"images/Generated_Pictures/Hexa_square_3_iteration_3.png", p6:"images/Generated_Pictures/Hexa_square_3_iteration_3_false.png", answer:"left"},
{p1:"images/Generated_Pictures/Hexa_triangle_2.png", p2:"images/Generated_Pictures/Hexa_triangle_3_iteration_1.png", p3:"images/Generated_Pictures/Hexa_triangle_3_iteration_2.png", p5:"images/Generated_Pictures/Hexa_triangle_3_iteration_3.png", p6:"images/Generated_Pictures/Hexa_triangle_3_iteration_3_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Hexa_arrow_2.png", p2:"images/Generated_Pictures/Hexa_arrow_3_iteration_1.png", p3:"images/Generated_Pictures/Hexa_arrow_3_iteration_2.png", p5:"images/Generated_Pictures/Hexa_arrow_3_iteration_3.png", p6:"images/Generated_Pictures/Hexa_arrow_3_iteration_3_false.png", answer:"left"},
{p1:"images/Generated_Pictures/Hexa_circle_3_iteration_1.png", p2:"images/Generated_Pictures/Hexa_circle_3_iteration_2.png", p3:"images/Generated_Pictures/Hexa_circle_3_iteration_3.png", p5:"images/Generated_Pictures/Hexa_circle_3_iteration_4.png", p6:"images/Generated_Pictures/Hexa_circle_3_iteration_4_false.png", answer:"left"},
{p1:"images/Generated_Pictures/Hexa_square_3_iteration_1.png", p2:"images/Generated_Pictures/Hexa_square_3_iteration_2.png", p3:"images/Generated_Pictures/Hexa_square_3_iteration_3.png", p5:"images/Generated_Pictures/Hexa_square_3_iteration_4.png", p6:"images/Generated_Pictures/Hexa_square_3_iteration_4_false.png", answer:"left"},
{p1:"images/Generated_Pictures/Hexa_triangle_3_iteration_1.png", p2:"images/Generated_Pictures/Hexa_triangle_3_iteration_2.png", p3:"images/Generated_Pictures/Hexa_triangle_3_iteration_3.png", p5:"images/Generated_Pictures/Hexa_triangle_3_iteration_4.png", p6:"images/Generated_Pictures/Hexa_triangle_3_iteration_4_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Hexa_arrow_3_iteration_1.png", p2:"images/Generated_Pictures/Hexa_arrow_3_iteration_2.png", p3:"images/Generated_Pictures/Hexa_arrow_3_iteration_3.png", p5:"images/Generated_Pictures/Hexa_arrow_3_iteration_4_false.png", p6:"images/Generated_Pictures/Hexa_arrow_3_iteration_4.png", answer:"right"},
{p1:"images/Generated_Pictures/Tri_triangle_2.png", p2:"images/Generated_Pictures/Tri_triangle_3_iteration_1_false.png", p3:"images/Generated_Pictures/Tri_triangle_3_iteration_2_false.png", p5:"images/Generated_Pictures/Tri_triangle_3_iteration_3_false.png", p6:"images/Generated_Pictures/Tri_triangle_3_iteration_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Tri_circle_2.png", p2:"images/Generated_Pictures/Tri_circle_3_iteration_1_false.png", p3:"images/Generated_Pictures/Tri_circle_3_iteration_2_false.png", p5:"images/Generated_Pictures/Tri_circle_3_iteration_3.png", p6:"images/Generated_Pictures/Tri_circle_3_iteration_3_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Tri_arrow_2.png", p2:"images/Generated_Pictures/Tri_arrow_3_iteration_1_false.png", p3:"images/Generated_Pictures/Tri_arrow_3_iteration_2_false.png", p5:"images/Generated_Pictures/Tri_arrow_3_iteration_3_false.png", p6:"images/Generated_Pictures/Tri_arrow_3_iteration_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Tri_square_2.png", p2:"images/Generated_Pictures/Tri_square_3_iteration_1_false.png", p3:"images/Generated_Pictures/Tri_square_3_iteration_2_false.png", p5:"images/Generated_Pictures/Tri_square_3_iteration_3.png", p6:"images/Generated_Pictures/Tri_square_3_iteration_3_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Tri_triangle_3.png", p2:"images/Generated_Pictures/Tri_triangle_4_iteration_1_false.png", p3:"images/Generated_Pictures/Tri_triangle_4_iteration_2_false.png", p5:"images/Generated_Pictures/Tri_triangle_4_iteration_3_false.png", p6:"images/Generated_Pictures/Tri_triangle_4_iteration_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Tri_circle_3.png", p2:"images/Generated_Pictures/Tri_circle_4_iteration_1_false.png", p3:"images/Generated_Pictures/Tri_circle_4_iteration_2_false.png", p5:"images/Generated_Pictures/Tri_circle_4_iteration_3_false.png", p6:"images/Generated_Pictures/Tri_circle_4_iteration_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Tri_arrow_3.png", p2:"images/Generated_Pictures/Tri_arrow_4_iteration_1_false.png", p3:"images/Generated_Pictures/Tri_arrow_4_iteration_2_false.png", p5:"images/Generated_Pictures/Tri_arrow_4_iteration_3.png", p6:"images/Generated_Pictures/Tri_arrow_4_iteration_3_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Tri_square_3.png", p2:"images/Generated_Pictures/Tri_square_4_iteration_1_false.png", p3:"images/Generated_Pictures/Tri_square_4_iteration_2_false.png", p5:"images/Generated_Pictures/Tri_square_4_iteration_3.png", p6:"images/Generated_Pictures/Tri_square_4_iteration_3_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Quad_triangle_2.png", p2:"images/Generated_Pictures/Quad_triangle_3_iteration_1_false.png", p3:"images/Generated_Pictures/Quad_triangle_3_iteration_2_false.png", p5:"images/Generated_Pictures/Quad_triangle_3_iteration_3.png", p6:"images/Generated_Pictures/Quad_triangle_3_iteration_3_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Quad_circle_2.png", p2:"images/Generated_Pictures/Quad_circle_3_iteration_1_false.png", p3:"images/Generated_Pictures/Quad_circle_3_iteration_2_false.png", p5:"images/Generated_Pictures/Quad_circle_3_iteration_3_false.png", p6:"images/Generated_Pictures/Quad_circle_3_iteration_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Quad_arrow_2.png", p2:"images/Generated_Pictures/Quad_arrow_3_iteration_1_false.png", p3:"images/Generated_Pictures/Quad_arrow_3_iteration_2_false.png", p5:"images/Generated_Pictures/Quad_arrow_3_iteration_3_false.png", p6:"images/Generated_Pictures/Quad_arrow_3_iteration_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Quad_square_2.png", p2:"images/Generated_Pictures/Quad_square_3_iteration_1_false.png", p3:"images/Generated_Pictures/Quad_square_3_iteration_2_false.png", p5:"images/Generated_Pictures/Quad_square_3_iteration_3.png", p6:"images/Generated_Pictures/Quad_square_3_iteration_3_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Quad_triangle_3.png", p2:"images/Generated_Pictures/Quad_triangle_4_iteration_1_false.png", p3:"images/Generated_Pictures/Quad_triangle_4_iteration_2_false.png", p5:"images/Generated_Pictures/Quad_triangle_4_iteration_3_false.png", p6:"images/Generated_Pictures/Quad_triangle_4_iteration_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Quad_circle_3.png", p2:"images/Generated_Pictures/Quad_circle_4_iteration_1_false.png", p3:"images/Generated_Pictures/Quad_circle_4_iteration_2_false.png", p5:"images/Generated_Pictures/Quad_circle_4_iteration_3.png", p6:"images/Generated_Pictures/Quad_circle_4_iteration_3_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Quad_arrow_3.png", p2:"images/Generated_Pictures/Quad_arrow_4_iteration_1_false.png", p3:"images/Generated_Pictures/Quad_arrow_4_iteration_2_false.png", p5:"images/Generated_Pictures/Quad_arrow_4_iteration_3.png", p6:"images/Generated_Pictures/Quad_arrow_4_iteration_3_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Quad_square_3.png", p2:"images/Generated_Pictures/Quad_square_4_iteration_1_false.png", p3:"images/Generated_Pictures/Quad_square_4_iteration_2_false.png", p5:"images/Generated_Pictures/Quad_square_4_iteration_3.png", p6:"images/Generated_Pictures/Quad_square_4_iteration_3_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Penta_triangle_2.png", p2:"images/Generated_Pictures/Penta_triangle_3_iteration_1_false.png", p3:"images/Generated_Pictures/Penta_triangle_3_iteration_2_false.png", p4:"images/Generated_Pictures/Penta_triangle_3_iteration_3_false.png", p5:"images/Generated_Pictures/Penta_triangle_3_iteration_4_false.png", p6:"images/Generated_Pictures/Penta_triangle_3_iteration_4.png", answer:"left"},
{p1:"images/Generated_Pictures/Penta_triangle_3_iteration_1_false.png", p2:"images/Generated_Pictures/Penta_triangle_3_iteration_2_false.png", p3:"images/Generated_Pictures/Penta_triangle_3_iteration_3_false.png", p5:"images/Generated_Pictures/Penta_triangle_3_iteration_4.png", p6:"images/Generated_Pictures/Penta_triangle_3_iteration_4_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Penta_circle_2.png", p2:"images/Generated_Pictures/Penta_circle_3_iteration_1_false.png", p3:"images/Generated_Pictures/Penta_circle_3_iteration_2_false.png", p5:"images/Generated_Pictures/Penta_circle_3_iteration_3_false.png", p6:"images/Generated_Pictures/Penta_circle_3_iteration_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Penta_circle_2.png", p2:"images/Generated_Pictures/Penta_circle_3_iteration_1_false.png", p3:"images/Generated_Pictures/Penta_circle_3_iteration_2_false.png", p4:"images/Generated_Pictures/Penta_circle_3_iteration_3_false.png", p5:"images/Generated_Pictures/Penta_circle_3_iteration_4.png", p6:"images/Generated_Pictures/Penta_circle_3_iteration_4_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Penta_arrow_2.png", p2:"images/Generated_Pictures/Penta_arrow_3_iteration_1_false.png", p3:"images/Generated_Pictures/Penta_arrow_3_iteration_2_false.png", p5:"images/Generated_Pictures/Penta_arrow_3_iteration_3_false.png", p6:"images/Generated_Pictures/Penta_arrow_3_iteration_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Penta_arrow_2.png", p2:"images/Generated_Pictures/Penta_arrow_3_iteration_1_false.png", p3:"images/Generated_Pictures/Penta_arrow_3_iteration_2_false.png", p4:"images/Generated_Pictures/Penta_arrow_3_iteration_3_false.png", p5:"images/Generated_Pictures/Penta_arrow_3_iteration_4.png", p6:"images/Generated_Pictures/Penta_arrow_3_iteration_4_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Penta_square_2.png", p2:"images/Generated_Pictures/Penta_square_3_iteration_1_false.png", p3:"images/Generated_Pictures/Penta_square_3_iteration_2_false.png", p5:"images/Generated_Pictures/Penta_square_3_iteration_3_false.png", p6:"images/Generated_Pictures/Penta_square_3_iteration_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Penta_square_2.png", p2:"images/Generated_Pictures/Penta_square_3_iteration_1_false.png", p3:"images/Generated_Pictures/Penta_square_3_iteration_2_false.png", p4:"images/Generated_Pictures/Penta_square_3_iteration_3_false.png", p5:"images/Generated_Pictures/Penta_square_3_iteration_4_false.png", p6:"images/Generated_Pictures/Penta_square_3_iteration_4.png", answer:"left"},
{p1:"images/Generated_Pictures/Penta_triangle_3_iteration_1_false.png", p2:"images/Generated_Pictures/Penta_triangle_3_iteration_2_false.png", p3:"images/Generated_Pictures/Penta_triangle_3_iteration_3_false.png", p5:"images/Generated_Pictures/Penta_triangle_3_iteration_4_false.png", p6:"images/Generated_Pictures/Penta_triangle_3_iteration_4.png", answer:"left"},
{p1:"images/Generated_Pictures/Penta_circle_3_iteration_1_false.png", p2:"images/Generated_Pictures/Penta_circle_3_iteration_2_false.png", p3:"images/Generated_Pictures/Penta_circle_3_iteration_3_false.png", p5:"images/Generated_Pictures/Penta_circle_3_iteration_4.png", p6:"images/Generated_Pictures/Penta_circle_3_iteration_4_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Penta_square_3_iteration_1_false.png", p2:"images/Generated_Pictures/Penta_square_3_iteration_2_false.png", p3:"images/Generated_Pictures/Penta_square_3_iteration_3_false.png", p5:"images/Generated_Pictures/Penta_square_3_iteration_4.png", p6:"images/Generated_Pictures/Penta_square_3_iteration_4_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Penta_arrow_3_iteration_1_false.png", p2:"images/Generated_Pictures/Penta_arrow_3_iteration_2_false.png", p3:"images/Generated_Pictures/Penta_arrow_3_iteration_3_false.png", p5:"images/Generated_Pictures/Penta_arrow_3_iteration_4_false.png", p6:"images/Generated_Pictures/Penta_arrow_3_iteration_4.png", answer:"left"},
{p1:"images/Generated_Pictures/Hexa_triangle_2.png", p2:"images/Generated_Pictures/Hexa_triangle_3_iteration_1_false.png", p3:"images/Generated_Pictures/Hexa_triangle_3_iteration_2_false.png", p5:"images/Generated_Pictures/Hexa_triangle_3_iteration_3_false.png", p6:"images/Generated_Pictures/Hexa_triangle_3_iteration_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Hexa_circle_2.png", p2:"images/Generated_Pictures/Hexa_circle_3_iteration_1_false.png", p3:"images/Generated_Pictures/Hexa_circle_3_iteration_2_false.png", p5:"images/Generated_Pictures/Hexa_circle_3_iteration_3.png", p6:"images/Generated_Pictures/Hexa_circle_3_iteration_3_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Hexa_arrow_2.png", p2:"images/Generated_Pictures/Hexa_arrow_3_iteration_1_false.png", p3:"images/Generated_Pictures/Hexa_arrow_3_iteration_2_false.png", p5:"images/Generated_Pictures/Hexa_arrow_3_iteration_3_false.png", p6:"images/Generated_Pictures/Hexa_arrow_3_iteration_3.png", answer:"left"},
{p1:"images/Generated_Pictures/Hexa_square_2.png", p2:"images/Generated_Pictures/Hexa_square_3_iteration_1_false.png", p3:"images/Generated_Pictures/Hexa_square_3_iteration_2_false.png", p5:"images/Generated_Pictures/Hexa_square_3_iteration_3.png", p6:"images/Generated_Pictures/Hexa_square_3_iteration_3_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Hexa_triangle_2.png", p2:"images/Generated_Pictures/Hexa_triangle_3_iteration_1_false.png", p3:"images/Generated_Pictures/Hexa_triangle_3_iteration_2_false.png", p4:"images/Generated_Pictures/Hexa_triangle_3_iteration_3_false.png", p5:"images/Generated_Pictures/Hexa_triangle_3_iteration_4_false.png", p6:"images/Generated_Pictures/Hexa_triangle_3_iteration_4.png", answer:"left"},
{p1:"images/Generated_Pictures/Hexa_triangle_3_iteration_1_false.png", p2:"images/Generated_Pictures/Hexa_triangle_3_iteration_2_false.png", p3:"images/Generated_Pictures/Hexa_triangle_3_iteration_3_false.png", p5:"images/Generated_Pictures/Hexa_triangle_3_iteration_4.png", p6:"images/Generated_Pictures/Hexa_triangle_3_iteration_4_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Hexa_circle_2.png", p2:"images/Generated_Pictures/Hexa_circle_3_iteration_1_false.png", p3:"images/Generated_Pictures/Hexa_circle_3_iteration_2_false.png", p4:"images/Generated_Pictures/Hexa_circle_3_iteration_3_false.png", p5:"images/Generated_Pictures/Hexa_circle_3_iteration_4.png", p6:"images/Generated_Pictures/Hexa_circle_3_iteration_4_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Hexa_circle_3_iteration_1_false.png", p2:"images/Generated_Pictures/Hexa_circle_3_iteration_2_false.png", p3:"images/Generated_Pictures/Hexa_circle_3_iteration_3_false.png", p5:"images/Generated_Pictures/Hexa_circle_3_iteration_4.png", p6:"images/Generated_Pictures/Hexa_circle_3_iteration_4_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Hexa_square_2.png", p2:"images/Generated_Pictures/Hexa_square_3_iteration_1_false.png", p3:"images/Generated_Pictures/Hexa_square_3_iteration_2_false.png", p4:"images/Generated_Pictures/Hexa_square_3_iteration_3_false.png", p5:"images/Generated_Pictures/Hexa_square_3_iteration_4_false.png", p6:"images/Generated_Pictures/Hexa_square_3_iteration_4.png", answer:"left"},
{p1:"images/Generated_Pictures/Hexa_square_3_iteration_1_false.png", p2:"images/Generated_Pictures/Hexa_square_3_iteration_2_false.png", p3:"images/Generated_Pictures/Hexa_square_3_iteration_3_false.png", p5:"images/Generated_Pictures/Hexa_square_3_iteration_4_false.png", p6:"images/Generated_Pictures/Hexa_square_3_iteration_4.png", answer:"left"},
{p1:"images/Generated_Pictures/Hexa_arrow_2.png", p2:"images/Generated_Pictures/Hexa_arrow_3_iteration_1_false.png", p3:"images/Generated_Pictures/Hexa_arrow_3_iteration_2_false.png", p4:"images/Generated_Pictures/Hexa_arrow_3_iteration_3_false.png", p5:"images/Generated_Pictures/Hexa_arrow_3_iteration_4.png", p6:"images/Generated_Pictures/Hexa_arrow_3_iteration_4_false.png", answer:"right"},
{p1:"images/Generated_Pictures/Hexa_arrow_3_iteration_1_false.png", p2:"images/Generated_Pictures/Hexa_arrow_3_iteration_2_false.png", p3:"images/Generated_Pictures/Hexa_arrow_3_iteration_3_false.png", p5:"images/Generated_Pictures/Hexa_arrow_3_iteration_4_false.png", p6:"images/Generated_Pictures/Hexa_arrow_3_iteration_4.png", answer:"left"},
];
fisherYatesShuffle(continuation_list);
//continuation_list = shuffle(continuation_list);

//{p1:"images/Generated_Pictures/Penta_circle_3_iteration_1_false.png", p2:"images/Generated_Pictures/Penta_circle_3_iteration_2_false.png", p3:"images/Generated_Pictures/Penta_circle_3_iteration_3_false.png", p5:"images/Generated_Pictures/Penta_circle_3_iteration_4_false.png", p6:"images/Generated_Pictures/Penta_circle_3_iteration_4.png", answer:"left"}, // SHOUDL I USE THIS?
//{p1:"images/Generated_Pictures/Penta_arrow_3_iteration_1_false.png", p2:"images/Generated_Pictures/Penta_arrow_3_iteration_2_false.png", p3:"images/Generated_Pictures/Penta_arrow_3_iteration_3_false.png", p4:"images/Generated_Pictures/Penta_arrow_3_iteration_4_false.png", p5:"images/Generated_Pictures/Penta_arrow_3_iteration_5_false.png", p6:"images/Generated_Pictures/Penta_arrow_3.png", answer:"left"},
//{p1:"images/Generated_Pictures/Penta_square_3_iteration_1_false.png", p2:"images/Generated_Pictures/Penta_square_3_iteration_2_false.png", p3:"images/Generated_Pictures/Penta_square_3_iteration_3_false.png", p4:"images/Generated_Pictures/Penta_square_3_iteration_4_false.png", p5:"images/Generated_Pictures/Penta_square_3_iteration_3.png", p6:"images/Generated_Pictures/Penta_square_3_iteration_5_false.png", answer:"right"},


// {p1:"images/Generated_Pictures/", p2:"images/Generated_Pictures/", p3:"images/Generated_Pictures/", p4:"images/Generated_Pictures/",  p5:"images/Generated_Pictures/", p6:"images/Generated_Pictures/", answer:""},
//{p1:"images/", p2:"images/", p3:"images/", answer:""}

// get individual ID for each participant
const participantIDNr = getRandomInt(999999);
const participantID = participantIDNr.toString();
/* Helper functions
*
*
*/

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// funtion to shuffle an array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function fisherYatesShuffle(arr){
    for(var i =arr.length-1 ; i>0 ;i--){
        var j = Math.floor( Math.random() * (i + 1) ); //random index
        [arr[i],arr[j]]=[arr[j],arr[i]]; // swap
    }
}


 function loop(arr, count, shuffleFlag) {
            return _.flatMapDeep(_.range(count), function(i) {
                return arr;
            });
      }


/* For generating random participant IDs */
    // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// dec2hex :: Integer -> String
const dec2hex = function(dec) {
    return ("0" + dec.toString(16)).substr(-2);
};
// generateId :: Integer -> String
const generateID = function(len) {
    let arr = new Uint8Array((len || 40) /2);
    window.crypto.getRandomValues(arr);
    return Array.from(arr, this.dec2hex).join("");
};
// Declare your helper functions here


/* Regex-terms

Fractal: [A-Z]{1}[a-z]*_[a-z]*_[1-9].png

Turn: [A-Z]{1}[a-z]*_[a-z]*_[1-9]_false_3

iteration: [A-Z]{1}[a-z]*_[a-z]*_[1-9]_iteration_[1-9]*.png

*/
// function to assess type of foil
function assessFoil(foil){

  const fractalRegEx = new RegExp('[A-Z]{1}[a-z]*_[a-z]*_[1-9].png');
  const turnRegEx = new RegExp('[A-Z]{1}[a-z]*_[a-z]*_[1-9]_false_[1-9]');
  const iterationRegEx = new RegExp('[A-Z]{1}[a-z]*_[a-z]*_[1-9]_iteration_[1-9].*.png');

  if(fractalRegEx.test(foil) == true){
    //console.log("frac"); //TESTING
    return "fractal";
  }
  if(turnRegEx.test(foil) == true){
    //console.log("turn"); //TESTING
    return "turn";
  }
  if(iterationRegEx.test(foil) == true){
    //console.log("it"); //TESTING
    return "iteration";
  } else {
    return "NA";
  }
}

/* Hooks
*
*
*/

// Error feedback if participants exceeds the time for responding
const time_limit = function(data, next) {
    if (typeof window.timeout === 'undefined'){
        window.timeout = [];
    }
    // Add timeouts to the timeoutarray
    // Reminds the participant to respond after 5 seconds
    window.timeout.push(setTimeout(function(){
          $('#reminder').text('Please answer more quickly!');
    }, 5000));
    next();
};

// compares the chosen answer to the value of `option1`
check_response = function(data, next) {
    $('input[name=answer]').on('change', function(e) {
        if (e.target.value === data.correct) {
            alert('Your answer is correct! Yey!');
        } else {
            alert('Sorry, this answer is incorrect :( The correct answer was ' + data.correct);
        }
        next();
    })
}

// Declare your hooks here


/* Generators for custom view templates, answer container elements and enable response functions
*
*
*/
