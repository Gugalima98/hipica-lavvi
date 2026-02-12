"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        alert("Obrigado pelo interesse. Um especialista entrará em contato em breve.");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest text-secondary font-medium">Nome Completo</label>
                    <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        className="border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-secondary bg-transparent placeholder:text-muted-foreground/50 h-10 transition-colors"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-xs uppercase tracking-widest text-secondary font-medium">E-mail</label>
                        <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="seu@email.com"
                            className="border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-secondary bg-transparent placeholder:text-muted-foreground/50 h-10 transition-colors"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="phone" className="text-xs uppercase tracking-widest text-secondary font-medium">Telefone</label>
                        <Input
                            id="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="(11) 99999-9999"
                            className="border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-secondary bg-transparent placeholder:text-muted-foreground/50 h-10 transition-colors"
                        />
                    </div>
                </div>

                <div className="space-y-2 pt-2">
                    <label htmlFor="message" className="text-xs uppercase tracking-widest text-secondary font-medium">Mensagem (Opcional)</label>
                    <Textarea
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Gostaria de saber mais sobre..."
                        className="border-0 border-b border-input rounded-none px-0 focus-visible:ring-0 focus-visible:border-secondary bg-transparent placeholder:text-muted-foreground/50 resize-none min-h-[80px] transition-colors"
                    />
                </div>
            </div>

            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-sm uppercase tracking-widest rounded-none mt-4 transition-all duration-300 hover:shadow-lg">
                Solicitar Atendimento
            </Button>

            <p className="text-[10px] text-center text-muted-foreground mt-4">
                Ao enviar, você concorda com nossa Política de Privacidade. Seus dados estão seguros.
            </p>
        </form>
    );
}
