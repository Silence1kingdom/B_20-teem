"use client";

import { motion } from "motion/react";
import { Send, Mail, Github, Youtube, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "حدث خطأ ما");
        setStatus("error");
        return;
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setErrorMsg("خطأ في الاتصال بالخادم");
      setStatus("error");
    }
  };

  return (
    <section className="py-24 md:py-32 bg-black relative border-t border-white/5" id="contact">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf6_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4 uppercase tracking-normal sm:tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 drop-shadow-lg">
              INITIATE_<br className="sm:hidden" />CONTACT
            </h2>
            <p className="text-neutral-400 font-mono text-sm md:text-base">
              قم بتعبئة النموذج لبدء مشروعك القادم
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-16">
            <div className="lg:col-span-3 glass-panel p-6 sm:p-10 relative overflow-hidden group shadow-2xl">
              <div className="absolute top-0 right-0 w-32 h-32 md:w-64 md:h-64 bg-purple-500/20 blur-3xl -z-10 rounded-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 bg-blue-500/20 blur-3xl -z-10 rounded-full" />
              
              <form className="flex flex-col gap-6 md:gap-8 relative z-10" onSubmit={handleSubmit}>
                <div className="relative group/input">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-black/50 border-b border-white/10 px-4 py-4 text-white focus:outline-none focus:border-transparent transition-colors placeholder:text-neutral-600 peer text-sm sm:text-base"
                    placeholder="الاسم كامل / المعرّف"
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                  <div className="absolute bottom-0 left-0 h-px w-full bg-white/10" />
                  <motion.div
                    initial={false}
                    animate={{ width: focusedField === 'name' ? '100%' : '0%' }}
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
                  />
                </div>

                <div className="relative group/input">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-black/50 border-b border-white/10 px-4 py-4 text-white focus:outline-none focus:border-transparent transition-colors placeholder:text-neutral-600 peer text-sm sm:text-base"
                    placeholder="البريد الإلكتروني"
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                  <div className="absolute bottom-0 left-0 h-px w-full bg-white/10" />
                  <motion.div
                    initial={false}
                    animate={{ width: focusedField === 'email' ? '100%' : '0%' }}
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
                  />
                </div>

                <div className="relative group/input">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-black/50 border-b border-white/10 px-4 py-4 text-white focus:outline-none focus:border-transparent transition-colors placeholder:text-neutral-600 peer resize-none min-h-[140px] text-sm sm:text-base"
                    placeholder="تفاصيل المشروع"
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    required
                  ></textarea>
                  <div className="absolute bottom-0 left-0 h-px w-full bg-white/10" />
                  <motion.div
                    initial={false}
                    animate={{ width: focusedField === 'message' ? '100%' : '0%' }}
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500"
                  />
                </div>

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 text-sm"
                  >
                    <AlertCircle className="w-4 h-4" />
                    {errorMsg}
                  </motion.div>
                )}

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-emerald-400 text-sm"
                  >
                    <CheckCircle className="w-4 h-4" />
                    تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group relative w-full overflow-hidden bg-white/5 border border-white/10 hover:border-purple-500/50 py-4 sm:py-5 font-bold text-white transition-all mt-4 rounded-lg sm:rounded-none disabled:opacity-50"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {status === "loading" ? (
                      <>
                        جاري الإرسال...
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-purple-400 border-t-transparent rounded-full"
                        />
                      </>
                    ) : (
                      <>
                        إرسال البيانات <Send className="w-5 h-5 text-purple-400 group-hover:text-white transition-colors group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                  </span>
                </button>
              </form>
            </div>

            <div className="lg:col-span-2 flex flex-col justify-center gap-4 sm:gap-6 mt-8 lg:mt-0">
               <ContactLink icon={Mail} title="Email" value="hello@b20.tech" href="mailto:hello@b20.tech" />
               <ContactLink icon={Github} title="GitHub" value="github.com/b20-elite" href="https://github.com/b20-elite" />
               <ContactLink icon={Youtube} title="YouTube" value="@B20_Tech" href="https://youtube.com/@B20_Tech" />
               
               <div className="bg-black/50 border border-emerald-500/20 rounded-xl p-4 sm:p-6 mt-4 sm:mt-6 font-mono text-[10px] sm:text-xs shadow-[0_0_30px_rgba(16,185,129,0.05)] relative overflow-hidden">
                 <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] pointer-events-none" />
                 <div className="flex items-center gap-2 mb-4 text-emerald-400 border-b border-emerald-500/20 pb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    {status === "success" ? "TRANSMISSION_COMPLETE" : "SECURE_CHANNEL_ESTABLISHED"}
                 </div>
                 <p className="text-emerald-500/80 mb-2">
                   {status === "success" ? "> Payload delivered successfully." : "> Awaiting encrypted payload..."}
                 </p>
                 <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-neutral-500 inline-block"
                  >
                    _
                 </motion.p>
               </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ icon: Icon, title, value, href }: { icon: any, title: string, value: string, href?: string }) {
  return (
    <a href={href || "#"} target={href ? "_blank" : undefined} rel={href ? "noopener noreferrer" : undefined} className="flex items-center gap-4 group p-4 rounded-xl border border-transparent hover:border-white/10 hover:bg-white/5 transition-colors">
      <div className="p-3 rounded-full bg-white/5 group-hover:bg-purple-500/20 transition-colors">
        <Icon className="w-6 h-6 text-neutral-400 group-hover:text-purple-400 transition-colors" />
      </div>
      <div>
        <h4 className="font-bold text-white mb-1 font-mono">{title}</h4>
        <p className="text-neutral-400 text-sm">{value}</p>
      </div>
    </a>
  );
}
