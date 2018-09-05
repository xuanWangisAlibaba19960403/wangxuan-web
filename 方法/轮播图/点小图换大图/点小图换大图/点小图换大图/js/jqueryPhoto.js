// JavaScript Document
$(document).ready(function (global) {
	function G(s) {
		return document.getElementById(s);
	}

	function getStyle(obj, attr) {
		if (obj.currentStyle) {
			return obj.currentStyle[attr];
		} else {
			return getComputedStyle(obj, false)[attr];
		}
	}

	function Animate(obj, json) {
		if (obj.timer) {
			clearInterval(obj.timer);
		}
		obj.timer = setInterval(function () {
			for (const attr in json) {
				let iCur = parseInt(getStyle(obj, attr));
				iCur = iCur ? iCur : 0;
				let iSpeed = (json[attr] - iCur) / 5;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				obj.style[attr] = iCur + iSpeed + 'px';
				if (iCur == json[attr]) {
					clearInterval(obj.timer);
				}
			}
		}, 30);
	}

	global.swiperStart = function swiperStart(containerId, listId, prev, next, prevTop, nextTop) {
		const oPic = G(containerId);
		const oList = G(listId);

		const oPrev = G(prev);
		const oNext = G(next);
		const oPrevTop = G(prevTop);
		const oNextTop = G(nextTop);

		const oPicLi = oPic.getElementsByTagName("li");
		const oListLi = oList.getElementsByTagName("li");
		const len1 = oPicLi.length;
		const len2 = oListLi.length;

		const oPicUl = oPic.getElementsByTagName("ul")[0];
		const oListUl = oList.getElementsByTagName("ul")[0];
		const w1 = oPicLi[0].offsetWidth;
		const w2 = oListLi[0].offsetWidth;

		oPicUl.style.width = w1 * len1 + "px";
		oListUl.style.width = w2 * len2 + "px";

		let index = 0;

		const num = 5;
		const num2 = Math.ceil(num / 2);

		function Change() {

			Animate(oPicUl, {
				left: -index * w1
			});

			if (index < num2) {
				Animate(oListUl, {
					left: 0
				});
			} else if (index + num2 <= len2) {
				Animate(oListUl, {
					left: -(index - num2 + 1) * w2
				});
			} else {
				Animate(oListUl, {
					left: -(len2 - num) * w2
				});
			}

			for (let i = 0; i < len2; i++) {
				oListLi[i].className = "";
				if (i == index) {
					oListLi[i].className = "on";
				}
			}
		}

		oNextTop.onclick = oNext.onclick = function () {

			index++;
			index = index == len2 ? 0 : index;
			Change();
		}

		oPrev.onmouseover = oNext.onmouseover = oPrevTop.onmouseover = oNextTop.onmouseover = function () {
			clearInterval(timer);
		}
		oPrev.onmouseout = oNext.onmouseout = oPrevTop.onmouseout = oNextTop.onmouseout = function () {
			timer = setInterval(autoPlay, 4000);
		}

		oPrevTop.onclick = oPrev.onclick = function () {

			index--;
			index = index == -1 ? len2 - 1 : index;
			Change();
		}

		let timer = null;
		timer = setInterval(autoPlay, 4000);

		function autoPlay() {
			index++;
			index = index == len2 ? 0 : index;
			Change();
		}



		for (i = 0; i < len2; i++) {
			oListLi[i].index = i;
			oListLi[i].onclick = function () {
				index = this.index;
				Change();
			}
		}
	}
}(window));