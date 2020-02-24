const VERSION = "0.4";

var CONFIG = {
    EDITOR: {
        id: 0,
        old: "",
        new: "",
    },
    PLUGINS: [1, 1],
    THEME: {
        0: ["Title", "", "title"],
        1: ["Background", "", "background"],
        2: ["Font", "", "font"],
        3: ["RGB 1", "", "rgb1"],
        4: ["RGB 2", "", "rgb2"],
        5: ["Animation", "", "animation"],
        6: ["Online", "", "Online"],
        7: ["Idle", "", "Idle"],
        8: ["Unavailable", "", "Unavailable"],
        9: ["Offline", "", "Offline"],
        10: ["Playing", "", "Playing"],
        11: ["Xbox", "", "Xbox"],
        12: ["Spotify", "", "Spotify"],
        13: ["Streaming", "", "Streaming"],
        14: ["Grey", "", "grey"],
        15: ["Darkgrey", "", "darkgrey"],
        16: ["ChatBox", "", "ChatBox"],
        17: ["Sidebar", "", "Sidebar"],
        18: ["SendMessage", "", "SendMessage"],
        19: ["Logo", "", "logo"],
        20: ["HoverMessage", "", "HoverMessage"],
        21: ["Animation Time", "", "time"],
    },
};

function Edit(target) {
    $("#settings").hide();
    $("#edition").show();

    CONFIG.EDITOR.id = target;
    CONFIG.EDITOR.old = CONFIG.THEME[target][1];

    $("#red").val(0);
    $("#green").val(0);
    $("#blue").val(0);
    $("#redNum").val(0);
    $("#greenNum").val(0);
    $("#blueNum").val(0);
    CONFIG.EDITOR.new = "rgb(" + $("#red").val() + ", " + $("#green").val() + ", " + $("#blue").val() + ")";

    $("#EditorSelection").html("Editing <div class='noedit'>" + CONFIG.THEME[CONFIG.EDITOR.id][0] + "</div>");
    $("#EditorOld").html("Old Value <div class='noedit'>" + CONFIG.EDITOR.old + "<div class='square' style='background-color:" + CONFIG.EDITOR.old + "';></div></div>");
    $("#EditorNew").html("New Value <div class='noedit'>" + CONFIG.EDITOR.new + "<div class='square' style='background-color:" + CONFIG.EDITOR.new + "';></div></div>");
}

function GetValue(STYLE) {
    var bodyStyles = window.getComputedStyle(document.body);
    var value = bodyStyles.getPropertyValue('--' + CONFIG.THEME[STYLE][2]);

    return value;
}

function SetValue(STYLE) {
    document.body.style.setProperty('--' + CONFIG.THEME[STYLE][2], CONFIG.THEME[STYLE][1]);
    if (STYLE === 3 || STYLE === 4) {
        document.body.style.setProperty('--temp', GetValue(3));
        document.body.style.setProperty('--animation', CONFIG.THEME[5][1]);
    }
    if (STYLE === 16 || STYLE === 17 || STYLE === 18 || STYLE === 20) {
        document.body.style.setProperty('--' + CONFIG.THEME[14][2], CONFIG.THEME[14][1]);
        document.body.style.setProperty('--' + CONFIG.THEME[15][2], CONFIG.THEME[15][1]);
    }

    if (STYLE === 14) {
        var grey5 = CONFIG.THEME[14][1].split(")").join(", .5)");
        document.body.style.setProperty('--grey5', grey5);
    }

    if (STYLE === 15) {
        var darkgrey5 = CONFIG.THEME[15][1].split(")").join(", .75)");
        document.body.style.setProperty('--darkgrey5', darkgrey5);
    }
    document.body.style.setProperty('--' + CONFIG.THEME[STYLE][2], CONFIG.THEME[STYLE][1]);
}

setInterval(function () {
    if (document.hasFocus() === false) {
        for (keys = 0; keys < Object.keys(CONFIG.THEME).length; keys++) {
            SetValue(keys);
        }
        UpdateVars();
    }
}, 3000);

