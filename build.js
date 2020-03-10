var fs = require('fs');



var icons = [];
var j = 0;
icons[j++] = [1, 30, 97, 97, 'app icon'];
icons[j++] = [97, 30, 28, 25, 'up arrow large'];
icons[j++] = [125, 30, 26, 25, 'left arrow dark color'];
icons[j++] = [151, 30, 28, 25, 'right arrow medium color'];
icons[j++] = [179, 30, 18, 20, 'circle and check mark'];
icons[j++] = [197, 30, 20, 20, 'lock'];
icons[j++] = [217, 30, 17, 20, 'x dark color'];
icons[j++] = [234, 30, 18, 20, 'Mail with alert (use tinting or blending)'];
icons[j++] = [251, 30, 20, 20, 'People'];

icons[j++] = [179, 49, 18, 25, 'i with circle'];
icons[j++] = [197, 49, 20, 16, 'circle with three points'];
icons[j++] = [217, 48, 17, 16, 'hollow star'];
icons[j++] = [235, 49, 18, 16, 'pin'];
icons[j++] = [253, 49, 20, 16, 'buildings'];

icons[j++] = [97, 55, 28, 26, 'three dots'];
icons[j++] = [125, 55, 26, 26, 'left arrow medium color'];
icons[j++] = [151, 55, 26, 26, 'right arrow dark grey'];

icons[j++] = [197, 65, 20, 17, 'window reload light'];
icons[j++] = [217, 65, 16, 17, 'pencil dark grey'];
icons[j++] = [233, 65, 18, 17, 'Blog / Rss (use tinting or blending)'];
icons[j++] = [251, 65, 20, 17, 'check mark in box (use tinting or blending)'];

icons[j++] = [179, 74, 18, 20, 'x in circle'];

icons[j++] = [197, 82, 20, 18, 'plus'];
icons[j++] = [217, 82, 16, 18, 'pencil dark color'];
icons[j++] = [233, 82, 18, 18, 'pencil medium grey'];
icons[j++] = [251, 82, 20, 18, 'gear dark'];

icons[j++] = [179, 95, 18, 17, 'focus on content'];

icons[j++] = [97, 82, 28, 30, 'left arrow lightest'];
icons[j++] = [125, 82, 26, 30, 'left arrow light grey'];
icons[j++] = [151, 82, 26, 30, 'right arrow medumn light grey'];

icons[j++] = [197, 101, 20, 18, 'window reload dark'];
icons[j++] = [217, 101, 16, 18, 'pencil medium color'];
icons[j++] = [233, 101, 18, 18, 'plus in circle dark color'];
icons[j++] = [251, 101, 20, 18, 'light gear'];

icons[j++] = [104, 112, 26, 24, 'right arrow medium color'];
icons[j++] = [132, 112, 21, 15, 'reload dark color'];
icons[j++] = [161, 112, 13, 15, 'x medium color'];

icons[j++] = [179, 112, 18, 18, 'gear medium'];

icons[j++] = [197, 119, 20, 17, 'x large medium greg'];
icons[j++] = [217, 119, 16, 17, 'up one level (use tinting or blend)'];
icons[j++] = [233, 119, 18, 17, 'plus in circle medium color'];
icons[j++] = [251, 119, 20, 11, 'arrow left small light (use tinting or blend)'];

icons[j++] = [1, 127, 24, 26, 'reload medium grey'];
icons[j++] = [24, 127, 29, 26, 'arrow right medium grey'];
icons[j++] = [52, 127, 25, 26, 'arrow right medium light grey'];
icons[j++] = [78, 127, 26, 26, 'arrow right lightest'];

icons[j++] = [108, 140, 17, 16, 'search medium grey'];
icons[j++] = [130, 134, 22, 21, 'plus in circle medium color'];
icons[j++] = [151, 136, 20, 17, 'search dark grey'];

icons[j++] = [179, 136, 11, 11, 'x small medium grey'];

icons[j++] = [197, 140, 12, 12, 'arrow up small (use tinting or blend'];
icons[j++] = [217, 140, 14, 14, 'pencil medium dark color'];

