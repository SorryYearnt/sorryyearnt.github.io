addEventListener('DOMContentLoaded', function () {
	document.querySelectorAll('.background-experience>ul>li').forEach((element, index, array) => {
		let hiddenChild = element.querySelector('.hidden');
		function resize() {
			hiddenChild.height = hiddenChild.offsetHeight + 'px';
			if (element.classList.contains('show')) {
				hiddenChild.style.height = hiddenChild.height;
			}
			else {
				hiddenChild.style.height = '0';
			}
		}
		resize();
		element.querySelector('h4').addEventListener('click', function () {
			if (element.classList.toggle('show')) {
				hiddenChild.style.height = hiddenChild.height;
			}
			else {
				hiddenChild.style.height = '0';
			}
		});
		addEventListener('resize', () => {
			hiddenChild.style.height = null;
			resize();
		});
	});

	function getAccessStatisticsList(branch=''){
		let accessStatisticsList= [`https://visitor-badge.laobi.icu/badge?page_id=SorryYearnt.sorryyearnt.github.io${branch}&right_color=green&left_text=Visitors`,`https://count.getloli.com/get/@SorryYearnt.sorryyearnt.github.io${branch}?theme=moebooru`];
		accessStatisticsList.forEach(async function(value,index,array){
			let accessStatistics=new Image();
			accessStatistics.alt='访问统计';
			await (array[index]=accessStatistics);
			accessStatistics.src=value;
		});
		return accessStatisticsList;
	}
	let accessStatisticsList=getAccessStatisticsList();
	accessStatisticsList.forEach(function(value,index,array){
		value.unavailable=false;
		value.index=index;
		value.addEventListener('error',function(event){
			value.unavailable=true;
			value.whenError?.();
		});
	});
	let accessStatisticsDiv=document.getElementsByClassName('access-statistics')[0];
	accessStatisticsDiv.append(accessStatisticsList[0]);
	function replaceByNextAccessStatistics(){
		for(let i=this.index+1;i<accessStatisticsList.length;i++){
			if(!accessStatisticsList[i].unavailable){
				accessStatisticsDiv.replaceChildren(accessStatisticsList[i]);
				accessStatisticsList[i].whenError=replaceByNextAccessStatistics;
				break;
			}
		}
	}
	accessStatisticsList[0].whenError=replaceByNextAccessStatistics;
	if(Checked){
		getAccessStatisticsList('.Checked');
	}

	let as_pi = document.querySelectorAll('.personal-information a');
	let globalElements = document.querySelector('.global-elements');
	function setInteractionOfas_pi(element) {
		let timer;
		element.addEventListener('mousedown', event => {
			let eventCurrentTarget = event.currentTarget;
			timer = setTimeout(() => {
				navigator.clipboard.writeText(eventCurrentTarget.lastElementChild.textContent).then(value => {
					globalElements.insertAdjacentHTML('beforeend', '<div class="prompt-information copy-successfully">复制成功</div>');
				}, reason => {
					globalElements.insertAdjacentHTML('beforeend', '<div class="prompt-information copy-unsuccessfully">复制失败</div>');
				});
			}, 5000);
		});
		document.addEventListener('mouseup', event => {
			clearTimeout(timer);
		});
	}
	globalElements.addEventListener('animationend', event => {
		event.target.remove();
		event.stopPropagation();
	})
	if (Checked) {
		as_pi[0].classList.add('copyable');
		setInteractionOfas_pi(as_pi[0]);
	}
	setInteractionOfas_pi(as_pi[1]);
});

console.log('本网页由SorryYearnt制作，严禁转载。');
console.log('This web page is produced by SorryYearnt and is strictly forbidden to be reproduced.');
console.log('このページはSorryYearntで作成されており、転載は厳禁です。');	
