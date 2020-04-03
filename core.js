const VERSION = "0.91";

var fonts = ["Quicksand", "Gruppo", "Lobster", "Indie Flower", "Cuprum", "Arial", "Helvetica Neue", "Courier New", "Times New Roman", "Comic Sans MS", "Impact"];
var CONFIG = {
    EDITOR: { id: 0, old: "", new: "" },
    RGB: 2,
    PLUGINS: [1, 1, 1, 0],
    THEME: {
        0: ["Title", "Discord", "title", "general", "Theme title", accepts = ["texts"], false],
        1: ["Background", "url(https://cdn.discordapp.com/attachments/476154188494143498/680898001346363415/appear.jpg)", "background", "general", "Theme background", accepts = ["img", "rgb"], false],
        2: ["Font", "Quicksand", "font", "general", "Theme font", accepts = ["fonts"], false],
        3: ["Animation Time", "5s", "time", "rgb", "Duration in seconds of the animation (Example: 10s = 10 seconds)", accepts = ["texts"], false],
        4: ["Online", "rgb(0, 255, 136)", "Online", "status", "Online status color", accepts = ["rgb"], true],
        5: ["Idle", "rgb(0, 99, 156)", "Idle", "status", "Idle status color", accepts = ["rgb"], true],
        6: ["Unavailable", "rgb(228, 15, 0)", "Unavailable", "status", "Unavailable status color", accepts = ["rgb"], true],
        7: ["Offline", "rgb(90, 95, 100)", "Offline", "status", "Offline status color", accepts = ["rgb"], true],
        8: ["Playing", "url(https://cdn.discordapp.com/attachments/476154188494143498/680898006937370645/provenance.jpg)", "Playing", "profile", "Playing profile color", accepts = ["img", "rgb"], true],
        9: ["Xbox", "url(https://cdn.discordapp.com/attachments/476154188494143498/680898003246252176/energyunion.jpg)", "Xbox", "profile", "Xbox profile color", accepts = ["img", "rgb"], true],
        10: ["Spotify", "url(https://cdn.discordapp.com/attachments/476154188494143498/680898009122340937/spacestorm.jpg)", "Spotify", "profile", "Spotify profile color", accepts = ["img", "rgb"], true],
        11: ["Streaming", "url(https://cdn.discordapp.com/attachments/476154188494143498/680897535828557844/aldebaran.jpg)", "Streaming", "profile", "Streaming profile color", accepts = ["img", "rgb"], true],
        12: ["Grey", "rgb(77, 70, 85)", "grey", "menus", "Main color for menus.", accepts = ["rgb"], true],
        13: ["Darkgrey", "rgb(18, 18, 18)", "darkgrey", "menus", "Secondary color for menus.", accepts = ["rgb"], true],
        14: ["ChatBox", "var(--darkgrey5)", "ChatBox", "menus", "Chat and PM background", accepts = ["rgb", "vars"], true],
        15: ["Sidebar", "var(--darkgrey5)", "Sidebar", "menus", "Sidebar background", accepts = ["rgb", "vars"], true],
        16: ["Send Message", "var(--darkgrey)", "SendMessage", "menus", "Send Message bar background", accepts = ["rgb", "vars"], true],
        17: ["Logo", "url(https://cdn.discordapp.com/attachments/476154188494143498/675832706386362398/ALPHA4.gif)", "logo", "general", "PM button / logo icon", accepts = ["img"], true],
        18: ["Hover Message", "var(--darkgrey5)", "HoverMessage", "menus", "Hovered Message background", accepts = ["texts", "icons", "vars"], true],
        19: ["RGB 1", "rgb(130, 0, 216)", "rgb1", "rgb", "RGB Color 1 (if you only use this color then the RGB animation will not be enabled)", accepts = ["rgb"], true],
        20: ["Join Us", "Hey! Wanna have some fun.. Join US !", "JoinUs", "texts", "Title of servers invites", accepts = ["texts", "icons"], false],
        21: ["Add New Server", "➕ Add a new server", "AddNewServer", "texts", "Title of the 'Add a server' box", accepts = ["texts", "icons"], false],
        22: ["Close Window Button", "🔴", "Close", "texts", "Close window icon", accepts = ["texts", "icons"], false],
        23: ["Resize Window Button", "🔵", "Resize", "texts", "Resize window icon", accepts = ["texts", "icons"], false],
        24: ["Hide Window Button", "⚫", "Hide", "texts", "Hide windows icon", accepts = ["texts", "icons"], false],
        25: ["Profile Picture Hovered", "Watch me", "ProfilePic", "texts", "Text of an hovered profile picture", accepts = ["texts", "icons"], false],
        26: ["Unread Icon", "✨", "Unread", "texts", "Unread Icon Text", accepts = ["texts", "icons"], false],
        27: ["Options Icon", "⚙️", "Options", "texts", "Options Icon", accepts = ["texts", "icons"], false],
        28: ["Emoji Icon", "🙂", "Emoji", "texts", "Emojis Button", accepts = ["texts", "icons"], false],
        29: ["Emoji Icon Hovered", "😜", "EmojiHover", "texts", "Hovered Emojis Button", accepts = ["texts", "icons"], false],
        30: ["Text Channels Icon", "💬", "Channel", "texts", "Text Channel Icon", accepts = ["texts", "icons"], false],
        31: ["Voice Channels Icon", "🔊", "Voice", "texts", "Voice Channel Icon", accepts = ["texts", "icons"], false],
        32: ["Community Name", "purpies", "Community", "texts", "Text after the members count in server invites", accepts = ["texts", "icons"], false],
        33: ["Welcome Message", "Theme base designed by Purple Wizard.", "WelcomeMessage", "texts", "Text after the greeting message of a server", accepts = ["texts", "icons"], false],
        34: ["Theme Watermark", "Made with 💖 by Purple Wizard", "Watermark", "texts", "Watermark under the options", accepts = ["texts", "icons"], false],
        35: ["Edit Custom Status", "Put another status", "EditStatus", "texts", "Edit Custom Status Text", accepts = ["texts", "icons"], false],
        36: ["Server Folders", "📁", "Folders", "texts", "Edit closed server folder icon", accepts = ["texts", "icons"], false],
        37: ["RGB 2", "rgb(0, 225, 255)", "rgb2", "rgb", "RGB Color 2", accepts = ["rgb"], true],
        38: ["RGB 3", "rgb(0, 0, 0)", "rgb3", "rgb", "RGB Color 3", accepts = ["rgb"], true],
        39: ["RGB 4", "rgb(0, 0, 0)", "rgb4", "rgb", "RGB Color 4", accepts = ["rgb"], true],
        40: ["RGB 5", "rgb(0, 0, 0)", "rgb5", "rgb", "RGB Color 5", accepts = ["rgb"], true],
        41: ["RGB 6", "rgb(0, 0, 0)", "rgb6", "rgb", "RGB Color 6", accepts = ["rgb"], true],
        42: ["RGB 7", "rgb(0, 0, 0)", "rgb7", "rgb", "RGB Color 7", accepts = ["rgb"], true],
        43: ["RGB 8", "rgb(0, 0, 0)", "rgb8", "rgb", "RGB Color 8", accepts = ["rgb"], true],
        44: ["RGB 9", "rgb(0, 0, 0)", "rgb9", "rgb", "RGB Color 9", accepts = ["rgb"], true],
        45: ["RGB 10", "rgb(0, 0, 0)", "rgb10", "rgb", "RGB Color 10", accepts = ["rgb"], true],
        46: ["Opened Server Folders", "💠", "FoldersOpen", "texts", "Edit opened server folder icon", accepts = ["texts", "icons"], false],
        47: ["Mute/Unmute Icon", "🎙️", "Micro", "texts", "Microphone Icon", accepts = ["texts", "icons"], false],
        48: ["Deaf/Undeafen Icon", "🎧", "Headset", "texts", "Headset Icon", accepts = ["texts", "icons"], false],
        49: ["Header Background", "var(--darkgrey5)", "TitleBG", "menus", "Title & Horizontal Servers List background", accepts = ["rgb", "vars"], true]
    },
};

