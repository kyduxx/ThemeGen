const VERSION = "0.3";

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
        16: ["Chatbox", "", "Chatbox"],
        17: ["Sidebar", "", "Sidebar"],
        18: ["SendMessage", "", "SendMessage"],
        19: ["Logo", "", "logo"],
    },
};

function Edit(target) {
    $("#settings").hide();
    $("#edition").show();

    CONFIG.EDITOR.id = target;
    CONFIG.EDITOR.old = CONFIG.THEME[target][1];

    $("#EditorSelection").html("Editing <div class='noedit'>" + CONFIG.THEME[CONFIG.EDITOR.id][0] + "</div>");
    $("#EditorOld").html("Old Value <div class='noedit'>" + CONFIG.EDITOR.old + "<div class='square' style='background-color:" + CONFIG.EDITOR.old + "';></div></div>");
}

function GetValue(STYLE) {
    var bodyStyles = window.getComputedStyle(document.body);
    var value = bodyStyles.getPropertyValue('--' + CONFIG.THEME[STYLE][2]);

    return value;
}

function SetValue(STYLE) {
    document.body.style.setProperty('--' + CONFIG.THEME[STYLE][2], CONFIG.THEME[STYLE][1]);
    if(STYLE === 3 || STYLE === 4) {
        document.body.style.setProperty('--temp', GetValue(3));
        document.body.style.setProperty('--animation', CONFIG.THEME[5][1]);
    }
}

setInterval(function () {
    UpdateVars();
    document.title = CONFIG.THEME[0][1] + " Theme Generator";
    $('input').on("focusout", function () {
        SetValue($(this).data("id"));
    });
    if ($('#ResultText').is(':empty')) $("#output").hide(); else $("#output").show();
    $("#EditorNew").html("New Value <div class='noedit'>" + CONFIG.EDITOR.new + "<div class='square' style='background-color:" + CONFIG.EDITOR.new + "';></div></div>");
}, 1000);

(function () {
    $("#copyright").html("Theme generator v" + VERSION + " by <strong>Purple Wizard</strong>.");
    $("input[type='text'], textarea").attr('spellcheck', false);
    ShowMenu(1);
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

    $("#SaveEdition").on("click", function () {
        $("#edition").hide();
        $("#settings").show();
        CONFIG.THEME[CONFIG.EDITOR.id][1] = CONFIG.EDITOR.new;
        $("#Theme-" + CONFIG.THEME[CONFIG.EDITOR.id][2]).val(CONFIG.EDITOR.new);
        SetValue(CONFIG.EDITOR.id);
    });

    $("#Download").on("click", function () {
        var DL = $("#ResultText").html().split("<br>").join("");
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
    $("#ResultText").append('//META{"name":"' + CONFIG.THEME[0][1] + '","description":"An amazing futuristic theme, made by Purple Wizard.","author":"ᴘᴜʀᴘʟᴇ ᴡɪᴢᴀʀᴅ#0984","version":"1.0", "website":"https://github.com/GoldenLys/"}*//{}\n<br>');
    $("#ResultText").append('@import url("https://goldenlys.github.io/BetterDiscord-Elysia/aerobase.css");\n<br>');
    if (CONFIG.THEME[2][1] === "Quicksand") { $("#ResultText").append('@import url("https://fonts.googleapis.com/css?family=Quicksand&display=swap");\n<br>'); }
    if (CONFIG.PLUGINS[0] === 1) { $("#ResultText").append('@import url("https://goldenlys.github.io/BetterDiscord-Elysia/HoverMemberList.css");\n<br>'); }
    if (CONFIG.PLUGINS[1] === 1) { $("#ResultText").append('@import url("https://goldenlys.github.io/BetterDiscord-Elysia/NoOffline.css");\n<br>'); }
    $("#ResultText").append(':root {\n<br>');

    for (keys = 0; keys < Object.keys(CONFIG.THEME).length; keys++) {
        if( keys === 0 || keys === 2 ) {
            $("#ResultText").append('--' + CONFIG.THEME[keys][2] + ': "' + CONFIG.THEME[keys][1] + '";\n<br>');
        } else {
            $("#ResultText").append('--' + CONFIG.THEME[keys][2] + ': ' + CONFIG.THEME[keys][1] + ';\n<br>');
    }
    }

    var grey5 = CONFIG.THEME[14][1].split(")").join(", .5)");
    $("#ResultText").append('--grey5: ' + grey5 + ';\n<br>');

    var darkgrey5 = CONFIG.THEME[15][1].split(")").join(", .75)");
    $("#ResultText").append('--darkgrey5: ' + darkgrey5 + ';\n<br>');

    $("#ResultText").append('} /* Made with Purple Wizard theme generator v' + VERSION + ', have fun ! */');
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
    var MENUS = ["General", "RGB", "Status", "Profile", "Menus", "Plugins"];
    for (var i = 0; i < $('#menu').children('div').length; i++) {
        $("#config" + (i + 1)).hide();
        $("#btn" + (i + 1)).removeClass("active");
    }

    $("#ConfigName").html("Config - " + MENUS[ID - 1]);
    $("#btn" + ID).addClass("active");
    $("#config" + ID).show();
}

function UpdateVars() {
    for (keys = 0; keys < Object.keys(CONFIG.THEME).length; keys++) {
        CONFIG.THEME[keys][1] = $("#Theme-" + CONFIG.THEME[keys][2]).val();
    }
    CONFIG.EDITOR.new = "rgb(" + $("#red").val() + ", " + $("#green").val() + ", " + $("#blue").val() + ")";
}