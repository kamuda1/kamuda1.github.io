
function setup() {
    createCanvas(256, 256);
    background(256, 256, 256);    
    rain_rate = 0.05
    inital_distrib_rate = 0.999
    
    this.world = new CAWorld({
        width: 256,
        height: 256
    });
    
    this.world.registerCellType('living', {
        process: function (neighbors) {
            
            if (neighbors[world.BOTTOM.index] !== null && neighbors[world.TOP.index] !== null && this.wasAlive){
                if (! neighbors[world.BOTTOM.index].wasAlive){
                    neighbors[world.BOTTOM.index].alive = true
                    this.alive = false
                } else if (Math.random() <= 0.5 && this.x !== 255 && neighbors[world.RIGHT.index].alive != true){
                    neighbors[world.RIGHT.index].alive = true
                    this.alive = false
                } else if (this.x !== 0 && neighbors[world.LEFT.index].alive != true){
                    neighbors[world.LEFT.index].alive = true
                    this.alive = false
                } else {
                    this.alive = true
                }
            }
            
            if (this.y == 1 && Math.random() < rain_rate){
                this.alive = true
            }
            
            
            
            
//            if (neighbors[world.BOTTOM.index] !== null && neighbors[world.TOP.index] !== null && neighbors[world.BOTTOM.index].wasAlive && this.wasAlive){
//                if (Math.random() > 0.5 && this.x !== 255){
//                    neighbors[world.RIGHT.index].alive = true
//                    this.alive = false
//                } else if (this.x !== 0){
//                    neighbors[world.LEFT.index].alive = true
//                    this.alive = false
//                } else {
//                    neighbors[world.TOP.index].alive = true
//                }               
//                }
//            
//            this.alive = (neighbors[world.BOTTOM.index] !== null && neighbors[world.TOP.index] !== null && neighbors[world.TOP.index].wasAlive || (this.y == 254 && this.wasAlive) || (this.y == 0 && Math.random() < rain_rate));
            
            },
        reset: function () {
            this.wasAlive = this.alive;
        }
    },

    function () {
        //init
        this.alive = Math.random() > inital_distrib_rate;
    });
    
    this.world.initialize([
    { name: 'living', distribution: 100 }
    ]);
    
}


function draw_grid() {
    background(256, 256, 256);    
    for (var y=1; y<this.world.height; y++) {
        for (var x=1; x<this.world.width; x++) {
            var cell = this.world.grid[y][x];
            if (cell.alive == true){
                fill(0, 0, 0)
                rect(x-0.5, y-0.5, 0.5, 0.5)
            }
        }
    }
    this.world.step()
}



setInterval(draw_grid, 10);