function InitVars() {
    for (keys = 0; keys < Object.keys(CONFIG.THEME).length; keys++) {
        let square = "<div class='no square'></div>";
        if (CONFIG.THEME[keys][6] === true) square = "<div class='square' id='square-" + CONFIG.THEME[keys][2] + "'></div>";


        var Accepted = "<span class='accept'>";

        for (var i in CONFIG.THEME[keys][5]) {
            if (i != 0) Accepted = Accepted + ", " + CONFIG.THEME[keys][5][i];
            else Accepted = Accepted + CONFIG.THEME[keys][5][i];
        }

        Accepted = Accepted.split("fonts").join("<span class='green'>✔</span> Font name").split("texts").join("<span class='green'>✔</span> Text").split("img").join("<span class='green'>✔</span> Image URL").split("vars").join("<span class='green'>✔</span> Variables").split("icons").join("<span class='green'>✔</span> Emojis").split("rgb").join("<span class='green'>✔</span> RGB");

        if (CONFIG.THEME[keys][5].length === 1) Accepted = Accepted + " only.</span>"; else Accepted = Accepted + "</span>";

        var CONTENT = ('<div class="value" id="' + CONFIG.THEME[keys][2] + '">' + CONFIG.THEME[keys][0] + square +
            '<input id="Theme-' + CONFIG.THEME[keys][2] + '" data-id="' + keys + '" type="text" value="' + CONFIG.THEME[keys][1] + '">' +
            '<div class="desc">' + CONFIG.THEME[keys][4] + ' ' + Accepted + ' </div>' +
            '</div>');

        if (CONFIG.THEME[keys][3] === "general") $("#config1").append(CONTENT);
        if (CONFIG.THEME[keys][3] === "rgb") $("#config2").append(CONTENT);
        if (CONFIG.THEME[keys][3] === "status") $("#config3").append(CONTENT);
        if (CONFIG.THEME[keys][3] === "profile") $("#config4").append(CONTENT);
        if (CONFIG.THEME[keys][3] === "menus") $("#config5").append(CONTENT);
        if (CONFIG.THEME[keys][3] === "texts") $("#config7").append(CONTENT);
    }
}

