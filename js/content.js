//https://ceac.state.gov/GenNIV/General/complete/complete_personal.aspx?node=Personal1
$( document ).ready(function() {
		var Latinise={};Latinise.latin_map={"Á":"A",
			"Ă":"A",
			"Ắ":"A",
			"Ặ":"A",
			"Ằ":"A",
			"Ẳ":"A",
			"Ẵ":"A",
			"Ǎ":"A",
			"Â":"A",
			"Ấ":"A",
			"Ậ":"A",
			"Ầ":"A",
			"Ẩ":"A",
			"Ẫ":"A",
			"Ä":"A",
			"Ǟ":"A",
			"Ȧ":"A",
			"Ǡ":"A",
			"Ạ":"A",
			"Ȁ":"A",
			"À":"A",
			"Ả":"A",
			"Ȃ":"A",
			"Ā":"A",
			"Ą":"A",
			"Å":"A",
			"Ǻ":"A",
			"Ḁ":"A",
			"Ⱥ":"A",
			"Ã":"A",
			"Ꜳ":"AA",
			"Æ":"AE",
			"Ǽ":"AE",
			"Ǣ":"AE",
			"Ꜵ":"AO",
			"Ꜷ":"AU",
			"Ꜹ":"AV",
			"Ꜻ":"AV",
			"Ꜽ":"AY",
			"Ḃ":"B",
			"Ḅ":"B",
			"Ɓ":"B",
			"Ḇ":"B",
			"Ƀ":"B",
			"Ƃ":"B",
			"Ć":"C",
			"Č":"C",
			"Ç":"C",
			"Ḉ":"C",
			"Ĉ":"C",
			"Ċ":"C",
			"Ƈ":"C",
			"Ȼ":"C",
			"Ď":"D",
			"Ḑ":"D",
			"Ḓ":"D",
			"Ḋ":"D",
			"Ḍ":"D",
			"Ɗ":"D",
			"Ḏ":"D",
			"ǲ":"D",
			"ǅ":"D",
			"Đ":"D",
			"Ƌ":"D",
			"Ǳ":"DZ",
			"Ǆ":"DZ",
			"É":"E",
			"Ĕ":"E",
			"Ě":"E",
			"Ȩ":"E",
			"Ḝ":"E",
			"Ê":"E",
			"Ế":"E",
			"Ệ":"E",
			"Ề":"E",
			"Ể":"E",
			"Ễ":"E",
			"Ḙ":"E",
			"Ë":"E",
			"Ė":"E",
			"Ẹ":"E",
			"Ȅ":"E",
			"È":"E",
			"Ẻ":"E",
			"Ȇ":"E",
			"Ē":"E",
			"Ḗ":"E",
			"Ḕ":"E",
			"Ę":"E",
			"Ɇ":"E",
			"Ẽ":"E",
			"Ḛ":"E",
			"Ꝫ":"ET",
			"Ḟ":"F",
			"Ƒ":"F",
			"Ǵ":"G",
			"Ğ":"G",
			"Ǧ":"G",
			"Ģ":"G",
			"Ĝ":"G",
			"Ġ":"G",
			"Ɠ":"G",
			"Ḡ":"G",
			"Ǥ":"G",
			"Ḫ":"H",
			"Ȟ":"H",
			"Ḩ":"H",
			"Ĥ":"H",
			"Ⱨ":"H",
			"Ḧ":"H",
			"Ḣ":"H",
			"Ḥ":"H",
			"Ħ":"H",
			"Í":"I",
			"Ĭ":"I",
			"Ǐ":"I",
			"Î":"I",
			"Ï":"I",
			"Ḯ":"I",
			"İ":"I",
			"Ị":"I",
			"Ȉ":"I",
			"Ì":"I",
			"Ỉ":"I",
			"Ȋ":"I",
			"Ī":"I",
			"Į":"I",
			"Ɨ":"I",
			"Ĩ":"I",
			"Ḭ":"I",
			"Ꝺ":"D",
			"Ꝼ":"F",
			"Ᵹ":"G",
			"Ꞃ":"R",
			"Ꞅ":"S",
			"Ꞇ":"T",
			"Ꝭ":"IS",
			"Ĵ":"J",
			"Ɉ":"J",
			"Ḱ":"K",
			"Ǩ":"K",
			"Ķ":"K",
			"Ⱪ":"K",
			"Ꝃ":"K",
			"Ḳ":"K",
			"Ƙ":"K",
			"Ḵ":"K",
			"Ꝁ":"K",
			"Ꝅ":"K",
			"Ĺ":"L",
			"Ƚ":"L",
			"Ľ":"L",
			"Ļ":"L",
			"Ḽ":"L",
			"Ḷ":"L",
			"Ḹ":"L",
			"Ⱡ":"L",
			"Ꝉ":"L",
			"Ḻ":"L",
			"Ŀ":"L",
			"Ɫ":"L",
			"ǈ":"L",
			"Ł":"L",
			"Ǉ":"LJ",
			"Ḿ":"M",
			"Ṁ":"M",
			"Ṃ":"M",
			"Ɱ":"M",
			"Ń":"N",
			"Ň":"N",
			"Ņ":"N",
			"Ṋ":"N",
			"Ṅ":"N",
			"Ṇ":"N",
			"Ǹ":"N",
			"Ɲ":"N",
			"Ṉ":"N",
			"Ƞ":"N",
			"ǋ":"N",
			"Ñ":"N",
			"Ǌ":"NJ",
			"Ó":"O",
			"Ŏ":"O",
			"Ǒ":"O",
			"Ô":"O",
			"Ố":"O",
			"Ộ":"O",
			"Ồ":"O",
			"Ổ":"O",
			"Ỗ":"O",
			"Ö":"O",
			"Ȫ":"O",
			"Ȯ":"O",
			"Ȱ":"O",
			"Ọ":"O",
			"Ő":"O",
			"Ȍ":"O",
			"Ò":"O",
			"Ỏ":"O",
			"Ơ":"O",
			"Ớ":"O",
			"Ợ":"O",
			"Ờ":"O",
			"Ở":"O",
			"Ỡ":"O",
			"Ȏ":"O",
			"Ꝋ":"O",
			"Ꝍ":"O",
			"Ō":"O",
			"Ṓ":"O",
			"Ṑ":"O",
			"Ɵ":"O",
			"Ǫ":"O",
			"Ǭ":"O",
			"Ø":"O",
			"Ǿ":"O",
			"Õ":"O",
			"Ṍ":"O",
			"Ṏ":"O",
			"Ȭ":"O",
			"Ƣ":"OI",
			"Ꝏ":"OO",
			"Ɛ":"E",
			"Ɔ":"O",
			"Ȣ":"OU",
			"Ṕ":"P",
			"Ṗ":"P",
			"Ꝓ":"P",
			"Ƥ":"P",
			"Ꝕ":"P",
			"Ᵽ":"P",
			"Ꝑ":"P",
			"Ꝙ":"Q",
			"Ꝗ":"Q",
			"Ŕ":"R",
			"Ř":"R",
			"Ŗ":"R",
			"Ṙ":"R",
			"Ṛ":"R",
			"Ṝ":"R",
			"Ȑ":"R",
			"Ȓ":"R",
			"Ṟ":"R",
			"Ɍ":"R",
			"Ɽ":"R",
			"Ꜿ":"C",
			"Ǝ":"E",
			"Ś":"S",
			"Ṥ":"S",
			"Š":"S",
			"Ṧ":"S",
			"Ş":"S",
			"Ŝ":"S",
			"Ș":"S",
			"Ṡ":"S",
			"Ṣ":"S",
			"Ṩ":"S",
			"Ť":"T",
			"Ţ":"T",
			"Ṱ":"T",
			"Ț":"T",
			"Ⱦ":"T",
			"Ṫ":"T",
			"Ṭ":"T",
			"Ƭ":"T",
			"Ṯ":"T",
			"Ʈ":"T",
			"Ŧ":"T",
			"Ɐ":"A",
			"Ꞁ":"L",
			"Ɯ":"M",
			"Ʌ":"V",
			"Ꜩ":"TZ",
			"Ú":"U",
			"Ŭ":"U",
			"Ǔ":"U",
			"Û":"U",
			"Ṷ":"U",
			"Ü":"U",
			"Ǘ":"U",
			"Ǚ":"U",
			"Ǜ":"U",
			"Ǖ":"U",
			"Ṳ":"U",
			"Ụ":"U",
			"Ű":"U",
			"Ȕ":"U",
			"Ù":"U",
			"Ủ":"U",
			"Ư":"U",
			"Ứ":"U",
			"Ự":"U",
			"Ừ":"U",
			"Ử":"U",
			"Ữ":"U",
			"Ȗ":"U",
			"Ū":"U",
			"Ṻ":"U",
			"Ų":"U",
			"Ů":"U",
			"Ũ":"U",
			"Ṹ":"U",
			"Ṵ":"U",
			"Ꝟ":"V",
			"Ṿ":"V",
			"Ʋ":"V",
			"Ṽ":"V",
			"Ꝡ":"VY",
			"Ẃ":"W",
			"Ŵ":"W",
			"Ẅ":"W",
			"Ẇ":"W",
			"Ẉ":"W",
			"Ẁ":"W",
			"Ⱳ":"W",
			"Ẍ":"X",
			"Ẋ":"X",
			"Ý":"Y",
			"Ŷ":"Y",
			"Ÿ":"Y",
			"Ẏ":"Y",
			"Ỵ":"Y",
			"Ỳ":"Y",
			"Ƴ":"Y",
			"Ỷ":"Y",
			"Ỿ":"Y",
			"Ȳ":"Y",
			"Ɏ":"Y",
			"Ỹ":"Y",
			"Ź":"Z",
			"Ž":"Z",
			"Ẑ":"Z",
			"Ⱬ":"Z",
			"Ż":"Z",
			"Ẓ":"Z",
			"Ȥ":"Z",
			"Ẕ":"Z",
			"Ƶ":"Z",
			"Ĳ":"IJ",
			"Œ":"OE",
			"ᴀ":"A",
			"ᴁ":"AE",
			"ʙ":"B",
			"ᴃ":"B",
			"ᴄ":"C",
			"ᴅ":"D",
			"ᴇ":"E",
			"ꜰ":"F",
			"ɢ":"G",
			"ʛ":"G",
			"ʜ":"H",
			"ɪ":"I",
			"ʁ":"R",
			"ᴊ":"J",
			"ᴋ":"K",
			"ʟ":"L",
			"ᴌ":"L",
			"ᴍ":"M",
			"ɴ":"N",
			"ᴏ":"O",
			"ɶ":"OE",
			"ᴐ":"O",
			"ᴕ":"OU",
			"ᴘ":"P",
			"ʀ":"R",
			"ᴎ":"N",
			"ᴙ":"R",
			"ꜱ":"S",
			"ᴛ":"T",
			"ⱻ":"E",
			"ᴚ":"R",
			"ᴜ":"U",
			"ᴠ":"V",
			"ᴡ":"W",
			"ʏ":"Y",
			"ᴢ":"Z",
			"á":"a",
			"ă":"a",
			"ắ":"a",
			"ặ":"a",
			"ằ":"a",
			"ẳ":"a",
			"ẵ":"a",
			"ǎ":"a",
			"â":"a",
			"ấ":"a",
			"ậ":"a",
			"ầ":"a",
			"ẩ":"a",
			"ẫ":"a",
			"ä":"a",
			"ǟ":"a",
			"ȧ":"a",
			"ǡ":"a",
			"ạ":"a",
			"ȁ":"a",
			"à":"a",
			"ả":"a",
			"ȃ":"a",
			"ā":"a",
			"ą":"a",
			"ᶏ":"a",
			"ẚ":"a",
			"å":"a",
			"ǻ":"a",
			"ḁ":"a",
			"ⱥ":"a",
			"ã":"a",
			"ꜳ":"aa",
			"æ":"ae",
			"ǽ":"ae",
			"ǣ":"ae",
			"ꜵ":"ao",
			"ꜷ":"au",
			"ꜹ":"av",
			"ꜻ":"av",
			"ꜽ":"ay",
			"ḃ":"b",
			"ḅ":"b",
			"ɓ":"b",
			"ḇ":"b",
			"ᵬ":"b",
			"ᶀ":"b",
			"ƀ":"b",
			"ƃ":"b",
			"ɵ":"o",
			"ć":"c",
			"č":"c",
			"ç":"c",
			"ḉ":"c",
			"ĉ":"c",
			"ɕ":"c",
			"ċ":"c",
			"ƈ":"c",
			"ȼ":"c",
			"ď":"d",
			"ḑ":"d",
			"ḓ":"d",
			"ȡ":"d",
			"ḋ":"d",
			"ḍ":"d",
			"ɗ":"d",
			"ᶑ":"d",
			"ḏ":"d",
			"ᵭ":"d",
			"ᶁ":"d",
			"đ":"d",
			"ɖ":"d",
			"ƌ":"d",
			"ı":"i",
			"ȷ":"j",
			"ɟ":"j",
			"ʄ":"j",
			"ǳ":"dz",
			"ǆ":"dz",
			"é":"e",
			"ĕ":"e",
			"ě":"e",
			"ȩ":"e",
			"ḝ":"e",
			"ê":"e",
			"ế":"e",
			"ệ":"e",
			"ề":"e",
			"ể":"e",
			"ễ":"e",
			"ḙ":"e",
			"ë":"e",
			"ė":"e",
			"ẹ":"e",
			"ȅ":"e",
			"è":"e",
			"ẻ":"e",
			"ȇ":"e",
			"ē":"e",
			"ḗ":"e",
			"ḕ":"e",
			"ⱸ":"e",
			"ę":"e",
			"ᶒ":"e",
			"ɇ":"e",
			"ẽ":"e",
			"ḛ":"e",
			"ꝫ":"et",
			"ḟ":"f",
			"ƒ":"f",
			"ᵮ":"f",
			"ᶂ":"f",
			"ǵ":"g",
			"ğ":"g",
			"ǧ":"g",
			"ģ":"g",
			"ĝ":"g",
			"ġ":"g",
			"ɠ":"g",
			"ḡ":"g",
			"ᶃ":"g",
			"ǥ":"g",
			"ḫ":"h",
			"ȟ":"h",
			"ḩ":"h",
			"ĥ":"h",
			"ⱨ":"h",
			"ḧ":"h",
			"ḣ":"h",
			"ḥ":"h",
			"ɦ":"h",
			"ẖ":"h",
			"ħ":"h",
			"ƕ":"hv",
			"í":"i",
			"ĭ":"i",
			"ǐ":"i",
			"î":"i",
			"ï":"i",
			"ḯ":"i",
			"ị":"i",
			"ȉ":"i",
			"ì":"i",
			"ỉ":"i",
			"ȋ":"i",
			"ī":"i",
			"į":"i",
			"ᶖ":"i",
			"ɨ":"i",
			"ĩ":"i",
			"ḭ":"i",
			"ꝺ":"d",
			"ꝼ":"f",
			"ᵹ":"g",
			"ꞃ":"r",
			"ꞅ":"s",
			"ꞇ":"t",
			"ꝭ":"is",
			"ǰ":"j",
			"ĵ":"j",
			"ʝ":"j",
			"ɉ":"j",
			"ḱ":"k",
			"ǩ":"k",
			"ķ":"k",
			"ⱪ":"k",
			"ꝃ":"k",
			"ḳ":"k",
			"ƙ":"k",
			"ḵ":"k",
			"ᶄ":"k",
			"ꝁ":"k",
			"ꝅ":"k",
			"ĺ":"l",
			"ƚ":"l",
			"ɬ":"l",
			"ľ":"l",
			"ļ":"l",
			"ḽ":"l",
			"ȴ":"l",
			"ḷ":"l",
			"ḹ":"l",
			"ⱡ":"l",
			"ꝉ":"l",
			"ḻ":"l",
			"ŀ":"l",
			"ɫ":"l",
			"ᶅ":"l",
			"ɭ":"l",
			"ł":"l",
			"ǉ":"lj",
			"ſ":"s",
			"ẜ":"s",
			"ẛ":"s",
			"ẝ":"s",
			"ḿ":"m",
			"ṁ":"m",
			"ṃ":"m",
			"ɱ":"m",
			"ᵯ":"m",
			"ᶆ":"m",
			"ń":"n",
			"ň":"n",
			"ņ":"n",
			"ṋ":"n",
			"ȵ":"n",
			"ṅ":"n",
			"ṇ":"n",
			"ǹ":"n",
			"ɲ":"n",
			"ṉ":"n",
			"ƞ":"n",
			"ᵰ":"n",
			"ᶇ":"n",
			"ɳ":"n",
			"ñ":"n",
			"ǌ":"nj",
			"ó":"o",
			"ŏ":"o",
			"ǒ":"o",
			"ô":"o",
			"ố":"o",
			"ộ":"o",
			"ồ":"o",
			"ổ":"o",
			"ỗ":"o",
			"ö":"o",
			"ȫ":"o",
			"ȯ":"o",
			"ȱ":"o",
			"ọ":"o",
			"ő":"o",
			"ȍ":"o",
			"ò":"o",
			"ỏ":"o",
			"ơ":"o",
			"ớ":"o",
			"ợ":"o",
			"ờ":"o",
			"ở":"o",
			"ỡ":"o",
			"ȏ":"o",
			"ꝋ":"o",
			"ꝍ":"o",
			"ⱺ":"o",
			"ō":"o",
			"ṓ":"o",
			"ṑ":"o",
			"ǫ":"o",
			"ǭ":"o",
			"ø":"o",
			"ǿ":"o",
			"õ":"o",
			"ṍ":"o",
			"ṏ":"o",
			"ȭ":"o",
			"ƣ":"oi",
			"ꝏ":"oo",
			"ɛ":"e",
			"ᶓ":"e",
			"ɔ":"o",
			"ᶗ":"o",
			"ȣ":"ou",
			"ṕ":"p",
			"ṗ":"p",
			"ꝓ":"p",
			"ƥ":"p",
			"ᵱ":"p",
			"ᶈ":"p",
			"ꝕ":"p",
			"ᵽ":"p",
			"ꝑ":"p",
			"ꝙ":"q",
			"ʠ":"q",
			"ɋ":"q",
			"ꝗ":"q",
			"ŕ":"r",
			"ř":"r",
			"ŗ":"r",
			"ṙ":"r",
			"ṛ":"r",
			"ṝ":"r",
			"ȑ":"r",
			"ɾ":"r",
			"ᵳ":"r",
			"ȓ":"r",
			"ṟ":"r",
			"ɼ":"r",
			"ᵲ":"r",
			"ᶉ":"r",
			"ɍ":"r",
			"ɽ":"r",
			"ↄ":"c",
			"ꜿ":"c",
			"ɘ":"e",
			"ɿ":"r",
			"ś":"s",
			"ṥ":"s",
			"š":"s",
			"ṧ":"s",
			"ş":"s",
			"ŝ":"s",
			"ș":"s",
			"ṡ":"s",
			"ṣ":"s",
			"ṩ":"s",
			"ʂ":"s",
			"ᵴ":"s",
			"ᶊ":"s",
			"ȿ":"s",
			"ɡ":"g",
			"ᴑ":"o",
			"ᴓ":"o",
			"ᴝ":"u",
			"ť":"t",
			"ţ":"t",
			"ṱ":"t",
			"ț":"t",
			"ȶ":"t",
			"ẗ":"t",
			"ⱦ":"t",
			"ṫ":"t",
			"ṭ":"t",
			"ƭ":"t",
			"ṯ":"t",
			"ᵵ":"t",
			"ƫ":"t",
			"ʈ":"t",
			"ŧ":"t",
			"ᵺ":"th",
			"ɐ":"a",
			"ᴂ":"ae",
			"ǝ":"e",
			"ᵷ":"g",
			"ɥ":"h",
			"ʮ":"h",
			"ʯ":"h",
			"ᴉ":"i",
			"ʞ":"k",
			"ꞁ":"l",
			"ɯ":"m",
			"ɰ":"m",
			"ᴔ":"oe",
			"ɹ":"r",
			"ɻ":"r",
			"ɺ":"r",
			"ⱹ":"r",
			"ʇ":"t",
			"ʌ":"v",
			"ʍ":"w",
			"ʎ":"y",
			"ꜩ":"tz",
			"ú":"u",
			"ŭ":"u",
			"ǔ":"u",
			"û":"u",
			"ṷ":"u",
			"ü":"u",
			"ǘ":"u",
			"ǚ":"u",
			"ǜ":"u",
			"ǖ":"u",
			"ṳ":"u",
			"ụ":"u",
			"ű":"u",
			"ȕ":"u",
			"ù":"u",
			"ủ":"u",
			"ư":"u",
			"ứ":"u",
			"ự":"u",
			"ừ":"u",
			"ử":"u",
			"ữ":"u",
			"ȗ":"u",
			"ū":"u",
			"ṻ":"u",
			"ų":"u",
			"ᶙ":"u",
			"ů":"u",
			"ũ":"u",
			"ṹ":"u",
			"ṵ":"u",
			"ᵫ":"ue",
			"ꝸ":"um",
			"ⱴ":"v",
			"ꝟ":"v",
			"ṿ":"v",
			"ʋ":"v",
			"ᶌ":"v",
			"ⱱ":"v",
			"ṽ":"v",
			"ꝡ":"vy",
			"ẃ":"w",
			"ŵ":"w",
			"ẅ":"w",
			"ẇ":"w",
			"ẉ":"w",
			"ẁ":"w",
			"ⱳ":"w",
			"ẘ":"w",
			"ẍ":"x",
			"ẋ":"x",
			"ᶍ":"x",
			"ý":"y",
			"ŷ":"y",
			"ÿ":"y",
			"ẏ":"y",
			"ỵ":"y",
			"ỳ":"y",
			"ƴ":"y",
			"ỷ":"y",
			"ỿ":"y",
			"ȳ":"y",
			"ẙ":"y",
			"ɏ":"y",
			"ỹ":"y",
			"ź":"z",
			"ž":"z",
			"ẑ":"z",
			"ʑ":"z",
			"ⱬ":"z",
			"ż":"z",
			"ẓ":"z",
			"ȥ":"z",
			"ẕ":"z",
			"ᵶ":"z",
			"ᶎ":"z",
			"ʐ":"z",
			"ƶ":"z",
			"ɀ":"z",
			"ﬀ":"ff",
			"ﬃ":"ffi",
			"ﬄ":"ffl",
			"ﬁ":"fi",
			"ﬂ":"fl",
			"ĳ":"ij",
			"œ":"oe",
			"ﬆ":"st",
			"ₐ":"a",
			"ₑ":"e",
			"ᵢ":"i",
			"ⱼ":"j",
			"ₒ":"o",
			"ᵣ":"r",
			"ᵤ":"u",
			"ᵥ":"v",
		"ₓ":"x"};
		String.prototype.latinise=function(){return this.replace(/[^A-Za-z0-9\[\] ]/g,function(a){return Latinise.latin_map[a]||a})};
		String.prototype.latinize=String.prototype.latinise;
		String.prototype.isLatin=function(){return this==this.latinise()}
		String.prototype.replaceAll = function(str1, str2, ignore) 
		{
				return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
		} 
    chrome.runtime.onMessage.addListener(function(request, sender) {
    	console.log(request);
  		if(request.from=="background" && request.data){
  			var personalData = request.data;
  			if(personalData.length){
  				chrome.storage.sync.set({'userData': personalData}, function() {
						chrome.storage.sync.set({'startStatus': 'true'}, function() {
						});
						var first_name = false, last_name =false,gender =false,marital_status =false,city_of_birth =false,state_of_birth =false,country_of_birth =false,DOB =false,alias_yn =false,telecode_yn =false;
						for(var i in personalData){
							if(personalData[i].interaction=="first_name"){
								$('input[name$="APP_SURNAME"]').val(personalData[i].value.latinize());
								$('input[name$="APP_FULL_NAME_NATIVE"]').val(personalData[i].value.latinize());
								first_name = true;
							}
							if(personalData[i].interaction=="last_name"){
								$('input[name$="APP_GIVEN_NAME"]').val(personalData[i].value.latinize());
								$('input[name$="APP_FULL_NAME_NATIVE"]').val($('input[name$="APP_FULL_NAME_NATIVE"]').val()+' '+ personalData[i].value.latinize());
								last_name = true;
							}
							if(personalData[i].interaction=="gender"){
								if(personalData[i].value=="male"){
									$('input[id$="APP_GENDER_0"]').prop("checked", true); 
								}else{
									$('input[id$="APP_GENDER_1"]').prop("checked", true); 
								}
								gender = true;
							}
							if(personalData[i].interaction=="marital_status"){

								var marital = personalData[i].value.toUpperCase().trim();
								if(marital=="COMMON LAW MARRIED") marital = "COMMON LAW MARRIAGE"
								$('select[id$="APP_MARITAL_STATUS"]').find('option').each(function(){
									if($(this).text()==marital){
										$('select[id$="APP_MARITAL_STATUS"]').val($(this).val());		
										$('select[id$="APP_MARITAL_STATUS"]').change();
									}
									marital_status = true;
								});
							}
							if(personalData[i].interaction=="city_of_birth"){
								$('input[name$="APP_POB_CITY"]').val(personalData[i].value);
								city_of_birth = true;
							}
							if(personalData[i].interaction=="state_of_birth"){
								$('input[name$="APP_POB_ST_PROVINCE"]').val(personalData[i].value);
								state_of_birth = true
							}
							if(personalData[i].interaction=="country_of_birth"){
								var country = personalData[i].value.toUpperCase().trim();
								$('select[id$="APP_POB_CNTRY"]').find('option').each(function(){
									if($(this).text()==country){
										$('select[id$="APP_POB_CNTRY"]').val($(this).val());		
										$('select[id$="APP_POB_CNTRY"]').change();
									}
								});
								country_of_birth = true;
							}
							if(personalData[i].interaction=="DOB"){
								var birth_date = personalData[i].value.split("/");
								console.log(birth_date);
								var birth_day = birth_date[0];
								$('select[id$="DOBDay"]').find('option').each(function(){
									if($(this).text()==birth_day){
										$('select[id$="DOBDay"]').val($(this).val());		
										$('select[id$="DOBDay"]').change();
									}
								});
								var birth_month = birth_date[1];
								$('select[id$="DOBMonth"]').find('option').each(function(index, value){
									if(index==parseInt(birth_month)){
										$('select[id$="DOBMonth"]').val($(this).val());
										$('select[id$="DOBMonth"]').change();
									}
								});
								$('input[name$="DOBYear"]').val(birth_date[2]);
								DOB = true;
							}
							if(personalData[i].interaction=="alias_yn"){
								if(personalData[i].value=="No"){
									$('input[id$="OtherNames_1"]').prop("checked", true); 
								}else{
									$('input[id$="OtherNames_0"]').prop("checked", true); 
								}
								alias_yn = true;
							}
							if(personalData[i].interaction=="telecode_yn"){
								if(personalData[i].value=="No"){
									$('input[id$="TelecodeQuestion_1"]').prop("checked", true); 
								}else{
									$('input[id$="TelecodeQuestion_0"]').prop("checked", true); 
								}
								telecode_yn = true;
							}
						}
						var missing_obj = [];
						var i =0;
						if(!first_name){
							$('input[name$="APP_SURNAME"]').val("FERNANDEZ GARCIA");
							$('input[name$="APP_FULL_NAME_NATIVE"]').val("FERNANDEZ GARCIA");
							missing_obj[i] = {}
							missing_obj[i]['interaction']="first_name";
							missing_obj[i]['value']="FERNANDEZ";
							i++
						}
						if(!last_name){
							$('input[name$="APP_GIVEN_NAME"]').val("JUAN MIGUEL");
							missing_obj[i] = {}
							missing_obj[i]['interaction']="last_name";
							missing_obj[i]['value']="MIGUEL";
							i++
						}
						if(!gender){
							$('input[id$="APP_GENDER_0"]').prop("checked", true); 
							missing_obj[i] = {}
							missing_obj[i]['interaction']="gender";
							missing_obj[i]['value']="male/female";
							i++
						}
						if(!marital_status){
							$('select[id$="APP_MARITAL_STATUS"]').val("S");		
							$('select[id$="APP_MARITAL_STATUS"]').change();
							missing_obj[i] = {}
							missing_obj[i]['interaction']="marital_status";
							missing_obj[i]['value']="Married/Common law marriage/Single/Other/Widowed/Divorced";
							i++
						}
						if(!city_of_birth){
							$('input[name$="APP_POB_CITY"]').val("City");
							missing_obj[i] = {}
							missing_obj[i]['interaction']="city_of_birth";
							missing_obj[i]['value']="City Name";
							i++
						}
						if(!state_of_birth){
							$('input[name$="APP_POB_ST_PROVINCE"]').val("State");
							missing_obj[i] = {}
							missing_obj[i]['interaction']="state_of_birth";
							missing_obj[i]['value']="State Name";
							i++
						}
						if(!country_of_birth){
							$('select[id$="APP_POB_CNTRY"]').val("ARG");		
							$('select[id$="APP_POB_CNTRY"]').change();
							missing_obj[i] = {}
							missing_obj[i]['interaction']="country_of_birth";
							missing_obj[i]['value']="Albania/Algeria/American";
							i++
						}
						if(!DOB){
							$('select[id$="DOBDay"]').val("1");		
							$('select[id$="DOBDay"]').change();
							$('select[id$="DOBMonth"]').val("1");
							$('select[id$="DOBMonth"]').change();
							$('input[name$="DOBYear"]').val("1980");
							missing_obj[i] = {}
							missing_obj[i]['interaction']="DOB";
							missing_obj[i]['value']="01/1/1970";
							i++
						}
						if(!alias_yn){
							$('input[id$="OtherNames_1"]').prop("checked", true); 
							missing_obj[i] = {}
							missing_obj[i]['interaction']="alias_yn";
							missing_obj[i]['value']="Yes/No";
							i++
						}
						if(telecode_yn){
							console.log(missing_obj);
							console.log(missing_obj[i]);
							$('input[id$="TelecodeQuestion_1"]').prop("checked", true); 
							missing_obj[i] = {}
							missing_obj[i]['interaction']="telecode_yn";
							missing_obj[i]['value']="Yes/No";
							i++
						}
						chrome.runtime.sendMessage({from: "content",data: missing_obj}, function(response) {
						});
						setTimeout(function(){ 
							$('input[name$="UpdateButton3"]').click();
						}, 3000);
					});
  			}
  		}
  	});
		if(location.href.indexOf("complete_personalcont.aspx?node=Personal2")!=-1){
			//var userData = JSON.parse(localStroage.getItem("userData"));
			//console.log(userData);
			chrome.storage.sync.get("userData", function (obj) {
				var personalData = obj.userData;
				if(personalData.length){
					console.log(personalData);
					for(var i in personalData){
						console.log(personalData[i].interaction+"----"+personalData[i].value);
					}
					var nationality = false,othernationindenty_yn=false,othercountryindenty_yn=false,national_id=false,socialsecuritynumber=false,taxidnumber=false;
					for(var i in personalData){
						if(personalData[i].interaction=="nationality"){
							var country = personalData[i].value.toUpperCase().trim();
							console.log(country);
							$('select[id$="APP_NATL"]').find('option').each(function(){
								if($(this).text()==country){
									$('select[id$="APP_NATL"]').val($(this).val());		
									$('select[id$="APP_NATL"]').change();
								}
							});
							nationality = true;
						}
						if(personalData[i].interaction=="othernationindenty_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="APP_OTH_NATL_IND_1"]').prop("checked", true); 
							}else{
								$('input[id$="APP_OTH_NATL_IND_0"]').prop("checked", true); 
							}
							othernationindenty_yn = true;
						}
						if(personalData[i].interaction=="othercountryindenty_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="PermResOtherCntryInd_1"]').prop("checked", true); 
							}else{
								$('input[id$="PermResOtherCntryInd_0"]').prop("checked", true); 
							}
							othercountryindenty_yn = true;
						}
						if(personalData[i].interaction=="national_id"){
							console.log(personalData[i].value.trim().replaceAll(".","").replaceAll("-",""));
							$('input[name$="APP_NATIONAL_ID"]').val(personalData[i].value.trim().replaceAll(".","").replaceAll("-","").replaceAll("/",""));
							national_id = true
						}
						if(personalData[i].interaction=="socialsecuritynumber"){
							var ssl_number = personalData[i].value.split("-");
							$('input[name$="APP_SSN1"]').val(ssl_number[0]);
							$('input[name$="APP_SSN1"]').val(ssl_number[1]);
							$('input[name$="APP_SSN1"]').val(ssl_number[2]);
							socialsecuritynumber = true
						}
						if(personalData[i].interaction=="taxidnumber"){
							$('input[name$="APP_TAX_ID"]').val(personalData[i].value);
							taxidnumber = true
						}
					}
					var missing_obj = [];
					var i =0;
					if(!nationality){
						$('select[id$="APP_NATL"]').val("GRBR");		
						$('select[id$="APP_NATL"]').change();
						missing_obj[i] = {}
						missing_obj[i]['interaction']="nationality";
						missing_obj[i]['value']="Albania/Algeria/American";
						i++
					}
					if(!othernationindenty_yn){
						$('input[id$="APP_OTH_NATL_IND_1"]').prop("checked", true);
						missing_obj[i] = {}
						missing_obj[i] = {}
						missing_obj[i]['interaction']="othernationindenty_yn";
						missing_obj[i]['value']="FERNANDEZ";
						i++
					}
					if(!othercountryindenty_yn){
						missing_obj[i] = {}
						$('input[id$="PermResOtherCntryInd_1"]').prop("checked", true);
						missing_obj[i] = {}
						missing_obj[i]['interaction']="othercountryindenty_yn";
						missing_obj[i]['value']="Yes/No";
						i++
					}
					if(!national_id){
						$('input[id$="APP_NATIONAL_ID_NA"]').prop("checked", true);
						missing_obj[i] = {}
						missing_obj[i]['interaction']="national_id";
						missing_obj[i]['value']="123456789";
						i++
					}
					if(!socialsecuritynumber){
						$('input[id$="APP_SSN_NA"]').prop("checked", true);
						missing_obj[i] = {}
						missing_obj[i]['interaction']="socialsecuritynumber";
						missing_obj[i]['value']="123-456-789";
						i++
					}
					if(!taxidnumber){
						$('input[id$="APP_TAX_ID_NA"]').prop("checked", true);
						missing_obj[i] = {}
						missing_obj[i]['interaction']="taxidnumber";
						missing_obj[i]['value']="123456789";
						i++
					}
					chrome.runtime.sendMessage({from: "content",data: missing_obj}, function(response) {
					});
					setTimeout(function(){ 
						$('input[name$="UpdateButton3"]').click();
					}, 3000);
				}
			});
		}
		if(location.href.indexOf("complete_contact.aspx?node=AddressPhone")!=-1){
			chrome.storage.sync.get("userData", function (obj) {
				var personalData = obj.userData;
				if(personalData.length){
					console.log(personalData);
					var user_address = false,same_mailing_address_yn=false,phone_number=false,second_phone_number=false,work_phone_number=false,user_email=false;
					for(var i in personalData){
						if(personalData[i].interaction=="user_address"){
							console.log(personalData[i].value.trim());
							var address = JSON.parse(personalData[i].value.trim());
							//console.log(address);
							if(address['street'].trim() && address['street'].trim()!=""){
								$('input[name$="APP_ADDR_LN1"]').val(address['street'].trim());
							}else{
								$('input[name$="APP_ADDR_LN1"]').val("street");
							}
							$('input[name$="APP_ADDR_LN2"]').val(address['line2'].trim());
							if(address['city'].trim() && address['city'].trim()!=""){
								$('input[name$="APP_ADDR_CITY"]').val(address['city'].trim());
							}else{
								$('input[name$="APP_ADDR_CITY"]').val("city");
							}
							if(address['zip']){
								$('input[name$="APP_ADDR_POSTAL_CD"]').val(address['zip']);	
							}else{
								$('input[id$="APP_ADDR_POSTAL_CD_NA"]').prop("checked", true); 
							}
							if(address['state']){
								$('input[name$="APP_ADDR_STATE"]').val(address['state']);
							}else{
								$('input[id$="APP_ADDR_STATE_NA"]').prop("checked", true); 
							}
							var country_status = false;
							$('select[id$="ddlCountry"]').find('option').each(function(){
								if($(this).text()==address['country'].toUpperCase().trim()){
									$('select[id$="ddlCountry"]').val($(this).val());		
									$('select[id$="ddlCountry"]').change();
									country_status=true;
								}
							});
							if(!country_status){
								$('select[id$="ddlCountry"]').val("ARG");		
								$('select[id$="ddlCountry"]').change();
							}
							user_address = true;
						}
						if(personalData[i].interaction=="same_mailing_address_yn"){
							if(personalData[i].value=="Yes"){
								$('input[id$="MailingAddrSame_0"]').prop("checked", true); 
							}else{
								$('input[id$="MailingAddrSame_1"]').prop("checked", true); 
							}
							same_mailing_address_yn = true;
						}
						if(personalData[i].interaction=="phone_number"){
							$('input[name$="APP_HOME_TEL"]').val(personalData[i].value.replaceAll("(","").replaceAll(")","").replaceAll("-","").replaceAll("+",""));
							phone_number = true;
						}
						if(personalData[i].interaction=="second_phone_number"){
							$('input[name$="APP_MOBILE_TEL"]').val(personalData[i].value.replaceAll("(","").replaceAll(")","").replaceAll("-","").replaceAll("+",""));
							second_phone_number = true;
						}
						if(personalData[i].interaction=="work_phone_number"){
							$('input[name$="APP_BUS_TEL"]').val(personalData[i].value.replaceAll("(","").replaceAll(")","").replaceAll("-","").replaceAll("+",""));
							work_phone_number = true;
						}
						if(personalData[i].interaction=="user_email"){
							$('input[name$="APP_EMAIL_ADDR"]').val(personalData[i].value);
							user_email = true;
						}
					}
					var missing_obj = [];
					var i =0;
					if(!user_address){
						$('input[name$="APP_ADDR_LN1"]').val("street");
						$('input[name$="APP_ADDR_CITY"]').val("City");
						$('input[id$="APP_ADDR_POSTAL_CD_NA"]').prop("checked", true);
						$('input[id$="APP_ADDR_STATE_NA"]').prop("checked", true); 
						$('select[id$="ddlCountry"]').val("GRBR");		
						$('select[id$="ddlCountry"]').change();
						missing_obj[i] = {}
						missing_obj[i]['interaction']="user_address";
						missing_obj[i]['value']='{"street":" Honduras 5550","line2":"","zip":"1414","city":"Buenos Aires","country":"Argentina"}';
						i++
					}
					if(!same_mailing_address_yn){
						$('input[id$="MailingAddrSame_0"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="same_mailing_address_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!phone_number){
						$('input[name$="APP_HOME_TEL"]').val("123456789");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="phone_number";
						missing_obj[i]['value']='123456789';
						i++
					}
					if(!second_phone_number){
						$('input[name$="MOBILE_TEL_NA"]').prop("checked", true);
						missing_obj[i] = {}
						missing_obj[i]['interaction']="second_phone_number";
						missing_obj[i]['value']='123456789';
						i++
					}
					if(!work_phone_number){
						$('input[name$="APP_BUS_TEL_NA"]').prop("checked", true);
						missing_obj[i] = {}
						missing_obj[i]['interaction']="work_phone_number";
						missing_obj[i]['value']='123456789';
						i++
					}
					if(!user_email){
						$('input[name$="APP_EMAIL_ADDR"]').val("test@test.com");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="user_email";
						missing_obj[i]['value']='test@test.com';
						i++
					}
					chrome.runtime.sendMessage({from: "content",data: missing_obj}, function(response) {
					});
					setTimeout(function(){ 
						$('input[name$="UpdateButton3"]').click();
					}, 3000);
				}
			});
		}
		if(location.href.indexOf("complete/Passport_Visa_Info.aspx?node=PptVisa")!=-1){
			chrome.storage.sync.get("userData", function (obj) {
				var personalData = obj.userData;
				if(personalData.length){
					console.log(personalData);
					var passport_type = false,passport_number=false,passport_book_number=false,passport_city=false,passport_issue=false,passport_expire=false,passport_lost_yn=false, passport_lost_number=false,passport_lost_national=false,Passport_lost_explain=false;
					for(var i in personalData){
						console.log(personalData[i].interaction+"----"+personalData[i].value);
					}
					for(var i in personalData){
						if(personalData[i].interaction=="passport_type"){
							$('select[name$="PPT_TYPE"]').find('option').each(function(){
								if($(this).text()==personalData[i].value.toUpperCase().trim()){
									$('select[id$="PPT_TYPE"]').val($(this).val());		
									$('select[id$="PPT_TYPE"]').change();
								}
							});
							passport_type = true;
						}
						if(personalData[i].interaction=="passport_number"){
							$('input[name$="PPT_NUM"]').val(personalData[i].value.replaceAll(".","").replaceAll("-",""));	
							passport_number = true;
						}
						if(personalData[i].interaction=="passport_book_number"){
							$('input[name$="PPT_BOOK_NUM"]').val(personalData[i].value);	
							passport_book_number = true;
						}else{
							$('input[id$="PPT_BOOK_NUM_NA"]').prop("checked", true); 
						}
						if(personalData[i].interaction=="passport_city"){
							$('input[name$="PPT_ISSUED_IN_CITY"]').val(personalData[i].value);	
							passport_city = true;
						}
						if(personalData[i].interaction=="passport_issue"){
							var issue_date = personalData[i].value.split("/");
							console.log(issue_date);
							var issue_day = issue_date[0];
							$('select[id$="PPT_ISSUED_DTEDay"]').find('option').each(function(){
								if($(this).text()==issue_day){
									$('select[id$="PPT_ISSUED_DTEDay"]').val($(this).val());		
									$('select[id$="PPT_ISSUED_DTEDay"]').change();
								}
							});
							var issue_month = issue_date[1];
							$('select[id$="PPT_ISSUED_DTEMonth"]').find('option').each(function(index, value){
								if(index==parseInt(issue_month)){
									$('select[id$="PPT_ISSUED_DTEMonth"]').val($(this).val());
									$('select[id$="PPT_ISSUED_DTEMonth"]').change();
								}
							});
							$('input[name$="PPT_ISSUEDYear"]').val(issue_date[2]);
							passport_issue = true;
						}
						if(personalData[i].interaction=="passport_expire"){
							var expire_date = personalData[i].value.split("/");
							console.log(expire_date);
							var expire_day = expire_date[0];
							$('select[id$="PPT_EXPIRE_DTEDay"]').find('option').each(function(){
								if($(this).text()==issue_day){
									$('select[id$="PPT_EXPIRE_DTEDay"]').val($(this).val());		
									$('select[id$="PPT_EXPIRE_DTEDay"]').change();
								}
							});
							var expire_month = expire_date[1];
							$('select[id$="PPT_EXPIRE_DTEMonth"]').find('option').each(function(index, value){
								if(index==parseInt(expire_month)){
									$('select[id$="PPT_EXPIRE_DTEMonth"]').val($(this).val());
									$('select[id$="PPT_EXPIRE_DTEMonth"]').change();
								}
							});
							$('input[name$="PPT_EXPIREYear"]').val(expire_date[2]);
							passport_expire = true;
						}
						if(personalData[i].interaction=="passport_lost_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="LOST_PPT_IND_1"]').prop("checked", true); 
							}else{
								$('input[id$="LOST_PPT_IND_0"]').prop("checked", true); 
							}
							passport_lost_yn = true;
						}
						if(personalData[i].interaction=="passport_lost_number"){
							$('input[name$="LOST_PPT_NUM"]').val(personalData[i].value);	
							passport_lost_number = true;
						}else{
							$('input[id$="LOST_PPT_NUM_UNKN_IND"]').prop("checked", true); 
						}
						if(personalData[i].interaction=="passport_lost_national"){
							var country = personalData[i].value.toUpperCase().trim();
							console.log(country);
							$('select[id$="LOST_PPT_NATL"]').find('option').each(function(){
								if($(this).text()==country){
									$('select[id$="LOST_PPT_NATL"]').val($(this).val());		
									$('select[id$="LOST_PPT_NATL"]').change();
								}
							});
							passport_lost_national = true;
						}
						if(personalData[i].interaction=="Passport_lost_explain"){
							$('textarea[name$="LOST_PPT_EXPL"]').text(personalData[i].value);	
							Passport_lost_explain = true;
						}
					}
					var missing_obj = [];
					var i =0;
					if(!passport_type){
						$('select[name$="PPT_TYPE"]').find('option').each(function(){
							if($(this).text()=="REGULAR"){
								$('select[id$="PPT_TYPE"]').val($(this).val());		
								$('select[id$="PPT_TYPE"]').change();
							}
						});
						missing_obj[i] = {}
						missing_obj[i]['interaction']="passport_type";
						missing_obj[i]['value']='regular/official/diplomatic/other';
						i++
					}
					if(!passport_number){
						$('input[name$="PPT_NUM"]').val("AA12345");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="passport_number";
						missing_obj[i]['value']='AA12345';
						i++
					}
					if(!passport_book_number){
						$('input[id$="PPT_BOOK_NUM_NA"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="passport_book_number";
						missing_obj[i]['value']='123456';
						i++
					}
					if(!passport_city){
						$('input[name$="PPT_ISSUED_IN_CITY"]').val("CITY");	
						missing_obj[i] = {}
						missing_obj[i]['interaction']="passport_city";
						missing_obj[i]['value']='city name';
						i++
					}
					if(!passport_issue){
						$('select[id$="PPT_ISSUED_DTEDay"]').val("01");		
						$('select[id$="PPT_ISSUED_DTEDay"]').change();
						$('select[id$="PPT_ISSUED_DTEMonth"]').val("01");
						$('select[id$="PPT_ISSUED_DTEMonth"]').change();
						$('input[name$="PPT_ISSUEDYear"]').val("2014");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="passport_issue";
						missing_obj[i]['value']='1/01/2015';
						i++
					}
					if(!passport_expire){
						$('select[id$="PPT_EXPIRE_DTEDay"]').val("01");		
						$('select[id$="PPT_EXPIRE_DTEDay"]').change();
						$('select[id$="PPT_EXPIRE_DTEMonth"]').val("01");
						$('select[id$="PPT_EXPIRE_DTEMonth"]').change();
						$('input[name$="PPT_EXPIREYear"]').val("2024");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="passport_expire";
						missing_obj[i]['value']='1/01/2025';
						i++
					}
					if(!passport_lost_yn){
						$('input[id$="LOST_PPT_IND_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="passport_expire";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!passport_lost_number){
						$('input[id$="LOST_PPT_NUM_UNKN_IND"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="passport_lost_number";
						missing_obj[i]['value']='123456789';
						i++
					}
					if(!passport_lost_national){
						$('select[id$="LOST_PPT_NATL"]').val("ARG");		
						$('select[id$="LOST_PPT_NATL"]').change();
						missing_obj[i] = {}
						missing_obj[i]['interaction']="passport_lost_national";
						missing_obj[i]['value']='Argentina/AUSTRALIA';
						i++
					}
					if(!Passport_lost_explain){
						$('textarea[name$="LOST_PPT_EXPL"]').text("explain text");	
						missing_obj[i] = {}
						missing_obj[i]['interaction']="Passport_lost_explain";
						missing_obj[i]['value']='explain text';
						i++
					}
					chrome.runtime.sendMessage({from: "content",data: missing_obj}, function(response) {
					});
					setTimeout(function(){ 
						$('input[name$="UpdateButton3"]').click();
					}, 3000);				
				}
			});
		}
		if(location.href.indexOf("complete/complete_travel.aspx?node=Travel")!=-1){
			chrome.storage.sync.get("userData", function (obj) {
				var personalData = obj.userData;
				if(personalData.length){
					console.log(personalData);
					var trippayment = false,arrival_date=false,time_in_country=false,time_in_country_frame=false,purposeoftrip=false,otherpurpose=false,staystreet=false,staycity=false,staystate=false, stayzipcode=false;
					for(var i in personalData){
						console.log(personalData[i].interaction+"----"+personalData[i].value);
					}
					for(var i in personalData){
						if(personalData[i].interaction=="purposeoftrip"){
							$('select[name$="PurposeOfTrip"]').val(personalData[i].value);
							purposeoftrip = true;
						}
						if(personalData[i].interaction=="otherpurpose"){
							$('select[name$="OtherPurpose"]').val(personalData[i].value);
							otherpurpose = true;
						}
						if(personalData[i].interaction=="staystreet"){
							$('input[name$="StreetAddress1"]').val(personalData[i].value);
							staystreet = true;
						}
						if(personalData[i].interaction=="staycity"){
							$('input[name$="City"]').val(personalData[i].value);
							staycity = true;
						}
						if(personalData[i].interaction=="staystate"){
							$('select[name$="TravelState"]').val(personalData[i].value);
							staystate = true;
						}
						if(personalData[i].interaction=="stayzipcode"){
							$('input[name$="ZIPCode"]').val(personalData[i].value);
							stayzipcode = true;
						}
						if(personalData[i].interaction=="first_name"){
							$('input[name$="PrincipleAppSurname"]').val(personalData[i].value.trim().latinize());
						}
						if(personalData[i].interaction=="last_name"){
							$('input[name$="PrincipleAppGivenName"]').val(personalData[i].value);
						}
						
						if(personalData[i].interaction=="trippayment"){
							console.log(personalData[i].value.toUpperCase().trim());
							$('select[name$="WhoIsPaying"]').find('option').each(function(){
								if($(this).text().toUpperCase()==personalData[i].value.toUpperCase().trim()){
									$('select[id$="WhoIsPaying"]').val($(this).val());		
									$('select[id$="WhoIsPaying"]').change();
								}else{
									$('select[id$="WhoIsPaying"]').val("S");		
									$('select[id$="WhoIsPaying"]').change();
								}
							});
							trippayment = true;
						}
						if(personalData[i].interaction=="arrival_date"){
							$('input[id$="SpecificTravel_1"]').prop("checked", true);
							var arr_date = personalData[i].value.split("/");
							console.log(arr_date);
							var arr_day = arr_date[0];
							$('select[id$="TRAVEL_DTEDay"]').find('option').each(function(){
								if($(this).text()==arr_day){
									$('select[id$="TRAVEL_DTEDay"]').val($(this).val());		
									$('select[id$="TRAVEL_DTEDay"]').change();
								}
							});
							var arr_month = arr_date[1];
							$('select[id$="TRAVEL_DTEMonth"]').find('option').each(function(index, value){
								if(index==parseInt(arr_month)){
									$('select[id$="TRAVEL_DTEMonth"]').val($(this).val());
									$('select[id$="TRAVEL_DTEMonth"]').change();
								}
							});
							$('input[name$="TRAVEL_DTEYear"]').val(arr_date[2]);
							arrival_date = true;
						}
						if(personalData[i].interaction=="time_in_country"){
							$('input[name$="TRAVEL_LOS"]').val(parseInt(personalData[i].value.trim()));	
							time_in_country = true;
						}
						if(personalData[i].interaction=="time_in_country_frame"){
							$('select[id$="TRAVEL_LOS_CD"]').val(personalData[i].value[0].toUpperCase());		
							$('select[id$="TRAVEL_LOS_CD"]').change();
							time_in_country_frame = true;
						}
					}
					var missing_obj = [];
					var i =0;
					if(!purposeoftrip){
						$('select[name$="PurposeOfTrip"]').val("F");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="PurposeOfTrip";
						missing_obj[i]['value']='A/B/C/CNMI/D/E/F/G/HI/J/K/L/M/N/NATO/O/P/Q/R';
						i++
					}
					if(!otherpurpose){
						$('select[name$="OtherPurpose"]').val("F2-CH");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="otherpurpose";
						missing_obj[i]['value']='F2-CH/C2-UN/C1-D';
						i++
					}
					if(!staystreet){
						$('input[name$="StreetAddress1"]').val("street");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="staystreet";
						missing_obj[i]['value']='street name';
						i++
					}
					if(!staycity){
						$('input[name$="City"]').val("city");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="staystreet";
						missing_obj[i]['value']='city name';
						i++
					}
					if(!staystate){
						$('select[name$="TravelState"]').val("DE");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="staystate";
						missing_obj[i]['value']='DE';
						i++
					}
					if(!stayzipcode){
						$('input[name$="ZIPCode"]').val("12345");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="stayzipcode";
						missing_obj[i]['value']='12345';
						i++
					}
					if(personalData[i].interaction=="first_name"){
						$('input[name$="PrincipleAppSurname"]').val(personalData[i].value);
						missing_obj[i] = {}
						missing_obj[i]['interaction']="first_name";
						missing_obj[i]['value']='first name';
						i++
					}
					if(personalData[i].interaction=="last_name"){
						$('input[name$="PrincipleAppGivenName"]').val(personalData[i].value);
						missing_obj[i] = {}
						missing_obj[i]['interaction']="last_name";
						missing_obj[i]['value']='last name';
						i++
					}
					if(!trippayment){
						$('select[id$="WhoIsPaying"]').val('S');		
						$('select[id$="WhoIsPaying"]').change();
						missing_obj[i] = {}
						missing_obj[i]['interaction']="trippayment";
						missing_obj[i]['value']='self';
						i++
					}
					if(!arrival_date){
						$('input[id$="SpecificTravel_1"]').prop("checked", true);
						$('select[id$="TRAVEL_DTEDay"]').val("1");		
						$('select[id$="TRAVEL_DTEDay"]').change();
						$('select[id$="TRAVEL_DTEMonth"]').val("1");
						$('select[id$="TRAVEL_DTEMonth"]').change();
						$('input[name$="TRAVEL_DTEYear"]').val("2018");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="arrival_date";
						missing_obj[i]['value']='01/01/2018';
						i++
					}
					if(!time_in_country){
						$('input[name$="TRAVEL_LOS"]').val("10");	
						missing_obj[i] = {}
						missing_obj[i]['interaction']="time_in_country";
						missing_obj[i]['value']='10';
						i++
					}
					if(!time_in_country_frame){
						$('select[id$="TRAVEL_LOS_CD"]').val("W");		
						$('select[id$="TRAVEL_LOS_CD"]').change();
						missing_obj[i] = {}
						missing_obj[i]['interaction']="time_in_country_frame";
						missing_obj[i]['value']='Day/Month/Year';
						i++
					}
					chrome.runtime.sendMessage({from: "content",data: missing_obj}, function(response) {
					});
					setTimeout(function(){ 
						$('input[name$="UpdateButton3"]').click();
					}, 3000);				
				}
			});
		}
		if(location.href.indexOf("complete/complete_travelcompanions.aspx?node=TravelCompanions")!=-1){
			chrome.storage.sync.get("userData", function (obj) {
				var personalData = obj.userData;
				if(personalData.length){
					console.log(personalData);
					var travelcompanions_yn = false, grouptravel_yn = false,travel_companion_first=false,travel_companion_last=false,travel_companion_relation=false;
					for(var i in personalData){
						console.log(personalData[i].interaction+"----"+personalData[i].value);
					}
					for(var i in personalData){
						if(personalData[i].interaction=="travelcompanions_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="OtherPersonsTravelingWithYou_1"]').prop("checked", true); 
							}else{
								$('input[id$="OtherPersonsTravelingWithYou_0"]').prop("checked", true); 
							}
							travelcompanions_yn = true;
						}
						if(personalData[i].interaction=="grouptravel_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="GroupTravel_1"]').prop("checked", true); 
							}else{
								$('input[id$="GroupTravel_0"]').prop("checked", true); 
							}
							grouptravel_yn = true;
						}
						if(personalData[i].interaction=="travel_companion_first"){
							$('input[name$="Surname"]').val(personalData[i].value);
							travel_companion_first = true;
						}
						if(personalData[i].interaction=="travel_companion_last"){
							$('input[name$="GivenName"]').val(personalData[i].value);
							travel_companion_last = true;
						}
						if(personalData[i].interaction=="travel_companion_relation"){
							$('select[id$="TCRelationship"]').find('option').each(function(){
								if($(this).text()==personalData[i].value.toUpperCase().trim()){
									$('select[id$="TCRelationship"]').val($(this).val());		
									$('select[id$="TCRelationship"]').change();
									travel_companion_relation = true;
								}
							});
						}
					}
					var missing_obj = [];
					var i =0;
					if(!travelcompanions_yn){
						$('input[id$="OtherPersonsTravelingWithYou_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="travelcompanions_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!grouptravel_yn){
						$('input[id$="GroupTravel_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="grouptravel_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!travel_companion_relation){
						$('select[id$="TCRelationship"]').val("P");		
						$('select[id$="TCRelationship"]').change();
						missing_obj[i] = {}
						missing_obj[i]['interaction']="travel_companion_relation";
						missing_obj[i]['value']='PARENT/SPOUSE/CHILD/FRIEND/BUSINESS ASSOCIATE/OTHER';
						i++
					}
					chrome.runtime.sendMessage({from: "content",data: missing_obj}, function(response) {
					});
					setTimeout(function(){ 
						$('input[name$="UpdateButton3"]').click();
					}, 3000);
				}
			});
		}
		if(location.href.indexOf("complete/complete_previousustravel.aspx?node=PreviousUSTravel")!=-1){
			chrome.storage.sync.get("userData", function (obj) {
				var personalData = obj.userData;
				if(personalData.length){
					console.log(personalData);
					var ustravel_yn = false,previous_ustrip_date=false,previous_ustrip_duration=false,driverslicense_yn=false,previous_visa_yn=false,entryrefusal_yn=false,immigration_petition_yn=false, previousvisa_issuedate=false,previousvisa_number=false,previousvisa_same_yn=false,tenprinted_yn=false,previousvisa_lost_stolen_yn=false,previousvisa_revoked_yn=false;
					for(var i in personalData){
						console.log(personalData[i].interaction+"----"+personalData[i].value);
					}
					for(var i in personalData){
						if(personalData[i].interaction=="ustravel_yn"){
							if(personalData[i].value=="Yes"){
								$('input[id$="PREV_US_TRAVEL_IND_0"]').prop("checked", true); 
							}else{
								$('input[id$="PREV_US_TRAVEL_IND_1"]').prop("checked", true); 
							}
							ustravel_yn = true;
						}
						if(personalData[i].interaction=="previous_ustrip_date"){
							var us_date = personalData[i].value.split("/");
							console.log(us_date);
							var us_day = us_date[0];
							$('select[id$="PREV_US_VISIT_DTEDay"]').find('option').each(function(){
								if($(this).text()==us_day){
									$('select[id$="PREV_US_VISIT_DTEDay"]').val($(this).val());		
									$('select[id$="PREV_US_VISIT_DTEDay"]').change();
								}
							});
							var us_month = us_date[1];
							$('select[id$="PREV_US_VISIT_DTEMonth"]').find('option').each(function(index, value){
								if(index==parseInt(us_month)){
									$('select[id$="PREV_US_VISIT_DTEMonth"]').val($(this).val());
									$('select[id$="PREV_US_VISIT_DTEMonth"]').change();
								}
							});
							$('input[name$="PREV_US_VISIT_DTEYear"]').val(us_date[2]);
							previous_ustrip_date = true;
						}
						if(personalData[i].interaction=="previous_ustrip_duration"){
							var trip_date = personalData[i].value.split(" ");
							$('input[name$="PREV_US_VISIT_LOS"]').val(trip_date[0]);
							$('select[id$="PREV_US_VISIT_LOS_CD"]').val("D");
							$('select[id$="PREV_US_VISIT_LOS_CD"]').change();
							previous_ustrip_duration = true;
						}					
						if(personalData[i].interaction=="driverslicense_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="PREV_US_DRIVER_LIC_IND_1"]').prop("checked", true); 
							}else{
								$('input[id$="PREV_US_DRIVER_LIC_IND_0"]').prop("checked", true); 
							}
							driverslicense_yn = true;
						}
						if(personalData[i].interaction=="previous_visa_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="PREV_VISA_IND_1"]').prop("checked", true); 
							}else{
								$('input[id$="PREV_VISA_IND_0"]').prop("checked", true); 
							}
							previous_visa_yn = true;
						}
						

						if(personalData[i].interaction=="previousvisa_issuedate"){
							var issue_date = personalData[i].value.split("/");
							console.log(issue_date);
							var issue_day = issue_date[0];
							$('select[id$="PREV_VISA_ISSUED_DTEDay"]').find('option').each(function(){
								if($(this).text()==issue_day){
									$('select[id$="PREV_VISA_ISSUED_DTEDay"]').val($(this).val());		
									$('select[id$="PREV_VISA_ISSUED_DTEDay"]').change();
								}
							});
							var issue_month = issue_date[1];
							$('select[id$="PREV_VISA_ISSUED_DTEMonth"]').find('option').each(function(index, value){
								if(index==parseInt(issue_month)){
									$('select[id$="PREV_VISA_ISSUED_DTEMonth"]').val($(this).val());
									$('select[id$="PREV_VISA_ISSUED_DTEMonth"]').change();
								}
							});
							$('input[name$="PREV_VISA_ISSUED_DTEYear"]').val(issue_date[2]);
							previousvisa_issuedate = true;
						}
						if(personalData[i].interaction=="previousvisa_number"){
							$('input[name$="PREV_VISA_FOIL_NUMBER"]').val(personalData[i].value);
							previousvisa_number = true;
						}
						if(personalData[i].interaction=="previousvisa_same_yn"){
							if(personalData[i].value=="Yes"){
								$('input[id$="PREV_VISA_SAME_TYPE_IND_0"]').prop("checked", true);
								$('input[id$="PREV_VISA_SAME_CNTRY_IND_0"]').prop("checked", true); 
							}else{
								$('input[id$="PREV_VISA_SAME_TYPE_IND_1"]').prop("checked", true); 
								$('input[id$="PREV_VISA_SAME_CNTRY_IND_1"]').prop("checked", true); 
							}
							previousvisa_same_yn = true;
						}
						if(personalData[i].interaction=="tenprinted_yn"){
							if(personalData[i].value=="Yes"){
								$('input[id$="PREV_VISA_TEN_PRINT_IND_0"]').prop("checked", true);
							}else{
								$('input[id$="PREV_VISA_TEN_PRINT_IND_1"]').prop("checked", true); 
							}
							tenprinted_yn = true;
						}
						if(personalData[i].interaction=="previousvisa_lost_stolen_yn"){
							if(personalData[i].value=="Yes"){
								$('input[id$="PREV_VISA_LOST_IND_0"]').prop("checked", true);
							}else{
								$('input[id$="PREV_VISA_LOST_IND_1"]').prop("checked", true); 
							}
							previousvisa_lost_stolen_yn = true;
						}
						if(personalData[i].interaction=="previousvisa_revoked_yn"){
							if(personalData[i].value=="Yes"){
								$('input[id$="PREV_VISA_CANCELLED_IND_0"]').prop("checked", true);
							}else{
								$('input[id$="PREV_VISA_CANCELLED_IND_1"]').prop("checked", true); 
							}
							previousvisa_revoked_yn = true;
						}
						


						if(personalData[i].interaction=="entryrefusal_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="PREV_VISA_REFUSED_IND_1"]').prop("checked", true); 
							}else{
								$('input[id$="PREV_VISA_REFUSED_IND_0"]').prop("checked", true); 
							}
							entryrefusal_yn = true;
						}
						if(personalData[i].interaction=="immigration_petition_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="PETITION_IND_1"]').prop("checked", true); 
							}else{
								$('input[id$="PETITION_IND_0"]').prop("checked", true); 
							}
							immigration_petition_yn = true;
						}
					}
					var missing_obj = [];
					var i =0;
					if(!ustravel_yn){
						$('input[id$="PREV_US_TRAVEL_IND_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="ustravel_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!previous_ustrip_date){
						$('select[id$="PREV_US_VISIT_DTEDay"]').val("1");		
						$('select[id$="PREV_US_VISIT_DTEDay"]').change();
						$('select[id$="PREV_US_VISIT_DTEMonth"]').val("1");
						$('select[id$="PREV_US_VISIT_DTEMonth"]').change();
						$('input[name$="PREV_US_VISIT_DTEYear"]').val("2001");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="previous_ustrip_date";
						missing_obj[i]['value']='1/01/2001';
						i++
					}
					if(!previous_ustrip_duration){
						$('input[name$="PREV_US_VISIT_LOS"]').val("10");
						$('select[id$="PREV_US_VISIT_LOS_CD"]').val("D");
						$('select[id$="PREV_US_VISIT_LOS_CD"]').change();
						missing_obj[i] = {}
						missing_obj[i]['interaction']="previous_ustrip_duration";
						missing_obj[i]['value']='10 Days';
						i++
					}					
					if(!driverslicense_yn){
						$('input[id$="PREV_US_DRIVER_LIC_IND_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="driverslicense_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!previous_visa_yn){
						$('input[id$="PREV_VISA_IND_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="previous_visa_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!previousvisa_issuedate){
						$('select[id$="PREV_VISA_ISSUED_DTEDay"]').val("1");		
						$('select[id$="PREV_VISA_ISSUED_DTEDay"]').change();
						$('select[id$="PREV_VISA_ISSUED_DTEMonth"]').val("1");
						$('select[id$="PREV_VISA_ISSUED_DTEMonth"]').change();
						$('input[name$="PREV_VISA_ISSUED_DTEYear"]').val("2001");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="previousvisa_issuedate";
						missing_obj[i]['value']='1/01/2001';
						i++
					}
					if(!previousvisa_number){
						$('input[id$="PREV_VISA_FOIL_NUMBER_NA"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="previousvisa_number";
						missing_obj[i]['value']='123456789';
						i++
					}
					if(!previousvisa_same_yn){
						$('input[id$="PREV_VISA_SAME_TYPE_IND_1"]').prop("checked", true); 
						$('input[id$="PREV_VISA_SAME_CNTRY_IND_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="previousvisa_same_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!tenprinted_yn){
						$('input[id$="PREV_VISA_TEN_PRINT_IND_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="tenprinted_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!previousvisa_lost_stolen_yn){
						$('input[id$="PREV_VISA_LOST_IND_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="previousvisa_lost_stolen_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!previousvisa_revoked_yn){
						$('input[id$="PREV_VISA_CANCELLED_IND_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="previousvisa_revoked_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!entryrefusal_yn){
						$('input[id$="PREV_VISA_REFUSED_IND_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="entryrefusal_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!immigration_petition_yn){
						$('input[id$="PETITION_IND_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="immigration_petition_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					chrome.runtime.sendMessage({from: "content",data: missing_obj}, function(response) {
					});
					setTimeout(function(){ 
						$('input[name$="UpdateButton3"]').click();
					}, 3000);
				}
			});
		}
		if(location.href.indexOf("complete/complete_uscontact.aspx?node=USContact")!=-1){
			chrome.storage.sync.get("userData", function (obj) {
				var personalData = obj.userData;
				if(personalData.length){
					console.log(personalData);
					var contact_surname= false,contact_givenname=false,organization_name=false,contact_relationship=false,contact_person_street=false,contact_person_city=false,contact_person_state=false,contact_person_zipcode=false,contact_person_phone=false,contact_person_email=false;
					for(var i in personalData){
						console.log(personalData[i].interaction+"----"+personalData[i].value);
					}
					for(var i in personalData){
						if(personalData[i].interaction=="contact_surname"){
							$('input[name$="US_POC_SURNAME"]').val(personalData[i].value);
							contact_surname = true;
						}
						if(personalData[i].interaction=="contact_givenname"){
							$('input[name$="US_POC_GIVEN_NAME"]').val(personalData[i].value);
							contact_givenname = true;
						}else{
							$('input[id$="US_POC_NAME_NA"]').prop("checked", true); 
						}
						if(personalData[i].interaction=="organization_name"){
							$('input[name$="US_POC_ORGANIZATION"]').val(personalData[i].value);
							organization_name = true;
						}else{
							$('input[name$="US_POC_ORGANIZATION"]').val("organization"); 
						}
						if(personalData[i].interaction=="contact_person_street"){
							$('input[name$="US_POC_ADDR_LN1"]').val(personalData[i].value);
							contact_person_street = true;
						}
						if(personalData[i].interaction=="contact_person_city"){
							$('input[name$="US_POC_ADDR_CITY"]').val(personalData[i].value);
							contact_person_city = true;
						}
						if(personalData[i].interaction=="contact_person_state"){
							$('select[name$="US_POC_ADDR_STATE"]').val(personalData[i].value);
							contact_person_state = true;
						}
						if(personalData[i].interaction=="contact_person_zipcode"){
							$('input[name$="US_POC_ADDR_POSTAL_CD"]').val(personalData[i].value);
							contact_person_zipcode = true;
						}
						if(personalData[i].interaction=="contact_person_phone"){
							$('input[name$="US_POC_HOME_TEL"]').val(personalData[i].value);
							contact_person_phone = true
						}
						if(personalData[i].interaction=="contact_person_email"){
							$('input[name$="US_POC_EMAIL_ADDR"]').val(personalData[i].value);
							contact_person_email = true;
						}else{
							$('input[id$="US_POC_EMAIL_ADDR_NA"]').prop("checked", true); 
						}
						if(personalData[i].interaction=="contact_relationship"){
							$('select[name$="US_POC_REL_TO_APP"]').val(personalData[i].value);
							$('select[name$="US_POC_REL_TO_APP"]').change();
							contact_relationship = true;
						}else{
							$('select[name$="US_POC_REL_TO_APP"]').val("O");
							$('select[name$="US_POC_REL_TO_APP"]').change();
						}
					}
					var missing_obj = [];
					var i =0;
					if(!contact_surname){
						$('input[name$="US_POC_SURNAME"]').val("surname");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="contact_surname";
						missing_obj[i]['value']='contact person firstname';
						i++
					}
					if(!contact_givenname){
						$('input[id$="US_POC_NAME_NA"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="contact_givenname";
						missing_obj[i]['value']='contact person lastname';
						i++;
					}
					if(!organization_name){
						$('input[name$="US_POC_ORGANIZATION"]').val("organization"); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="organization_name";
						missing_obj[i]['value']='organization name';
						i++;
					}
					if(!contact_person_street){
						$('input[name$="US_POC_ADDR_LN1"]').val("street");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="contact_person_street";
						missing_obj[i]['value']='street';
						i++;
					}
					if(!contact_person_city){
						$('input[name$="US_POC_ADDR_CITY"]').val("city");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="contact_person_city";
						missing_obj[i]['value']='city';
						i++;
					}
					if(!contact_person_state){
						$('select[name$="US_POC_ADDR_STATE"]').val("DE");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="contact_person_state";
						missing_obj[i]['value']='AL/AK/AS...';
						i++;
					}
					if(!contact_person_zipcode){
						$('input[name$="US_POC_ADDR_POSTAL_CD"]').val("12345");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="contact_person_zipcode";
						missing_obj[i]['value']='12345';
						i++;
					}
					if(!contact_person_phone){
						$('input[name$="US_POC_HOME_TEL"]').val("123456789");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="contact_person_phone";
						missing_obj[i]['value']='123456789';
						i++;
					}
					if(!contact_person_email){
						$('input[id$="US_POC_EMAIL_ADDR_NA"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="contact_person_email";
						missing_obj[i]['value']='test@test.com';
						i++;
					}
					if(!contact_relationship){
						$('select[name$="US_POC_REL_TO_APP"]').val("O");
						$('select[name$="US_POC_REL_TO_APP"]').change();
						missing_obj[i] = {}
						missing_obj[i]['interaction']="contact_relationship";
						missing_obj[i]['value']='S/C/B/P/H/O';
						i++;
					}
					chrome.runtime.sendMessage({from: "content",data: missing_obj}, function(response) {
					});
					setTimeout(function(){ 
						$('input[name$="UpdateButton3"]').click();
					}, 3000);
				}
			});
		}
		if(location.href.indexOf("complete/complete_family2.aspx?node=Spouse")!=-1){
			chrome.storage.sync.get("userData", function (obj) {
				var personalData = obj.userData;
				if(personalData.length){
					console.log(personalData);
					var spouse_first= false,spouse_last=false,spouse_dob=false,spouse_birth_city=false,spouse_nationality=false,spouse_birth_country=false,spouse_living_yn=false;
					for(var i in personalData){
						console.log(personalData[i].interaction+"----"+personalData[i].value);
					}
					for(var i in personalData){
						if(personalData[i].interaction=="spouse_first"){
							$('input[name$="SpouseSurname"]').val(personalData[i].value);
							spouse_first = true;
						}
						if(personalData[i].interaction=="spouse_last"){
							$('input[name$="SpouseGivenName"]').val(personalData[i].value);
							spouse_last = true;
						}
						if(personalData[i].interaction=="spouse_dob"){
							var birth_date = personalData[i].value.split("/");
							console.log(birth_date);
							var birth_day = birth_date[0];
							$('select[id$="DOBDay"]').find('option').each(function(){
								if($(this).text()==birth_day){
									$('select[id$="DOBDay"]').val($(this).val());		
									$('select[id$="DOBDay"]').change();
								}
							});
							var birth_month = birth_date[1];
							$('select[id$="DOBMonth"]').find('option').each(function(index, value){
								if(index==parseInt(birth_month)){
									$('select[id$="DOBMonth"]').val($(this).val());
									$('select[id$="DOBMonth"]').change();
								}
							});
							$('input[name$="DOBYear"]').val(birth_date[2]);
							spouse_dob = true;
						}
						if(personalData[i].interaction=="spouse_nationality"){
							var country = personalData[i].value.toUpperCase().trim();
							console.log(country);
							$('select[id$="SpouseNatDropDownList"]').find('option').each(function(){
								if($(this).text()==country){
									$('select[id$="SpouseNatDropDownList"]').val($(this).val());		
									$('select[id$="SpouseNatDropDownList"]').change();
								}
							});
							spouse_nationality = true;
						}
						if(personalData[i].interaction=="spouse_birth_city"){
							$('input[name$="SpousePOBCity"]').val(personalData[i].value);
							spouse_birth_city = true;
						}else{
							$('input[id$="SPOUSE_POB_CITY_NA"]').prop("checked", true); 
						}
						if(personalData[i].interaction=="spouse_birth_country"){
							var country = personalData[i].value.toUpperCase().trim();
							console.log(country);
							$('select[id$="SpousePOBCountry"]').find('option').each(function(){
								if($(this).text()==country){
									$('select[id$="SpousePOBCountry"]').val($(this).val());		
									$('select[id$="SpousePOBCountry"]').change();
								}
							});
							spouse_birth_country = true;
						}
						if(personalData[i].interaction=="spouse_living_yn"){
							if(personalData[i].value=="Yes"){
								$('select[id$="SpouseAddressType"]').val("H");		
								$('select[id$="SpouseAddressType"]').change();
							}else{
								$('select[id$="SpouseAddressType"]').val("D");		
								$('select[id$="SpouseAddressType"]').change();
							}
							spouse_living_yn = true;
						}
					}
					var missing_obj = [];
					var i =0;
					if(!spouse_first){
						$('input[name$="SpouseSurname"]').val("spouse firstname");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="spouse_first";
						missing_obj[i]['value']='spouse firstname';
						i++
					}
					if(!spouse_last){
						$('input[name$="SpouseGivenName"]').val("spouse lastname");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="spouse_last";
						missing_obj[i]['value']='spouse lastname';
						i++
					}
					if(!spouse_dob){
						$('select[id$="DOBDay"]').val("1");		
						$('select[id$="DOBDay"]').change();
						$('select[id$="DOBMonth"]').val("1");
						$('select[id$="DOBMonth"]').change();
						$('input[name$="DOBYear"]').val("1980");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="spouse_dob";
						missing_obj[i]['value']="01/1/1970";
						i++
					}
					if(!spouse_nationality){
						$('select[id$="SpouseNatDropDownList"]').val("ARG");		
						$('select[id$="SpouseNatDropDownList"]').change();
						missing_obj[i] = {}
						missing_obj[i]['interaction']="spouse_nationality";
						missing_obj[i]['value']="Albania/Algeria/American";
						i++
					}
					if(!spouse_birth_city){
						$('input[id$="SPOUSE_POB_CITY_NA"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="spouse_birth_city";
						missing_obj[i]['value']="City name";
						i++
					}
					if(!spouse_birth_country){
						$('select[id$="SpousePOBCountry"]').val("ARG");		
						$('select[id$="SpousePOBCountry"]').change();
						missing_obj[i] = {}
						missing_obj[i]['interaction']="spouse_birth_country";
						missing_obj[i]['value']="Albania/Algeria/American";
						i++
					}
					if(!spouse_living_yn){
						$('select[id$="SpouseAddressType"]').val("D");		
						$('select[id$="SpouseAddressType"]').change();
						missing_obj[i] = {}
						missing_obj[i]['interaction']="spouse_living_yn";
						missing_obj[i]['value']="Yes/No";
						i++
					}
					chrome.runtime.sendMessage({from: "content",data: missing_obj}, function(response) {
					});
					setTimeout(function(){ 
						$('input[name$="UpdateButton3"]').click();
					}, 3000);
				}
			});
		}
		if(location.href.indexOf("complete/complete_family1.aspx?node=Relatives")!=-1){
			chrome.storage.sync.get("userData", function (obj) {
				var personalData = obj.userData;
				if(personalData.length){
					console.log(personalData);
					var father_first_name= false,father_last_name=false,fatherDOB=false,father_location=false,mother_first_name=false,mother_last_name=false,motherDOB=false,mother_location=false,US_IMrelatives_yn=false,immediate_relative_first_name=false,immediate_relative_last_name=false,immediate_relative_type=false,immediate_relative_status=false,US_relatives_yn=false;
					for(var i in personalData){
						console.log(personalData[i].interaction+"----"+personalData[i].value);
					}
					for(var i in personalData){
						if(personalData[i].interaction=="father_first_name"){
							$('input[name$="FATHER_SURNAME"]').val(personalData[i].value);
							father_first_name = true;
						}else{
							$('input[id$="FATHER_SURNAME_UNK_IND"]').prop("checked", true); 
						}
						if(personalData[i].interaction=="father_last_name"){
							$('input[name$="FATHER_GIVEN_NAME"]').val(personalData[i].value);
							father_last_name = true;
						}else{
							$('input[id$="FATHER_GIVEN_NAME_UNK_IND"]').prop("checked", true); 
						}
						if(personalData[i].interaction=="fatherDOB"){
							var father_date = personalData[i].value.split("/");
							console.log(father_date);
							var father_day = father_date[0];
							$('select[id$="FathersDOBDay"]').find('option').each(function(){
								if($(this).text()==father_day){
									$('select[id$="FathersDOBDay"]').val($(this).val());		
									$('select[id$="FathersDOBDay"]').change();
								}
							});
							var father_month = father_date[1];
							$('select[id$="FathersDOBMonth"]').find('option').each(function(index, value){
								if(index==parseInt(father_month)){
									$('select[id$="FathersDOBMonth"]').val($(this).val());
									$('select[id$="FathersDOBMonth"]').change();
								}
							});
							$('input[name$="FathersDOBYear"]').val(father_date[2]);
							fatherDOB = true;
						}else{
							$('input[id$="FATHER_DOB_UNK_IND"]').prop("checked", true); 
						}
						if(personalData[i].interaction=="father_location"){
							if(personalData[i].value=="No"){
								$('input[id$="FATHER_LIVE_IN_US_IND_1"]').prop("checked", true); 
							}else{
								$('input[id$="FATHER_LIVE_IN_US_IND_0"]').prop("checked", true); 
							}
							father_location = true;
						}
						if(personalData[i].interaction=="mother_first_name"){
							$('input[name$="MOTHER_SURNAME"]').val(personalData[i].value);
							mother_first_name = true;
						}else{
							$('input[id$="MOTHER_SURNAME_UNK_IND"]').prop("checked", true); 
						}
						if(personalData[i].interaction=="mother_last_name"){
							$('input[name$="MOTHER_GIVEN_NAME"]').val(personalData[i].value);
							mother_last_name = true;
						}else{
							$('input[id$="MOTHER_GIVEN_NAME_UNK_IND"]').prop("checked", true); 
						}
						if(personalData[i].interaction=="motherDOB"){
							var mother_date = personalData[i].value.split("/");
							console.log(mother_date);
							var mother_day = mother_date[0];
							$('select[id$="MothersDOBDay"]').find('option').each(function(){
								if($(this).text()==mother_day){
									$('select[id$="MothersDOBDay"]').val($(this).val());		
									$('select[id$="MothersDOBDay"]').change();
								}
							});
							var mother_month = mother_date[1];
							$('select[id$="MothersDOBMonth"]').find('option').each(function(index, value){
								if(index==parseInt(mother_month)){
									$('select[id$="MothersDOBMonth"]').val($(this).val());
									$('select[id$="MothersDOBMonth"]').change();
								}
							});
							$('input[name$="MothersDOBYear"]').val(mother_date[2]);
							motherDOB = true;
						}else{
							$('input[id$="MOTHER_DOB_UNK_IND"]').prop("checked", true); 
						}
						if(personalData[i].interaction=="mother_location"){
							if(personalData[i].value=="No"){
								$('input[id$="MOTHER_LIVE_IN_US_IND_1"]').prop("checked", true); 
							}else{
								$('input[id$="MOTHER_LIVE_IN_US_IND_0"]').prop("checked", true); 
							}
							mother_location = true;
						}
						if(personalData[i].interaction=="US_IMrelatives_yn"){
							if(personalData[i].value=="Yes"){
								$('input[id$="US_IMMED_RELATIVE_IND_0"]').prop("checked", true); 
							}else{
								$('input[id$="US_IMMED_RELATIVE_IND_1"]').prop("checked", true); 
							}
							US_IMrelatives_yn = true;
						}
						if(personalData[i].interaction=="immediate_relative_first_name"){
							$('input[name$="US_REL_SURNAME"]').val(personalData[i].value); 
							immediate_relative_first_name = true;
						}
						if(personalData[i].interaction=="immediate_relative_last_name"){
							$('input[name$="US_REL_GIVEN_NAME"]').val(personalData[i].value); 
							immediate_relative_last_name = true;
						}
						if(personalData[i].interaction=="immediate_relative_type"){
							var immediate = personalData[i].value.toUpperCase().trim();
							$('select[id$="US_REL_TYPE"]').find('option').each(function(){
								if($(this).text()==immediate){
									$('select[id$="US_REL_TYPE"]').val($(this).val());		
									$('select[id$="US_REL_TYPE"]').change();
								}
							});
							immediate_relative_type = true;
						}
						if(personalData[i].interaction=="immediate_relative_status"){
							var immediate_status = personalData[i].value.toUpperCase().trim();
							if(immediate_status=="CITIZEN"){
								$('select[id$="US_REL_STATUS"]').val("S");
								$('select[id$="US_REL_STATUS"]').change();
							}else if(immediate_status=="RESIDENT"){
								$('select[id$="US_REL_STATUS"]').val("C");
								$('select[id$="US_REL_STATUS"]').change();
							}else if(immediate_status=="NONIMMIGRANT"){
								$('select[id$="US_REL_STATUS"]').val("P");
								$('select[id$="US_REL_STATUS"]').change();
							}else{
								$('select[id$="US_REL_STATUS"]').val("O");
								$('select[id$="US_REL_STATUS"]').change();
							}
							immediate_relative_status = true;
						}
						if(personalData[i].interaction=="US_relatives_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="US_OTHER_RELATIVE_IND_1"]').prop("checked", true); 
							}else{
								$('input[id$="US_OTHER_RELATIVE_IND_0"]').prop("checked", true); 
							}
							US_relatives_yn = true;
						}
					}
					var missing_obj = [];
					var i =0;
					if(!father_first_name){
						$('input[id$="FATHER_SURNAME_UNK_IND"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="father_first_name";
						missing_obj[i]['value']='father firstname';
						i++
					}
					if(!father_last_name){
						$('input[id$="FATHER_GIVEN_NAME_UNK_IND"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="father_last_name";
						missing_obj[i]['value']='father lastname';
						i++
					}
					if(!fatherDOB){
						$('input[id$="FATHER_DOB_UNK_IND"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="fatherDOB";
						missing_obj[i]['value']='1/1/1960';
						i++
					}
					if(!father_location){
						$('input[id$="FATHER_LIVE_IN_US_IND_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="father_location";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!mother_first_name){
						$('input[id$="MOTHER_SURNAME_UNK_IND"]').prop("checked", true);
						missing_obj[i] = {}
						missing_obj[i]['interaction']="mother_first_name";
						missing_obj[i]['value']='mother firstname';
						i++
					}
					if(!mother_last_name){
						$('input[id$="MOTHER_GIVEN_NAME_UNK_IND"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="mother_last_name";
						missing_obj[i]['value']='mother lastname';
						i++
					}
					if(!motherDOB){
						$('input[id$="MOTHER_DOB_UNK_IND"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="motherDOB";
						missing_obj[i]['value']='1/1/1965';
						i++
					}
					if(!mother_location){
						$('input[id$="MOTHER_LIVE_IN_US_IND_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="mother_location";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!US_IMrelatives_yn){
						$('input[id$="US_IMMED_RELATIVE_IND_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="US_IMrelatives_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!immediate_relative_first_name){
						$('input[name$="US_REL_SURNAME"]').val("relfirstname"); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="immediate_relative_first_name";
						missing_obj[i]['value']='relative firstname';
						i++
					}
					if(!immediate_relative_last_name){
						$('input[name$="US_REL_GIVEN_NAME"]').val("rellastname"); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="immediate_relative_last_name";
						missing_obj[i]['value']='relative lastname';
						i++
					}
					if(personalData[i].interaction=="immediate_relative_type"){
						$('select[id$="US_REL_TYPE"]').val("B");		
						$('select[id$="US_REL_TYPE"]').change();
						missing_obj[i] = {}
						missing_obj[i]['interaction']="immediate_relative_type";
						missing_obj[i]['value']='Spouse/Child/Sibling';
						i++
					}
					if(!immediate_relative_status){
						$('select[id$="US_REL_STATUS"]').val("O");
						$('select[id$="US_REL_STATUS"]').change();
						missing_obj[i] = {}
						missing_obj[i]['interaction']="immediate_relative_status";
						missing_obj[i]['value']='citizen/resident/nonimmigrant/other';
						i++
					}
					if(!US_relatives_yn){
						$('input[name$="US_OTHER_RELATIVE_IND_1"]').prop("checked", true);
						missing_obj[i] = {}
						missing_obj[i]['interaction']="US_OTHER_RELATIVE_IND_1";
						missing_obj[i]['value']='Yes/No';
						i++

					}
					chrome.runtime.sendMessage({from: "content",data: missing_obj}, function(response) {
					});
					setTimeout(function(){ 
						$('input[name$="UpdateButton3"]').click();
					}, 3000);
				}
			});
		}
		if(location.href.indexOf("complete/complete_workeducation1.aspx?node=WorkEducation1")!=-1){
			chrome.storage.sync.get("userData", function (obj) {
				var personalData = obj.userData;
				if(personalData.length){
					console.log(personalData);
					var occupation= false,employer_school_name=false,employer_address=false,current_monthly_income=false,employer_duties=false,occupation_other_explain=false;
					for(var i in personalData){
						console.log(personalData[i].interaction+"----"+personalData[i].value);
					}
					for(var i in personalData){
						if(personalData[i].interaction=="occupation"){
							$('select[id$="PresentOccupation"]').find('option').each(function(){
								if($(this).text().toUpperCase().indexOf(personalData[i].value.toUpperCase())!=-1){
									$('select[id$="PresentOccupation"]').val($(this).val());		
									$('select[id$="PresentOccupation"]').change();
								}
							});
							occupation = true;
						}
						if(personalData[i].interaction=="occupation_other_explain"){
							$('textarea[name$="ExplainOtherPresentOccupation"]').text(personalData[i].value);
							occupation_other_explain = true;
						}
						if(personalData[i].interaction=="employer_school_name"){
							$('input[name$="EmpSchName"]').val(personalData[i].value);
							employer_school_name = true;
						}
						if(personalData[i].interaction=="employer_address"){
							console.log(personalData[i].value.trim());
							var address = JSON.parse(personalData[i].value.trim());
							//console.log(address);
							if(address['street'].trim() && address['street'].trim()!=""){
								$('input[name$="EmpSchAddr1"]').val(address['street'].trim());
							}else{
								$('input[name$="EmpSchAddr1"]').val("street");
							}
							$('input[name$="EmpSchAddr2"]').val(address['line2'].trim());
							$('input[name$="EmpSchCity"]').val(address['city'].trim());
							if(address['city'].trim() && address['city'].trim()!=""){
								$('input[name$="EmpSchCity"]').val(address['city'].trim());
							}else{
								$('input[name$="EmpSchCity"]').val("city");
							}
							if(address['zip'] && address['zip'].trim()!=""){
								$('input[name$="WORK_EDUC_ADDR_POSTAL_CD"]').val(address['zip']);	
							}else{
								$('input[id$="WORK_EDUC_ADDR_POSTAL_CD_NA"]').prop("checked", true); 
							}
							if(address['state']){
								$('input[name$="WORK_EDUC_ADDR_STATE"]').val(address['state']);
							}else{
								$('input[id$="WORK_EDUC_ADDR_STATE_NA"]').prop("checked", true); 
							}
							var country_status = false;
							$('select[id$="EmpSchCountry"]').find('option').each(function(){
								if($(this).text()==address['country'].toUpperCase().trim()){
									$('select[id$="EmpSchCountry"]').val($(this).val());		
									$('select[id$="EmpSchCountry"]').change();
									country_status=true;
								}
							});
							if(!country_status){
								$('select[id$="EmpSchCountry"]').val("ARG");		
								$('select[id$="EmpSchCountry"]').change();
							}
							if(address['phone_number']){
								$('input[name$="WORK_EDUC_TEL"]').val(address['phone_number']);
							}else{
								$('input[name$="WORK_EDUC_TEL"]').val("123456789");
							}
							employer_address = true;
						}
						if(personalData[i].interaction=="current_monthly_income"){
							$('input[name$="CURR_MONTHLY_SALARY"]').val(personalData[i].value);
							current_monthly_income = true;
						}else{
							$('input[id$="CURR_MONTHLY_SALARY_NA"]').prop("checked", true); 
						}
						if(personalData[i].interaction=="employer_duties"){
							$('textarea[name$="DescribeDuties"]').text(personalData[i].value);
							employer_duties = true;
						}else{
							$('textarea[name$="DescribeDuties"]').text("DescribeDuties");
						}
					}
					var missing_obj = [];
					var i =0;
					if(!occupation){
						$('select[id$="PresentOccupation"]').val("LP");		
						$('select[id$="PresentOccupation"]').change();
						missing_obj[i] = {}
						missing_obj[i]['interaction']="occupation";
						missing_obj[i]['value']='LEGAL PROFESSION/MILITARY/BUSINESS/RESEARCH/STUDENT/OTHER';
						i++
					}
					if(!occupation_other_explain){
						$('textarea[name$="ExplainOtherPresentOccupation"]').text("OccupationExplain");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="occupation_other_explain";
						missing_obj[i]['value']='string';
						i++
					}
					if(!employer_school_name){
						$('input[name$="EmpSchName"]').val("SchoolName");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="employer_school_name";
						missing_obj[i]['value']='school name';
						i++
					}
					if(!employer_address){
						$('input[name$="EmpSchAddr1"]').val("Street");
						$('input[name$="EmpSchAddr2"]').val("");
						$('input[name$="EmpSchCity"]').val("City");
						$('input[id$="WORK_EDUC_ADDR_POSTAL_CD_NA"]').prop("checked", true); 
						$('input[id$="WORK_EDUC_ADDR_STATE_NA"]').prop("checked", true); 
						$('select[id$="EmpSchCountry"]').val("ARG");		
						$('select[id$="EmpSchCountry"]').change();
						$('input[name$="WORK_EDUC_TEL"]').val("123456789");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="employer_address";
						missing_obj[i]['value']='{"street":"street","line2":"","zip":"1426","city":"Buenos Aires","country":"Argentina"}';
						i++
					}
					if(!current_monthly_income){
						$('input[id$="CURR_MONTHLY_SALARY_NA"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="current_monthly_income";
						missing_obj[i]['value']='2000';
						i++
					}
					if(!employer_duties){
						$('textarea[name$="DescribeDuties"]').text("DescribeDuties");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="employer_duties";
						missing_obj[i]['value']='duties description';
						i++
					}
					chrome.runtime.sendMessage({from: "content",data: missing_obj}, function(response) {
					});
					setTimeout(function(){ 
						$('input[name$="UpdateButton3"]').click();
					}, 3000);
				}
			});
		}
		if(location.href.indexOf("complete/complete_workeducation2.aspx?node=WorkEducation2")!=-1){
			chrome.storage.sync.get("userData", function (obj) {
				var personalData = obj.userData;
				if(personalData.length){
					console.log(personalData);
					var previously_employed= false,previous_education=false,previous_school_name=false,previous_school_address=false,previous_course_study=false,school_start=false,school_end=false, past_employer_name=false,past_employer_address=false,past_job_title=false,start_date=false,end_date=false,past_duties=false;
					for(var i in personalData){
						console.log(personalData[i].interaction+"----"+personalData[i].value);
					}
					for(var i in personalData){
						if(personalData[i].interaction=="previously_employed"){
							if(personalData[i].value=="No"){
								$('input[id$="PreviouslyEmployed_1"]').prop("checked", true); 
							}else{
								$('input[id$="PreviouslyEmployed_0"]').prop("checked", true); 
							}
							previously_employed = true;
						}
						if(personalData[i].interaction=="past_employer_name"){
							$('input[name$="EmployerName"]').val(personalData[i].value.trim().replaceAll(".",""));
							past_employer_name = true;
						}
						
						if(personalData[i].interaction=="past_employer_address"){
							console.log(personalData[i].value.trim());
							var address = JSON.parse(personalData[i].value.trim());
							//console.log(address);
							if(address['street'].trim() && address['street'].trim()!=""){
								$('input[name$="EmployerStreetAddress1"]').val(address['street'].trim());
							}else{
								$('input[name$="EmployerStreetAddress1"]').val("street");
							}
							$('input[name$="EmployerStreetAddress2"]').val(address['line2'].trim());
							$('input[name$="EmployerCity"]').val(address['city'].trim());
							if(address['city'].trim() && address['city'].trim()!=""){
								$('input[name$="EmployerCity"]').val(address['city'].trim());
							}else{
								$('input[name$="EmployerCity"]').val("city");
							}
							if(address['zip'] && address['zip'].trim()!=""){
								$('input[name$="PREV_EMPL_ADDR_POSTAL_CD"]').val(address['zip']);	
							}else{
								$('input[id$="PREV_EMPL_ADDR_POSTAL_CD_NA"]').prop("checked", true); 
							}
							if(address['state']){
								$('input[name$="PREV_EMPL_ADDR_STATE"]').val(address['state']);
							}else{
								$('input[id$="PREV_EMPL_ADDR_STATE_NA"]').prop("checked", true); 
							}
							var country_status = false;
							$('select[id$="DropDownList2"]').find('option').each(function(){
								if($(this).text()==address['country'].toUpperCase().trim()){
									$('select[id$="DropDownList2"]').val($(this).val());		
									$('select[id$="DropDownList2"]').change();
									country_status=true;
								}
							});
							if(!country_status){
								$('select[id$="DropDownList2"]').val("ARG");		
								$('select[id$="DropDownList2"]').change();
							}
							if(address['phone_number']){
								$('input[name$="EmployerPhone"]').val(address['phone_number']);
							}else{
								$('input[name$="EmployerPhone"]').val("123456789");
							}
							past_employer_address = true;
						}
						if(personalData[i].interaction=="past_job_title"){
							$('input[name$="JobTitle"]').val(personalData[i].value.trim());
							past_job_title = true;
						}
						if(personalData[i].interaction=="supervisors_name"){
							$('input[name$="SupervisorSurname"]').val(address['state']);
							$('input[name$="SupervisorGivenName"]').val(address['state']);
							supervisors_name = true;
						}else{
							$('input[id$="SupervisorSurname_NA"]').prop("checked", true); 
							$('input[name$="SupervisorGivenName_NA"]').prop("checked", true);
						}
						if(personalData[i].interaction=="start_date"){
							var pre_start_date = personalData[i].value.split("/");
							console.log(pre_start_date);
							var start_day = pre_start_date[0];
							$('select[id$="EmpDateFromDay"]').find('option').each(function(){
								if($(this).text()==start_day){
									$('select[id$="EmpDateFromDay"]').val($(this).val());		
									$('select[id$="EmpDateFromDay"]').change();
								}
							});
							var start_month = pre_start_date[1];
							$('select[id$="EmpDateFromMonth"]').find('option').each(function(index, value){
								if(index==parseInt(start_month)){
									$('select[id$="EmpDateFromMonth"]').val($(this).val());
									$('select[id$="EmpDateFromMonth"]').change();
								}
							});
							$('input[name$="EmpDateFromYear"]').val(pre_start_date[2]);
							start_date = true;
						}
						if(personalData[i].interaction=="end_date"){
							var pre_end_date = personalData[i].value.split("/");
							console.log(pre_end_date);
							var end_day = pre_end_date[0];
							$('select[id$="EmpDateToDay"]').find('option').each(function(){
								if($(this).text()==end_day){
									$('select[id$="EmpDateToDay"]').val($(this).val());		
									$('select[id$="EmpDateToDay"]').change();
								}
							});
							var end_month = pre_end_date[1];
							$('select[id$="EmpDateToMonth"]').find('option').each(function(index, value){
								if(index==parseInt(end_month)){
									$('select[id$="EmpDateToMonth"]').val($(this).val());
									$('select[id$="EmpDateToMonth"]').change();
								}
							});
							$('input[name$="EmpDateToYear"]').val(pre_end_date[2]);
							end_date = true;
						}
						if(personalData[i].interaction=="past_duties"){
							$('textarea[name$="DescribeDuties"]').text(personalData[i].value);
							past_duties = true;
						}

						if(personalData[i].interaction=="previous_education"){
							if(personalData[i].value=="Yes"){
								$('input[id$="OtherEduc_0"]').prop("checked", true); 
							}else{
								$('input[id$="OtherEduc_1"]').prop("checked", true); 
							}
							previous_education = true;
						}
						if(personalData[i].interaction=="previous_school_name"){
							$('input[name$="SchoolName"]').val(personalData[i].value.trim().replaceAll(".",""));
							previous_school_name = true;
						}
						if(personalData[i].interaction=="previous_school_address"){
							console.log(personalData[i].value.trim());
							var address = JSON.parse(personalData[i].value.trim());
							//console.log(address);
							$('input[name$="SchoolAddr1"]').val(address['street'].trim());
							$('input[name$="SchoolAddr2"]').val(address['line2'].trim());
							$('input[name$="SchoolCity"]').val(address['city'].trim());
							if(address['zip']){
								$('input[name$="EDUC_INST_POSTAL_CD"]').val(address['zip']);	
							}else{
								$('input[id$="EDUC_INST_POSTAL_CD_NA"]').prop("checked", true); 
							}
							if(address['state']){
								$('input[name$="EDUC_INST_ADDR_STATE"]').val(address['state']);
							}else{
								$('input[id$="EDUC_INST_ADDR_STATE_NA"]').prop("checked", true); 
							}
							$('select[id$="SchoolCountry"]').find('option').each(function(){
								if($(this).text()==address['country'].toUpperCase().trim()){
									$('select[id$="SchoolCountry"]').val($(this).val());		
									$('select[id$="SchoolCountry"]').change();
								}
							});
							previous_school_address = true;
						}
						if(personalData[i].interaction=="previous_course_study"){
							$('input[name$="SchoolCourseOfStudy"]').val(personalData[i].value);
							previous_course_study = true;
						}
						if(personalData[i].interaction=="school_start"){
							var start_date = personalData[i].value.split("/");
							console.log(start_date);
							var start_day = start_date[0];
							$('select[id$="SchoolFromDay"]').find('option').each(function(){
								if($(this).text()==start_day){
									$('select[id$="SchoolFromDay"]').val($(this).val());		
									$('select[id$="SchoolFromDay"]').change();
								}
							});
							var start_month = start_date[1];
							$('select[id$="SchoolFromMonth"]').find('option').each(function(index, value){
								if(index==parseInt(start_month)){
									$('select[id$="SchoolFromMonth"]').val($(this).val());
									$('select[id$="SchoolFromMonth"]').change();
								}
							});
							$('input[name$="SchoolFromYear"]').val(start_date[2]);
							school_start = true;
						}
						if(personalData[i].interaction=="school_end"){
							var end_date = personalData[i].value.split("/");
							console.log(end_date);
							var end_day = end_date[0];
							$('select[id$="SchoolToDay"]').find('option').each(function(){
								if($(this).text()==end_day){
									$('select[id$="SchoolToDay"]').val($(this).val());		
									$('select[id$="SchoolToDay"]').change();
								}
							});
							var end_month = end_date[1];
							$('select[id$="SchoolToMonth"]').find('option').each(function(index, value){
								if(index==parseInt(end_month)){
									$('select[id$="SchoolToMonth"]').val($(this).val());
									$('select[id$="SchoolToMonth"]').change();
								}
							});
							$('input[name$="SchoolToYear"]').val(end_date[2]);
							school_end = true;
						}
					}
					var missing_obj = [];
					var i =0;
					if(!previously_employed){
						$('input[id$="PreviouslyEmployed_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="previously_employed";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!past_employer_name){
						$('input[name$="EmployerName"]').val("employee name");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="past_employer_name";
						missing_obj[i]['value']='employee name';
						i++
					}
					if(!past_employer_address){
						$('input[name$="EmployerStreetAddress1"]').val("Street");
						$('input[name$="EmployerStreetAddress2"]').val("");
						$('input[name$="EmployerCity"]').val("City");
						$('input[id$="PREV_EMPL_ADDR_POSTAL_CD"]').prop("checked", true); 
						$('input[id$="PREV_EMPL_ADDR_STATE_NA"]').prop("checked", true); 
						$('select[id$="DropDownList2"]').val("ARG");		
						$('select[id$="DropDownList2"]').change();
						$('input[name$="EmployerPhone"]').val("123456789");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="employer_address";
						missing_obj[i]['value']='{"street":"street","line2":"","zip":"1426","city":"Buenos Aires","country":"Argentina","phone_number":"123456789"}';
						i++
					}
					if(!past_job_title){
						$('input[name$="JobTitle"]').val("jobTititle");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="past_job_title";
						missing_obj[i]['value']='jobTitle';
						i++
					}
					if(!supervisors_name){
						$('input[id$="SupervisorSurname_NA"]').prop("checked", true); 
						$('input[name$="SupervisorGivenName_NA"]').prop("checked", true);
						missing_obj[i] = {}
						missing_obj[i]['interaction']="supervisors_name";
						missing_obj[i]['value']='supervisors name';
						i++
					}
					if(!start_date){
						$('select[id$="EmpDateFromDay"]').val("1");		
						$('select[id$="EmpDateFromDay"]').change();
						$('select[id$="EmpDateFromMonth"]').val("1");
						$('select[id$="EmpDateFromMonth"]').change();
						$('input[name$="EmpDateFromYear"]').val("2001");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="start_date";
						missing_obj[i]['value']='1/1/2001';
						i++
					}
					if(!end_date){
						$('select[id$="EmpDateToDay"]').val("1");		
						$('select[id$="EmpDateToDay"]').change();
						$('select[id$="EmpDateToMonth"]').val("2");
						$('select[id$="EmpDateToMonth"]').change();
						$('input[name$="EmpDateToYear"]').val("2005");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="end_date";
						missing_obj[i]['value']='1/1/2005';
						i++
					}
					if(!past_duties){
						$('textarea[name$="DescribeDuties"]').text("past duties");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="past_duties";
						missing_obj[i]['value']='past duties';
						i++
					}
					if(!previous_education){
						$('input[id$="OtherEduc_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="previous_education";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!previous_school_name){
						$('input[name$="SchoolName"]').val("SchoolName");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="previous_school_name";
						missing_obj[i]['value']='school name';
						i++				
					}
					if(!previous_school_address){
						$('input[name$="SchoolAddr1"]').val("street");
						$('input[name$="SchoolAddr2"]').val("");
						$('input[name$="SchoolCity"]').val("city");
						$('input[id$="EDUC_INST_POSTAL_CD_NA"]').prop("checked", true); 
						$('input[id$="EDUC_INST_ADDR_STATE_NA"]').prop("checked", true); 
						$('select[id$="SchoolCountry"]').val("ARG");		
						$('select[id$="SchoolCountry"]').change();
						missing_obj[i] = {}
						missing_obj[i]['interaction']="previous_school_address";
						missing_obj[i]['value']='{"street":"Moldes 1469","line2":"","zip":"1426","city":"Buenos Aires","country":"Argentina"}';
						i++
					}
					if(!previous_course_study){
						$('input[name$="SchoolCourseOfStudy"]').val("law");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="previous_course_study";
						missing_obj[i]['value']='law';
						i++
					}
					if(!school_start){
						$('select[id$="SchoolFromDay"]').val("1");		
						$('select[id$="SchoolFromDay"]').change();
						$('select[id$="SchoolFromMonth"]').val("1");
						$('select[id$="SchoolFromMonth"]').change();
						$('input[name$="SchoolFromYear"]').val("2001");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="school_start";
						missing_obj[i]['value']='1/1/2001';
						i++
					}
					if(!school_end){
						$('select[id$="SchoolToDay"]').val("1");		
						$('select[id$="SchoolToDay"]').change();
						$('select[id$="SchoolToMonth"]').val("2");
						$('select[id$="SchoolToMonth"]').change();
						$('input[name$="SchoolToYear"]').val("2005");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="school_end";
						missing_obj[i]['value']='1/1/2005';
						i++
					}
					chrome.runtime.sendMessage({from: "content",data: missing_obj}, function(response) {
					});
					setTimeout(function(){ 
						$('input[name$="UpdateButton3"]').click();
					}, 3000);
				}
			});
		}
		if(location.href.indexOf("complete/complete_workeducation3.aspx?node=WorkEducation3")!=-1){
			chrome.storage.sync.get("userData", function (obj) {
				var personalData = obj.userData;
				if(personalData.length){
					console.log(personalData);
					var clan_yn= false,languages=false,previous_countries_list=false,charitable_yn=false,firearms_yn=false,military_yn=false,guerilla_yn=false;
					for(var i in personalData){
						console.log(personalData[i].interaction+"----"+personalData[i].value);
					}
					for(var i in personalData){
						if(personalData[i].interaction=="clan_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="CLAN_TRIBE_IND_1"]').prop("checked", true); 
							}else{
								$('input[id$="CLAN_TRIBE_IND_0"]').prop("checked", true); 
							}
							clan_yn = true;
						}
						if(personalData[i].interaction=="languages"){
							$('input[name$="LANGUAGE_NAME"]').val(personalData[i].value.trim().latinize());
							languages = true;
						}
						if(personalData[i].interaction=="previous_countries_list"){
							$('input[id$="COUNTRIES_VISITED_IND_0"]').prop("checked", true); 
							$('select[id$="COUNTRIES_VISITED"]').find('option').each(function(){
								if($(this).text()==personalData[i].value.toUpperCase().trim()){
									$('select[id$="COUNTRIES_VISITED"]').val($(this).val());		
									$('select[id$="COUNTRIES_VISITED"]').change();
								}
							});
							previous_countries_list = true;
						}else{
							$('input[id$="COUNTRIES_VISITED_IND_1"]').prop("checked", true); 
						}
						if(personalData[i].interaction=="charitable_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="ORGANIZATION_IND_1"]').prop("checked", true); 
							}else{
								$('input[id$="ORGANIZATION_IND_0"]').prop("checked", true); 
							}
							charitable_yn = true;
						}
						if(personalData[i].interaction=="firearms_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="SPECIALIZED_SKILLS_IND_1"]').prop("checked", true); 
							}else{
								$('input[id$="SPECIALIZED_SKILLS_IND_0"]').prop("checked", true); 
							}
							firearms_yn = true;
						}
						if(personalData[i].interaction=="military_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="MILITARY_SERVICE_IND_1"]').prop("checked", true); 
							}else{
								$('input[id$="MILITARY_SERVICE_IND_0"]').prop("checked", true); 
							}
							military_yn = true;
						}
						if(personalData[i].interaction=="guerilla_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="INSURGENT_ORG_IND_1"]').prop("checked", true); 
							}else{
								$('input[id$="INSURGENT_ORG_IND_0"]').prop("checked", true); 
							}
							guerilla_yn = true;
						}
					}
					var missing_obj = [];
					var i =0;
					if(!clan_yn){
						$('input[id$="CLAN_TRIBE_IND_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="clan_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!languages){
						$('input[name$="LANGUAGE_NAME"]').val("english");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="languages";
						missing_obj[i]['value']='english';
						i++
					}
					if(!previous_countries_list){
						$('input[id$="COUNTRIES_VISITED_IND_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="previous_countries_list";
						missing_obj[i]['value']='Bolivia/Australia/Russia...';
						i++
					}
					if(!charitable_yn){
						$('input[id$="ORGANIZATION_IND_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="charitable_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!firearms_yn){
						$('input[id$="SPECIALIZED_SKILLS_IND_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="firearms_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!military_yn){
						$('input[id$="MILITARY_SERVICE_IND_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="military_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!guerilla_yn){
						$('input[id$="INSURGENT_ORG_IND_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="guerilla_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					chrome.runtime.sendMessage({from: "content",data: missing_obj}, function(response) {
					});
					setTimeout(function(){ 
						$('input[name$="UpdateButton3"]').click();
					}, 3000);
				}
			});
		}
		if(location.href.indexOf("complete/complete_securityandbackground1.aspx?node=SecurityandBackground1")!=-1){
			chrome.storage.sync.get("userData", function (obj) {
				var personalData = obj.userData;
				if(personalData.length){
					console.log(personalData);
					var disease_yn= false,mental_yn=false,drug_yn=false,charitable_yn=false,firearms_yn=false,military_yn=false,guerilla_yn=false;
					for(var i in personalData){
						console.log(personalData[i].interaction+"----"+personalData[i].value);
					}
					for(var i in personalData){
						if(personalData[i].interaction=="disease_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="Disease_1"]').prop("checked", true); 
							}else{
								$('input[id$="Disease_0"]').prop("checked", true); 
							}
							disease_yn = true;
						}
						if(personalData[i].interaction=="mental_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="Disorder_1"]').prop("checked", true); 
							}else{
								$('input[id$="Disorder_0"]').prop("checked", true); 
							}
							mental_yn = true;
						}
						if(personalData[i].interaction=="drug_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="Druguser_1"]').prop("checked", true); 
							}else{
								$('input[id$="Druguser_0"]').prop("checked", true); 
							}
							drug_yn = true;
						}
					}
					var missing_obj = [];
					var i =0;
					if(!disease_yn){
						$('input[id$="Disease_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="disease_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!mental_yn){
						$('input[id$="Disorder_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="mental_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!drug_yn){
						$('input[id$="Druguser_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="drug_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					chrome.runtime.sendMessage({from: "content",data: missing_obj}, function(response) {
					});
					setTimeout(function(){ 
						$('input[name$="UpdateButton3"]').click();
					}, 3000);
				}
			});
		}
		if(location.href.indexOf("complete/complete_securityandbackground2.aspx?node=SecurityandBackground2")!=-1){
			chrome.storage.sync.get("userData", function (obj) {
				var personalData = obj.userData;
				if(personalData.length){
					console.log(personalData);
					var convicted_yn= false,substances_yn=false,prostitution_yn=false,laundering_yn=false,trafficking_yn=false,ustrafficking_yn=false,traffickingrelation_yn=false;
					for(var i in personalData){
						console.log(personalData[i].interaction+"----"+personalData[i].value);
					}
					for(var i in personalData){
						if(personalData[i].interaction=="convicted_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="Arrested_1"]').prop("checked", true); 
							}else{
								$('input[id$="Arrested_0"]').prop("checked", true); 
							}
							convicted_yn = true;
						}
						if(personalData[i].interaction=="substances_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="ControlledSubstances_1"]').prop("checked", true); 
							}else{
								$('input[id$="ControlledSubstances_0"]').prop("checked", true); 
							}
							substances_yn = true;
						}
						if(personalData[i].interaction=="prostitution_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="Prostitution_1"]').prop("checked", true); 
							}else{
								$('input[id$="Prostitution_0"]').prop("checked", true); 
							}
							prostitution_yn = true;
						}
						if(personalData[i].interaction=="laundering_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="MoneyLaundering_1"]').prop("checked", true); 
							}else{
								$('input[id$="MoneyLaundering_0"]').prop("checked", true); 
							}
							laundering_yn = true;
						}
						if(personalData[i].interaction=="trafficking_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="HumanTrafficking_1"]').prop("checked", true); 
							}else{
								$('input[id$="HumanTrafficking_0"]').prop("checked", true); 
							}
							trafficking_yn = true;
						}
						if(personalData[i].interaction=="ustrafficking_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="AssistedSevereTrafficking_1"]').prop("checked", true); 
							}else{
								$('input[id$="AssistedSevereTrafficking_0"]').prop("checked", true); 
							}
							ustrafficking_yn = true;
						}
						if(personalData[i].interaction=="traffickingrelation_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="HumanTraffickingRelated_1"]').prop("checked", true); 
							}else{
								$('input[id$="HumanTraffickingRelated_0"]').prop("checked", true); 
							}
							traffickingrelation_yn = true;
						}
					}
					var missing_obj = [];
					var i =0;
					if(!convicted_yn){
						$('input[id$="Arrested_1"]').prop("checked", true);
						missing_obj[i] = {}
						missing_obj[i]['interaction']="convicted_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!substances_yn){
						$('input[id$="ControlledSubstances_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="substances_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!prostitution_yn){
						$('input[id$="Prostitution_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="prostitution_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!laundering_yn){
						$('input[id$="MoneyLaundering_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="laundering_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!trafficking_yn){
						$('input[id$="HumanTrafficking_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="trafficking_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!ustrafficking_yn){
						$('input[id$="AssistedSevereTrafficking_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="ustrafficking_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!traffickingrelation_yn){
						$('input[id$="HumanTraffickingRelated_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="traffickingrelation_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					chrome.runtime.sendMessage({from: "content",data: missing_obj}, function(response) {
					});
					setTimeout(function(){ 
						$('input[name$="UpdateButton3"]').click();
					}, 3000);
				}
			});
		}
		if(location.href.indexOf("complete/complete_securityandbackground3.aspx?node=SecurityandBackground3")!=-1){
			chrome.storage.sync.get("userData", function (obj) {
				var personalData = obj.userData;
				if(personalData.length){
					console.log(personalData);
					var espionage_yn= false,terrorism_yn=false,terrorsupport_yn=false,terrororg_yn=false,genocide_yn=false,torture_yn=false,killing_yn=false,childsoldiers_yn=false,religion_yn=false,abortion_yn=false,organ_yn=false;
					for(var i in personalData){
						console.log(personalData[i].interaction+"----"+personalData[i].value);
					}
					for(var i in personalData){
						if(personalData[i].interaction=="espionage_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="IllegalActivity_1"]').prop("checked", true); 
							}else{
								$('input[id$="IllegalActivity_0"]').prop("checked", true); 
							}
							espionage_yn = true;
						}
						if(personalData[i].interaction=="terrorism_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="TerroristActivity_1"]').prop("checked", true); 
							}else{
								$('input[id$="TerroristActivity_0"]').prop("checked", true); 
							}
							terrorism_yn = true;
						}
						if(personalData[i].interaction=="terrorsupport_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="TerroristSupport_1"]').prop("checked", true); 
							}else{
								$('input[id$="TerroristSupport_0"]').prop("checked", true); 
							}
							terrorsupport_yn = true;
						}
						if(personalData[i].interaction=="terrororg_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="TerroristOrg_1"]').prop("checked", true); 
							}else{
								$('input[id$="TerroristOrg_0"]').prop("checked", true); 
							}
							terrororg_yn = true;
						}
						if(personalData[i].interaction=="genocide_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="Genocide_1"]').prop("checked", true); 
							}else{
								$('input[id$="Genocide_0"]').prop("checked", true); 
							}
							genocide_yn = true;
						}
						if(personalData[i].interaction=="torture_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="Torture_1"]').prop("checked", true); 
							}else{
								$('input[id$="Torture_0"]').prop("checked", true); 
							}
							torture_yn = true;
						}
						if(personalData[i].interaction=="killing_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="ExViolence_1"]').prop("checked", true); 
							}else{
								$('input[id$="ExViolence_0"]').prop("checked", true); 
							}
							killing_yn = true;
						}
						if(personalData[i].interaction=="childsoldiers_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="ChildSoldier_1"]').prop("checked", true); 
							}else{
								$('input[id$="ChildSoldier_0"]').prop("checked", true); 
							}
							childsoldiers_yn = true;
						}
						if(personalData[i].interaction=="religion_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="ReligiousFreedom_1"]').prop("checked", true); 
							}else{
								$('input[id$="ReligiousFreedom_0"]').prop("checked", true); 
							}
							religion_yn = true;
						}
						if(personalData[i].interaction=="abortion_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="PopulationControls_1"]').prop("checked", true); 
							}else{
								$('input[id$="PopulationControls_0"]').prop("checked", true); 
							}
							abortion_yn = true;
						}
						if(personalData[i].interaction=="organ_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="Transplant_1"]').prop("checked", true); 
							}else{
								$('input[id$="Transplant_0"]').prop("checked", true); 
							}
							organ_yn = true;
						}
					}
					var missing_obj = [];
					var i =0;
					if(!espionage_yn){
						$('input[id$="IllegalActivity_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="espionage_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!terrorism_yn){
						$('input[id$="TerroristActivity_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="terrorism_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!terrorsupport_yn){
						$('input[id$="TerroristSupport_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="terrorsupport_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!terrororg_yn){
						$('input[id$="TerroristOrg_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="terrororg_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!genocide_yn){
						$('input[id$="Genocide_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="genocide_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!torture_yn){
						$('input[id$="Torture_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="torture_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!killing_yn){
						$('input[id$="ExViolence_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="killing_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!childsoldiers_yn){
						$('input[id$="ChildSoldier_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="childsoldiers_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!religion_yn){
						$('input[id$="ReligiousFreedom_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="religion_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!abortion_yn){
						$('input[id$="PopulationControls_1"]').prop("checked", true);
						missing_obj[i] = {}
						missing_obj[i]['interaction']="abortion_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!organ_yn){
						$('input[id$="Transplant_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="organ_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					chrome.runtime.sendMessage({from: "content",data: missing_obj}, function(response) {
					});
					setTimeout(function(){ 
						$('input[name$="UpdateButton3"]').click();
					}, 3000);
				}
			});
		}
		if(location.href.indexOf("complete/complete_securityandbackground4.aspx?node=SecurityandBackground4")!=-1){
			chrome.storage.sync.get("userData", function (obj) {
				var personalData = obj.userData;
				if(personalData.length){
					console.log(personalData);
					var removalhearing_yn= false,immigration_fraud_yn=false,failtoattend_yn=false,visaviolation_yn=false;
					for(var i in personalData){
						console.log(personalData[i].interaction+"----"+personalData[i].value);
					}
					for(var i in personalData){
						if(personalData[i].interaction=="removalhearing_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="RemovalHearing_1"]').prop("checked", true); 
							}else{
								$('input[id$="RemovalHearing_0"]').prop("checked", true); 
							}
							removalhearing_yn = true;
						}
						if(personalData[i].interaction=="immigration_fraud_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="ImmigrationFraud_1"]').prop("checked", true); 
							}else{
								$('input[id$="ImmigrationFraud_0"]').prop("checked", true); 
							}
							immigration_fraud_yn = true;
						}
						if(personalData[i].interaction=="failtoattend_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="FailToAttend_1"]').prop("checked", true); 
							}else{
								$('input[id$="FailToAttend_0"]').prop("checked", true); 
							}
							failtoattend_yn = true;
						}
						if(personalData[i].interaction=="visaviolation_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="VisaViolation_1"]').prop("checked", true); 
							}else{
								$('input[id$="VisaViolation_0"]').prop("checked", true); 
							}
							visaviolation_yn = true;
						}
					}
					var missing_obj = [];
					var i =0;
					if(!removalhearing_yn){
						$('input[id$="RemovalHearing_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="removalhearing_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!immigration_fraud_yn){
						$('input[id$="ImmigrationFraud_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="immigration_fraud_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!failtoattend_yn){
						$('input[id$="FailToAttend_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="failtoattend_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!visaviolation_yn){
						$('input[id$="VisaViolation_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="visaviolation_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					chrome.runtime.sendMessage({from: "content",data: missing_obj}, function(response) {
					});
					setTimeout(function(){ 
						$('input[name$="UpdateButton3"]').click();
					}, 3000);
				}
			});
		}
		if(location.href.indexOf("complete/complete_securityandbackground5.aspx?node=SecurityandBackground5")!=-1){
			chrome.storage.sync.get("userData", function (obj) {
				var personalData = obj.userData;
				if(personalData.length){
					console.log(personalData);
					var custody_yn= false,vote_yn=false,taxevasion_yn=false,reimbursing_yn=false;
					for(var i in personalData){
						console.log(personalData[i].interaction+"----"+personalData[i].value);
					}
					for(var i in personalData){
						if(personalData[i].interaction=="custody_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="ChildCustody_1"]').prop("checked", true); 
							}else{
								$('input[id$="ChildCustody_0"]').prop("checked", true); 
							}
							custody_yn = true;
						}
						if(personalData[i].interaction=="vote_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="VotingViolation_1"]').prop("checked", true); 
							}else{
								$('input[id$="VotingViolation_0"]').prop("checked", true); 
							}
							vote_yn = true;
						}
						if(personalData[i].interaction=="taxevasion_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="RenounceExp_1"]').prop("checked", true); 
							}else{
								$('input[id$="RenounceExp_0"]').prop("checked", true); 
							}
							taxevasion_yn = true;
						}
						if(personalData[i].interaction=="reimbursing_yn"){
							if(personalData[i].value=="No"){
								$('input[id$="AttWoReimb_1"]').prop("checked", true); 
							}else{
								$('input[id$="AttWoReimb_0"]').prop("checked", true); 
							}
							reimbursing_yn = true;
						}
					}
					var missing_obj = [];
					var i =0;
					if(!custody_yn){
						$('input[id$="ChildCustody_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="custody_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!vote_yn){
						$('input[id$="VotingViolation_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="vote_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!taxevasion_yn){
						$('input[id$="RenounceExp_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="taxevasion_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					if(!reimbursing_yn){
						$('input[id$="AttWoReimb_1"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="reimbursing_yn";
						missing_obj[i]['value']='Yes/No';
						i++
					}
					chrome.runtime.sendMessage({from: "content",data: missing_obj}, function(response) {
					});
					setTimeout(function(){ 
						$('input[name$="UpdateButton3"]').click();
					}, 3000);
				}
			});
		}
		if(location.href.indexOf("complete/complete_ExchangeVisitorStudentVisa.aspx?node=ExchangeVisitor3")!=-1){
			chrome.storage.sync.get("userData", function (obj) {
				var personalData = obj.userData;
				if(personalData.length){
					console.log(personalData);
					var servis_id= false,principal_servis_id=false;
					for(var i in personalData){
						console.log(personalData[i].interaction+"----"+personalData[i].value);
					}
					for(var i in personalData){
						if(personalData[i].interaction=="servis_id"){
							$('input[name$="SevisID"]').val(personalData[i].interaction.value); 
							servis_id = true;
						}
						if(personalData[i].interaction=="principal_servis_id"){
							$('input[name$="PrincipalSevisID"]').val(personalData[i].interaction.value); 
							principal_servis_id = true;
						}
					}
					var missing_obj = [];
					var i =0;
					if(!servis_id){
						$('input[name$="SevisID"]').val("N0123456789"); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="servis_id";
						missing_obj[i]['value']='N0123456789';
						i++
					}
					if(!principal_servis_id){
						$('input[name$="PrincipalSevisID"]').val("N0123456789"); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="principal_servis_id";
						missing_obj[i]['value']='N0123456789';
						i++
					}
					chrome.runtime.sendMessage({from: "content",data: missing_obj}, function(response) {
					});
					setTimeout(function(){ 
						chrome.storage.sync.set({'startStatus': 'false'}, function() {
						});
						$('input[name$="UpdateButton3"]').click();
					}, 3000);
				}
			});
		}
		if(location.href.indexOf("complete/complete_family4.aspx?node=PrevSpouse")!=-1){
			chrome.storage.sync.get("userData", function (obj) {
				var personalData = obj.userData;
				if(personalData.length){
					console.log(personalData);
					var spouse_first= false,spouse_last=false,spouse_dob=false,spouse_birth_city=false,spouse_nationality=false,spouse_birth_country=false,ex_start_date=false, ex_end_date=false,mariage_end_why=false,mariage_end_country=false;
					for(var i in personalData){
						console.log(personalData[i].interaction+"----"+personalData[i].value);
					}
					$('input[name$="NumberOfPrevSpouses"]').val("1");
					for(var i in personalData){
						if(personalData[i].interaction=="spouse_first"){
							$('input[name$="SURNAME"]').val(personalData[i].value);
							spouse_first = true;
						}
						if(personalData[i].interaction=="spouse_last"){
							$('input[name$="GIVEN_NAME"]').val(personalData[i].value);
							spouse_last = true;
						}
						if(personalData[i].interaction=="spouse_dob"){
							var birth_date = personalData[i].value.split("/");
							console.log(birth_date);
							var birth_day = birth_date[0];
							$('select[id$="DOBDay"]').find('option').each(function(){
								if($(this).text()==birth_day){
									$('select[id$="DOBDay"]').val($(this).val());		
									$('select[id$="DOBDay"]').change();
								}
							});
							var birth_month = birth_date[1];
							$('select[id$="DOBMonth"]').find('option').each(function(index, value){
								if(index==parseInt(birth_month)){
									$('select[id$="DOBMonth"]').val($(this).val());
									$('select[id$="DOBMonth"]').change();
								}
							});
							var spouse_year = "";
							if(parseInt(birth_date[2])<100) spouse_year="19"+birth_date[2];
							$('input[name$="DOBYear"]').val(spouse_year);
							spouse_dob = true;
						}
						if(personalData[i].interaction=="spouse_nationality"){
							var country = personalData[i].value.toUpperCase().trim();
							console.log(country);
							$('select[id$="SpouseNatDropDownList"]').find('option').each(function(){
								if($(this).text()==country){
									$('select[id$="SpouseNatDropDownList"]').val($(this).val());		
									$('select[id$="SpouseNatDropDownList"]').change();
								}
							});
							spouse_nationality = true;
						}
						if(personalData[i].interaction=="spouse_birth_city"){
							$('input[name$="SpousePOBCity"]').val(personalData[i].value);
							spouse_birth_city = true;
						}
						if(personalData[i].interaction=="spouse_birth_country"){
							var country = personalData[i].value.toUpperCase().trim();
							console.log(country);
							$('select[id$="SpousePOBCountry"]').find('option').each(function(){
								if($(this).text()==country){
									$('select[id$="SpousePOBCountry"]').val($(this).val());		
									$('select[id$="SpousePOBCountry"]').change();
								}
							});
							spouse_birth_country = true;
						}
						if(personalData[i].interaction=="ex_start_date"){
							var start_date = personalData[i].value.split("/");
							console.log(start_date);
							var start_day = start_date[0];
							$('select[id$="DomDay"]').find('option').each(function(){
								if($(this).text()==start_day){
									$('select[id$="DomDay"]').val($(this).val());		
									$('select[id$="DomDay"]').change();
								}
							});
							var start_month = start_date[1];
							$('select[id$="DomMonth"]').find('option').each(function(index, value){
								if(index==parseInt(start_month)){
									$('select[id$="DomMonth"]').val($(this).val());
									$('select[id$="DomMonth"]').change();
								}
							});
							$('input[name$="DomYear"]').val(start_date[2]);
							ex_start_date = true;
						}
						if(personalData[i].interaction=="ex_end_date"){
							var end_date = personalData[i].value.split("/");
							console.log(end_date);
							var end_day = end_date[0];
							$('select[id$="DomEndDay"]').find('option').each(function(){
								if($(this).text()==end_day){
									$('select[id$="DomEndDay"]').val($(this).val());		
									$('select[id$="DomEndDay"]').change();
								}
							});
							var end_month = end_date[1];
							$('select[id$="DomEndMonth"]').find('option').each(function(index, value){
								if(index==parseInt(end_month)){
									$('select[id$="DomEndMonth"]').val($(this).val());
									$('select[id$="DomEndMonth"]').change();
								}
							});
							$('input[name$="DomEndYear"]').val(end_date[2]);
							ex_end_date = true;
						}
						if(personalData[i].interaction=="mariage_end_why"){
							$('textarea[name$="HowMarriageEnded"]').text(personalData[i].value);
							mariage_end_why = true;
						}
						if(personalData[i].interaction=="mariage_end_country"){
							var country = personalData[i].value.toUpperCase().trim();
							console.log(country);
							$('select[id$="MarriageEnded_CNTRY"]').find('option').each(function(){
								if($(this).text()==country){
									$('select[id$="MarriageEnded_CNTRY"]').val($(this).val());		
									$('select[id$="MarriageEnded_CNTRY"]').change();
								}
							});
							mariage_end_country = true;
						}
						
					}
					var missing_obj = [];
					var i =0;
					if(!spouse_first){
						$('input[name$="SURNAME"]').val("spouse firstname");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="spouse_first";
						missing_obj[i]['value']='spouse firstname';
						i++
					}
					if(!spouse_last){
						$('input[name$="GIVEN_NAME"]').val("spouse lastname");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="spouse_last";
						missing_obj[i]['value']='spouse lastname';
						i++
					}
					if(!spouse_dob){
						$('select[id$="DOBDay"]').val("1");		
						$('select[id$="DOBDay"]').change();
						$('select[id$="DOBMonth"]').val("1");
						$('select[id$="DOBMonth"]').change();
						$('input[name$="DOBYear"]').val("1980");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="spouse_dob";
						missing_obj[i]['value']="01/1/1970";
						i++
					}
					if(!spouse_nationality){
						$('select[id$="SpouseNatDropDownList"]').val("ARG");		
						$('select[id$="SpouseNatDropDownList"]').change();
						missing_obj[i] = {}
						missing_obj[i]['interaction']="spouse_nationality";
						missing_obj[i]['value']="Albania/Algeria/American";
						i++
					}
					if(!spouse_birth_city){
						$('input[id$="SPOUSE_POB_CITY_NA"]').prop("checked", true); 
						missing_obj[i] = {}
						missing_obj[i]['interaction']="spouse_birth_city";
						missing_obj[i]['value']="City name";
						i++
					}
					if(!spouse_birth_country){
						$('select[id$="SpousePOBCountry"]').val("ARG");		
						$('select[id$="SpousePOBCountry"]').change();
						missing_obj[i] = {}
						missing_obj[i]['interaction']="spouse_birth_country";
						missing_obj[i]['value']="Albania/Algeria/American";
						i++
					}
					if(!ex_start_date){
						$('select[id$="DomDay"]').val("1");		
						$('select[id$="DomDay"]').change();
						$('select[id$="DomMonth"]').val("1");
						$('select[id$="DomMonth"]').change();
						$('input[name$="DomYear"]').val("2001");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="ex_start_date";
						missing_obj[i]['value']="1/1/2001";
						i++
					}
					if(!ex_end_date){
						$('select[id$="DomEndDay"]').val("1");		
						$('select[id$="DomEndDay"]').change();
						$('select[id$="DomEndMonth"]').val("1");
						$('select[id$="DomEndMonth"]').change();
						$('input[name$="DomEndYear"]').val("2011");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="ex_end_date";
						missing_obj[i]['value']="1/1/2011";
						i++
					}
					if(!mariage_end_why){
						$('textarea[name$="HowMarriageEnded"]').text("why marrige ended?");
						missing_obj[i] = {}
						missing_obj[i]['interaction']="mariage_end_why";
						missing_obj[i]['value']="How Marriage Ended";
						i++
					}
					if(!mariage_end_country){
						$('select[id$="MarriageEnded_CNTRY"]').val("ARG");		
						$('select[id$="MarriageEnded_CNTRY"]').change();
						missing_obj[i] = {}
						missing_obj[i]['interaction']="mariage_end_country";
						missing_obj[i]['value']="Albania/Algeria/American";
						i++
					}
					chrome.runtime.sendMessage({from: "content",data: missing_obj}, function(response) {
					});
					setTimeout(function(){ 
						$('input[name$="UpdateButton3"]').click();
					}, 3000);
				}
			});
		}
}); 