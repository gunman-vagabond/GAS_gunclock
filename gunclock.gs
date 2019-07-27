function doGet(e) {

  //リクエストパラメータの値を取得する
  var clocksize = e.parameter.clocksize;
  var clockcolor = e.parameter.clockcolor;
  var type = e.parameter.type;
    
  if (!clocksize) {
    clocksize = 16;
  }

  if (!clockcolor) {
    clockcolor = "ffffcc";
  }
  
  if (!type) {
    type = "json";
  }
  

  if ( type == "json" || type == "jsonp" ) {
    
    var gunclock = getGunClock(clocksize, ",");
    var out = ContentService.createTextOutput();
    
    var result = {
      message: gunclock
    }
    
    var callback = e.parameter.callback;
    if ( type == "jsonp" && callback ) {
      //jsonp

      //Mime Typeをapplication/javascriptに設定
      out.setMimeType(ContentService.MimeType.JAVASCRIPT);

      //JSONテキストを引数にした callback 関数を返却する。
      //要求元では function(json) { } で受けて、 json.message で JSONテキストを取り出す。
      responseText = callback + "(" + JSON.stringify(result) + ")";
      out.setContent(responseText);

    } else {
      //Mime TypeをJSONに設定
      out.setMimeType(ContentService.MimeType.JSON);
  
      //JSONテキストをセットする
      out.setContent(JSON.stringify(result));

    }

    return out;
    
  } else if ( type == "html" ) {
    
    //html
    var gunclock = getGunClock(clocksize, "\n");
    var gunclock_resp
        = "<html><body><pre style=\"background-color: #" + clockcolor+ "\">"
        + gunclock
        + "</pre></body></html>";
    
    //X-Frame-Option : allow all をつける
    return HtmlService.createHtmlOutput(gunclock_resp).setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    
  } else {
    
    //text
    var gunclock = getGunClock(clocksize, "\n");
    return ContentService.createTextOutput(gunclock);
    
  }
}