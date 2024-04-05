const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			contact: {}
		},
		actions: {

			getContacts:() => {
				fetch('https://playground.4geeks.com/contact/agendas/pablomoraleh/contacts', {
			method: "GET"
		})
			.then((respuesta) => respuesta.json())
			.then((data) => {
				// console.log(data);
				setStore({contacts:data.contacts})})

			.catch(error => console.log(error))

			},
			addContact:( name, phone, email, address) => {
				console.log(name, phone, email, address);
				fetch('https://playground.4geeks.com/contact/agendas/pablomoraleh/contacts',{
			method: "POST",
			headers: {	
				"Content-Type":"application/json"
		},
		body: JSON.stringify({
			"name": name, 
			"phone": phone,
			"email": email,
			"address": address
		  })
		})
		.then((respuesta) => {
			// if (respuesta.status == 200) {
			// verTareas()	
			// };
			return respuesta.json()})
		// .then((data) => setTodos(data))
		.then((data) => console.log(data))
		.catch(error => console.log(error))

			},
			seeContact:(Contact) => {
				setStore({contact:Contact})

			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