setInterval(function () {
    document.title = CONFIG.THEME[0][1] + " Theme Generator";
    $('input').on("focusout", function () {
        SetValue($(this).data("id"));
        UpdateVars();
    });
    if ($("#edition").is(":visible")) {
        console.log("update edition");
        CONFIG.EDITOR.old = CONFIG.THEME[CONFIG.EDITOR.id][1];
        CONFIG.EDITOR.new = "rgb(" + $("#red").val() + ", " + $("#green").val() + ", " + $("#blue").val() + ")";
        $("#EditorOld").html("Old Value <div class='noedit'>" + CONFIG.EDITOR.old + "<div class='square' style='background-color:" + CONFIG.EDITOR.old + "';></div></div>");
        $("#EditorNew").html("New Value <div class='noedit'>" + CONFIG.EDITOR.new + "<div class='square' style='background-color:" + CONFIG.EDITOR.new + "';></div></div>");
    }
    if ($('#ResultText').is(':empty')) $("#output").hide(); else $("#output").show();
}, 1000);

(function () {
    ShowMenu(1);
    UpdateVars();
    $("#copyright").html("Theme generator v" + VERSION + " by <strong>Purple Wizard</strong>.");
    $("input[type='text'], textarea").attr('spellcheck', false);
    $("#NewResult").on("click", function () { Result(); });
    $("#menu").on("click", ".RGBbutton", function () { ShowMenu($(this).attr("data-id")); });

    $("#redNum").change(function () {
        if ($("#redNum").val() < 0) $("#redNum").val("0");
        $("#red").val($("#redNum").val());
        document.documentElement.style.setProperty('--temp1', "rgb(" + $("#redNum").val() + ", 0, 0)");
    });
    $("#red").change(function () {
        $("#redNum").val($("#red").val());
        document.documentElement.style.setProperty('--temp1', "rgb(" + $("#red").val() + ", 0, 0)");
    });
    $("#greenNum").change(function () {
        if ($("#greenNum").val() < 0) $("#greenNum").val("0");
        $("#green").val($("#greenNum").val());
        document.documentElement.style.setProperty('--temp2', "rgb(0, " + $("#greenNum").val() + ", 0)");
    });
    $("#green").change(function () {
        $("#greenNum").val($("#green").val());
        document.documentElement.style.setProperty('--temp2', "rgb(0, " + $("#green").val() + ", 0)");
    });
    $("#blueNum").change(function () {
        if ($("blueNum").val() < 0) $("#blueNum").val("0");
        $("#blue").val($("#blueNum").val());
        document.documentElement.style.setProperty('--temp3', "rgb(0, 0, " + $("#blueNum").val() + ")");
    });
    $("#blue").change(function () {
        $("#blueNum").val($("#blue").val());
        document.documentElement.style.setProperty('--temp3', "rgb(0, 0, " + $("#blue").val() + ")");
    });

    $("#RGB1").on("click", function () { Edit(3); });
    $("#RGB2").on("click", function () { Edit(4); });

    $("#Status1").on("click", function () { Edit(6); });
    $("#Status2").on("click", function () { Edit(7); });
    $("#Status3").on("click", function () { Edit(8); });
    $("#Status4").on("click", function () { Edit(9); });

    $("#Grey").on("click", function () { Edit(14); });
    $("#Darkgrey").on("click", function () { Edit(15); });

    $("#SaveEdition").on("click", function () {
        $("#edition").hide();
        $("#settings").show();
        CONFIG.THEME[CONFIG.EDITOR.id][1] = CONFIG.EDITOR.new;
        $("#Theme-" + CONFIG.THEME[CONFIG.EDITOR.id][2]).val(CONFIG.EDITOR.new);
        SetValue(CONFIG.EDITOR.id);
    });

    $("#CancelEdition").on("click", function () {
        $("#edition").hide();
        $("#settings").show();
    });

    $("#Download").on("click", function () {
        var DL = $("#ResultText").html().split('<br>').join('').split('<span class="meta">').join('').split('</span>').join('').split('<span class="plugin">').join('').split('<span class="var">').join('').split('<span class="plugin">').join('').split('<span class="val">').join('').split('<span class="comment">').join('');
        download(CONFIG.THEME[0][1] + ".theme.css", DL);
    });

    $("#NewConfig").on("click", function () {
        $("#output").hide();
        $("#settings").show();
        $("#ResultText").html("");
    });

})();

