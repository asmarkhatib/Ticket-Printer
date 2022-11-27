export default {
  async storeUser(context, payload) {
    const newData = {
      fullName: payload.fullName,
      from: payload.from,
      to: payload.to,
      persons: payload.persons,
      total: payload.total,
    };

    const response = await fetch(
      'https://ticket-demo-data-default-rtdb.firebaseio.com/ticket.json',
      {
        method: 'POST',
        body: JSON.stringify(newData),
      }
    );

    const responseData = await response.json();

    newData.id = responseData.name;

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to send data');
      throw error;
    }
    context.commit('storeUser', newData);
  },

  async getUser(context) {
    const response = await fetch(
      'https://ticket-demo-data-default-rtdb.firebaseio.com/ticket.json'
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Falied to fecth data');
      throw error;
    }

    const users = [];

    for (const id in responseData) {
      const user = {
        id: id,
        fullName: responseData[id].fullName,
        from: responseData[id].from,
        to: responseData[id].to,
        persons: responseData[id].persons,
        total: responseData[id].total,
      };
      users.push(user);
    }
    context.commit('getUser', users);
  },
};
