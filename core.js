const VERSION = "3.3";

var APP = {
	TYPES: ["red", "green", "blue"],
	PICKER: ["-1", "-1", "-1"],
	SELECTION: "",
	FONTS: ["Avignon PS Pro", "Quicksand", "Gruppo", "Lobster", "Indie Flower", "Cuprum", "Arial", "Helvetica Neue", "Courier New", "Times New Roman", "Comic Sans MS", "Impact"],
	LOGOS: ["1.gif", "2.png", "3.gif", "4.png", "5.png", "6.png", "7.png", "8.gif", "9.png", "10.png", "11.png", "12.png", "13.png", "14.png", "15.png"],
};

var CONFIG = {
	EDITOR: {
		id: 0,
		old: "",
		new: ""
	},
	RGB: 2,
	PLUGINS: [1, 1, 1, 0, 0, 0],
	SELECTED: {
		1: "img",
		8: "img",
		9: "img",
		10: "img",
		11: "img",
		17: "img"
	},
	THEME: {
		0: ["Title", "ÆroSpace", "title", "general", "Theme title", accepts = ["texts"], false],
		1: ["Background", "https://goldenlys.github.io/ThemeGen/img/bg.jpg", "background", "general", "Theme background", accepts = ["img", "rgb"], false],
		2: ["Font", "Avignon PS Pro", "font", "general", "Theme font", accepts = ["fonts"], false],
		3: ["Animation Time", "10s", "time", "rgb", "Duration in seconds of the animation (Example: 10s = 10 seconds)", accepts = ["texts"], false],
		4: ["Online", "rgb(0 255 136)", "Online", "status", "Online status color", accepts = ["rgb"], true],
		5: ["Idle", "rgb(0 99 156)", "Idle", "status", "Idle status color", accepts = ["rgb"], true],
		6: ["Unavailable", "rgb(228 15 0)", "Unavailable", "status", "Unavailable status color", accepts = ["rgb"], true],
		7: ["Offline", "rgb(90 95 100)", "Offline", "status", "Offline status color", accepts = ["rgb"], true],
		8: ["Playing", "https://goldenlys.github.io/ThemeGen/img/playing.jpg", "Playing", "profile", "Playing profile color", accepts = ["img", "rgb"], true],
		9: ["Xbox", "https://goldenlys.github.io/ThemeGen/img/xbox.jpg", "Xbox", "profile", "Xbox profile color", accepts = ["img", "rgb"], true],
		10: ["Spotify", "https://goldenlys.github.io/ThemeGen/img/spotify.jpg", "Spotify", "profile", "Spotify profile color", accepts = ["img", "rgb"], true],
		11: ["Streaming", "https://goldenlys.github.io/ThemeGen/img/twitch.jpg", "Streaming", "profile", "Streaming profile color", accepts = ["img", "rgb"], true],
		12: ["Grey", "rgb(77 70 85)", "grey", "menus", "Main color for menus.", accepts = ["rgb"], true],
		13: ["Darkgrey", "rgb(18 18 18)", "darkgrey", "menus", "Secondary color for menus.", accepts = ["rgb"], true],
		14: ["ChatBox", "var(--darkgrey5)", "ChatBox", "menus", "Chat and PM background", accepts = ["rgb", "vars"], true],
		15: ["Sidebar", "var(--darkgrey5)", "Sidebar", "menus", "Sidebar background", accepts = ["rgb", "vars"], true],
		16: ["Send Message", "var(--darkgrey)", "SendMessage", "menus", "Send Message bar background", accepts = ["rgb", "vars"], true],
		17: ["Logo", "https://goldenlys.github.io/ThemeGen/img/ELYSIA.gif", "logo", "general", "PM button / logo icon", accepts = ["img", "logo"], true],
		18: ["Hover Message", "var(--darkgrey5)", "HoverMessage", "menus", "Hovered Message background", accepts = ["rgb", "vars"], true],
		19: ["Join Us", "Hey! Wanna have some fun.. Join US !", "JoinUs", "texts", "Title of servers invites", accepts = ["texts", "icons"], false],
		20: ["Add New Server", "➕ Add a new server", "AddNewServer", "texts", "Title of the 'Add a server' box", accepts = ["texts", "icons"], false],
		21: ["Close Window Button", "🔴", "Close", "texts", "Close window icon", accepts = ["texts", "icons"], false],
		22: ["Resize Window Button", "🔵", "Resize", "texts", "Resize window icon", accepts = ["texts", "icons"], false],
		23: ["Hide Window Button", "⚫", "Hide", "texts", "Hide windows icon", accepts = ["texts", "icons"], false],
		24: ["Profile Picture Hovered", "Watch me", "ProfilePic", "texts", "Text of an hovered profile picture", accepts = ["texts", "icons"], false],
		25: ["Unread Icon", "✨", "Unread", "texts", "Unread Icon Text", accepts = ["texts", "icons"], false],
		26: ["Options Icon", "⚙️", "Options", "texts", "Options Icon", accepts = ["texts", "icons"], false],
		27: ["Emoji Icon", "🙂", "Emoji", "texts", "Emojis Button", accepts = ["texts", "icons"], false],
		28: ["Emoji Icon Hovered", "😜", "EmojiHover", "texts", "Hovered Emojis Button", accepts = ["texts", "icons"], false],
		29: ["Text Channels Icon", "💬", "Channel", "texts", "Text Channel Icon", accepts = ["texts", "icons"], false],
		30: ["Voice Channels Icon", "🔊", "Voice", "texts", "Voice Channel Icon", accepts = ["texts", "icons"], false],
		31: ["Community Name", "purpies", "Community", "texts", "Text after the members count in server invites", accepts = ["texts", "icons"], false],
		32: ["Welcome Message", "✨ Welcome to ELYSIA, designed by Purple Wizard.", "WelcomeMessage", "texts", "Text after the greeting message of a server", accepts = ["texts", "icons"], false],
		33: ["Theme Watermark", "Made with 💖 by Purple Wizard", "Watermark", "texts", "Watermark under the options", accepts = ["texts", "icons"], false],
		34: ["Edit Custom Status", "Put another status", "EditStatus", "texts", "Edit Custom Status Text", accepts = ["texts", "icons"], false],
		35: ["Server Folders", "📁", "Folders", "texts", "Edit closed server folder icon", accepts = ["texts", "icons"], false],
		36: ["RGB 1", "rgb(130 0 216)", "C1", "rgb", "RGB Color 1 (if you only use this color then the RGB animation will not be enabled)", accepts = ["rgb"], true],
		37: ["RGB 2", "rgb(0 225 255)", "C2", "rgb", "RGB Color 2", accepts = ["rgb"], true],
		38: ["RGB 3", "rgb(0 0 0)", "C3", "rgb", "RGB Color 3", accepts = ["rgb"], true],
		39: ["RGB 4", "rgb(0 0 0)", "C4", "rgb", "RGB Color 4", accepts = ["rgb"], true],
		40: ["RGB 5", "rgb(0 0 0)", "C5", "rgb", "RGB Color 5", accepts = ["rgb"], true],
		41: ["RGB 6", "rgb(0 0 0)", "C6", "rgb", "RGB Color 6", accepts = ["rgb"], true],
		42: ["RGB 7", "rgb(0 0 0)", "C7", "rgb", "RGB Color 7", accepts = ["rgb"], true],
		43: ["RGB 8", "rgb(0 0 0)", "C8", "rgb", "RGB Color 8", accepts = ["rgb"], true],
		44: ["Opened Server Folders", "💠", "FoldersOpen", "texts", "Edit opened server folder icon", accepts = ["texts", "icons"], false],
		45: ["Mute/Unmute Icon", "🎙️", "Micro", "texts", "Microphone Icon", accepts = ["texts", "icons"], false],
		46: ["Deaf/Undeafen Icon", "🎧", "Headset", "texts", "Headset Icon", accepts = ["texts", "icons"], false],
		47: ["Header Background", "var(--darkgrey5)", "TitleBG", "menus", "Title & Horizontal Servers List background", accepts = ["rgb", "vars"], true],
		48: ["Servers Size", "45px", "ServerSize", "general", "Define custom servers size when using the Horizontal Servers List plugin.", accepts = ["texts"], false],
		49: ["Write a message", "Write a message...", "WriteMessage", "texts", "Write a new message text", accepts = ["texts", "icons"], false],
		50: ["Listen Along", "Listen Along", "ListenAlong", "texts", "Listen Along on Spotify button text", accepts = ["texts", "icons"], false],
		51: ["Streaming", "rgb(78 0 180)", "StreamingColor", "status", "Streaming status color", accepts = ["rgb"], true],
		52: ["Server Columns", "1", "ServerColumns", "general", "Define the number of custom colums when using the Horizontal Servers List plugin.", accepts = ["texts"], false],
		53: ["Highlighted", "var(--grey5)", "Highlighted", "menus", "Highlighted text background", accepts = ["rgb", "vars"], true],
		54: ["RGB 9", "rgb(0 0 0)", "C9", "rgb", "RGB Color 9", accepts = ["rgb"], true],
		55: ["RGB 10", "rgb(0 0 0)", "C10", "rgb", "RGB Color 10", accepts = ["rgb"], true],
		56: ["Active Box", "rgb(235 235 235)", "ActiveBox", "menus", "Selected Box background", accepts = ["rgb", "vars"], true],
		57: ["Announcements Channels Icon", "📣", "Announcement", "texts", "Announcement Channel Icon", accepts = ["texts", "icons"], false],
		/*58: ["Tagged Name", "YOU", "TaggedName", "texts", "<span class='left red'>Obsolete</span> Text shown when you're tagged in the chat", accepts = ["texts", "icons"], false],*/
	}
};

