import { useEffect, useState } from "react";
import { Mail, User, Calendar, MessageSquare } from "lucide-react";

function CheckContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    try {
      const response = await fetch(
        `${'http://localhost:5000'}/api/contact`
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch contacts");
      }

      setContacts(data.contacts || []);
    } catch (error) {
      console.error("Fetch contacts error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-600">
              Portfolio Admin
            </p>

            <h1 className="mt-1 text-2xl font-semibold tracking-tight">
              Contact Messages
            </h1>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-600">
            {contacts.length} Messages
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-7xl px-6 py-8">

        {loading ? (
          <div className="flex min-h-[300px] items-center justify-center">
            <div className="h-7 w-7 animate-spin rounded-full border-2 border-slate-300 border-t-blue-600" />
          </div>
        ) : contacts.length === 0 ? (
          <div className="rounded-xl border border-slate-200 bg-white p-12 text-center">
            <MessageSquare className="mx-auto mb-4 h-8 w-8 text-slate-400" />

            <h2 className="text-lg font-medium">
              No messages yet
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Contact submissions will appear here.
            </p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            
            {/* Table Header */}
            <div className="hidden grid-cols-[1.2fr_1.5fr_2fr_1.2fr] border-b border-slate-200 bg-slate-50 px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 md:grid">
              <div>Name</div>
              <div>Email</div>
              <div>Message</div>
              <div>Date</div>
            </div>

            {/* Contacts */}
            <div className="divide-y divide-slate-100">
              {contacts?.map((contact) => (
                <div
                  key={contact._id}
                  className="grid gap-5 px-6 py-5 transition hover:bg-slate-50 md:grid-cols-[1.2fr_1.5fr_2fr_1.2fr] md:items-start"
                >
                  
                  {/* Name */}
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                        <User size={16} />
                      </div>

                      <div>
                        <p className="text-sm font-medium text-slate-900">
                          {contact.name}
                        </p>

                        <p className="text-xs text-slate-400">
                          Contact
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Mail size={15} className="shrink-0 text-slate-400" />

                    <a
                      href={`mailto:${contact.email}`}
                      className="truncate hover:text-blue-600"
                    >
                      {contact.email}
                    </a>
                  </div>

                  {/* Message */}
                  <div>
                    <p className="line-clamp-3 text-sm leading-6 text-slate-600">
                      {contact.message}
                    </p>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <Calendar size={15} className="shrink-0 text-slate-400" />

                    <span>
                      {formatDate(contact.createdAt)}
                    </span>
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

      </main>
    </div>
  );
}

export default CheckContacts;