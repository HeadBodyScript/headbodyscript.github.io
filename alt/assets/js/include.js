fetch("assets/include/footer.txt").then((response)=>{
    return response.text();
}).then((text)=>{
    document.getElementsByTagName('footer')[0].innerHTML = text;
});