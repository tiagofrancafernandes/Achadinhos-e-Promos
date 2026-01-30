import React, { useState, useEffect } from 'react';
import {
    CheckCircle,
    ArrowRight,
    ShoppingBag,
    Tag,
    Zap,
    Users,
    MessageCircle,
    Clock,
    ChevronDown,
    ShieldCheck,
    Star,
} from 'lucide-react';

import image1 from '@/assets/img/pessoa-triste-sem-promo.png';
import image2 from '@/assets/img/promos.png';

const MAIN_GROUP_LINK = process.env.VITE_MAIN_GROUP_LINK || `https://wa.me/seu-link-do-grupo-123`;

const getGroupLink = () => MAIN_GROUP_LINK;

// --- Components ---

const Navbar = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <div className="bg-green-500 p-1.5 rounded-lg">
                    <Tag className="text-white w-5 h-5" />
                </div>
                <span className="font-extrabold text-xl tracking-tight text-slate-800">
                    ACHADINHOS<span className="text-green-600">VIP</span>
                </span>
            </div>
            <a
                href="#join"
                className="hidden md:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full font-bold transition-all shadow-lg shadow-green-200"
            >
                Quero entrar agora
            </a>
        </div>
    </nav>
);

const Hero = () => (
    <section className="pt-28 pb-16 px-4 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-sm font-bold mb-6 animate-bounce">
                <Zap className="w-4 h-4" />
                Ofertas atualizadas em tempo real
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
                Pare de pagar caro! Receba ofertas com até{' '}
                <span className="text-green-600 underline decoration-green-300 underline-offset-8">
                    70% de desconto
                </span>{' '}
                direto no seu celular.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
                Nosso grupo VIP filtra os melhores cupons e promoções das maiores lojas do Brasil para você não perder
                tempo nem dinheiro.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                    href="#join"
                    className="w-full sm:w-auto flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white text-lg font-bold px-10 py-5 rounded-2xl shadow-xl shadow-green-200 transition-all transform hover:scale-105 active:scale-95 group"
                >
                    <MessageCircle className="w-6 h-6 fill-white" />
                    ENTRAR NO GRUPO VIP GRÁTIS
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 grayscale opacity-60 overflow-x-auto whitespace-nowrap pb-4">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                    alt="Amazon"
                    className="h-6"
                />
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg"
                    alt="Shopee"
                    className="h-10"
                />
                <img
                    src="https://upload.wikimedia.org/wikipedia/pt/0/04/Logotipo_MercadoLivre.png"
                    alt="Mercado Livre"
                    className="h-8"
                />
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Magalu_-_novo_logo.png"
                    alt="Magalu"
                    className="h-6"
                />
            </div>
        </div>
    </section>
);

