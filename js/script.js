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
        'halo Konan :) ^1000',
        'hadiah ini kupersembahkan untukmu! ^1000',
        'dimulai dari awal',
        'aku seorang yang pendiam',
        'aku anti-sosial',
        'aku orang yang egois yang hanya mementingkan diriku sendiri',
        '`"klik next"` ^4000',
        'aku hanyalah tahanan di dalam pikiranku sendiri',
        'aku terjebak dalam duniaku',
        'terus terjebak hingga sampai...',
        '`"klik next"` ^4000',
        'seseorang menaruh perhatian kepadaku',
        'ia membawa rasa iri dan kagumnya kepadaku',
        'entah apa yang ia lihat dari diriku',
        'padahal aku hanyalah manusia biasa',
        'ia datang tanpa nama',
        'tanpa identitas',
        'tanpa wujud',
        'hanya datang dalam bentuk perhatian',
        'aku membalasnya dengan rasa tidak peduli',
        'aku memberi nama dia "Konan" karena sikap anehnya',
        '`"klik next"` ^4000',
        'seperti yang kubilang sebelumnya',
        'aku sama sekali tidak memperdulikannya',
        'aku hanya peduli dengan urusanku sendiri',
        'namun sedikit demi sedikit aku heran dengannya',
        'aku merasa diawasi terus olehnya',
        'ia sering meminta bantuan padaku atas masalah komputernya',
        'lalu aku datang membantunya',
        'dari sana aku mulai mengenalnya lebih dalam',
        '`"klik next"` ^4000',
        'yang jelas dia cantik',
        'aku senang ketika dia berbicara di sampingku',
        'kita memiliki banyak kesamaan',
        'yang membuat kami saling mudah mengerti satu sama lain',
        'persamaan latar belakang',
        'persamaan perspektif',
        'persamaan pemikiran',
        'persamaan karakter',
        'namun kita juga memiliki perbedaan yang cukup banyak',
        'lalu dia berkata "bukannya kita bisa saling melengkapi satu sama lain"',
        '"dan maukah kamu menerima segala kekuranganku?"',
        '`"klik next"` ^4000',
        'aku melihat senyumannya',
        'aku selalu terngiang dengan suaranya',
        'aku ingin tetap bersamanya sampai kapanpun',
        'tetap bersama^1000 selamanya',
        'karena dia sungguh spesial',
        'sifat uniknya membuat jantungku terus berdegup kencang',
        'aku lalu bertanya-tanya "apakah ini yang namanya cinta ?"',
        '`"klik next"` ^4000',
        'semua momen diantara kita telah aku rekam dalam memori kepalaku',
        'segala hal yang membuatku semakin suka kepadanya tersimpan dalam memoriku',
        'tidak perlu kamera untuk mengabadikan momennya',
        'namun, aku hanya perlu perhatiannya agar aku semakin mengingat dia',
        'dan saya rasa aku tidak bisa melupakannya',
        'aku ingin tetap bersamanya',
        'agar aku bisa melihat perubahan dalam dirinya',
        'lalu mengenalinya lebih dalam',
        'sehingga aku bisa menjadi satu-satunya cowok yang paling memahami dia',
        'jadi tidak ada alasan baginya untuk memilih cowok lain :v',
        'waktu itu sebelumnya aku sangat membenci diriku sendiri karena tidak bisa mengungkapkan perasaanku padanya',
        '`"klik next"` ^4000',
        'dia tampak putus asa',
        'dia tidak memiliki kepercayaan pada dirinya',
        'aku ingin menghiburnya',
        'aku ingin membuat dia bisa mencintai dirinya sendiri',
        'aku ingin membuat dia bisa percaya pada dirinya sendiri',
        'dan aku suka ketika dia sadar tentang dirinya',
        'aku semakin suka lagi ketika dia mau menjadi lebih baik',
        'jadi aku selalu mendukungnya...',
        '`"klik next"` ^4000',
        'aku ingin melihat dunia ini bersamamu',
        'berjalan mengelilingi tempat-tempat unik untuk memperbanyak perspektif',
        'agar kita bisa semakin dewasa',
        'dan semakin bijaksana',
        'lalu teruslah belajar!',
        'belajarlah apa yang kamu sukai ^1000',
        'teruslah berjuang dan semangat !',
        'karena di saat ini saya lagi terus belajar dan berusaha agar bisa menjadi yang terbaik untukmu',
        'aku senang kita bisa saling memotivasi agar terus berusaha',
        'menjadi lebih baik',
        'untuk mewujudkan impian kita',
        '`"klik next"` ^4000',
        'aku mencintaimu Konan',
        'aku tidak mau kehilanganmu',
        'tetaplah bersamaku',
        'karena aku di saat ini sedang berusaha untuk menjadi yang terbaik untukmu',
        'aku hanya ingin tidak merepotkanmu di masa depan nanti',
        'jadi tolong jangan lupakan aku',
        'karena aku ^1000 sangat mencintaimu',
        'wait me until 10 years later',
        'Stay Connected and Never Forget Me Konan ^1000',
        'I love you ❤️^3000',
        '`"klik next"`',
    ],
    typeSpeed: 70
  });