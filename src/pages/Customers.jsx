import { useState } from "react";
import PageHeader from "../components/PageHeader";
import AddCustomerForm from "../components/AddCustomerForm";
import customerData from "../data/customer.json";

export default function Customers() {
  const [customers, setCustomers] = useState(customerData);
  const [showForm, setShowForm] = useState(false);

  const handleAddCustomer = (newCustomer) => {
    const customerId = `CUST${(customers.length + 1).toString().padStart(3, "0")}`;
    setCustomers([...customers, { ...newCustomer, customer_id: customerId }]);
  };

  return (
    <div className="p-6">
      <PageHeader
        title="Pelanggan"
        breadcrumb="Dashboard / Daftar Pelanggan"
        onAdd={() => setShowForm(true)}
      />
      {showForm && (
        <AddCustomerForm
          onClose={() => setShowForm(false)}
          onSave={handleAddCustomer}
        />
      )}
      <div className="mt-4">
        <h2 className="text-lg font-semibold mb-2">Daftar Pelanggan:</h2>
        <ul className="space-y-2">
          {customers.map((cust) => (
            <li key={cust.customer_id} className="border rounded p-3 bg-white shadow-sm">
              <strong>{cust.customer_id}</strong> - {cust.customer_name} - {cust.email} - {cust.loyalty} - {cust.loyalty}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
