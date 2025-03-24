'use client'

import { useState } from "react";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import grainImage from "@/assets/images/grain.jpg";

export const ContactForm = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <button onClick={() =>{console.log("Button clicked!"); setOpen(true)} }>Contact Me</button>
      <Dialog open={open} onOpenChange={() => setOpen(false)}>
        <DialogContent
          className="bg-gray-800 after:z-10 after:content-[&apos;&apos;] after:absolute after:inset-0 after:outline after:-outline-offset-2 after:outline-white/20
             after:pointer-events-none"
        >
          <div
            className="absolute inset-0 -z-10 opacity-5"
            style={{
              backgroundImage: `url(${grainImage.src})`
            }}
          ></div>
          <DialogHeader>
            <DialogTitle
              className="font-semibold bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-4 px-6 rounded-3xl text-center
                relative overflow-hidden z-0 inset-0"
            >
              Contact Me
            </DialogTitle>
            <DialogDescription>
              <form 
              action="123"
              method="POST" onSubmit={() => setLoading(true)}>
                <div className="py-2">
                  <label className="text-white">Full Name</label>
                  <Input name="fullName" placeholder="John Snow" required />
                </div>
                <div className="py-2">
                  <label className="text-white" htmlFor="addEmail">
                    Email
                  </label>
                  <Input
                    name="email"
                    id="addEmail"
                    type="email"
                    placeholder="example@domain.com"
                    required
                  />
                </div>

                <div className="py-2">
                  <label className="text-white">Message</label>
                  <textarea
                    name="message"
                    className="w-full p-2 border rounded-md"
                    placeholder="Hello, we contacted you for a help"
                    rows={4}
                    required
                  />
                </div>
                <div className="flex gap-3 items-center justify-end mt-5">
                  <Button type="button" onClick={() => setOpen(false)} variant="ghost">
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading}>
                    {loading ? "Submitting..." : "Submit"}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};


