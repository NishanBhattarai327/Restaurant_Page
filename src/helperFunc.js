export function removeAllChild(parent) {
	if(parent) {
		while(parent.firstChild) {
			parent.removeChild(parent.lastChild);
		}
	}
}