function Edit(target) {
	if ($("input").is(":focus") === false) {
		$("#settings").hide();
		$("#edition").show();
		CONFIG.EDITOR.id = target;
		CONFIG.EDITOR.old = CONFIG.THEME[target][1];
		APP.PICKER = ["0", "0", "0"];
		WP_UPDATE();
		$("#EDITOR-VAR").hide();
		$("#EDITOR-COL").hide();
		$("#EDITOR-FNT").hide();
		$("#EDITOR-URL").hide();
		$("#EDITOR-LGS").hide();
		let SHOWVAREDITOR = 0;
		let SHOWRGBEDITOR = 0;
		let SHOWFONTSEDITOR = 0;
		let SHOWURLEDITOR = 0;
		let SHOWLOGOEDITOR = 0;
		for (var i in CONFIG.THEME[target][5]) {
			if (CONFIG.THEME[target][5][i] === "rgb") SHOWRGBEDITOR = 1;
			if (CONFIG.THEME[target][5][i] === "vars") SHOWVAREDITOR = 1;
			if (CONFIG.THEME[target][5][i] === "fonts") SHOWFONTSEDITOR = 1;
			if (CONFIG.THEME[target][5][i] === "img") SHOWURLEDITOR = 1;
			if (CONFIG.THEME[target][5][i] === "logo") SHOWLOGOEDITOR = 1;
		}

		if (SHOWRGBEDITOR === 1) {
			$("#EDITOR-COL").show();
			CONFIG.EDITOR.new = "rgb(" + APP.PICKER[0] + ", " + APP.PICKER[1] + ", " + APP.PICKER[2] + ")";
		}
		if (SHOWVAREDITOR === 1) {
			$("#EDITOR-VAR").show();
			CONFIG.EDITOR.new = "rgb(" + APP.PICKER[0] + ", " + APP.PICKER[1] + ", " + APP.PICKER[2] + ")";
		}
		if (SHOWFONTSEDITOR === 1) {
			$("#EDITOR-FNT").show();
			CONFIG.EDITOR.new = "Quicksand";
		}
		if (SHOWURLEDITOR === 1) {
			$("#EDITOR-URL").show();
			CONFIG.EDITOR.new = "https://";
			APP.PICKER = ["-1", "-1", "-1"];
			WP_UPDATE();
		}
		if (SHOWLOGOEDITOR === 1) $("#EDITOR-LGS").show();
		$("#EditorSelection").html("<div class='LEFT-BOX'>Editing</div>" + CONFIG.THEME[CONFIG.EDITOR.id][0] + "");
		$("#EditorOld").html('<div class="LEFT-BOX"><div class="square" style="background:' + CONFIG.EDITOR.old + '";></div>Old Value</div><input disabled type="text" value="' + CONFIG.EDITOR.old + '" class="fullwidth">');
		$("#EditorNew").html('<div class="LEFT-BOX"><div class="square" style="background:' + CONFIG.EDITOR.new + '";></div>New Value</div><input disabled type="text" value="' + CONFIG.EDITOR.new + '" class="fullwidth">');
	}
}

