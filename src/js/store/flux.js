const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
      contact: {},
    },
    actions: {
			//RECUPERAR LOS CONTACTOS
      getContacts: () => {
        fetch(
          "https://playground.4geeks.com/contact/agendas/pablomoraleh/contacts",
          {
            method: "GET",
          }
        )
          .then((respuesta) => {
            if (respuesta.status == 404) {
            getActions().createUser()
            };
            return respuesta.json();
          })
          .then((data) => {
            console.log(data);
            setStore({ contacts: data.contacts });
          })

          .catch((error) => console.log(error));
      },
	  	// AÑADIR CONTACTOS
      addContact: (name, phone, email, address) => {
        console.log(name, phone, email, address);
        fetch(
          "https://playground.4geeks.com/contact/agendas/pablomoraleh/contacts",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: name,
              phone: phone,
              email: email,
              address: address,
            }),
          }
        )
          .then((respuesta) => {
            return respuesta.json();
          })
          .then((data) => getActions().getContact())
          .catch((error) => console.log(error));
      },
	  	// BORRAR CONTACTOS
	  deleteContact: (contactId)=>{
		fetch(
			`https://playground.4geeks.com/contact/agendas/pablomoraleh/contacts/${contactId}`,
			{
			  method: "DELETE",
			  headers: {
				"Content-Type": "application/json",
			  },
			}
		  )
		  .then((respuesta) => {
			console.log(respuesta);
            if (respuesta.status == 204) {
            getActions().getContacts()
            };
            respuesta.json()
          })
          .then((data) => {
            console.log(data);
          })
          .catch((error) => console.log(error));
		console.log(contactId);
	  },
	  	// CREAR USUARIO
      createUser: () => {
        fetch("https://playground.4geeks.com/contact/agendas/pablomoraleh", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            slug: "pablomoraleh",
            id: 0,
          }),
        })
          .then((respuesta) => {
            if (respuesta.status == 201) {
            getActions().getContacts()
            };
            return respuesta.json();
          })
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
      },

      seeContact: (Contact) => {
        setStore({ contact: Contact });
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
      },
    },
  };
};

export default getState;
