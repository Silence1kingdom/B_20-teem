"use client";

import { motion } from "motion/react";
import { 
  Globe, 
  ShoppingCart, 
  Server, 
  PaintBucket, 
  BrainCircuit, 
  ShieldCheck, 
  LayoutDashboard, 
  DatabaseBackup 
} from "lucide-react";

const SERVICES = [
  { icon: Globe, title: "تطوير مواقـع احترافيـة", desc: "تطبيقات ويب متكاملة (SPA/SSR) بأحدث التقنيات وأعلى أداء ممكن." },
  { icon: ShoppingCart, title: "متاجـر إلكترونيـة", desc: "أنظمة تجارة إلكترونية متقدمة تدعم ملايين الزيارات بـ Conversion Rate خيالي." },
  { icon: Server, title: "أنظمـة إدارة (ERP/CRM)", desc: "لوحات تحكم وأنظمة معقدة لإدارة الشركات وأتمتة العمليات اليومية." },
  { icon: PaintBucket, title: "تصميم UI/UX", desc: "واجهات مستقبلية ومدروسة سيكولوجياً لضمان تجربة مستخدم لا تنسى." },
  { icon: BrainCircuit, title: "أنظمة ذكاء اصطناعي", desc: "دمج نماذج لغوية (LLMs) وتحليل بيانات وأتمتة ذكية بالكامل." },
  { icon: ShieldCheck, title: "حماية وأداء", desc: "هيكلة مقاومة للاختراق وتحسين سرعة الخوادم والواجهات لأقصى حد." },
  { icon: LayoutDashboard, title: "Dashboards", desc: "لوحات مراقبة حية و Real-time Analytics للأنظمة الكبيرة." },
  { icon: DatabaseBackup, title: "APIs & Backend", desc: "بناء واجهات برمجية خفيفة وقوية (REST / GraphQL) مع قواعد بيانات مرنة." },
];

export function Services() {
  return (
    <section className="py-24 md:py-32 bg-[#030303] relative border-t border-white/5" id="services">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-black to-black pointer-events-none" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div className="w-full lg:w-auto">
            <div className="flex items-center gap-4 mb-4">
               <div className="w-12 h-px bg-purple-500" />
               <h3 className="font-mono text-neutral-400 text-xs sm:text-sm tracking-widest uppercase text-glow-purple">Our Arsenal</h3>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black max-w-2xl leading-tight">
              ترسانة من <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500">الحلول المستقبلية</span>
            </h2>
          </div>
          <p className="text-neutral-500 text-sm md:text-lg max-w-md text-right w-full lg:w-auto mt-4 lg:mt-0">
            نحن لا نستخدم قوالب جاهزة. كل سطر كود وكل بكسل يتم تصميمه خصيصاً ليناسب احتياجاتك ويتفوق على منافسيك في السوق الرقمي.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(139,92,246,0.05)]">
          {SERVICES.map((service, index) => (
            <ServicePanel key={index} index={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicePanel({ service, index }: { service: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group bg-[#050505] p-8 relative flex flex-col items-start gap-6 hover:bg-[#080808] transition-colors duration-500 h-[300px]"
    >
      {/* Hover Light Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/5 group-hover:to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      {/* Number Badge */}
      <span className="absolute top-6 left-6 font-mono text-white/10 text-xl font-bold select-none group-hover:text-purple-500/30 transition-colors">
        0{index + 1}
      </span>

      <div className="p-4 rounded-full bg-white/5 border border-white/10 group-hover:border-purple-500/50 group-hover:bg-purple-500/10 relative z-10 transition-colors duration-500">
        <service.icon className="w-6 h-6 text-neutral-400 group-hover:text-white transition-colors" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-end w-full">
        <h4 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-purple-300 transition-all">
          {service.title}
        </h4>
        <p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-300 transition-colors line-clamp-3">
          {service.desc}
        </p>
      </div>
      
      {/* Animated Bottom Line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-blue-500 group-hover:w-full transition-all duration-500 ease-out" />
    </motion.div>
  );
}