function GetValue(STYLE) {
	return window.getComputedStyle(document.body).getPropertyValue('--' + CONFIG.THEME[STYLE][2]);
}

function SetValue(STYLE) {
	if (STYLE != 0 && STYLE != 48 && STYLE != 52 && CONFIG.THEME[STYLE][3] != "texts") {
		document.body.style.setProperty('--' + CONFIG.THEME[STYLE][2], CONFIG.THEME[STYLE][1]);

		if (STYLE == 1 || STYLE == 8 || STYLE == 9 || STYLE == 10 || STYLE == 11 || STYLE == 17) {
			if (CONFIG.SELECTED[STYLE] === "img" || CONFIG.SELECTED[STYLE] == "logo") {
				document.body.style.setProperty('--' + CONFIG.THEME[STYLE][2], 'url(' + CONFIG.THEME[STYLE][1] + ')');
			}
		}

		if (CONFIG.THEME[STYLE][3] === "menus") {
			document.body.style.setProperty('--' + CONFIG.THEME[12][2], CONFIG.THEME[12][1]);
			document.body.style.setProperty('--' + CONFIG.THEME[13][2], CONFIG.THEME[13][1]);
			var grey5 = CONFIG.THEME[12][1].split(")").join(" / 50%)");
			var darkgrey5 = CONFIG.THEME[13][1].split(")").join(" / 75%)");
			document.body.style.setProperty('--grey5', grey5);
			document.body.style.setProperty('--darkgrey5', darkgrey5);
		}
	}
}

