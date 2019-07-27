function _doGet(e) {

    //リクエストパラメータ名"text"の値を取得する
    var clocksize = e.parameter.clocksize;
    var clockcolor = e.parameter.clockcolor;

    if (!clocksize) {
        clocksize = 16;
    }
  
    var result = {
        message: clocksize
    }

    var out = ContentService.createTextOutput();

    //Mime TypeをJSONに設定
    out.setMimeType(ContentService.MimeType.JSON);

    //JSONテキストをセットする
    out.setContent(JSON.stringify(result));

    return out;
}
