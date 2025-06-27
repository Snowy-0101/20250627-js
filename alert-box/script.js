$(function() {
    // 背景とアラートボックスを非表示にする
    $("#bg").hide();
    
    //[Click Me!]ボタンをクリック 
    $("#click").click(function() {
        $("#bg").fadeIn(300);
    });

    // [OK]ボタンをクリック
    $("#ok").click(function() {
        // 背景を元に戻る
        $("#bg").fadeOut(300);
    });
});