import { useState } from "react";
import PageHeader from "../components/PageHeader";
import AddOrderForm from "../components/AddOrderForm.jsx";
import orderData from "../data/orders.json"; 

export default function Orders() {
  const [orders, setOrders] = useState(orderData);
  const [showForm, setShowForm] = useState(false);

  const handleAddOrder = (newOrder) => {
    const orderId = `ORD${(orders.length + 1).toString().padStart(3, '0')}`;
    setOrders([...orders, { ...newOrder, order_id: orderId }]);
  };

  return (
    <div className="p-6">
      <PageHeader
        title="Pesanan"
        breadcrumb="Dashboard / Daftar Pesanan"
        onAdd={() => setShowForm(true)}
      />
      {showForm && (
        <AddOrderForm
          onClose={() => setShowForm(false)}
          onSave={handleAddOrder}
        />
      )}
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Daftar Pesanan:</h2>
        <ul className="space-y-2">
          {orders.map((order) => (
            <li key={order.order_id} className="border rounded p-3 bg-white shadow-sm">
              <strong>{order.order_id}</strong> - {order.customer_name} - {order.order_date} - {order.amount} -<span className="italic">{order.status}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
