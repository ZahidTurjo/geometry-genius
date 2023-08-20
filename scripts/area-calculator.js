function calculateTwoParameters(elementID){
    const setField=document.getElementById(elementID);
    const setFieldtextString=setField.value;
    const setFieldtext=parseFloat(setFieldtextString);
    setField.value='';
    return setFieldtext;
}
function setInnerText(elementID,newValue){
    const setText=document.getElementById(elementID);
    setText.innerText=newValue;
}

function calculateTriangleArea(){
    const base=calculateTwoParameters('triangle-base');
    const height=calculateTwoParameters('triangle-hight');
    const trianglearea=0.5*base*height;
   setInnerText('triangle-area',trianglearea);
}

function calculateRectangleArea(){
    const width=calculateTwoParameters('rectangle-w');
    const length= calculateTwoParameters('rectangle-l');
    const rectangleArea=width*length;
    setInnerText('rectangle-area', rectangleArea);
}

function calculateParaArea(){
    const base= calculateTwoParameters('rectangle-b');
    const height = calculateTwoParameters('rectangle-h');
    const paraArea= base*height;
    setInnerText('rectangle-a',paraArea);
}
function calculateEllipseArea(){
    const base= calculateTwoParameters('ellipse-b');
    const height = calculateTwoParameters('ellipse-h');
    const ellipseArea= 3.14*base*height;
    setInnerText('ellipse-a',ellipseArea);

}

// function calculateTriangleArea(){
//     // get triangle base value
//     const baseField = document.getElementById('triangle-base');
//     const baseValueTextString=baseField.value ;
//     const baseValueText=parseFloat(baseValueTextString);
// // get triangle height
//     const hightField= document.getElementById('triangle-hight');
//     const hightValueTextString=hightField.value ;
//     const hightValueText=parseFloat(hightValueTextString);

//     const areaTriangle=0.5*hightValueText*baseValueText;

//    const areaSpan= document.getElementById('triangle-area');
//    areaSpan.innerText=areaTriangle;

  
// }