setInterval(UPDATEUI, 1000);

function UPDATEUI() {
	document.title = CONFIG.THEME[0][1] + " Theme Generator";
	$('input:text').on("focusout", function () {
		SetValue($(this).data("id"));
		UpdateVars();
	});
	if ($("#edition").is(":visible")) {
		CONFIG.EDITOR.old = CONFIG.THEME[CONFIG.EDITOR.id][1];
		if (CONFIG.EDITOR.new != "var(--grey)" && CONFIG.EDITOR.new != "var(--darkgrey)" && CONFIG.EDITOR.new != "var(--grey5)" && CONFIG.EDITOR.new != "var(--darkgrey5)" && CONFIG.EDITOR.new != "transparent") {
			let rgb = APP.PICKER[0] + APP.PICKER[1] + APP.PICKER[2];
			if (rgb != "-1-1-1") {
				if (CONFIG.THEME[CONFIG.EDITOR.id][5][0] != "fonts" && CONFIG.SELECTED[CONFIG.EDITOR.id] !== "logo") CONFIG.EDITOR.new = "rgb(" + APP.PICKER[0] + " " + APP.PICKER[1] + " " + APP.PICKER[2] + ")";
			}
			if (CONFIG.EDITOR.id == 1 || CONFIG.EDITOR.id == 8 || CONFIG.EDITOR.id == 9 || CONFIG.EDITOR.id == 10 || CONFIG.EDITOR.id == 11 || CONFIG.EDITOR.id == 17) {
				if (CONFIG.SELECTED[CONFIG.EDITOR.id] == "img") CONFIG.EDITOR.new = $("#NewURL").val();
			}

		}
		if ($("#EDITOR-FNT").is(":visible")) {
			$("#EditorSelection").html("<div class='LEFT-BOX'>Editing</div>" + CONFIG.THEME[CONFIG.EDITOR.id][0] + "");
			$("#EditorOld").html("<div class='LEFT-BOX'>Old Font</div><div class='noedit'>" + CONFIG.EDITOR.old + "</div>");
			$("#EditorNew").html("<div class='LEFT-BOX'>New Font</div><div class='noedit' style='font-family:" + CONFIG.EDITOR.new + ", sans-serif';>" + CONFIG.EDITOR.new + "</div>");
		} else {
			$("#EditorNew").html('<div class="LEFT-BOX"><div class="square" style="background:' + CONFIG.EDITOR.new + '";></div>New Value</div><input disabled type="text" value="' + CONFIG.EDITOR.new + '" class="fullwidth">');
		}
	}
	if ($('#ResultText').is(':empty')) $("#output").hide();
	else $("#output").show();

	if (CONFIG.RGB >= 2) $("#REMOVERGB").removeClass("disabled");
	else $("#REMOVERGB").addClass("disabled");
	if (CONFIG.RGB <= 9) $("#ADDRGB").removeClass("disabled");
	else $("#ADDRGB").addClass("disabled");
	if (CONFIG.RGB == 1) {
		$("#rgbtext").html("RGB animation : Disabled");
		$("#time").hide();
		$("#C2").hide();
	} else {
		$("#rgbtext").html("");
		$("#time").show();
		$("#C2").show();
	}
	if (CONFIG.RGB >= 3) $("#C3").show();
	else $("#C3").hide();
	if (CONFIG.RGB >= 4) $("#C4").show();
	else $("#C4").hide();
	if (CONFIG.RGB >= 5) $("#C5").show();
	else $("#C5").hide();
	if (CONFIG.RGB >= 6) $("#C6").show();
	else $("#C6").hide();
	if (CONFIG.RGB >= 7) $("#C7").show();
	else $("#C7").hide();
	if (CONFIG.RGB >= 8) $("#C8").show();
	else $("#C8").hide();
	if (CONFIG.RGB >= 9) $("#C9").show();
	else $("#C9").hide();
	if (CONFIG.RGB == 10) $("#C10").show();
	else $("#C10").hide();
}