function Edit(target) {
    if ($("input").is(":focus") === false) {
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
        $("#Variables").hide();
        $("#colorpicker").hide();
        $("#Fonts").hide();
        var SHOWVAREDITOR = 0;
        var SHOWRGBEDITOR = 0;
        var SHOWFONTSEDITOR = 0;
        for (var i in CONFIG.THEME[target][5]) {
            if (CONFIG.THEME[target][5][i] === "rgb") SHOWRGBEDITOR = 1;
            if (CONFIG.THEME[target][5][i] === "vars") SHOWVAREDITOR = 1;
            if (CONFIG.THEME[target][5][i] === "fonts") SHOWFONTSEDITOR = 1;
        }

        if (SHOWRGBEDITOR === 1) {
            $("#colorpicker").show();
            CONFIG.EDITOR.new = "rgb(" + $("#red").val() + ", " + $("#green").val() + ", " + $("#blue").val() + ")";
        }
        if (SHOWVAREDITOR === 1) {
            $("#Variables").show();
            CONFIG.EDITOR.new = "rgb(" + $("#red").val() + ", " + $("#green").val() + ", " + $("#blue").val() + ")";
        }
        if (SHOWFONTSEDITOR === 1) {
            $("#Fonts").show();
            CONFIG.EDITOR.new = "Quicksand";
        }
        $("#EditorSelection").html("Editing <div class='noedit'>" + CONFIG.THEME[CONFIG.EDITOR.id][0] + "</div>");
        $("#EditorOld").html("Old Value <div class='noedit'>" + CONFIG.EDITOR.old + "<div class='square' style='background-color:" + CONFIG.EDITOR.old + "';></div></div>");
        $("#EditorNew").html("New Value <div class='noedit'>" + CONFIG.EDITOR.new + "<div class='square' style='background-color:" + CONFIG.EDITOR.new + "';></div></div>");
    }
}

function GetValue(STYLE) {
    var bodyStyles = window.getComputedStyle(document.body);
    var value = bodyStyles.getPropertyValue('--' + CONFIG.THEME[STYLE][2]);

    return value;
}