function Result() {
    $("#settings").hide();
    $("#output").show();
    $("#ResultText").html("");
    $("#ResultText").append('<span class="meta">//META{"name":"' + CONFIG.THEME[0][1] + '","description":"Made with ÆroSpace Theme Generator","author":"ᴘᴜʀᴘʟᴇ ᴡɪᴢᴀʀᴅ#0984","version":"1.0", "website":"https://github.com/GoldenLys/"}*//{}</span>\n<br>');
    $("#ResultText").append('<span class="plugin">@import url("https://goldenlys.github.io/BetterDiscord-Elysia/aerobase.css")</span>;\n<br>');
    if (CONFIG.THEME[2][1] === "Quicksand") { $("#ResultText").append('<span class="plugin">@import url("https://fonts.googleapis.com/css?family=Quicksand&display=swap")</span>;\n<br>'); }
    if (CONFIG.PLUGINS[0] === 1) { $("#ResultText").append('<span class="plugin">@import url("https://goldenlys.github.io/BetterDiscord-Elysia/HoverMemberList.css")</span>;\n<br>'); }
    if (CONFIG.PLUGINS[1] === 1) { $("#ResultText").append('<span class="plugin">@import url("https://goldenlys.github.io/BetterDiscord-Elysia/NoOffline.css")</span>;\n<br>'); }
    $("#ResultText").append('<span class="val">:root {</span>\n<br>');

    for (keys = 0; keys < Object.keys(CONFIG.THEME).length; keys++) {
        if (keys === 0 || keys === 2) {
            $("#ResultText").append('<span class="var">--' + CONFIG.THEME[keys][2] + ':</span> "' + CONFIG.THEME[keys][1] + '";\n<br>');
        } else {
            $("#ResultText").append('<span class="var">--' + CONFIG.THEME[keys][2] + ':</span> ' + CONFIG.THEME[keys][1] + ';\n<br>');
        }
    }

    var grey5 = CONFIG.THEME[14][1].split(")").join(", .5)");
    $("#ResultText").append('<span class="var">--grey5:</span> ' + grey5 + ';\n<br>');

    var darkgrey5 = CONFIG.THEME[15][1].split(")").join(", .75)");
    $("#ResultText").append('<span class="var">--darkgrey5:</span> ' + darkgrey5 + ';\n<br>');

    $("#ResultText").append('<span class="val">}</span> <span class="comment">/* Made with Purple Wizard theme generator v' + VERSION + ', have fun ! */</span>');
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    $('body').append(element);
    element.click();
    $(element).remove();
}

function ShowMenu(ID) {
    var MENUS = ["General", "RGB", "Status", "Profile", "Menus", "Plugins (WIP)", "Texts (WIP)"];
    for (var i = 0; i < $('#menu').children('div').length; i++) {
        $("#config" + (i + 1)).hide();
        $("#btn" + (i + 1)).removeClass("active");
        $("#btn" + (i+1)).html(MENUS[i]);
    }

    $("#ConfigName").html("Config - " + MENUS[ID - 1]);
    $("#btn" + ID).addClass("active");
    $("#config" + ID).show();
}

function UpdateVars() {
    for (keys = 0; keys < Object.keys(CONFIG.THEME).length; keys++) {
        CONFIG.THEME[keys][1] = $("#Theme-" + CONFIG.THEME[keys][2]).val();
    }
}