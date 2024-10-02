$(function(){

    $.ajax({
    
      url: "./js/daily.json",
    
      dataType: "json",
    
      success : function(data){
    
        if(data.length>0){
    
    
    
          for(var i in data){
        
            $("#imggg").eq(i).attr("src", 'img/' + data[i].url);
    
            $("#imggg1").eq(i).attr("src", 'img/' + data[i].url1);
            $("#imggg2").eq(i).attr("src", 'img/' + data[i].url2);
            $("#imggg3").eq(i).attr("src", 'img/' + data[i].url3);
            $("#imggg4").eq(i).attr("src", 'img/' + data[i].url4);
            $("#imggg5").eq(i).attr("src", 'img/' + data[i].url5);
            $("#imggg6").eq(i).attr("src", 'img/' + data[i].url6);
            $("#imggg7").eq(i).attr("src", 'img/' + data[i].url7);
    
            $(".pd-title").eq(i).append('<span>'+data[i].title+"</span>");      
    
            $(".pd-price").eq(i).append('<span>'+data[i].price+"</span>");     
            
            $(".pd-sale").eq(i).append('<span>'+data[i].sale+"</span>");                             
    
            $(".pd-per").eq(i).append("<span>"+data[i].per+"</span>");
    
          }
    
        }
    
      }
    
    });
    
    
    }); 
    
    //신발 json 끝
    
    // 일자별 혜택 json 시작
    $(function(){
    
    $.ajax({
    
      url: "./js/ByData.json",
    
      dataType: "json",
    
      success : function(data){
    
        if(data.length>0){
    
    
    
          for(var i in data){
        
            $(".lipodimg").eq(i).attr("src", 'img/' + data[i].url);
            
            $(".letter-ss").eq(i).append('<span>'+data[i].title+"</span>");                             
    
          }
    
        }
    
      }
    
    });
    
    
    }); 
    // 일자별 혜택 json 끝
    
    //최대 신발 할인 json 시작
    $(function(){
    
    $.ajax({
    
      url: "./js/maximum.json",
    
      dataType: "json",
    
      success : function(data){
    
        if(data.length>0){
    
    
    
          for(var i in data){
        
            $(".item-boximg").eq(i).attr("src", 'img/' + data[i].url);
    
            $(".item-box .pd-title").eq(i).append('<span>'+data[i].title+"</span>");      
    
            $(".item-box .pd-price").eq(i).append('<span>'+data[i].price+"</span>");     
            
            $(".item-box .pd-sale").eq(i).append('<span>'+data[i].sale+"</span>");                             
    
            $(".item-box .pd-per").eq(i).append("<span>"+data[i].per+"</span>");
    
          }
    
        }
    
      }
    
    });
    
    
    }); 
    //최대 신발 항인 json 끝
    
    // 오프라인 이미지 json 시작
    $(function(){
    
    $.ajax({
    
      url: "./js/offline.json",
    
      dataType: "json",
    
      success : function(data){
    
        if(data.length>0){
    
    
    
          for(var i in data){
        
            $(".imgboximg").eq(i).attr("src", 'img/' + data[i].url);
                                     
    
          }
    
        }
    
      }
    
    });
    
    
    }); 
    // 오프라인 이미지 json 끝

    
    
    