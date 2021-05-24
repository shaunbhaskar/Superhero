var canvas= new fabric.Canvas('myCanvas');
part_image_width=30;
part_image_height=30;

main_x=10;
main_y=10;
var main_object="";
var part_image_object=""; 

function main_update()
{fabric.Image.fromURL("Groot.png",function(Img){
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(140);
player_object.set({
top:player_y, left:player_x});
canvas.add (player_object);
});
}
function new_image(get_image)
{fabric.Image.fromURL(get_image,function(Img)
{block_image_object=Img;
block_image_object.scaleToWidth(block_image_width);
block_image_object.scaleToHeight(block_image_height);
block_image_object.set({
top:player_y, left:player_x});
canvas.add (block_image_object);});}