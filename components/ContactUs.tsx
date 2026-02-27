"use client";

import React from "react";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactUsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#001a1a] py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-widest mb-4">
            Contact <span className="text-orange-500">Us</span>
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have questions about our courses or the enrolment process? Our team
            is here to help you navigate your educational journey.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 -mt-10 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white p-8 shadow-xl border-t-4 border-orange-500 h-full">
              <h3 className="text-xl font-bold text-[#001a1a] mb-8 flex items-center gap-2">
                <MessageSquare className="text-[#E67E22]" /> Get in Touch
              </h3>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="bg-[#FAF3EF] h-13 p-3 rounded-none">
                    <MapPin className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Campus Location</p>
                    <p className="text-sm text-slate-600">
                      Level 3, 76 Waymouth Street, Adelaide, SA, Australia, 5000
                      <br />
                      Adelaide, SA, Australia
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#FAF3EF]  p-3 rounded-none">
                    <Phone className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Call Us</p>
                    <a
                      href="tel:+61087080821"
                      className="text-sm text-slate-600">
                      +61 (08) 7082 0821
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-[#FAF3EF] p-3 rounded-none">
                    <Mail className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">Email Address</p>
                    <a
                      href="mailto:admissions@kentford.edu.au"
                      className="text-sm text-slate-600">
                      admissions@kentford.edu.au
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 shadow-xl border-t-4 border-[#E67E22]">
              <h2 className="text-3xl font-black text-[#001a1a] mb-2">
                Send a Message
              </h2>
              <p className="text-slate-500 mb-10">
                Required fields are marked with an asterisk (*)
              </p>

              <form
                action="https://formspree.io/f/dhungelaman2000@gmail.com"
                method="POST"
                className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="rounded-none border-slate-200 focus:border-orange-500 focus:ring-0"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="rounded-none border-slate-200 focus:border-orange-500 focus:ring-0"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Subject
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Inquiry regarding Diploma of Hospitality"
                    className="rounded-none border-slate-200 focus:border-orange-500 focus:ring-0"
                  />
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    placeholder="How can we help you?"
                    required
                    className="min-h-[150px] rounded-none border-slate-200 focus:border-orange-500 focus:ring-0"
                  />
                </div>

                <div className="md:col-span-2">
                  <Button
                    type="submit"
                    className="bg-orange-500 hover:bg-[#006666] text-white rounded-none px-10 h-14 font-black uppercase tracking-widest italic flex gap-2">
                    <Send size={18} /> Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Embedded Map Section */}
        <div className="mt-20">
          <div className="bg-[#FAF3EF] p-4 mb-4 border-l-8 border-orange-500 inline-block">
            <h3 className="font-bold text-[#001a1a] uppercase tracking-widest">
              Find us on the map
            </h3>
          </div>
          <div className="w-full h-[450px] shadow-2xl overflow-hidden border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94610.53652046126!2d138.5629008025764!3d-34.963711288100235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0cf004ef4bf95%3A0x163c74829214063e!2sKentford%20College!5e1!3m2!1sen!2snp!4v1772161283644!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