function SetValue(STYLE) {
    if (STYLE != 37 || STYLE != 38) {
        document.body.style.setProperty('--' + CONFIG.THEME[STYLE][2], CONFIG.THEME[STYLE][1]);

        if (STYLE === 19 || STYLE === 37 || STYLE === 38 || STYLE === 39 || STYLE === 40 || STYLE === 41 || STYLE === 42 || STYLE === 43 || STYLE === 44 || STYLE === 45) {
            let OPTIONALRGB = CONFIG.THEME[19][1];
            if (CONFIG.RGB == 1) OPTIONALRGB = OPTIONALRGB + ", " + OPTIONALRGB;
            if (CONFIG.RGB >= 2) OPTIONALRGB = OPTIONALRGB + ", " + CONFIG.THEME[37][1];
            if (CONFIG.RGB >= 3) OPTIONALRGB = OPTIONALRGB + ", " + CONFIG.THEME[38][1];
            if (CONFIG.RGB >= 4) OPTIONALRGB = OPTIONALRGB + ", " + CONFIG.THEME[39][1];
            if (CONFIG.RGB >= 5) OPTIONALRGB = OPTIONALRGB + ", " + CONFIG.THEME[40][1];
            if (CONFIG.RGB >= 6) animation = animation + ", " + CONFIG.THEME[41][1];
            if (CONFIG.RGB >= 7) animation = animation + ", " + CONFIG.THEME[42][1];
            if (CONFIG.RGB >= 8) animation = animation + ", " + CONFIG.THEME[43][1];
            if (CONFIG.RGB >= 9) animation = animation + ", " + CONFIG.THEME[44][1];
            if (CONFIG.RGB == 10) animation = animation + ", " + CONFIG.THEME[45][1];
            document.body.style.setProperty('--animation', OPTIONALRGB);
        }

        if (CONFIG.THEME[STYLE][3] === "menus") {
            document.body.style.setProperty('--' + CONFIG.THEME[12][2], CONFIG.THEME[12][1]);
            document.body.style.setProperty('--' + CONFIG.THEME[13][2], CONFIG.THEME[13][1]);
            var grey5 = CONFIG.THEME[12][1].split("rgb(").join("rgba(").split(")").join(", .5)");
            var darkgrey5 = CONFIG.THEME[13][1].split("rgb(").join("rgba(").split(")").join(", .75)");
            document.body.style.setProperty('--grey5', grey5);
            document.body.style.setProperty('--darkgrey5', darkgrey5);
        }
        document.body.style.setProperty('--' + CONFIG.THEME[STYLE][2], CONFIG.THEME[STYLE][1]);
    }
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
    UPDATEUI();
}, 1000);

function UPDATEUI() {
    document.title = CONFIG.THEME[0][1] + " Theme Generator";
    $('input:text').on("focusout", function () {
        SetValue($(this).data("id"));
        UpdateVars();
    });
    if ($("#edition").is(":visible")) {
        CONFIG.EDITOR.old = CONFIG.THEME[CONFIG.EDITOR.id][1];
        if (CONFIG.EDITOR.new != "var(--grey)" && CONFIG.EDITOR.new != "var(--darkgrey)" && CONFIG.EDITOR.new != "var(--grey5)" && CONFIG.EDITOR.new != "var(--darkgrey5)" && CONFIG.EDITOR.new != "transparent") {
            if (CONFIG.THEME[CONFIG.EDITOR.id][5][0] != "fonts") CONFIG.EDITOR.new = "rgb(" + $("#red").val() + ", " + $("#green").val() + ", " + $("#blue").val() + ")";
        }
        if ($("#Fonts").is(":visible")) {
            $("#EditorOld").html("Old Font <div class='noedit'>" + CONFIG.EDITOR.old + "</div>");
            $("#EditorNew").html("New Font <div class='noedit' style='font-family:" + CONFIG.EDITOR.new + ", sans-serif';>" + CONFIG.EDITOR.new + "</div>");
        } else {
            $("#EditorOld").html("Old Value <div class='noedit'>" + CONFIG.EDITOR.old + "<div class='square' style='background-color:" + CONFIG.EDITOR.old + "';></div></div>");
            $("#EditorNew").html("New Value <div class='noedit'>" + CONFIG.EDITOR.new + "<div class='square' style='background-color:" + CONFIG.EDITOR.new + "';></div></div>");
        }
    }
    if ($('#ResultText').is(':empty')) $("#output").hide(); else $("#output").show();

    if (CONFIG.RGB >= 2) $("#REMOVERGB").removeClass("disabled"); else $("#REMOVERGB").addClass("disabled");
    if (CONFIG.RGB <= 9) $("#ADDRGB").removeClass("disabled"); else $("#ADDRGB").addClass("disabled");
    if (CONFIG.RGB == 1) {
        $("#rgbtext").html("RGB animation : Disabled");
        $("#time").hide();
        $("#rgb2").hide();
    } else {
        $("#rgbtext").html("");
        $("#time").show();
        $("#rgb2").show();
    }
    if (CONFIG.RGB >= 3) $("#rgb3").show(); else $("#rgb3").hide();
    if (CONFIG.RGB >= 4) $("#rgb4").show(); else $("#rgb4").hide();
    if (CONFIG.RGB >= 5) $("#rgb5").show(); else $("#rgb5").hide();
    if (CONFIG.RGB >= 6) $("#rgb6").show(); else $("#rgb6").hide();
    if (CONFIG.RGB >= 7) $("#rgb7").show(); else $("#rgb7").hide();
    if (CONFIG.RGB >= 8) $("#rgb8").show(); else $("#rgb8").hide();
    if (CONFIG.RGB >= 9) $("#rgb9").show(); else $("#rgb9").hide();
    if (CONFIG.RGB == 10) $("#rgb10").show(); else $("#rgb10").hide();
}

