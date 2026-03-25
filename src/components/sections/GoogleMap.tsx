"use client";

export function GoogleMap() {
    return (
        <div className="w-full h-full bg-muted">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.2033!2d-46.703!3d-23.627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50e8544f808f%3A0x6bba3c2b0c3f0c3a!2sR.%20Ant%C3%B4nio%20Bandeira%2C%20129%20-%20Vila%20Cruzeiro%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004731-000!5e0!3m2!1spt-BR!2sbr!4v1711380000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                title="Google Maps - Localização do Empreendimento"
            />
        </div>
    );
}
