import {createStore} from 'redux'; 

const reducer = (state = 0, action) => {
	switch(action.type){
		case 'INC':
			return state + 1;
		case 'DEC':
			return state - 1;
		case 'RES':
			return 0;
		default:
			return state;
	}
}

const store = createStore(reducer);

const inc = () => ({type:'INC'});
const dec = () => ({type:'DEC'});
const res = () => ({type:'RES'});

document.querySelector('.plus').addEventListener('click', () => {
	store.dispatch(inc())
})	

document.querySelector('.minus').addEventListener('click', () => {
	store.dispatch(dec())
})	

document.querySelector('.reset').addEventListener('click', () => {
	store.dispatch(res())
})	

const update = () => {
	document.querySelector('.num').textContent = store.getState();
}

store.subscribe(update);