(function () {
    ShowMenu(1);
    InitVars();
    for (var f in fonts) {
        $("#fontsList").append("<a href='#' id='font" + f + "' style='font-family:" + fonts[f] + ";'>" + fonts[f] + "</a>");
    }
    $("#copyright").html("Theme generator v" + VERSION + " by <strong>Purple Wizard</strong>.");
    $("input[type='text'], textarea").attr('spellcheck', false);
    $("#NewResult").on("click", function () { Result(); });
    $("#menu").on("click", ".RGBbutton", function () { ShowMenu($(this).attr("data-id")); });

    $("#Theme-font").prop("disabled", true);
    for (var r = 0; r < 10; r++) { $("#Theme-rgb" + r).prop("disabled", true); }

    $("#Theme-Online").prop("disabled", true);
    $("#Theme-Idle").prop("disabled", true);
    $("#Theme-Unavailable").prop("disabled", true);
    $("#Theme-Offline").prop("disabled", true);
    $("#Theme-grey").prop("disabled", true);
    $("#Theme-darkgrey").prop("disabled", true);
    $("#Theme-ChatBox").prop("disabled", true);
    $("#Theme-Sidebar").prop("disabled", true);
    $("#Theme-SendMessage").prop("disabled", true);
    $("#Theme-HoverMessage").prop("disabled", true);

    $("#ToggleHover").on("click", function () {
        UpdatePlugins();
    });

    $("#ToggleOffline").on("click", function () {
        UpdatePlugins();
    });

    $("#ToggleServerList").on("click", function () {
        UpdatePlugins();
    });

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

    $("#font").on("click", function () { Edit(2); });

    $("#font0").on("click", function () {
        CONFIG.EDITOR.new = fonts[0];
    });
    $("#font1").on("click", function () {
        CONFIG.EDITOR.new = fonts[1];
    });
    $("#font2").on("click", function () {
        CONFIG.EDITOR.new = fonts[2];
    });
    $("#font3").on("click", function () {
        CONFIG.EDITOR.new = fonts[3];
    });
    $("#font4").on("click", function () {
        CONFIG.EDITOR.new = fonts[4];
    });
    $("#font5").on("click", function () {
        CONFIG.EDITOR.new = fonts[5];
    });
    $("#font6").on("click", function () {
        CONFIG.EDITOR.new = fonts[6];
    });
    $("#font7").on("click", function () {
        CONFIG.EDITOR.new = fonts[7];
    });
    $("#font8").on("click", function () {
        CONFIG.EDITOR.new = fonts[8];
    });
    $("#font9").on("click", function () {
        CONFIG.EDITOR.new = fonts[9];
    });
    $("#font10").on("click", function () {
        CONFIG.EDITOR.new = fonts[10];
    });

    $("#rgb1").on("click", function () { Edit(19); });
    $("#rgb2").on("click", function () { Edit(37); });
    $("#rgb3").on("click", function () { Edit(38); });
    $("#rgb4").on("click", function () { Edit(39); });
    $("#rgb5").on("click", function () { Edit(40); });
    $("#rgb6").on("click", function () { Edit(41); });
    $("#rgb7").on("click", function () { Edit(42); });
    $("#rgb8").on("click", function () { Edit(43); });
    $("#rgb9").on("click", function () { Edit(44); });
    $("#rgb10").on("click", function () { Edit(45); });

    $("#Online").on("click", function () { Edit(4); });
    $("#Idle").on("click", function () { Edit(5); });
    $("#Unavailable").on("click", function () { Edit(6); });
    $("#Offline").on("click", function () { Edit(7); });

    $("#grey").on("click", function () { Edit(12); });
    $("#darkgrey").on("click", function () { Edit(13); });
    $("#ChatBox").on("click", function () { Edit(14); });
    $("#Sidebar").on("click", function () { Edit(15); });
    $("#HoverMessage").on("click", function () { Edit(18); });
    $("#SendMessage").on("click", function () { Edit(16); });
    $("#TitleBG").on("click", function () { Edit(49); });

    $("#VAR1").on("click", function () {
        CONFIG.EDITOR.new = "var(--grey)";
    });

    $("#VAR2").on("click", function () {
        CONFIG.EDITOR.new = "var(--darkgrey)";
    });

    $("#VAR3").on("click", function () {
        CONFIG.EDITOR.new = "var(--grey5)";
    });

    $("#VAR4").on("click", function () {
        CONFIG.EDITOR.new = "var(--darkgrey5)";
    });

    $("#VAR5").on("click", function () {
        CONFIG.EDITOR.new = "transparent";
    });

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

    $("#ADDRGB").on("click", function () {
        if (CONFIG.RGB < 10) {
            CONFIG.RGB++;
            if(CONFIG.RGB === 2) CONFIG.THEME[3][1] = $("#Theme-" + CONFIG.THEME[3][2]).val();
            SetValue(19);
            UPDATEUI();
        }
    });

    $("#REMOVERGB").on("click", function () {
        if (CONFIG.RGB > 1) {
            CONFIG.RGB--;
            SetValue(19);
            if (CONFIG.RGB == 1) { CONFIG.THEME[3][1] = "0s"; SetValue(3); }
            UPDATEUI();
        }
    });

})();