icons[j++] = [233, 137, 17, 17, 'plus with circle medium light color'];
icons[j++] = [251, 130, 20, 17, 'exclamation'];
icons[j++] = [251, 147, 20, 10, 'lower right tab (use tinting or blending)'];

icons[j++] = [1, 155, 20, 19, 'reload light color'];
icons[j++] = [25, 155, 25, 19, 'reload light grey'];
icons[j++] = [51, 153, 26, 25, 'arrow right dark grey'];
icons[j++] = [80, 155, 20, 20, 'diamond'];

icons[j++] = [101, 155, 20, 23, 'check on paper (use tinting or blending)'];
icons[j++] = [130, 155, 14, 19, 'x small dark color'];
icons[j++] = [151, 155, 16, 19, 'x small dark color (2)'];
icons[j++] = [179, 155, 14, 19, 'x small dark grey'];
icons[j++] = [197, 155, 18, 19, 'recycle bin'];
icons[j++] = [217, 155, 12, 19, 'penci light grey'];
icons[j++] = [233, 155, 15, 19, 'arrow down medium grey'];
icons[j++] = [251, 155, 20, 19, 'lower left tab (use tinting or blending)'];

icons[j++] = [1, 183, 20, 15, 'x small dark grey'];
icons[j++] = [25, 183, 15, 15, 'x small medium grey'];
icons[j++] = [42, 178, 22, 22, 'warning'];
icons[j++] = [64, 178, 24, 22, 'plux in circle medium light color'];

icons[j++] = [88, 178, 16, 16, 'checkbox box (use tinting or blending)'];
icons[j++] = [104, 178, 21, 16, 'focus on page light'];
icons[j++] = [125, 178, 18, 16, 'focus on content dark'];
icons[j++] = [143, 178, 18, 16, 'focus on content medium'];
icons[j++] = [161, 178, 18, 16, 'information circle'];
icons[j++] = [179, 174, 18, 16, 'globe'];
icons[j++] = [197, 174, 20, 16, 'information color (use tinting or shading)'];
icons[j++] = [215, 174, 16, 16, 'pencil medium light2 color'];
icons[j++] = [231, 174, 18, 16, 'three dots medium color'];
icons[j++] = [251, 174, 20, 12, 'Solid Y'];

icons[j++] = [1, 200, 19, 20, 'X with circle color (use tinting or blending)'];
icons[j++] = [19, 204, 17, 13, 'three dots dark color'];
icons[j++] = [37, 204, 16, 13, 'three dots light'];
icons[j++] = [53, 204, 17, 13, 'arrow down light'];
icons[j++] = [75, 204, 13, 13, 'pencil grey medium'];

icons[j++] = [88, 195, 20, 18, 'star'];
icons[j++] = [108, 195, 17, 18, 'check mark'];
icons[j++] = [125, 195, 18, 18, 'plus circle medium light color'];
icons[j++] = [143, 195, 18, 18, 'heatlh of page light'];
icons[j++] = [161, 195, 18, 18, 'health of page dark'];
icons[j++] = [179, 195, 18, 15, 'pencil dark'];
icons[j++] = [197, 195, 20, 15, 'x medium grey'];
icons[j++] = [217, 193, 17, 17, 'star hollow'];
icons[j++] = [233, 195, 17, 15, 'three dots dark'];

icons[j++] = [251, 187, 20, 13, 'arrow right solid (use tinting or blending)'];
icons[j++] = [251, 200, 20, 13, 'box with dots (use tinting or blending)'];

icons[j++] = [1, 218, 19, 15, 'x medium dark color'];
icons[j++] = [20, 218, 15, 15, 'x medium light grey'];
icons[j++] = [37, 218, 15, 15, 'refresh dark grey'];
icons[j++] = [53, 218, 15, 15, 'refresh light color'];
icons[j++] = [75, 218, 15, 15, 'refresh color dark'];

icons[j++] = [88, 216, 20, 12, 'refresh light grey'];
icons[j++] = [108, 216, 17, 12, 'photo dark grey'];
icons[j++] = [125, 216, 18, 12, 'photo light color'];
icons[j++] = [143, 216, 18, 12, 'photo dark color'];
icons[j++] = [161, 216, 18, 12, 'photo light grey'];

