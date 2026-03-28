const API_URL = 'http://localhost:8080/api';

export async function getOrders(token) {
  const response = await fetch(`${API_URL}/orders`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error('Falha ao carregar pedidos');
  }

  return response.json();
}

export async function createOrder(token, payload) {
  const response = await fetch(`${API_URL}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error('Falha ao criar pedido');
  }

  return response.json();
}