function Result() {
    $("#settings").hide();
    $("#output").show();
    $("#ResultText").html("");
    $("#ResultText").append('<span class="meta">//META{"name":"' + CONFIG.THEME[0][1] + '","description":"Made with ÆroSpace Theme Generator","author":"ᴘᴜʀᴘʟᴇ ᴡɪᴢᴀʀᴅ#0984","version":"' + VERSION + '", "website":"https://github.com/GoldenLys/"}*//{}</span>\n<br>');
    $("#ResultText").append('<span class="plugin">@import url("https://goldenlys.github.io/BetterDiscord-Elysia/aerobase.css")</span>;\n<br>');
    if (CONFIG.THEME[2][1] === "Quicksand") { $("#ResultText").append('<span class="plugin">@import url("https://fonts.googleapis.com/css?family=Quicksand&display=swap")</span>;\n<br>'); }
    if (CONFIG.THEME[2][1] === "Gruppo") { $("#ResultText").append('<span class="plugin">@import url("https://fonts.googleapis.com/css?family=Gruppo&display=swap")</span>;\n<br>'); }
    if (CONFIG.THEME[2][1] === "Lobster") { $("#ResultText").append('<span class="plugin">@import url("https://fonts.googleapis.com/css?family=Lobster&display=swap")</span>;\n<br>'); }
    if (CONFIG.THEME[2][1] === "Indie Flower") { $("#ResultText").append('<span class="plugin">@import url("https://fonts.googleapis.com/css?family=Indie+Flower&display=swap")</span>;\n<br>'); }
    if (CONFIG.THEME[2][1] === "Cuprum") { $("#ResultText").append('<span class="plugin">@import url("https://fonts.googleapis.com/css?family=Cuprum&display=swap")</span>;\n<br>'); }
    if (CONFIG.PLUGINS[0] === 1) { $("#ResultText").append('<span class="plugin">@import url("https://goldenlys.github.io/BetterDiscord-Elysia/HoverMemberList.css")</span>;\n<br>'); }
    if (CONFIG.PLUGINS[1] === 1) { $("#ResultText").append('<span class="plugin">@import url("https://goldenlys.github.io/BetterDiscord-Elysia/NoOffline.css")</span>;\n<br>'); }
    if (CONFIG.PLUGINS[2] === 1) { $("#ResultText").append('<span class="plugin">@import url("https://goldenlys.github.io/BetterDiscord-Elysia/HorizontalServerList.css")</span>;\n<br>'); }
    if (CONFIG.PLUGINS[3] === 1) { $("#ResultText").append('<span class="plugin">@import url("https://goldenlys.github.io/BetterDiscord-Elysia/GIBBUHSLFIX.css")</span>;\n<br>'); }
    $("#ResultText").append('<span class="val">:root {</span>\n<br>');

    for (keys = 0; keys < Object.keys(CONFIG.THEME).length; keys++) {
        if (keys === 0 || keys === 2 || CONFIG.THEME[keys][3] === "texts") {
            $("#ResultText").append('<span class="var">--' + CONFIG.THEME[keys][2] + ':</span> "' + CONFIG.THEME[keys][1] + '";\n<br>');
        } else if (keys !== 19 && keys !== 37 && keys !== 38 && keys !== 38 && keys !== 39 && keys !== 40 && keys !== 41 && keys !== 42 && keys !== 43 && keys !== 44 && keys !== 45) {
            $("#ResultText").append('<span class="var">--' + CONFIG.THEME[keys][2] + ':</span> ' + CONFIG.THEME[keys][1] + ';\n<br>');
        }
    }

    let animation = CONFIG.THEME[19][1];
    if (CONFIG.RGB == 1) animation = animation + ", " + animation;
    if (CONFIG.RGB >= 2) animation = animation + ", " + CONFIG.THEME[37][1];
    if (CONFIG.RGB >= 3) animation = animation + ", " + CONFIG.THEME[38][1];
    if (CONFIG.RGB >= 4) animation = animation + ", " + CONFIG.THEME[39][1];
    if (CONFIG.RGB >= 5) animation = animation + ", " + CONFIG.THEME[40][1];
    if (CONFIG.RGB >= 6) animation = animation + ", " + CONFIG.THEME[41][1];
    if (CONFIG.RGB >= 7) animation = animation + ", " + CONFIG.THEME[42][1];
    if (CONFIG.RGB >= 8) animation = animation + ", " + CONFIG.THEME[43][1];
    if (CONFIG.RGB >= 9) animation = animation + ", " + CONFIG.THEME[44][1];
    if (CONFIG.RGB == 10) animation = animation + ", " + CONFIG.THEME[45][1];
    $("#ResultText").append('<span class="var">--animation:</span> ' + animation + ';\n<br>');
    let grey5 = CONFIG.THEME[12][1].split("rgb(").join("rgba(").split(")").join(", .5)");
    let darkgrey5 = CONFIG.THEME[13][1].split("rgb(").join("rgba(").split(")").join(", .75)");
    $("#ResultText").append('<span class="var">--grey5:</span> ' + grey5 + ';\n<br>');
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
    var MENUS = ["General", "RGB", "Status", "Profile", "Menus", "Add-ons", "Texts"];
    for (var i = 0; i < $('#menu').children('div').length; i++) {
        $("#config" + (i + 1)).hide();
        $("#btn" + (i + 1)).removeClass("active");
        $("#btn" + (i + 1)).html(MENUS[i]);
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

function UpdatePlugins() {
    if ($("#ToggleHover").is(':checked')) CONFIG.PLUGINS[0] = 1; else CONFIG.PLUGINS[0] = 0;
    if ($("#ToggleOffline").is(':checked')) CONFIG.PLUGINS[1] = 1; else CONFIG.PLUGINS[1] = 0;
    if ($("#ToggleServerList").is(':checked')) CONFIG.PLUGINS[2] = 1; else CONFIG.PLUGINS[2] = 0;
    if ($("#ToggleGHSL").is(':checked')) CONFIG.PLUGINS[3] = 1; else CONFIG.PLUGINS[3] = 0;
}