(function () {
	ShowMenu(1);
	for (keys = 0; keys < Object.keys(CONFIG.THEME).length; keys++) {
		SetValue(keys);
		let square = "<div class='no square'></div>";
		if (CONFIG.THEME[keys][6] === true) square = "<div class='square' id='square-" + CONFIG.THEME[keys][2] + "'></div>";
		let Accepted = "<span class='accept'>";
		for (var i in CONFIG.THEME[keys][5]) {
			if (i != 0) Accepted = Accepted + ", " + CONFIG.THEME[keys][5][i];
			else Accepted = Accepted + CONFIG.THEME[keys][5][i];
		}

		Accepted = Accepted.split("fonts").join("<span class='green'>✔</span> Font name").split("texts").join("<span class='green'>✔</span> Text").split("img").join("<span class='green'>✔</span> Image URL").split("vars").join("<span class='green'>✔</span> Variables").split("icons").join("<span class='green'>✔</span> Emojis").split("rgb").join("<span class='green'>✔</span> RGB");
		if (CONFIG.THEME[keys][5].length === 1) Accepted = Accepted + " only.</span>";
		else Accepted = Accepted + "</span>";
		let CONTENT = ('<div class="value" id="' + CONFIG.THEME[keys][2] + '"><div class="LEFT-BOX">' + square + CONFIG.THEME[keys][0] + '</div>' +
			'<input id="Theme-' + CONFIG.THEME[keys][2] + '" data-id="' + keys + '" type="text" value="' + CONFIG.THEME[keys][1] + '">' +
			'<div class="desc">' + CONFIG.THEME[keys][4] + ' ' + Accepted + ' </div></div>');

		if (CONFIG.THEME[keys][3] === "general") $("#config1").append(CONTENT);
		if (CONFIG.THEME[keys][3] === "rgb") $("#config2").append(CONTENT);
		if (CONFIG.THEME[keys][3] === "status") $("#config3").append(CONTENT);
		if (CONFIG.THEME[keys][3] === "profile") $("#config4").append(CONTENT);
		if (CONFIG.THEME[keys][3] === "menus") $("#config5").append(CONTENT);
		if (CONFIG.THEME[keys][3] === "texts") $("#config7").append(CONTENT);
	}
	for (let f in APP.FONTS) {
		$("#fontsList").append("<div id='font" + f + "' style='font-family:" + APP.FONTS[f] + ";' class='RGBbutton'>" + APP.FONTS[f] + "</div>");
	}

	for (let i in APP.LOGOS) {
		$("#logosList").append("<div id='logo" + i + "' class='RGBbutton'><img  class='square' src='" + window.location.href + "/img/logos/" + APP.LOGOS[i] + " '></div>");
	}
	$("#copyright").html("Theme generator v" + VERSION + " by <strong>Purple Wizard</strong>.");
	$("input[type='text'], textarea").attr('spellcheck', false);
	$("#NewResult").on("click", function () {
		Result();
	});
	$("#menu").on("click", ".RGBbutton", function () {
		ShowMenu($(this).attr("data-id"));
	});

	$("#Theme-font").prop("disabled", true);
	for (var r = 0; r < 10; r++) {
		$("#Theme-C" + r).prop("disabled", true);
	}
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

	$("#ToggleGHSL").on("click", function () {
		UpdatePlugins();
	});

	$("#HSL-Letters").on("click", function () {
		UpdatePlugins();
	});

	$("#ToggleUIT").on("click", function () {
		UpdatePlugins();
	});

	$("#font").on("click", function () {
		Edit(2);
	});
	$("#fontsList .RGBbutton").click(function () {
		CONFIG.EDITOR.new = APP.FONTS[this.id.slice(4)];
	});

	$("#logosList .RGBbutton").click(function () {
		CONFIG.SELECTED[17] = "logo";
		CONFIG.EDITOR.new = $(this).children('img').attr('src');
		SetValue(17);
	});

	$(".form .value").click(function () {
		for (let ID in CONFIG.THEME) {
			if (this.id === CONFIG.THEME[ID][2] && CONFIG.THEME[ID][3] != "texts" && ID != 0 && ID != 3 && ID != 48 && ID != 52) Edit(ID);
		}
	});

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
			if (CONFIG.RGB === 2) CONFIG.THEME[3][1] = $("#Theme-" + CONFIG.THEME[3][2]).val();
			$("head link#animation-count").attr("href", "https://goldenlys.github.io/BetterDiscord-Elysia/RGB/" + CONFIG.RGB + ".css");
			SetValue(19);
			UPDATEUI();
		}
	});

	$("#REMOVERGB").on("click", function () {
		if (CONFIG.RGB > 1) {
			CONFIG.RGB--;
			$("head link#animation-count").attr("href", "https://goldenlys.github.io/BetterDiscord-Elysia/RGB/" + CONFIG.RGB + ".css");
			SetValue(19);
			if (CONFIG.RGB == 1) {
				CONFIG.THEME[3][1] = "0s";
				SetValue(3);
			}
			UPDATEUI();
		}
	});

	$('#NewURL').on('input', function () {
		CONFIG.SELECTED[CONFIG.EDITOR.id] = "img";
		CONFIG.EDITOR.new = $("#NewURL").val();
	});

	$("#range-red").bind('input', function () {
		document.documentElement.style.setProperty('--EDITOR_RED', $("#range-red").val());
		APP.PICKER[0] = $("#range-red").val();
		WP_UPDATE();
		VerifyType(CONFIG.EDITOR.id, "rgb");
	});

	$("#range-green").bind('input', function () {
		document.documentElement.style.setProperty('--EDITOR_GREEN', $("#range-green").val());
		APP.PICKER[1] = $("#range-green").val();
		WP_UPDATE();
		VerifyType(CONFIG.EDITOR.id, "rgb");
	});

	$("#range-blue").bind('input', function () {
		document.documentElement.style.setProperty('--EDITOR_BLUE', $("#range-blue").val());
		APP.PICKER[2] = $("#range-blue").val();
		WP_UPDATE();
		VerifyType(CONFIG.EDITOR.id, "rgb");
	});

	$("#selector-red .button.minus").on("click", function () {
		WP_CHANGE(0, false);
	});
	$("#selector-red .button.plus").on("click", function () {
		WP_CHANGE(0, true);
	});
	$("#selector-green .button.minus").on("click", function () {
		WP_CHANGE(1, false);
	});
	$("#selector-green .button.plus").on("click", function () {
		WP_CHANGE(1, true);
	});
	$("#selector-blue .button.minus").on("click", function () {
		WP_CHANGE(2, false);
	});
	$("#selector-blue .button.plus").on("click", function () {
		WP_CHANGE(2, true);
	});
	UpdateVars();
})();

