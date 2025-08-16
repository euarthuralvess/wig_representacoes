const MapSection = () => {
  return (
    <section className="py-20 bg-brand-green-light/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossa <span className="text-brand-orange">Localização</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Venha nos visitar em Natal/RN
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.4896374816786!2d-35.2058!3d-5.7945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b2ffff42d99b6b%3A0x8c8b6b8e6b8b8b8b!2sR.%20dos%20Canind%C3%A9s%2C%201235%20-%20Alecrim%2C%20Natal%20-%20RN%2C%2059030-600!5e0!3m2!1spt-BR!2sbr!4v1234567890123!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="WIG Representações - Localização"
          ></iframe>
        </div>

        <div className="mt-8 text-center">
          <div className="bg-white rounded-xl p-6 shadow-lg inline-block">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              WIG Representações Comerciais LTDA
            </h3>
            <p className="text-muted-foreground">
              R. dos Canindés, 1235 – Alecrim<br />
              Natal/RN – CEP 59030-600
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;