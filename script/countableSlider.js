divide();

left.onclick = function(){

	v = ((num / showedpics_counter) - 1) * 100;
	
	if(flag > -v){
		flag -= 100;
		gallery.style.left = flag + "%";
	}
	else{
		flag = 0;
		gallery.style.left = flag + "%";
	}
	
}

right.onclick = function(){

	v = ((num / showedpics_counter) - 1) * 100;

	if(flag < 0){
		flag += 100;
		gallery.style.left = flag + "%";
	}
	else{
		flag = -v;
		gallery.style.left = flag + "%";
	}
	
}


function divide(){

flag = 0;
gallery.style.left = flag + "%";

pic = document.querySelectorAll("#gallery > div");
num = pic.length;

showedpics_counter = document.getElementById('user_choice').value;

picwidth = 100/num;
for(j=0; j<num; j++)
	pic[j].style.width = picwidth + "%";
	
gallerywidth = (num / showedpics_counter) * 100;
gallery.style.width = gallerywidth + "%"; 

}