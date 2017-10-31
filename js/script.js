var openModal = document.querySelector(".js-open-modal");
var closeModal = document.querySelector(".modal-content-close");
var popup = document.querySelector(".modal-content");

var userName = document.querySelector(".name");
var userEmail = document.querySelector(".email");
var userInfo = document.querySelector(".text-info");

var sendInfo = document.querySelector(".js-send");

openModal.addEventListener("click", function(event){
	event.preventDefault();
	popup.classList.add("modal-content-show");
});

closeModal.addEventListener("click", function(event){
	event.preventDefault();
	popup.classList.remove("modal-content-show");
	if (popup.classList.contains("modal-content-shake"))
		popup.classList.remove("modal-content-shake");
});

sendInfo.addEventListener("click", function(event){
	event.preventDefault();
	if (!userName.value || !userEmail.value || !userInfo.value){
		popup.classList.add("modal-content-shake");
	}
});

window.addEventListener("keydown", function(event){
	if(event.keyCode === 27){
		if(popup.classList.contains("modal-content-show")){
			popup.classList.remove("modal-content-show");
			popup.classList.remove("modal-content-shake");
		}
	}
});