const ComparisonSection = () => (
    <section className="py-20 px-4 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
                    Escolha em qual lado você quer estar
                </h2>
                <p className="text-slate-500">A diferença entre quem gasta muito e quem compra inteligente</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-stretch">
                {/* Sad Person - Sem Desconto */}
                <div className="bg-slate-50 rounded-3xl p-8 border-2 border-slate-200 flex flex-col items-center group hover:border-slate-300 transition-colors">
                    <div className="relative mb-8 w-full aspect-square overflow-hidden rounded-2xl">
                        <img
                            src={image1}
                            alt="Pessoa triste comprando sem desconto"
                            className="w-full h-full object-cover filter brightness-75 transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-slate-800 text-white px-4 py-1.5 rounded-full font-bold text-sm">
                            FORA DO GRUPO
                        </div>
                        <div className="absolute inset-0 bg-slate-900/10 pointer-events-none"></div>
                    </div>
                    <div className="text-center w-full">
                        <h3 className="text-2xl font-bold text-slate-800 mb-4">O Comprador Comum</h3>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-slate-600">
                                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                    <span className="text-red-600 text-xs font-bold">X</span>
                                </div>
                                <span>Paga preço cheio em tudo</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600">
                                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                    <span className="text-red-600 text-xs font-bold">X</span>
                                </div>
                                <span>Não sabe quando tem promoção</span>
                            </li>
                            <li className="flex items-center gap-3 text-slate-600">
                                <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                    <span className="text-red-600 text-xs font-bold">X</span>
                                </div>
                                <span>Perde cupons de desconto</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Happy Person - Com Desconto */}
                <div className="bg-green-50 rounded-3xl p-8 border-2 border-green-500 flex flex-col items-center relative overflow-hidden group shadow-2xl shadow-green-100 transition-all transform hover:-translate-y-2">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500/10 rounded-full blur-3xl"></div>
                    <div className="relative mb-8 w-full aspect-square overflow-hidden rounded-2xl ring-4 ring-green-100">
                        <img
                            src={image2}
                            alt="Pessoa feliz comprando com desconto"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-1.5 rounded-full font-bold text-sm shadow-lg">
                            MEMBRO VIP
                        </div>
                        <div className="absolute bottom-4 right-4 bg-yellow-400 text-slate-900 px-4 py-2 rounded-xl font-black text-xl shadow-lg transform rotate-3 scale-110">
                            -70% OFF
                        </div>
                    </div>
                    <div className="text-center w-full">
                        <h3 className="text-2xl font-bold text-green-900 mb-4">Membro Achadinhos VIP</h3>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3 text-green-800">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span>Paga o menor preço do mercado</span>
                            </li>
                            <li className="flex items-center gap-3 text-green-800">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span>Alertas instantâneos de promoções</span>
                            </li>
                            <li className="flex items-center gap-3 text-green-800">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                <span>Cupons exclusivos e testados</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const Benefits = () => (
    <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                    Por que você <span className="text-green-500">precisa</span> do grupo?
                </h2>
                <p className="text-slate-400 text-lg">Veja tudo o que você ganha ao entrar no nosso VIP gratuito</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                    {
                        icon: Clock,
                        title: 'Rapidez Surreal',
                        desc: 'Ofertas relâmpago duram pouco. No grupo, você é o primeiro a saber.',
                    },
                    {
                        icon: ShieldCheck,
                        title: 'Lojas Verificadas',
                        desc: 'Só postamos links de lojas 100% confiáveis e seguras.',
                    },
                    {
                        icon: Tag,
                        title: 'Cupons Secretos',
                        desc: 'Acesso a cupons que não aparecem nas buscas comuns do Google.',
                    },
                    {
                        icon: Users,
                        title: 'Comunidade',
                        desc: 'Milhares de pessoas já estão economizando todos os meses conosco.',
                    },
                    {
                        icon: ShoppingBag,
                        title: 'Curadoria Humana',
                        desc: 'Nada de bots enviando lixo. Nós selecionamos o que realmente vale a pena.',
                    },
                    {
                        icon: Zap,
                        title: '100% Gratuito',
                        desc: 'Você não paga nada para entrar e nada para permanecer. É grátis mesmo.',
                    },
                ].map((benefit, i) => (
                    <div
                        key={i}
                        className="p-8 rounded-3xl bg-slate-800 border border-slate-700 hover:border-green-500/50 transition-all group"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-green-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            <benefit.icon className="w-6 h-6 text-green-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                        <p className="text-slate-400 leading-relaxed">{benefit.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const Testimonials = () => (
    <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Quem já entrou está amando</h2>
                <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                </div>
                <p className="text-slate-500 font-bold">
                    4.9/5 estrelas baseado em <span>+47</span> membros
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {[
                    {
                        name: 'Mariana Silva',
                        comment:
                            'Consegui comprar minha AirFryer com 50% de desconto por causa do grupo. Vale muito a pena!',
                    },
                    {
                        name: 'Ricardo Mendes',
                        comment: 'O melhor grupo de achadinhos que já entrei. Sem spam, só as brabas mesmo.',
                    },
                ].map((t, i) => (
                    <div
                        key={i}
                        className="p-6 rounded-2xl bg-slate-50 border border-slate-200 italic text-slate-700 relative"
                    >
                        <span className="absolute -top-3 -left-2 text-6xl text-slate-200 font-serif leading-none">
                            “
                        </span>
                        <p className="relative z-10 mb-4">{t.comment}</p>
                        <p className="font-bold text-slate-900 not-italic">— {t.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

const FAQ = () => {
    const [open, setOpen] = useState<number | null>(0);
    const questions = [
        {
            q: 'O grupo é pago?',
            a: 'Não! O acesso ao grupo VIP de Achadinhos é 100% gratuito. Nosso objetivo é ajudar você a economizar.',
        },
        {
            q: 'Como vocês ganham dinheiro?',
            a: 'Nós somos afiliados das lojas. Quando você compra através do nosso link, a loja nos paga uma pequena comissão, e você não paga nada a mais por isso (às vezes paga até menos!).',
        },
        {
            q: 'Vou receber muito spam?',
            a: 'De jeito nenhum. Nós selecionamos apenas as melhores ofertas do dia. Geralmente enviamos entre 5 a 10 achadinhos reais por dia.',
        },
        {
            q: 'As lojas são confiáveis?',
            a: 'Sim! Só postamos links de grandes varejistas como Amazon, Shopee, Mercado Livre, Magalu, entre outras gigantes do mercado.',
        },
    ];

    return (
        <section className="py-20 px-4 bg-slate-50">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-extrabold text-center mb-12">Perguntas Frequentes</h2>
                <div className="space-y-4">
                    {questions.map((item, i) => (
                        <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-800 hover:bg-slate-50 transition-colors"
                            >
                                {item.q}
                                <ChevronDown
                                    className={`w-5 h-5 transition-transform ${open === i ? 'rotate-180' : ''}`}
                                />
                            </button>
                            {open === i && <div className="p-6 pt-0 text-slate-600 animate-fadeIn">{item.a}</div>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CTASection = () => (
    <section id="join" className="py-24 px-4 bg-green-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Vagas Limitadas para o VIP!</h2>
            <p className="text-green-50 text-xl mb-12 max-w-2xl mx-auto font-medium">
                Não perca mais tempo pagando caro. Entre agora e comece a economizar na sua próxima compra. O próximo
                cupom pode ser o que você estava esperando!
            </p>

            <a
                href={getGroupLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-4 bg-white text-green-700 text-xl md:text-2xl font-black px-12 py-6 rounded-3xl shadow-2xl hover:bg-green-50 transition-all transform hover:scale-110 active:scale-95 animate-pulse-slow uppercase"
            >
                <MessageCircle className="w-8 h-8 fill-green-600" />
                Entrar no grupo agora
            </a>

            <div className="mt-10 flex flex-col items-center gap-2">
                <div className="flex -space-x-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <img
                            key={i}
                            src={`https://picsum.photos/seed/${i + 100}/100/100`}
                            className="w-10 h-10 rounded-full border-2 border-white object-cover"
                            alt="User"
                        />
                    ))}
                    <div className="w-10 h-10 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-800">
                        +2k
                    </div>
                </div>
                <p className="text-green-100 font-bold text-sm">
                    Mais de <span>120</span> pessoas economizando hoje
                </p>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="py-12 px-4 bg-slate-900 border-t border-slate-800 text-slate-500 text-center">
        <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-6">
                <Tag className="text-green-500 w-5 h-5" />
                <span className="font-extrabold text-xl tracking-tight text-white uppercase">
                    ACHADINHOS<span className="text-green-500">VIP</span>
                </span>
            </div>
            <p className="mb-8 max-w-md mx-auto">
                Sua dose diária de economia inteligente. As melhores ofertas da internet em um só lugar.
            </p>
            <div className="flex justify-center gap-6 mb-8 text-sm">
                <a href="#" className="hover:text-white">
                    Termos de Uso
                </a>
                <a href="#" className="hover:text-white">
                    Privacidade
                </a>
                <a href="#" className="hover:text-white">
                    Contato
                </a>
            </div>
            <div className="text-xs">
                &copy; {new Date().getFullYear()} Achadinhos VIP - Todos os direitos reservados.
                <br />
                <span className="mt-2 block opacity-50">
                    Links de afiliados podem gerar comissões para o administrador.
                </span>
            </div>
        </div>
    </footer>
);

// --- Main App ---

export default function App() {
    const [showStickyBtn, setShowStickyBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowStickyBtn(window.scrollY > 800);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen selection:bg-green-100 selection:text-green-900">
            <Navbar />

            <main>
                <Hero />
                <ComparisonSection />
                <Benefits />
                <Testimonials />
                <FAQ />
                <CTASection />
            </main>

            <Footer />

            {/* Sticky Mobile Button */}
            <div
                className={`fixed bottom-6 left-6 right-6 z-40 md:hidden transition-all duration-500 transform ${showStickyBtn ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            >
                <a
                    href="#join"
                    className="flex items-center justify-center gap-3 bg-green-600 text-white font-black py-4 rounded-2xl shadow-2xl shadow-green-500/40 ring-4 ring-white"
                >
                    <MessageCircle className="w-5 h-5 fill-white" />
                    QUERO O GRUPO VIP
                </a>
            </div>
        </div>
    );
}
