import React from 'react';
import logo from '../assets/logo.png'
import { ShieldCheck, Mail, Phone, ExternalLink, MapPin, Twitter, Facebook, Globe } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative bg-[#020617] text-slate-400 border-t border-white/5 overflow-hidden">
            {/* Design Element: Subtle Gradient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
            
            <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
                    
                    {/* Brand Section */}
                    <div className="lg:col-span-5 space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="relative">
                                    {/* <div className="absolute inset-0 bg-white blur-lg opacity-20"></div> */}
                                     <img src={logo} alt="e-NagarSewa Logo" className='w-15'/>
                                </div>
                                <span className="text-2xl font-bold   text-white tracking-tight">
                                    e-<span className='uppercase'>Nagar</span><span className="text-white uppercase">Seva</span>
                                </span>
                            </div>
                            <p className="text-slate-400 leading-relaxed max-w-md text-base">
                                Revolutionizing municipal governance through digital innovation. We bridge the gap between citizens and authorities for a sustainable urban future.
                            </p>
                        </div>

                        {/* Quick Contact Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors group">
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Toll Free</p>
                                        <p className="text-sm text-white font-semibold">1800-123-4567</p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors group">
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Email Us</p>
                                        <p className="text-sm text-white font-semibold">help@enagarsewa.gov</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
                        <div className="space-y-6">
                            <h4 className="text-white font-bold text-sm tracking-widest uppercase">Platform</h4>
                            <ul className="space-y-4">
                                {['Raise Complaint', 'Track Status', 'Authority Login', 'Zonal Maps'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="hover:text-white flex items-center group transition-all duration-300">
                                            <span className="w-0 group-hover:w-2 h-px bg-blue-500 mr-0 group-hover:mr-2 transition-all"></span>
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-white font-bold text-sm tracking-widest uppercase">Support</h4>
                            <ul className="space-y-4">
                                {['User Manual', 'Help Desk', 'Privacy Policy', 'Terms of Service'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="hover:text-white flex items-center group transition-all duration-300">
                                            <span className="w-0 group-hover:w-2 h-px bg-blue-500 mr-0 group-hover:mr-2 transition-all"></span>
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="col-span-2 md:col-span-1 space-y-6">
                            <h4 className="text-white font-bold text-sm tracking-widest uppercase">Status</h4>
                            <div className="space-y-6">
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/5 border border-emerald-500/20 w-fit">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    <span className="text-[10px] font-bold text-emerald-500 uppercase">Live Systems</span>
                                </div>
                                <div className="flex gap-4">
                                    <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-blue-600 transition-colors group">
                                        <Twitter className="w-5 h-5 group-hover:text-white" />
                                    </a>
                                    <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-blue-600 transition-colors group">
                                        <Facebook className="w-5 h-5 group-hover:text-white" />
                                    </a>
                                    <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-blue-600 transition-colors group">
                                        <Globe className="w-5 h-5 group-hover:text-white" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-xs text-slate-500 font-medium">
                        <p>© 2026 e-NagarSewa Portal.</p>
                        <div className="hidden md:block h-4 w-px bg-slate-800"></div>
                        <p>Ministry of Housing and Urban Affairs</p>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-6">
                        <a href="#" className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors">
                            Gov of India <ExternalLink className="w-3 h-3" />
                        </a>
                        <a href="#" className="text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors">
                            Smart Cities Mission
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;