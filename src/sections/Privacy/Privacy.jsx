import { Link } from "react-router-dom";

import "./Privacy.css";

function Privacy() {
  return (
    <section className="privacy">
      <div className="container privacy__container">
        <header className="privacy__header">
          <p className="privacy__eyebrow">Privacidad y datos personales</p>

          <h1>Política de Privacidad</h1>

          <p className="privacy__updated">
            Última actualización: 18 de agosto de 2026
          </p>

          <p className="privacy__intro">
            En GM Eventos nos comprometemos a tratar los datos personales de
            forma responsable, segura y únicamente para los fines informados en
            esta política.
          </p>
        </header>

        <div className="privacy__content">
          <section>
            <h2>1. Responsable del tratamiento</h2>

            <p>
              El responsable del tratamiento de los datos personales recopilados
              a través de este sitio web es <strong>GM Eventos SpA</strong>.
            </p>

            <p>
              Para consultas relacionadas con privacidad o datos personales
              puedes escribir a{" "}
              <a href="mailto:contacto@gmeventos.cl">contacto@gmeventos.cl</a>.
            </p>
          </section>

          <section>
            <h2>2. Datos que recopilamos</h2>

            <p>
              Cuando utilizas el formulario de cotización podemos solicitar los
              siguientes datos:
            </p>

            <ul>
              <li>Nombre.</li>
              <li>Correo electrónico.</li>
              <li>Teléfono.</li>
              <li>Tipo de evento.</li>
              <li>Fecha aproximada del evento.</li>
              <li>Comuna o ubicación.</li>
              <li>Servicios solicitados.</li>
              <li>Información que incluyas en el mensaje de cotización.</li>
            </ul>

            <p>
              También pueden procesarse datos técnicos necesarios para proteger
              el formulario frente a abuso, spam o solicitudes automatizadas.
            </p>
          </section>

          <section>
            <h2>3. Finalidad del tratamiento</h2>

            <p>Utilizamos estos datos exclusivamente para:</p>

            <ul>
              <li>Recibir y analizar tu solicitud de cotización.</li>
              <li>Contactarte para responder tu consulta.</li>
              <li>Preparar una propuesta relacionada con tu evento.</li>
              <li>
                Coordinar una eventual prestación de servicios si decides
                contratar a GM Eventos.
              </li>
              <li>Prevenir fraude, spam y uso abusivo del formulario.</li>
            </ul>

            <p>
              No utilizaremos los datos enviados mediante este formulario para
              campañas de marketing o finalidades distintas sin una autorización
              correspondiente.
            </p>
          </section>

          <section>
            <h2>4. Autorización</h2>

            <p>
              Antes de enviar una solicitud se solicitará que confirmes haber
              leído esta Política de Privacidad y autorices el tratamiento de
              los datos proporcionados para gestionar tu cotización.
            </p>
          </section>

          <section>
            <h2>5. Proveedores tecnológicos</h2>

            <p>
              Para operar el sitio web y gestionar las solicitudes podemos
              utilizar proveedores tecnológicos que procesan información
              necesaria para prestar sus servicios.
            </p>

            <ul>
              <li>
                <strong>Cloudflare:</strong> alojamiento, seguridad, protección
                contra abuso y verificación mediante Turnstile.
              </li>

              <li>
                <strong>Resend:</strong> transmisión del correo generado por el
                formulario de cotización.
              </li>

              <li>
                <strong>Zoho Mail:</strong> recepción y gestión del correo
                corporativo de GM Eventos.
              </li>
            </ul>

            <p>
              Estos servicios pueden utilizar infraestructura tecnológica propia
              o de sus proveedores para procesar la información necesaria para
              cumplir estas funciones.
            </p>
          </section>

          <section>
            <h2>6. Almacenamiento y conservación</h2>

            <p>
              El sitio web no mantiene una base de datos propia permanente con
              las solicitudes enviadas mediante el formulario.
            </p>

            <p>
              La información enviada puede quedar almacenada en los sistemas de
              correo utilizados por GM Eventos y será conservada únicamente
              durante el tiempo necesario para gestionar la solicitud, mantener
              una eventual relación contractual y cumplir obligaciones legales
              que correspondan.
            </p>
          </section>

          <section>
            <h2>7. Seguridad</h2>

            <p>
              Aplicamos medidas técnicas y organizativas destinadas a proteger
              la información frente a accesos no autorizados, alteración,
              pérdida o uso indebido.
            </p>

            <p>
              El sitio utiliza, entre otras medidas, conexión HTTPS,
              validaciones del lado cliente y servidor, protección contra
              solicitudes automatizadas y controles de seguridad proporcionados
              por Cloudflare.
            </p>
          </section>

          <section>
            <h2>8. Tus derechos</h2>

            <p>
              Puedes solicitar información sobre los datos personales asociados
              a tu solicitud y ejercer los derechos de acceso, rectificación,
              eliminación, bloqueo, oposición u otros que correspondan conforme
              a la normativa aplicable.
            </p>

            <p>
              Para realizar una solicitud escribe a{" "}
              <a href="mailto:contacto@gmeventos.cl">contacto@gmeventos.cl</a>.
            </p>
          </section>

          <section>
            <h2>9. Cambios a esta política</h2>

            <p>
              Esta política podrá actualizarse cuando cambien nuestros procesos,
              servicios tecnológicos o las obligaciones legales aplicables. La
              versión vigente estará disponible siempre en esta página.
            </p>
          </section>

          <div className="privacy__back">
            <Link to="/contacto">Volver a contacto</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Privacy;
