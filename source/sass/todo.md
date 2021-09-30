# Fix modifier syntax

## For <div class="health-hero health-hero--dark"> 

.health-hero { 
    color: white; 
    &#{&}--dark { 
        color: black; 
    } 
} 

## To produce: 
.health-hero {color: white} 
.health-hero.health-hero--dark {color: black} 