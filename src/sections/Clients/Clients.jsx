import "./Clients.css";

import Container from "../../components/Container/Container";

const clients = [
  { id: 1, name: "Cliente 01" },
  { id: 2, name: "Cliente 02" },
  { id: 3, name: "Cliente 03" },
  { id: 4, name: "Cliente 04" },
  { id: 5, name: "Cliente 05" },
];

function Clients() {
  return (
    <section className="clients" aria-labelledby="clients-title">
      <Container>
        <div className="clients__header">
          <p className="clients__eyebrow">Experiencia y confianza</p>

          <h2 className="clients__title" id="clients-title">
            Han confiado en nosotros
          </h2>
        </div>

        <div className="clients__list">
          {clients.map((client) => (
            <div className="clients__item" key={client.id}>
              <span>{client.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Clients;