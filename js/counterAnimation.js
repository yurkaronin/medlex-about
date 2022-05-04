/* Смена значений */


document.addEventListener("DOMContentLoaded", () => {
	gsap.registerPlugin(ScrollTrigger);
	
	if (document.getElementById('count1')) {
		gsap.to("#count1", {
			scrollTrigger: {
				trigger:"#count1",
				onEnter: function () {
					var Cont={val:0} , NewVal = 150 ;
	
					TweenLite.to(Cont,5,{val:NewVal,roundProps:"val",onUpdate:function(){
					document.getElementById("count1").innerHTML=Cont.val
					}});
				}
			}
		});
	}

	if (document.getElementById('count2')) {
		gsap.to("#count2", {
			scrollTrigger: {
				trigger:"#count2",
				onEnter: function () {
					var Cont={val:0} , NewVal = 32 ;
	
					TweenLite.to(Cont,5,{val:NewVal,roundProps:"val",onUpdate:function(){
					document.getElementById("count2").innerHTML=Cont.val
					}});
				}
			}
		});
	}

	if (document.getElementById('count3')) {
		gsap.to("#count3", {
			scrollTrigger: {
				trigger:"#count3",
				onEnter: function () {
					var Cont={val:0} , NewVal = 700 ;
	
					TweenLite.to(Cont,5,{val:NewVal,roundProps:"val",onUpdate:function(){
					document.getElementById("count3").innerHTML=Cont.val
					}});
				}
			}
		});
	}

	// function counter(id, start, end, duration) {
	//  let obj = document.getElementById(id),
	//   current = start,
	//   range = end - start,
	//   increment = end > start ? 1 : -1,
	//   step = Math.abs(Math.floor(duration / range)),
	//   timer = setInterval(() => {
	//    current += increment;
	//    obj.textContent = current;
	//    if (current == end) {
	// 	clearInterval(timer);
	//    }
	//   }, step);
	// }

	
	// counter("count1", 1, 150, 3000);
	// counter("count2", 1, 32, 1500);
	// counter("count3", 1, 700, 4000);
});


