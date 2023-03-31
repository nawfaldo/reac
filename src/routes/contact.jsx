import { useState } from "react";
import Header from "../components/Header";

export default function Contact() {
  const [contacts, setContacts] = useState([]);
  const [number, setNumer] = useState("");

  const addContact = () => {
    if (number == "") {
      alert("mohon isi nomor");
      return false;
    }
    const newContacts = [...contacts, { id: Math.random(), number: number }];
    setContacts(newContacts);
    setNumer("");
  };

  return (
    <div>
      <Header />
      <div className="m-10 space-y-10">
        <div>
          <input
            type="text"
            name="number"
            placeholder="nomor"
            value={number}
            onChange={(e) => setNumer(e.target.value)}
          />
          <button
            className="p-2 bg-blue-600 rounded text-white"
            onClick={addContact}
          >
            Tambah Kontak
          </button>
        </div>
        <div className="space-y-3">
          {contacts.map((e) => (
            <div>
              <p>{e.number}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
