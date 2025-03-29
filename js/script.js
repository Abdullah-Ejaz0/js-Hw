document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".preview");

    images.forEach((img, index) => {
        img.setAttribute("tabindex", index + 1);

        img.addEventListener("focus", function () {
            upDate(this);
        });

        img.addEventListener("blur", function () {
            unDo();
        });
    });
});

function upDate(previewPic){
    let x = document.getElementById('image');
    x.style.backgroundImage = "url("+ previewPic.src + ")";
    x.innerHTML = previewPic.alt;
}

function unDo(){
    let x = document.getElementById('image');
	x.style.backgroundImage = 'url(\' \')';
    x.innerHTML = 'Hover over an image below to display here.';
}