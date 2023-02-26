
var my30MinorLessImage = document.getElementById("currentImage30minorLess");
var goodSamaritan = document.getElementById("currentImageGS");
var coffeeChop = document.getElementById("currentImageCS");

const btnBack30M = document.querySelector('#btnBack30M');
const btnNext30M = document.querySelector('#btnNext30M');

const btnBackGS = document.querySelector('#btnBackGS');
const btnNextGS = document.querySelector('#btnNextGS');


const btnBackCS = document.querySelector('#btnBackCS');
const btnNextCS = document.querySelector('#btnNextCS');

var aCS = 0, bCS = 0, cCS = 1;
var aML = 0, bML = 0, cML = 1;
var aGS = 0, bGS = 0, cGS = 1;


// GOOD SAMARITAN
function NextGS() {

    btnBackGS.disabled = false;
    cGS++;

    if (cGS == 10) {
        cGS = 0;
        bGS++;
        if (bGS == 10) {
            bGS = 0;
            aGS++;
        }
    }
    ImageChange("images/GoodSamararitanSingles/GoodSamararitan BoardFile-board-00", goodSamaritan, aGS, bGS, cGS);
    Limit(btnNextGS, 1, 2, 4, aGS, bGS, cGS);

}
function BackGS() {
    if (cGS == 1 && bGS == 0 && aGS == 0) {
        btnBackGS.disabled = true;
    }
    else {
        cGS--;
        bGS = bGS;
        if (cGS == 0) {
            cGS = 9;
            bGS--;
            if (aGS == 10) {
                bGS = 0;
                aGS--;
            }
        }
    }


    ImageChange("images/GoodSamararitanSingles/GoodSamararitan BoardFile-board-00", goodSamaritan, aGS, bGS, cGS);
}

// 30   MIN OR LESS
function Next30Min() {
    btnBack30M.disabled = false;
    cML++;

    if (cML == 10) {
        cML = 0;
        bML++;
        if (bML == 10) {
            bML = 0;
            aML++;
        }
    }
    ImageChange("images/Action/30minorLess/individual/30MinStoryboardFile-board-00", my30MinorLessImage, aML, bML, cML);
    Limit(btnNext30M, 1, 4, 7);
}
function Back30Min() {
    if (cML == 1 && bML == 0 && aML == 0) {
        btnBackML.disabled = true;
    }
    else {
        cML--;
        bML = bML;
        if (cML == 0) {
            cML = 9;
            bML--;
            if (aML == 10) {
                bML = 0;
                aML--;
            }
        }
    }
    ImageChange("images/Action/30minorLess/individual/30MinStoryboardFile-board-00", my30MinorLessImage, aML, bML, cML);

}

// COFFEE SHOP
function NextCS() {
    btnBackCS.disabled = false;
    cCS++;

    if (cCS == 10) {
        cCS = 0;
        bCS++;
        if (bCS == 10) {
            bCS = 0;
            aCS++;
        }
    }
    ImageChange("images/CoffeeShop/Comedy Coffee Singles/Comedy Coffee StoryboarderFile-board-00", coffeeChop, aCS, bCS, cCS);
    Limit(btnNextCS, 1, 4, 5);
}
function BackCS() {
    if (cCS == 1 && bCS == 0 && aCS == 0) {
        btnBackCS.disabled = true;
    }
    else {
        cCS--;
        bCS = bCS;
        if (cCS == 0) {
            cCS = 9;
            bCS--;
            if (aCS == 10) {
                bCS = 0;
                aCS--;
            }
        }
    }
    ImageChange("images/CoffeeShop/Comedy Coffee Singles/Comedy Coffee StoryboarderFile-board-00", coffeeChop, aCS, bCS, cCS);

}


function ImageChange(img, elementByID, a, b, c) {
    elementByID.setAttribute("src", img + a + b + c + ".png");
}
