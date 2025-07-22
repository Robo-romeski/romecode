import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import backgroundImg from '../assets/04-Section.png'
const Getfreeconsultation = () => {
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: send email logic
    setOpen(false)
  }

  return (
    <section id="contact" className="mt-14 px-4 lg:px-0 mx-auto md:mt-10 lg:mt-28 relative max-w-full w-full h-[70vh]">
      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md shadow-lg relative">
            <button onClick={() => setOpen(false)} className="absolute top-2 right-2 text-gray-500 hover:text-black">&times;</button>
            <h2 className="text-xl font-bold mb-4">Get Free Consultation</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input name="name" type="text" placeholder="Name" value={form.name} onChange={handleChange} className="border rounded px-3 py-2" required />
              <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} className="border rounded px-3 py-2" required />
              <textarea name="message" placeholder="Message" value={form.message} onChange={handleChange} className="border rounded px-3 py-2" required />
              <button type="submit" className="bg-[#FFD639] text-[#080A11] font-bold py-2 rounded hover:bg-[#FFD639]/90 transition-colors">Send</button>
            </form>
          </div>
        </div>
      )}
      <div
        className="absolute inset-0 bg-cover bg-left md:bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
      ></div>
      <div className="flex max-w-[1300px] mx-auto w-full md:w-[75%] h-full items-center">
        <div className="z-10 w-full lg:w-1/2 text-center lg:text-left flex flex-col gap-5">
          <h1 className="text-2xl lg:text-4xl w-full font-bold leading-tight lg:leading-9 text-white mb-2">
            Let's Build Something Exceptional Together
          </h1>
          <h4 className="font-bold text-textgray w-full text-sm lg:text-base mb-2">
            Get in touch today and take the first step toward smarter digital transformation.
          </h4>
          <p className="text-sm text-textgray w-full">
          Whether you're launching something new or need to modernize, we'll help you architect the right solution. RomeCode is ready to make it happen.
          </p>
          <div className="flex justify-start mt-2">
            <a
              href="https://calendly.com/romecode-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 lg:py-2 px-6 lg:px-3 bg-[#FFD639] text-[#080A11] rounded font-bold hover:bg-[#FFD639]/90 transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Getfreeconsultation
