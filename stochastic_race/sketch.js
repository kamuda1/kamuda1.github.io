// This is a modified version of https://p5js.org/examples/interaction-tickle.html

function setup() {
    createCanvas(700, 400);
    x_player = 350
    y_player = 200

    x_opponent = 350
    y_opponent = 200

    goal_box_size = {'x': 150, 'y': 150}
    goal_location = {'x': 550, 'y': 250}
    
    opponent_on = false
    game_on = true
    
    game_lost = false
    game_won = false

    c_player = color(0, 255, 50);
    c_opponent = color(255, 20, 10, 50);
    c_goal = color(10, 255, 50, 30);
}


function draw() {
    background(204, 120);    

    rect_size_x = 50
    rect_size_y = 30
    
    fill(0);
    strokeWeight(1);
    fill(c_opponent);
    rect(x_opponent, y_opponent, rect_size_x, rect_size_y);

    strokeWeight(1);
    fill(c_player);
    rect(x_player, y_player, rect_size_x, rect_size_y);
    
    strokeWeight(0);
    fill(c_goal);
    rect(goal_location.x, goal_location.y, goal_box_size.x, goal_box_size.y);

    
    if (
    mouseX >= x_player &&
    mouseX <= x_player + rect_size_x &&
    mouseY >= y_player &&
    mouseY <= y_player + rect_size_y &&
    game_on
        ) {
        opponent_on = true
        x_player += random(-5, 5);
        y_player += random(-5, 5);
        }
    
    if (opponent_on && game_on) {
        x_opponent += random(-5, 5);
        y_opponent += random(-5, 5);
        }
    
    
    if (x_opponent >= goal_location.x &&
        y_opponent >= goal_location.y){
        game_on = false
        game_lost = true
    }
    
    if (x_player >= goal_location.x &&
        y_player >= goal_location.y){
        game_on = false
        game_won = true
    }
    
    if (! game_on){
        x_player += random(-10 + -0.1 * (x_player - 350), 10 + 0.1 * (x_player - 350));
        y_player += random(-10 + -0.1 * (y_player - 200), 10 + 0.1 * (y_player - 200));
        
        x_opponent += random(-10 + -0.1 * (x_opponent - 350), 10 + 0.1 * (x_opponent - 350));
        y_opponent += random(-10 + -0.1 * (y_opponent - 200), 10 + 0.1 * (y_opponent - 200));
                
        textSize(90);
        fill(10, 10, 80);
        end_text = (game_lost) ? ('You Lose!') : 'You Won!'
        text(end_text, 150, 200);
    }
    
    
}