"use client";

export function GoogleMap() {
    return (
        <div className="w-full h-full bg-muted">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.257069871147!2d-46.70632592398555!3d-23.63385207875225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50e3770f757f%3A0x70d8d0842245220!2sR.%20Visc.%20de%20Taunay%2C%20140%20-%20Vila%20Cruzeiro%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004726-010!5e0!3m2!1spt-BR!2sbr!4v1707765123456!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
            />
        </div>
    );
}
