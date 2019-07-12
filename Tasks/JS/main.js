"use strict"

// Tapsiriq 2  :::  X və Y həqiqi ədədləri verilib. Əgər hər iki ədəd mənfidirsə, onların qiymətlərini öz modulları ilə əvəzləyin; əgər onlardan biri mənfidirsə, hər iki qiyməti 0.5 artırın; əgər hər iki qiymət mənfi deyilsə və onlardan heç biri [0.5, 2.0] parçasına daxil deyilsə, hər iki qiyməti 10 dəfə azaldın; qalan hallarda heç bir dəyişiklik etməyin. 

function creatCount(x, y) {
    if (x < 0 && y < 0) {
        x = -x ;
        y = -y ;
    }
    else if (x < 0 && y > 0 || x > 0 && y < 0) {
        x = 0.5 + x ;
        y = 0.5 + y ;
    }
    else {
        if(!((0.5 <= x && x <= 2) && (0.5 <= y && y <= 2))){
            x = x / 10 ;
            y = y / 10 ;
        }
    }
    return `${x} ${y}`;
}

//alert(creatCount(-5,3));
//alert(creatCount(5,-3));
//alert(creatCount(0.1,3));

//Tapsiriq 3 ::: İstifadəçi 2 ədəd daxil etsin. 2-ci ədəd birincidən böyük olmalıdır. Daxil edilmiş ədədlər aralığında olan bütün cüt ədədləri tapmaq lazımdır. Hər bir ədədi tapdıqda isə o ədədlə istifadəçinin daxil etdiyi 2ci ədədə kimi olan bütün ədədlərin cəmini tapın.

function creatSum(a,b){
    if(b > a){
        for(let i = a; i < b; i++){
            if(i % 2 == 0){
                let cem = 0;
                for(let j = i; j < b; j++){
                    cem = cem + j;
                }
            console.log(`Cut eded ${i}`);
            console.log(`${i} ve ${b} araliginda olan ededlerin cemi ${cem}`);        
            }
        }
    }
    return "Error"
}

//creatSum(1,20);