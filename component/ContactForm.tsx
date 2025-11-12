'use client'
import { ReactNode, useState } from "react"
import BasicIcons from "./BasicIcons"

export default function ContactForm() {
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<ReactNode | null>(null)
  const [loading, setLoading] = useState(false)

  const send = async (e?: React.FormEvent) => {
    e?.preventDefault()
    if (!name.trim() || !message.trim()) {
      setStatus("Please fill both fields.")
      return
    }
    setLoading(true)
    setStatus("Sending...")
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), message: message.trim() }),
      })
      if (res.ok) {
        setStatus(<div className="flex items-center gap-2"> <BasicIcons label="checkMark" /> Message sent! Thank you.</div>)
        setName("")
        setMessage("")
      } else {
        const data = await res.json().catch(() => null)
        setStatus(data?.error ??  <div className="flex items-center gap-2"> <BasicIcons label="exclamation" /> Something went wrong while sending you salutations.</div>)
      }
    } catch (err) {
      setStatus( <div className="flex items-center gap-2"> <BasicIcons label="exclamation" /> Something went wrong while sending you salutations, server error i guess.</div>)
    } finally {
      setLoading(false)
    }
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      // void send()
       send()
    }
  }

  return (
    <form onSubmit={send} className="  flex flex-col gap-3">
      <input
        type="text"
        placeholder="intro"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        className="input w-full"
      />
      <textarea
        placeholder="Whatever you wanna say..."
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        onKeyDown={onKeyDown}
        rows={5}
       className="textarea w-full"
      />
      <button
        type="submit"
        disabled={loading}
        className="btn btn-outline"
      >
        {loading ? <span className="loading loading-dots "></span> : "Send Message"}
      </button>
      {status && <p className="text-xs tracking-widest animate-pulse">{status}</p>}
    </form>
  )
}