icons[j++] = [180, 209, 17, 19, 'paper / page (use tinting or blending)'];
icons[j++] = [197, 209, 20, 16, 'down left (use tinting or blending)'];
icons[j++] = [217, 209, 16, 16, 'down right (use tinting or blending)'];
icons[j++] = [233, 209, 18, 15, 'three dots medium light color'];
icons[j++] = [251, 212, 18, 15, 'exclamation lightest grey'];

icons[j++] = [1, 233, 19, 21, 'three dots medium grey'];
icons[j++] = [19, 233, 18, 21, 'warning sign (use tinting or blending)'];
icons[j++] = [36, 233, 19, 21, 'open book'];
icons[j++] = [54, 233, 20, 21, 'person check'];
icons[j++] = [75, 233, 11, 16, 'down arrow (use tinting or blending)'];
icons[j++] = [88, 233, 20, 16, 'circle with dots'];

icons[j++] = [108, 233, 17, 15, 'arrow right light'];
icons[j++] = [130, 233, 14, 15, 'arrow left dark'];
icons[j++] = [144, 233, 18, 15, 'arrow left light'];
icons[j++] = [162, 233, 18, 15, 'arrow right dark'];

icons[j++] = [179, 228, 18, 15, 'arrow right light'];
icons[j++] = [197, 228, 20, 15, 'arrow right dark'];
icons[j++] = [217, 228, 17, 15, 'arrow left dark'];
icons[j++] = [233, 228, 18, 15, 'arrow left light'];
icons[j++] = [251, 228, 18, 15, 'exclamation lightest color'];

icons[j++] = [1, 255, 12, 11, 'arrow right (use tinting or blending)'];
icons[j++] = [12, 255, 10, 11, 'long arrow up'];
icons[j++] = [23, 255, 10, 11, 'long arrow down'];
icons[j++] = [32, 255, 10, 11, 'check dark'];
icons[j++] = [42, 255, 12, 11, 'check light'];
icons[j++] = [54, 255, 10, 11, 'small arrow up light'];
icons[j++] = [64, 255, 11, 11, 'down right arrow dark'];
icons[j++] = [75, 255, 11, 11, 'down left arrow light'];

icons[j++] = [91, 250, 7, 7, 'square light'];
icons[j++] = [100, 250, 8, 4, 'arrow down color'];
icons[j++] = [108, 250, 8, 4, 'arrow down smaller color'];
icons[j++] = [86, 258, 8, 5, 'arrow down dark grey'];
icons[j++] = [95, 258, 8, 5, 'arrw down medium grey'];
icons[j++] = [103, 256, 8, 4, 'arrow down smaller medium grey'];

icons[j++] = [251, 242, 16, 11, 'arrow left (use tinting or blending)'];


var spritecss = "";
var spritedoc = `<html>
					<head>
						<link rel="stylesheet" href="spsprites.css"/>
					</head>
				<body>
					<ul>
`;

for (var i = 0; i < icons.length; i++) {

	var icon = icons[i];
	var desc = icon[4];
	var left = icon[0];
	var top = icon[1];
	var width = icon[2];
	var height = icon[3];

	desc = desc.replace(/ /g, "_").replace(/\(/g, "_").replace(/\)/g, "").replace(/\//g, "").replace(/__/g, "_").replace(/_use_tinting_or_blending/g, "").replace(/_use_tinting_or_shading/g, "");


	spritecss += `.spsprite.${desc}{
	width: ${width}px;
	height: ${height}px;
	background: url('/_layouts/15/images/spcommon.png?rev=23') no-repeat -${left}px -${top}px;
}

`;



	spritedoc += `<li>
					<table>
						<tr>
							<td>Classname</td>
							<td>.spsprite.${desc}</td>
						</tr>
						<tr>
							<td>Icon</td>
							<td><div class="spsprite_${desc}"/></td>
						</tr>
					</table>
				</li>`

}

spritedoc += '</ul></body></html>';



fs.writeFile("dist/spsprites.css", spritecss, function (err) {
	if (err) {
		return console.log(err);
	}
	console.log("The sprite file was saved!");
});


fs.writeFile("dist/documentation.html", spritedoc, function (err) {
	if (err) {
		return console.log(err);
	}
	console.log("The doc file was saved!");
});




