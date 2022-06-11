const agendamento = {};

(function () {
	
	let agendamento_id = false;
	
	function new_agendamento(player1, board) {
		const agendamento_data = {
			player1: player1,
			board: board,
			gameover:false,
			createdat: firebase.database.ServerValue.TIMESTAMP,
		};
		
		if (!agendamento_id) {  
			agendamento_id = firebase.database().ref().child('agendamentos').push().key;
		}
		
		let updates = {};
		updates['/agendamentos/' + agendamento_id] = agendamento_data;
		
		let agendamento_ref = firebase.database().ref();
	
		function update_agendamento() {
		.then(function(){
			return{sucess: true, message: 'Agendamento feito com sucesso!'}; 
		})
		.catch(function(){
			return{sucess: false, message: 'Agendamento invalido!'};
		});
		}
	
	}
	
	
	function remove_agendamento() {}
	
	function reset_agendamento() {}
	
	
	
	
	agendamento.new = new_agendamento;
	agendamento.remove = remove_agendamento;
	agendamento.update = update_agendamento;
	agendamento.reset = reset_agendamento;
})()