function VerifyType(ID, TYPE) {
	if (ID == 1 || ID == 8 || ID == 9 || ID == 10 || ID == 11 || ID == 17) {
		CONFIG.SELECTED[CONFIG.EDITOR.id] = TYPE;
	}
}

function Result() {
	$("#settings").hide();
	$("#output").show();
	$("#ResultText").html("");
	$("#ResultText").append('<span class="meta">/**\n<br>* @name ' + CONFIG.THEME[0][1] + '\n<br>* @author Purple Wizard\n<br>* @authorLink https://github.com/GoldenLys\n<br>* @version ' + VERSION + '\n<br>* @invite SBuYeHh\n<br>* @description An amazing RGB theme with full customization included, made by Purple Wizard.\n<br>* @source https://github.com/GoldenLys/BetterDiscord-Elysia\n<br>* @website https://goldenlys.github.io/ThemeGen\n<br>*/\n<br>');
	$("#ResultText").append('<span class="plugin">@import url("https://goldenlys.github.io/BetterDiscord-Elysia/aerobase.css")</span>;\n<br>');
	$("#ResultText").append('<span class="plugin">@import url("https://goldenlys.github.io/BetterDiscord-Elysia/RGB/' + CONFIG.RGB + '.css")</span>;\n<br>\n<br><span class="comment">/* PLUGINS */</span>\n<br>\n<br>');
	if (CONFIG.THEME[2][1] === "Avignon PS Pro") {
		$("#ResultText").append('<span class="plugin">@import url("https://goldenlys.github.io/BetterDiscord-Elysia/Avignon.css")</span>;\n<br>');
	}
	if (CONFIG.THEME[2][1] === "Quicksand") {
		$("#ResultText").append('<span class="plugin">@import url("https://fonts.googleapis.com/css?family=Quicksand&display=swap")</span>;\n<br>');
	}
	if (CONFIG.THEME[2][1] === "Gruppo") {
		$("#ResultText").append('<span class="plugin">@import url("https://fonts.googleapis.com/css?family=Gruppo&display=swap")</span>;\n<br>');
	}
	if (CONFIG.THEME[2][1] === "Lobster") {
		$("#ResultText").append('<span class="plugin">@import url("https://fonts.googleapis.com/css?family=Lobster&display=swap")</span>;\n<br>');
	}
	if (CONFIG.THEME[2][1] === "Indie Flower") {
		$("#ResultText").append('<span class="plugin">@import url("https://fonts.googleapis.com/css?family=Indie+Flower&display=swap")</span>;\n<br>');
	}
	if (CONFIG.THEME[2][1] === "Cuprum") {
		$("#ResultText").append('<span class="plugin">@import url("https://fonts.googleapis.com/css?family=Cuprum&display=swap")</span>;\n<br>');
	}
	if (CONFIG.PLUGINS[0] === 1) {
		$("#ResultText").append('<span class="plugin">@import url("https://goldenlys.github.io/BetterDiscord-Elysia/HoverMemberList.css")</span>;\n<br>');
	}
	if (CONFIG.PLUGINS[1] === 1) {
		$("#ResultText").append('<span class="plugin">@import url("https://goldenlys.github.io/BetterDiscord-Elysia/NoOffline.css")</span>;\n<br>');
	}
	if (CONFIG.PLUGINS[2] === 1) {
		$("#ResultText").append('<span class="plugin">@import url("https://goldenlys.github.io/BetterDiscord-Elysia/HorizontalServerList.css")</span>;\n<br>');
	}
	if (CONFIG.PLUGINS[3] === 1) {
		$("#ResultText").append('<span class="plugin">@import url("https://goldenlys.github.io/BetterDiscord-Elysia/GIBBUHSLFIX.css")</span>;\n<br>');
	}
	if (CONFIG.PLUGINS[4] === 1) {
		$("#ResultText").append('<span class="plugin">@import url("https://goldenlys.github.io/BetterDiscord-Elysia/Letters-in-HSL.css")</span>;\n<br>');
	}
	if (CONFIG.PLUGINS[5] === 1) {
		$("#ResultText").append('<span class="plugin">@import url("https://goldenlys.github.io/BetterDiscord-Elysia/UserIsTyping.css")</span>;\n<br>');
	}
	$("#ResultText").append('\n<br>\n<br><span class="comment">/* CONFIG */</span>\n<br>\n<br><span class="val">:root {</span>\n<br>');

	for (keys = 0; keys < Object.keys(CONFIG.THEME).length; keys++) {

		if (keys === 1 || keys === 8 || keys === 9 || keys === 10 || keys === 11 || keys === 17) {
			if (CONFIG.SELECTED[keys] === "img" || CONFIG.SELECTED[keys] === "logo") {
				$("#ResultText").append('<span class="var">--' + CONFIG.THEME[keys][2] + ':</span> url("' + CONFIG.THEME[keys][1] + '");\n<br>');
			} else {
				$("#ResultText").append('<span class="var">--' + CONFIG.THEME[keys][2] + ':</span> ' + CONFIG.THEME[keys][1] + ';\n<br>');
			}
		} else if (keys === 0 || keys === 2 || CONFIG.THEME[keys][3] === "texts") {
			$("#ResultText").append('<span class="var">--' + CONFIG.THEME[keys][2] + ':</span> "' + CONFIG.THEME[keys][1] + '";\n<br>');
		} else if (CONFIG.THEME[keys][1] != "rgb(0 0 0)") {
			$("#ResultText").append('<span class="var">--' + CONFIG.THEME[keys][2] + ':</span> ' + CONFIG.THEME[keys][1] + ';\n<br>');
		}
	}
	let grey5 = CONFIG.THEME[12][1].split("rgb(").join("rgb(").split(")").join(" / 50%)");
	let darkgrey5 = CONFIG.THEME[13][1].split("rgb(").join("rgb(").split(")").join(" / 75%)");
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
	if ($("#ToggleHover").is(':checked')) CONFIG.PLUGINS[0] = 1;
	else CONFIG.PLUGINS[0] = 0;
	if ($("#ToggleOffline").is(':checked')) CONFIG.PLUGINS[1] = 1;
	else CONFIG.PLUGINS[1] = 0;
	if ($("#ToggleServerList").is(':checked')) {
		$("#HSL-Letters").show();
		CONFIG.PLUGINS[2] = 1;
	} else {
		$("#HSL-Letters").hide();
		$("#ToggleHSL-Letters").prop("checked", false);
		CONFIG.PLUGINS[4] = 0;
		CONFIG.PLUGINS[2] = 0;
	}
	if ($("#ToggleGHSL").is(':checked')) CONFIG.PLUGINS[3] = 1;
	else CONFIG.PLUGINS[3] = 0;
	if ($("#ToggleHSL-Letters").is(':checked')) CONFIG.PLUGINS[4] = 1;
	else CONFIG.PLUGINS[4] = 0;
	if ($("#ToggleUIT").is(':checked')) CONFIG.PLUGINS[5] = 1;
	else CONFIG.PLUGINS[5] = 0;
}

