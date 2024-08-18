"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "Contact",
        "hei.maria.625@gmail.com",
        e.target as HTMLFormElement,
        "hei.maria.625@gmail.com"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("An error occurred, please try again.");
        }
      );

    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
              Contact Us
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a question or feedback? Fill out the form below and we'll get
              back to you as soon as possible.
            </p>
          </div>
          <div className="w-full max-w-md space-y-2">
            <form className="flex flex-col gap-4" onSubmit={sendEmail}>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                required
                onChange={handleChange}
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={handleChange}
              />
              <Textarea
                name="message"
                placeholder="Message"
                required
                onChange={handleChange}
              />
              <Button type="submit" className="self-end">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
