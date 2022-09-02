window.onload = function(){
    $("#onemore").addClass("disappear");
     $("card").addClass("disappear");
    // $("#card_1 #holo").addClass("disappear");
    // $("#card_2 #holo").addClass("disappear");
    // $("#card_3 #holo").addClass("disappear");
    // $("#card_4 #holo").addClass("disappear");
    // $("#card_5 #holo").addClass("disappear");
    }

  // ガチャデータを定義
  var card_1 = 10;
  var card_2 = 20;
  var card_3 = 30;
  var card_4 = 40;
  var card_5 = 50;
  const min = 1;
  const max = 50;
  


//   function OnButtonClick() {
//        document.getElementById("app").style.visibility ="hidden";
//        document.getElementById("card_1").style.visibility ="hidden";
//        document.getElementById("card_2").style.visibility ="hidden";
//        document.getElementById("card_3").style.visibility ="hidden";
//        document.getElementById("card_4").style.visibility ="hidden";
//        document.getElementById("card_5").style.visibility ="hidden";
    

//        const randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
//        console.log(randomNum);

//        if(randomNum<=10){
//            console.log("card_1が当たりました！");
//            document.getElementById("card_1").style.visibility ="visible";
//            document.getElementById("onemore").style.visibility ="visible";

//        }
//        else if(randomNum>=10&randomNum<=20){
//            console.log("card_2が当たりました！");
//            document.getElementById("card_2").style.visibility ="visible";
//            document.getElementById("onemore").style.visibility ="visible";
//        }
//        else if(randomNum>=20&randomNum<=30){
//            console.log("card_3が当たりました！");
//            document.getElementById("card_3").style.visibility ="visible";
//            document.getElementById("onemore").style.visibility ="visible";
//        }
//        else if(randomNum>=30&randomNum<=40){
//            console.log("card_4が当たりました！");
//            document.getElementById("card_4").style.visibility ="visible";
//            document.getElementById("onemore").style.visibility ="visible";
//        }
//        else if(randomNum>=40&randomNum<=50){
//            console.log("card_5が当たりました！");
//            document.getElementById("card_5").style.visibility ="visible";
//            document.getElementById("onemore").style.visibility ="visible";
//        }
//   }



  function OneMoreOnButtonClick() {
      $("#app").removeClass("appear");
      $("#app").addClass("disappear");
      $("#button-name").addClass("disappear");
      $("#glow").addClass("disappear");
      $("onemore").addClass("appear");
      $("#card_1").removeClass("appear");
      $("#card_1").addClass("disappear");
      $("#card_2").removeClass("appear");
      $("#card_2").addClass("disappear");
      $("#card_3").removeClass("appear");
      $("#card_3").addClass("disappear");
      $("#card_4").removeClass("appear");
      $("#card_4").addClass("disappear");
      $("#card_5").removeClass("appear");
      $("#card_5").addClass("disappear");
      $("#card_1 #holo").addClass("disappear");
      $("#card_2 #holo").addClass("disappear");
      $("#card_3 #holo").addClass("disappear");
      $("#card_4 #holo").addClass("disappear");
      $("#card_5 #holo").addClass("disappear");
      $("#card_1").removeClass("animated");
      $("#card_2").removeClass("animated");
      $("#card_3").removeClass("animated");
      $("#card_4").removeClass("animated");
      $("#card_5").removeClass("animated");



       const randomNum = Math.floor(Math.random() * (max + 1 - min)) + min;
       console.log(randomNum);

       if(randomNum<=10){
           console.log("card_1が当たりました！");
           $("#card_1 #holo").removeClass("disappear");
           $("#card_1").removeClass("disappear");
           $("#card_1").addClass("appear");
           $("#onemore").addClass("displayblock");
           var animation = setTimeout(function() {
           $("#card_1").addClass("animated");
           }, 1000);
       }
       else if(randomNum>=10&randomNum<=20){
           console.log("card_2が当たりました！");
            $("#card_2 #holo").removeClass("disappear");
            $("#card_2").removeClass("disappear");
            $("#card_2").addClass("appear");
            $("#onemore").addClass("displayblock");
            var animation = setTimeout(function() {
            $("#card_2").addClass("animated");
	        }, 1000);
       }
       else if(randomNum>=20&randomNum<=30){
           console.log("card_3が当たりました！");
            $("#card_3 #holo").removeClass("disappear");
            $("#card_3").removeClass("disappear");
            $("#card_3").addClass("appear");
            $("#onemore").addClass("displayblock");
            var animation = setTimeout(function() {
            $("#card_3").addClass("animated");
	        }, 1000);
       }
       else if(randomNum>=30&randomNum<=40){
           console.log("card_4が当たりました！");
            $("#card_4 #holo").removeClass("disappear");
            $("#card_4").removeClass("disappear");
            $("#card_4").addClass("appear");
            $("#onemore").addClass("displayblock");
            var animation = setTimeout(function() {
            $("#card_4").addClass("animated");
	        }, 1000);
       }
       else if(randomNum>=40&randomNum<=50){
           console.log("card_5が当たりました！");
            $("#card_5 #holo").removeClass("disappear");
            $("#card_5").removeClass("disappear");
            $("#card_5").addClass("appear");
            $("#onemore").addClass("displayblock");
            var animation = setTimeout(function() {
            $("#card_5").addClass("animated");
            }, 1000);
       }
  }