const WP_CHANGE = function (TYPE, PARAM) {
	if (!PARAM) {
		if (APP.PICKER[TYPE] > 0) APP.PICKER[TYPE]--;
	} else {
		if (APP.PICKER[TYPE] < 255) APP.PICKER[TYPE]++;
	}
	WP_UPDATE();
};

const WP_UPDATE = function () {
	APP.SELECTION = "rgb(" + APP.PICKER[0] + " " + APP.PICKER[1] + " " + APP.PICKER[2] + ")";
	$(".button-validate").attr("style", "background-color: " + APP.SELECTION + ";");
	CONFIG.EDITOR.new = APP.SELECTION;

	for (let COLOR in APP.PICKER) {
		$("#range-" + APP.TYPES[COLOR]).val(APP.PICKER[COLOR]);
		if (APP.PICKER[COLOR] === "-1") APP.PICKER[COLOR] = "0";
		$("#selector-" + APP.TYPES[COLOR] + " .color-value").html(APP.PICKER[COLOR]);
		$("#selector-" + APP.TYPES[COLOR] + " .color-value").css("margin-left", "calc(" + (APP.PICKER[COLOR] / 255) + " * (100% - 3em))");
	}
	$("#color-name").attr("placeholder", WP_HEXCOLOR("rgb(" + APP.PICKER[0] + "," + APP.PICKER[1] + "," + APP.PICKER[2] + ")"));
};
const WP_HEXCOLOR = function (a) {
	a = a.replace(/[^\d,]/g, "").split(",");
	return ((1 << 24) + (+a[0] << 16) + (+a[1] << 8) + +a[2]).toString(16).slice(1);
};