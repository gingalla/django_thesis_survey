/*
This file contains the logic to populate random image pairings and save data
to be inserted into sqlite db as 'selection_data'. 

selection_data contents:
[dataset name, image1, image2, selection type]
    - dataset name is a string containing the name of one of the 9 datasets used to generate images
    - selection type will be either '0' or '1'
        - a type of '0' means the user had no preference between images
        - a type of '1' means that a winning image was selected by user

    if type '1' is selected, the image stored in image1 is the winning image, image2 the loser
    if type '0' is selected, the image ordering does not have any meaning

Data is formatted this way to fit the syntax of scripting analyses performed on data at a later point
*/
const dataset = ["asteroid", "constit", "fluid_dynamics", "hurricane", "mantle", "miranda", "s3d_n2", "s3d_uvel", "simdata"];
var selection_data = [];
var temp_imgs = [];
var ds, n1, n2, image1, image2;

function select_option(option) {
    if (option == 0) {
        // Neutral selected; image order doesn't matter
        selection_data[3] = 0;
        selection_data[1] = temp_imgs[0];
        selection_data[2] = temp_imgs[1];
    } else if (option == 1) {
        // Image 1 selected; image 1 (winner) listed first
        selection_data[3] = 1;
        selection_data[1] = temp_imgs[0];
        selection_data[2] = temp_imgs[1];
    } else if (option == 2) {
        // Image 2 selected; image 2 (winner) listed first
        selection_data[3] = 1;
        selection_data[1] = temp_imgs[1];
        selection_data[2] = temp_imgs[0];
    } else {
        window.alert("Error.");
    }

    // log selection data in console for testing purposes
    for (let i = 0; i < selection_data.length; i++) {
        console.log(selection_data[i]);
    }

    // assign values to html page, makes them accessible to POST request
    document.getElementById("image_dataset").value = selection_data[0];
    document.getElementById("image1").value = selection_data[1];
    document.getElementById("image2").value = selection_data[2];
    document.getElementById("selection").value = selection_data[3];

    // add data to SQLite
    addData();

    // load new image pairing
    setImages();
}

function addData() {
    const form = document.getElementById("make_selection");
    form.submit();
}

// After opening site or making a selection, two new images need to populate webpage
function setImages() {
    ds = dataset[getRandomDataset()];
    n1 = getRandomInt().toString();
    n2 = getRandomInt().toString();

    // get random int that does not match n1
    if (n2 == n1) {
        n2 = getRandomInt().toString();
    }

    // assign selected dataset to selection_data[0] 
    selection_data[0] = ds;

    // assign image numbers to temp_imgs to be stored
    // needed to correctly order in selection_data
    temp_imgs[0] = n1;
    temp_imgs[1] = n2;

    image1 = "/static/images/" + ds + '_0' + n1 + ".png";
    image2 = "/static/images/" + ds + '_0' + n2 + ".png";

    // update images in html
    document.getElementById("img1").src = image1;
    document.getElementById("img2").src = image2;
}

// 9 datasets hard coded for random selection 
function getRandomDataset() {
    return Math.floor(Math.random() * 9);
  }

// 10 options of images for random selection 
function getRandomInt() {
    return Math.floor(Math.random() * 10);
  } 