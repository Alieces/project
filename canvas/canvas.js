
window.addEventListener('load',function() {
var imageForPuzzle = [];
let img = new Image();
img.addEventListener('load',function (event) {
    event.preventDefault(); 
    let sWidth = 384;
    let sheigth = 216;
    let sx = 0
    let sy = 0;
    let beforeSx = '0px';
    let massOfRowAndColumn = [];
    let imgScrollBar = document.createElement('div');
    imgScrollBar.className = 'Scrollbar';
    for (let index = 0; index < 5; index++) {
        sx = 0;
        for (let i = 0; i < 5; i++) {
            let canvas = document.querySelector('#cnvs');
            let ctx = canvas.getContext('2d')

            ctx.drawImage(img,sx,sy,sWidth,sheigth,10+sx+5,10+sy+5,sWidth,sheigth);
            let x = ((i+1)*parseInt(sWidth,10));
            sx = x;
            let p = document.createElement('img');
            p.src = canvas.toDataURL('image/png');
            imgforScroll =  document.createElement('img');
            if(i >= 1){
                let canvas1 = document.createElement('canvas');
                let ctx1 = canvas1.getContext('2d');
                canvas1.style.width =`${(sWidth*5)}px`;
                canvas1.style.height = `${(sheigth*5)}px`;
                if(index == 0)
                ctx1.drawImage(p,`${(sWidth*(i))}`,0,sWidth,sheigth,`${(sWidth*(i))}`,0,sWidth,sheigth);
                else
                ctx1.drawImage(p,`${(sWidth*(i))}`,`${(sheigth*index)}`,sWidth,sheigth,sx,0,sWidth,sheigth);
                imgforScroll.src = canvas1.toDataURL();
                
            }
            else{
                imgforScroll.src = canvas.toDataURL();
            }           
            imgforScroll.className = `row-${(index+1)}-col-${(i+1)}`
            let divImg = document.createElement('div');
            divImg.append(imgforScroll);
            imgScrollBar.append(divImg);
        }
        let y = ((index+1)*parseInt(sheigth,10));
        sy = y;
    }
    document.body.append(imgScrollBar);

})
img.src = '851009.png';

})