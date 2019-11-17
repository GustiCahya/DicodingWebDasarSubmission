var str = $('#picture').attr('src');
var patt = /\d/g;
var num = patt.exec(str);

$("#next").click(function(){
    if(num < 10){
        num++;
        $('#before').removeClass('disabled');
    }else{
        num;
         Swal.fire({  
          title: "I Love You Konan",
          text: "How about you ?",
          imageUrl: "assets/hearth.png",
          imageWidth: 100,
          backdrop: `
                        rgb(248,86,61,0.4)
                    `,
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#888',
          confirmButtonText: 'I love you too!',
          cancelButtonText: "no, I don't love you"
           }).then((result) => {               
           if (result.value) {
               Swal.fire({
                title: "You are the best :)",
                text: "Thank you for everything Konan, Happy Birthday !",
                imageUrl: "assets/tenor.gif",
                backdrop: `
                        rgb(248,86,61,0.4)
                        url("assets/happybirthday.gif")
                        left top
                        no-repeat
                    `
               })
           }else if(result.dismiss == "cancel"){
            Swal.fire(
                {
                    title: "kasian beruangnya sampai nangis :(",
                    imageUrl: "assets/tenorSad.gif",
                    backdrop: `
                            rgb(248,86,61,0.4)
                            url("assets/tenorSad.gif")
                            left top
                            no-repeat
                        `
                   }
               )
           }
         });
    }
    var target = `assets/${num}.jpg`;
    $('#picture').attr('src',target);

    // var targetElementBefore = 'element'+(num-1);    
    // var targetElement = 'element'+num;
    // $('#element').removeClass(targetElementBefore);
    // $('#element').addClass(targetElement);
});

if(num == 1){
    $('#before').addClass('disabled');
}
$("#before").click(function(){
    if(num > 1){
        num--;
        if(num < 2){
            $('#before').addClass('disabled');
        }
    }else{
        num;
    }
    var target = `assets/${num}.jpg`;
    $('#picture').attr('src',target);

    // var targetElementBefore = 'element'+(num+1);    
    // var targetElement = 'element'+num;
    // $('#element').removeClass(targetElementBefore);
    // $('#element').addClass(targetElement);
});


var typed1 = new Typed('.element1', {
    strings: [
        ''
    ],
    typeSpeed: 70
  });