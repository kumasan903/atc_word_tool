function click_ifr_button()
{
	const ifr_button_list = document.getElementById('select_IFR')
	const vfr_button_list = document.getElementById('select_VFR')
	vfr_button_list.classList = "hidden"
	ifr_button_list.className = "IFR_button_list"
}

function click_vfr_button()
{
	const ifr_button_list = document.getElementById('select_IFR')
	const vfr_button_list = document.getElementById('select_VFR')
	ifr_button_list.classList = "hidden"
	vfr_button_list.className = "VFR_button_list"
}

function show_text(type)
{
	rwy = document.getElementById('use_rwy').value;
	wind = document.getElementById('wind_direction').value;
	speed = document.getElementById('wind_speed').value;
	qnh = document.getElementById('qnh_input').value;
	main_text = document.getElementById('main_text');
	main_text.className = "main_text"
	switch(type){
		case 'clearance':
			main_text.innerHTML = "Cleared to [到着地] airport.<br>\
			via [SID] departure ([TRS] transition), Flight planned route.<br>\
			maintain [暫定維持高度], Expect [巡航高度], Squawk [スコークコード].";
			break
		case "IFR_pushback":
			main_text.innerHTML = "(wind " + wind + " at " + speed + ". QNH " + qnh + ")<br>\
			pushback approved. runway" + rwy
			break
		case "IFR_taxi":
			main_text.innerHTML = "Taxi to holding point ([インターセクション]) runway " + rwy + "<br><br>\
			[インターセクション] intersection approved. taxi to holding point [インターセクション], runway" + rwy;
			break
		case "IFR_takeoff":
			main_text.innerHTML = "wind " + wind + " at " + speed + " Runway " + rwy + " (at [インターセクション]),<br>\
			cleared for takeoff.";
			break
		case "IFR_landing":
			main_text.innerHTML = "runway" + rwy + " continue approach.<br>\
			runway" + rwy + " cleared to land. wind " + wind + " at " + speed;
			break
		case "VFR_taxi":
			main_text.innerHTML = "(wind " + wind + " at " + speed + ". QNH " + qnh + ")<br>\
			Taxi to holding point ([インターセクション]) runway " + rwy + "<br><br>\
			[インターセクション] intersection approved. taxi to holding point [インターセクション], runway" + rwy;
			break
		case "VFR_takeoff":
			main_text.innerHTML = "(after airbone [離陸後の指示(ex. Right Turn Approved./Join Downwind.)])<br>\
			wind " + wind + " at " + speed + " Runway" + rwy + " (at [インターセクション]),<br>\
			cleared for takeoff.";
			break
		case "VFR_traffic_pattern":
			main_text.innerHTML = "## 基本<br>\
			- report [場所(downwind/base/turning final)].<br>\
			- traffic [場所] report traffic insight.<br>\
			　　トラフィックが見えたら...<br>\
			- follow the traffic runway" + rwy + " continue approach.<br>\
			<br>\
			## 待機<br>\
			- Extend Downwind(ダウンウィンドを延長(ベースへのターンを遅らせる))<br>\
			- make right(left) 360(three-sixty) on (right)downwind. (until father advised.)<br>\
			　　　(次になにか指示するまで)ダウンウィンド上で360度旋回を行ってください。<br>\
			- make right(left) 270(two-seventy) before base.<br>　　　ベース手前で右(左)に270度旋回(🎗)してください。";
			break
		case "VFR_landing":
			main_text.innerHTML = "runway" + rwy + " continue approach.<br>\
			runway" + rwy + " cleared to land(clear touch and go). wind " + wind + " at " + speed;
			break
		case "VFR_cross_ctz":
			main_text.innerHTML = "cleared to cross control zone,<br>\
			from [場所(EAST)] to [場所(WEST)]. report entering control zone.";
			break
	}
}